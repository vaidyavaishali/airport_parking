import React, { useEffect } from "react";
import Header from "../Homepage/components/Header/Header";
import Footer from "../Homepage/components/Footer/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-14">
        {/* Terms & Conditions Section */}
        <section className="w-[92%] md:w-[85%] lg:w-[75%] mx-auto px-8">
          <h2 className="text-5xl font-extrabold text-center text-gradient bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 bg-clip-text text-transparent mb-10">
            Terms & Conditions
          </h2>

          <div className="space-y-12">
            {/* Booking and Payment */}
            <div>
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                1. Booking and Payment
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                All bookings must be made in advance through our website or
                customer service. Payments are required at the time of booking
                unless otherwise stated. We accept major credit/debit cards.
                Once your booking is confirmed, you will receive a booking
                reference. Please ensure this reference is provided upon arrival
                at the parking facility.
              </p>
            </div>

            {/* Cancellation and Refunds */}
            <div>
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                2. Cancellation and Refunds
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Cancellations can be made up to 48 hours before your scheduled
                arrival for a full refund. Cancellations made within 48 hours of
                the arrival time may be subject to a cancellation fee. No
                refunds will be issued for no-shows or unused bookings.
              </p>
            </div>

            {/* Park & Ride Service */}
            <div>
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                3. Park & Ride Service
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                For our Park & Ride service, you must arrive at the designated
                parking area and take the provided shuttle to the airport.
                Flyaway Parking is not responsible for any delays caused by
                traffic or unforeseen circumstances that may affect your travel
                schedule. Please ensure you allow sufficient time for parking,
                shuttle transfer, and airport check-in.
              </p>
            </div>

            {/* Meet & Greet Service */}
            <div>
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                4. Meet & Greet Service
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                For the Meet & Greet service, a Flyaway Parking representative
                will meet you at the designated drop-off point. You must arrive
                on time to ensure a smooth handover. Our representatives will
                park your vehicle in a secure area, but Flyaway Parking will not
                be liable for any damage or loss unless it results from our
                negligence.
              </p>
            </div>

            {/* Liability */}
            <div>
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                5. Liability
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Flyaway Parking is not responsible for any damage or loss to
                your vehicle, personal property, or belongings left inside,
                except in cases of gross negligence on our part. All vehicles
                are parked at the owner's risk.
              </p>
            </div>

            {/* Modification of Terms */}
            <div>
              <h3 className="text-3xl font-bold text-indigo-700 mb-6">
                6. Modification of Terms
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Flyaway Parking reserves the right to modify these terms at any
                time. Please check this page regularly for updates.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
