import React from "react";
import {
  FaAddressBook,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import "./footer.css";
import visa1 from '../../../../assets/Payment Gateway/visa.svg'
import paypal1 from '../../../../assets/Payment Gateway/paypal.svg'
import maestro from '../../../../assets/Payment Gateway/maestro.svg'
import mastercard1 from '../../../../assets/Payment Gateway/logo (1).svg'
import amex1 from '../../../../assets/Payment Gateway/amex.svg'

import { Link } from "react-router-dom";
// import visa from "../../../../assets/visa.png";
// import mastercard from "../../../../assets/mastercard.png";
// import paypal from "../../../../assets/paypal (2).png";
// import stripe from "../../../../assets/stripe.png";
import flyawayLogo from "../../../../assets/flyawayLogo.png";
import twitter from "../../../../assets/twitter.png";
// import visaSecure from '../../../../assets/visaSecure.png'
// import masterCardId from '../../../../assets/mastercardIdcheck.png'
// import amex from '../../../../assets/american-express.png'
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const airportsArray1 = [
    { airportName: "Gatwick Airport" },
    { airportName: "Heathrow Airport" },
    { airportName: "Birmingham Airport" },
    { airportName: "Manchester Airport" },
    { airportName: "Stansted Airport" },
    { airportName: "Luton Airport" },

  ];

  const cardsArr = [
    {
      cardName: "paypal",
      card: paypal1,
    },
    // {
    //   cardName: "stripe",
    //   card: stripe,
    // },
    {
      cardName: "visa",
      card: visa1,
    },
    {
      cardName: "mastercard",
      card: mastercard1,
    },
    {
      cardName: "Amex",
      card: amex1,
    },
    {
      cardName: "masterCardId",
      card: maestro,
    }
    // {
    //   cardName: "visaSecure",
    //   card: visa1,
    // },
  ];

  const useFulLinks = [
    { linkName: "About Us", linkUrl: "/about" },
    { linkName: "Contact Us", linkUrl: "/contact" },
    { linkName: "Privacy Policy", linkUrl: "/privacy-policy" },
    { linkName: "Payment Policy", linkUrl: "/payment-policy" },
    { linkName: "Terms & Conditions", linkUrl: "/terms-and-conditions" },
  ];

  return (
    <footer className="w-full bg-[#22487F] text-white py-10">
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div className="flex flex-col sm:items-start space-y-4 gap-3 text-left ">
          <div className="bg-white w-[150px] 2xl:w-[200px] h-[70px] flex flex-col justify-center items-center rounded-lg">
            <img
              src={flyawayLogo}
              alt="Flyaway Logo"
              className="w-[90%] h-[90%]"
            />
          </div>
          <p className="text-base sm:text-lg">
            Flyaway You provides highly efficient yet cheap services for your meet
            and greet valet parking requirements at Airports in UK
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white bg-white rounded-full p-1"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm"
            >
              <img
                src={twitter}
                alt="Twitter Logo"
                className="w-[22px] h-[22px] bg-white rounded-sm"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white"
            >
              <FaInstagram className="text-2xl rounded-lg" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] rounded-lg p-1"
            >
              <FaLinkedin className="text-white text-base" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] rounded-lg p-1"
            >
              <FaYoutube className="text-white text-base" />
            </a>
          </div>
        </div>

        {/* Airports Section */}
        <div className="text-left  w-full lg:w-[80%] mx-auto">
          <h3 className="text-orange-500 font-semibold mb-3 text-lg md:text-xl lg:text-2xl">
            Airports
          </h3>
          <ul className="space-y-2">
            {airportsArray1.map((airport, index) => (
              <li
                key={index}
                className="text-sm md:text-base pb-1 hover:text-orange-400 cursor-pointer transition-all hover:pl-2"
              >
                <Link to={`/`} // 
                  >
                  {airport.airportName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="text-left w-full lg:w-[80%] mx-auto">
          <h3 className="text-orange-500 font-semibold mb-3 text-lg md:text-xl lg:text-2xl">
            Useful Links
          </h3>
          <ul className="space-y-2">
            {useFulLinks.map((link, index) => (
              <li
                key={index}
                className="text-sm md:text-base hover:text-orange-400 flex gap-3 cursor-pointer transition-all hover:pl-2 pb-1"
              >
                <Link to={link.linkUrl}>
                  {link.linkName} <span> &rarr; </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="text-left ">
          <h3 className="text-orange-500 font-semibold mb-3 text-lg md:text-xl lg:text-2xl">
            Contact Us
          </h3>
          <ul className="space-y-2">
            <li className="text-sm md:text-base flex items-center gap-3 py-1 hover:underline transition-all duration-300 hover:pl-2">
              <FaAddressBook />
              <span>20-22 Wenlock Road, London, England N1 7GU</span>
            </li>
            <li className="text-sm md:text-base flex items-center gap-3 py-1 ms-5">
              Reg No. 13178143
            </li>
            <li className="text-sm md:text-base hover:text-orange-400 flex items-center gap-3 py-1 cursor-pointer">
              <FaEnvelope />
              <a href="mailto:info@flyawayparking.co.uk" className="hover:underline">
                info@flyawayparking.co.uk
              </a>
            </li>
            <li className="text-sm md:text-base hover:text-orange-400 flex items-center gap-3 py-1 cursor-pointer">
              <FaPhoneAlt />
              <a href="tel:01963868389" className="hover:underline">
                01963868389
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap gap-5 mt-6">
            {cardsArr.map((card, index) => (
              <div className={`w-[50px] h-[35px]`} key={index}>
                <img src={card.card} alt={card.cardName} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-8 border-t border-gray-600 text-center py-4 text-sm sm:text-base text-gray-400">
        &copy; {new Date().getFullYear()} FlyAway. All rights reserved.
      </div>
    </footer>

  );
};

export default Footer;
