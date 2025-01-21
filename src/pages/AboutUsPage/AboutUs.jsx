import React, { useEffect } from "react";
import Footer from "../Homepage/components/Footer/Footer";
import Header from "../Homepage/components/Header/Header";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Header/>
      <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-12">
        {/* About Us Section */}
        <section className="mb-12 w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
          <h2 className="text-5xl font-bold text-orange-500 text-center mb-6">
            About Us
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed text-center font-normal">
            Welcome to <span className="font-semibold"> Flyaway Parking,</span>{" "}
            your trusted partner in stress-free airport parking across the
            United Kingdom. With over a decade of experience, we’ve established
            ourselves as a reliable solution for travellers looking for
            convenience, affordability, and peace of mind when parking their
            vehicles.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mt-4 text-center font-normal">
            At <span className="font-semibold"> Flyaway Parking,</span> Parking,
            we understand that airport travel can be hectic, which is why we’ve
            designed our services to take one major hassle off your
            list—parking. We offer a variety of parking options tailored to suit
            your needs, including Park & Ride and Meet & Greet services at all
            major UK airports. Whether you’re travelling for business or
            leisure, our team is dedicated to ensuring your journey begins
            smoothly from the moment you arrive at our parking facilities.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mt-4 text-center font-normal">
            Our
            <span className="font-semibold"> Park & Ride </span>service allows
            you to park your vehicle in our secure lot, and we’ll shuttle you to
            the airport terminal in a matter of minutes. For those looking for a
            more personalized experience, our{" "}
            <span className="font-semibold"> Park & Ride </span>
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mt-4 text-center font-normal">
            Safety and security are at the core of what we do. All of our
            parking facilities are equipped with round-the-clock surveillance,
            ensuring your vehicle is protected throughout your trip. Our team of
            trained professionals is committed to providing excellent customer
            service, from drop-off to pick-up.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mt-4 text-center font-normal">
            At Flyaway Parking, we believe in making airport travel as seamless
            as possible. With competitive rates, secure facilities, and
            unmatched convenience, we’re here to make your journey more
            comfortable.
          </p>
        </section>
        {/* Our Mission Section */}
        <section className="bg-[#22487F] py-10 px-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
          <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-6 animate-fade-in">
            Our Mission
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed text-center">
            Book your parking with us now and let us do the rest. We offer a
            cost-effective, comprehensive service, supported by a helpful and
            efficient customer service team, who handle queries, questions, and
            complaints promptly and professionally.
          </p>
          <p className="text-gray-100 text-lg leading-relaxed mt-4 text-center">
            Thank you for your continued support and loyalty. We aim to reward
            you with{" "}
            <span className="font-semibold text-yellow-300">
              special discounts
            </span>{" "}
            every time.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
