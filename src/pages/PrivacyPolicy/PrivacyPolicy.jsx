import React, { useEffect } from "react";
import Header from "../Homepage/components/Header/Header";
import Footer from "../Homepage/components/Footer/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-14">
        {/* Privacy Policy Section */}
        <section className="w-[92%] md:w-[85%] lg:w-[70%] mx-auto px-8">
          <h2 className="text-5xl h-auto font-extrabold text-center text-orange-500 mb-10">
            Privacy Policy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            At Flyaway Parking, we are committed to protecting your privacy and
            ensuring that your personal information is handled in a safe and
            responsible manner. This Privacy Policy outlines how we collect,
            use, and protect your data when you use our services.
          </p>

          {/* Information We Collect */}
          <div className="mb-10 text-left">
            <h3 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
              Information We Collect
            </h3>
            <ul className="space-y-4 text-gray-800 text-lg leading-relaxed list-disc pl-6">
              <li>
                <strong>Personal Information:</strong>
                <ol className="space-y-2 list-decimal pl-6">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your phone number</li>
                  <li>payment details</li>
                  <li>Information on services or products purchased </li>
                  <li>Debit card/Credit card details</li>
                  <li>
                    Responses to questionnaires, surveys and competitions
                    Sensitive information Related to you is never collected by
                    us without prior explicit consent when booking our parking
                    services.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and interact with our website, including IP address, browser
                type, and pages visited.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your
                browsing experience, track usage patterns, and remember
                preferences. You can adjust your browser settings to disable
                cookies if you prefer.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-10 text-left">
            <h3 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
              How We Use Your Information
            </h3>
            <ul className="space-y-4 text-gray-800 text-lg leading-relaxed list-disc pl-6">
              <li>
                <strong>Booking Services:</strong> To process and confirm your
                parking reservations and communicate updates or changes.
              </li>
              <li>
                <strong>Customer Support:</strong> To provide customer support
                and respond to any inquiries or issues you may have.
              </li>
              <li>
                <strong>Marketing:</strong> With your consent, we may send
                promotional materials and updates about Flyaway Parking
                services.
              </li>
              <li>
                <strong>Improvement:</strong> To analyze website usage and
                improve our services, making your experience better.
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-10">
            <h3 className="text-3xl font-semibold text-indigo-700 mb-6">
              Data Security
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              We take data security seriously and have implemented measures to
              protect your information from unauthorized access, loss, or
              misuse. All sensitive data, such as payment information, is
              encrypted and stored securely.
            </p>
          </div>

          {/* Third-Party Sharing */}
          <div className="mb-10">
            <h3 className="text-3xl font-semibold text-indigo-700 mb-6">
              Third-Party Sharing
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your data with trusted partners
              (such as payment processors) to facilitate our services.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-10">
            <h3 className="text-3xl font-semibold text-indigo-700 mb-6">
              Your Rights
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time. Please contact us if you wish to exercise
              any of these rights.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-3xl font-semibold text-indigo-700 mb-6">
              Contact Us
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              For any questions regarding this Privacy Policy, please reach out
              to us at <strong>Support@flyawayparking.co.uk</strong>.
            </p>
          </div>

          {/* Footer Note */}
          <p className="mt-10 text-center text-gray-500 italic">
            By using our website, you consent to the collection and use of your
            information as outlined in this Privacy Policy.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
