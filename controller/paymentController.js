import express from "express";
import got from "got"; // Ensure `got` is installed and imported
import Payment from "../models/paymentModel.js";

const getAccessToken = async () => {
    try {
        // Request access token from PayPal
        const response = await got.post(`${process.env.PAYPAL_BASEURL}/v1/oauth2/token`, {
            form: {
                grant_type: "client_credentials",
            },
            username: process.env.PAYPAL_CLIENTID, // Ensure this environment variable is set
            password: process.env.PAYPAL_SECRETE, // Ensure this environment variable is set
        });

        // Parse response and extract the access token
        const data = JSON.parse(response.body);
        const access_token = data.access_token;
        return access_token;
    } catch (error) {
        console.error("Error fetching PayPal access token:", error.message);
        throw new Error("Failed to fetch PayPal access token");
    }
};

export const createOrder = async (req, res) => {
    try {
        // Retrieve the access token
        const access_token = await getAccessToken();

        // Build the payload for PayPal
        const payload = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD", // Ensure this currency is supported
                        value: req.body.amount, // Amount as a string, e.g., "500.00"
                    },
                    custom_id: req.body.bookingId || "UNKNOWN", // Use a fallback value
                },
            ],
            application_context: {
                brand_name: "Your Brand Name", // Optional branding
                landing_page: "BILLING", // Options: LOGIN, BILLING, NO_PREFERENCE
                user_action: "PAY_NOW", // Encourages immediate payment
                return_url: "http://localhost:3000/success", // Replace with actual success URL
                cancel_url: "http://localhost:3000/cancel", // Replace with actual cancel URL
            },
        };

        // Log the payload for debugging
        console.log("PayPal Order Payload:", JSON.stringify(payload, null, 2));

        // Make the request to create a PayPal order
        const response = await got.post(`${process.env.PAYPAL_BASEURL}/v2/checkout/orders`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
            json: payload,
            responseType: "json", // Ensure response is parsed as JSON
        });

        // Respond with the order details
        return res.status(200).json({
            message: "Order created successfully",
            order: response.body, // Send the order details back to the client
        });
    } catch (error) {
        // Log the full error response
        if (error.response) {
            console.error("PayPal API Error Response:", error.response.body);
        }
        console.error("Error creating PayPal order:", error.message);

        // Respond with the error message
        return res.status(500).json({
            message: "Failed to create order",
            error: error.response ? error.response.body : error.message,
        });
    }
};
