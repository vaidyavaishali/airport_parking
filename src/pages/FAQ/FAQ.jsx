import React, { useEffect, useState } from "react";
import Header from "../Homepage/components/Header/Header";
import Footer from "../Homepage/components/Footer/Footer";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Flyaway Parking?",
      answer:
        "Flyaway Parking provides secure and reliable parking services for travelers. We ensure your vehicle is safe while you enjoy your journey.",
    },
    {
      question: "How can I book a parking spot?",
      answer:
        "You can easily book a parking spot through our website by selecting your preferred dates and completing the booking process.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and online payment options for your convenience.",
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes, you can modify or cancel your reservation through your account dashboard. Please check our cancellation policy for details.",
    },
    {
      question: "Is my vehicle safe with Flyaway Parking?",
      answer:
        "Absolutely! We have 24/7 surveillance, secure facilities, and trained staff to ensure your vehicle's safety.",
    },
    {
      question: "What should I do if I face an issue during booking?",
      answer:
        "If you encounter any issues, please contact our support team at Support@flyawayparking.co.uk, and we’ll assist you promptly.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-300 via-blue-100 to-white py-12">
        {/* FAQ Section */}
        <section className="w-[95%] md:w-[90%] lg:w-[75%] mx-auto px-6 py-8 rounded-xl shadow-xl bg-white border border-gray-200">
          <h2 className="text-5xl font-extrabold text-center text-[#223c61] mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
            Have questions about our services? Click on a question to see the
            answer, or contact us for more details.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-left"
                >
                  <p className="text-xl font-semibold text-[#0c1e38]">
                    {faq.question}
                  </p>
                  <span className="text-xl text-blue-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-700 bg-white">
                    <p className="text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us for More Help */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Can't find the answer you're looking for? Contact us at{" "}
              <strong className="text-blue-500">
                Support@flyawayparking.co.uk
              </strong>
              , and our team will assist you.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
