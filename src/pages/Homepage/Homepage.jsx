import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import ExperienceService from "./components/ExperienceService/ExperienceService";
// import ReasonToChooseAirport from './components/ReasonChooseAirport/ReasonToChooseAirport'
import ReasonToChooseAirport2 from "./components/ReasonChooseAirport2.jsx/ReasonChoose";
import ServiceWeProvided from "./components/ServiceWeProvided/ServiceWeProvided";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatYouCanSave from "./components/WhatYouCanSave/WhatYouCanSave";
// import WhatYouCanSave2 from './components/WhatYouCanSave/WhatYouSave'
import CustomerReview from "./components/CustomerReview/CustomerReview";
import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import axios from "axios";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });


 
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // useEffect(() => {
  //   const fetchAirports = async (options = {}) => {

  //     const { baseurl } = options;

  //     try {
  //       const token = sessionStorage.getItem("authToken");
  //       if (!token) {
  //         console.error("No auth token found in sessionStorage.");
  //         return;
  //       }
  //       // await delay(+1000);
  //       const response = await axios.get(
  //         `https://app.compareyourparkingdeals.co.uk/api/index.php/third-party/getAirports`,

  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //             "HTTP_AUTHORIZATION": `Bearer ${token}`, // Properly formatted Authorization header
  //           },
  //         }
  //       );

  //       setAirportName(response.data.data);
  //       console.log("Airports fetched:", response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching airports:", error);
  //     }
  //   };

  //   fetchAirports();
  // }, []);





  return (
    <div className="relative ">
      <Helmet>
        <link
          rel="canonical"
        // href="https://https://helpful-alfajores-c71999.netlify.app/Home Page"
        />
        <meta
          name="description"
          content="Your page description goes here, describing the purpose and content of the page."
        />
        <meta
          name="keywords"
          content="flyaway, airport, flight, booking, parking"
        />
        <meta name="robots" content="index, follow" />
        <title>Flyaway | Home</title>
      </Helmet>
      <Header />
      <HeroSection   />
      <ExperienceService />
      <ReasonToChooseAirport2 />
      <ServiceWeProvided />
      <Testimonials />
      <WhatYouCanSave />
      {/* <WhatYouCanSave2 /> */}
      <CustomerReview />
      {/* <ReasonToChooseAirport/> */}
      <Footer  />
    </div>
  );
};

export default Homepage;
