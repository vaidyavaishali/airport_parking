import express from "express";
import { createParkingSpace, deleteParkingSpace, getAllParkingSpaces, getParkingSpaceByAirportCompany, getParkingSpaceById, updateParkingSpace } from "../controller/parkingSpaceController.js";
import {upload} from "../middlware/multer.js";
import { cancelBooking, createBooking, deleteBooking, getAllBooking, getBookingByBookingId } from "../controller/bookingController.js";
import { createOrder } from "../controller/paymentController.js";
// import { checkStatus, newPayment } from "../controller/paymentController.js";
const dataroute = express.Router();

// Parking Space Routes
dataroute.post("/create-parking-space", upload.single("parkinglogo"), createParkingSpace); // Create
dataroute.get("/get-all-parking-spaces", getAllParkingSpaces); // Get All
dataroute.get("/get-parking-space-by-id/:id", getParkingSpaceById); // Get by ID
dataroute.get("/get-parking-space-by-airport-company/:airportCompanyName", getParkingSpaceByAirportCompany); // Get by ID
dataroute.put("/update-parking-space/:id", updateParkingSpace); // Update
dataroute.delete("/delete-parking-space/:id", deleteParkingSpace); // Delete

dataroute.post("/create-booking", createBooking);
dataroute.get("/get-booking-by-id/:bookingId", getBookingByBookingId);
dataroute.get("/get-booking", getAllBooking);
dataroute.delete("/delete-booking/:id", deleteBooking);
dataroute.patch('/booking/cancel/:id', cancelBooking);

dataroute.post('/payment', createOrder);
// dataroute.post("/capture-payment", capturePayment);
// dataroute.post('/status/:txnId', checkStatus);

export default dataroute;

