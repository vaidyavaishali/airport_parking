import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import letterSend from "../../assets/letter_send.png";
import Footer from "../Homepage/components/Footer/Footer";
import Header from "../Homepage/components/Header/Header";
import twitter from "../../assets/twitterX.png";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 h-full">
        <div className="text-center pt-8">
          <h2 className="text-3xl font-bold mb-4 text-orange-500">
            Contact Us
          </h2>
          <p className="text-gray-600 w-1/2 mx-auto">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-6 mb-20">
          <div className="lg:w-4/5 shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
            {/* Left Section - Contact Information */}
            <div className="lg:w-1/3 w-full bg-blue-600 text-white p-8 relative text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-sm text-gray-200 mb-8">
                Say something to start a live chat!
              </p>
              <div className="space-y-6 flex flex-col gap-5">
                <a
                  href="tel:1963868389"
                  className="text-white flex items-center space-x-3 mt-5 justify-center lg:justify-normal"
                >
                  <span className="text-xl">
                    <FaPhoneAlt />
                  </span>
                  <p className="text-white"> 1963868389</p>
                </a>
                <a
                  href="mailto:info@flyawayparking.co.uk"
                  className="flex items-center space-x-3 justify-center lg:justify-normal"
                >
                  <span className="text-xl">✉️</span>
                  <p>info@flyawayparking.co.uk</p>
                </a>
                <div className="flex space-x-3 justify-center lg:justify-normal">
                  <span className="text-xl">
                    <FaLocationDot />
                  </span>
                  <p>20-22 Wenlock Road, London, England N1 7GU</p>
                </div>
              </div>
              <div className="hidden lg:flex space-x-4 mt-8 absolute bottom-4 lg:left-24 left-1/2 transform lg:-translate-x-1/2 translate-x-[-50%]">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="flex space-x-4 mt-8 xl:hidden justify-center">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>
              </div>
              {/* Circular Components */}
              <div className="absolute bottom-[-55px] right-[-50px] lg:flex hidden">
                <div className="w-24 h-24 bg-blue-400 rounded-full opacity-70"></div>
                <div className="w-44 h-44 bg-purple-400 rounded-full -ml-10 mt-10 opacity-80 z-0"></div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="lg:w-2/3 w-full px-8 pt-8 bg-white z-10">
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                  <div className="lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="p-2 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="p-2 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                  {/* Email Field */}
                  <div className="lg:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="p-2 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="lg:w-1/2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="p-2 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Subject Selection */}

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="2"
                    className="p-2 mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-sm outline-none"
                  ></textarea>
                </div>
                <div className="flex flex-col lg:items-end items-center lg:space-x-4 space-y-4 lg:space-y-0">
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-fit bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition flex justify-center items-center outline-none"
                  >
                    Send Message
                  </button>
                  <div className="flex flex-col items-end pr-20">
                    <img
                      src={letterSend}
                      alt="send letter"
                      className="w-40 lg:mt-0 mt-4 hidden lg:block"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
