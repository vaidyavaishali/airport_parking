import React, { useEffect } from "react";
import Header from "../Homepage/components/Header/Header";
import Footer from "../Homepage/components/Footer/Footer";

const PaymentPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-12">
        {/* Payment Policy Section */}
        <section className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
            Payment Policy for Flyaway Parking Services
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-8">
            At Flyaway Parking, we strive to provide convenient and secure
            parking services at airports throughout the United Kingdom. To
            ensure a smooth and hassle-free experience for our customers, we
            have established the following payment policy. Please read this
            policy carefully before booking any of our services.
          </p>
          {/* Refund Policy */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-6 text-[#1d4781]">
              Refund Policy
            </h3>
            <ul className="space-y-4 text-gray-800 text-lg leading-relaxed list-disc list-inside text-left">
              <li>
                Refunds are only applicable to bookings cancelled within the
                terms of the cancellation policy, subject to notice periods and
                applicable charges.
              </li>
              <li>
                Fees such as booking charges, SMS notifications, and
                cancellation cover are non-refundable under any circumstances.
              </li>
              <li>
                If a flexible booking is cancelled more than 48 hours before the
                scheduled parking time, a refund will be issued, minus a £15.00
                administrative fee.
              </li>
              <li>
                Non-flexible bookings are non-refundable and cannot be
                cancelled.
              </li>
              <li>
                No refunds will be provided for unused portions of a stay, even
                if the vehicle is picked up earlier than expected.
              </li>
              <li>
                Refund requests will be reviewed and processed within 7-10
                business days once cancellation is confirmed.
              </li>
              <li>
                Some promotional offers are strictly non-refundable. These terms
                will be clearly stated when booking.
              </li>
              <li>
                Cancellations made with less than 48 hours' notice before the
                booking start date will not qualify for any refund.
              </li>
              <li>
                If you cancel a booking and later reinstate it, you will not be
                eligible for a refund if the booking is cancelled again.
              </li>
              <li>
                For any refund disputes or questions, customers should contact
                customer support with their booking reference for further
                assistance.
              </li>
            </ul>
          </div>

          {/* Return Policy */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-[#1d4781]">
              Return Policy
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed list-disc list-inside text-left">
              <li>
                Amendments to arrival or departure dates must be made at least
                24 hours in advance. If the amendment is made on the drop-off
                day or within 24 hours of arrival, the booking becomes
                non-refundable.
              </li>
              <li>
                Any changes to your booking must be requested directly through
                our customer support team, quoting your booking reference
                number.
              </li>
              <li>
                No refunds will be provided for any portion of unused parking
                services, even if the vehicle is picked up earlier than the
                booked time.
              </li>
              <li>
                If you need to reschedule your booking, please contact us at
                least 48 hours before your scheduled arrival to avoid losing
                your booking fee.
              </li>
              <li>
                Bookings made under certain promotional rates or non-flexible
                options cannot be cancelled or refunded.
              </li>
              <li>
                Cancellations must be processed through our support team during
                office hours, and refunds will follow the cancellation policy
                (subject to fees).
              </li>
              <li>
                If you do not show up for your parking reservation and fail to
                cancel, no refund will be issued.
              </li>
              <li>
                Refunds for cancellations due to unforeseen circumstances (e.g.,
                medical emergencies) may be considered at the company's
                discretion but are not guaranteed.
              </li>
              <li>
                All cancellations or amendments are subject to an administrative
                fee of £15, as stated in the booking terms.
              </li>
              <li>
                Once a refund is approved, the payment will be processed within
                7-10 business days to the original payment method.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPolicy;
