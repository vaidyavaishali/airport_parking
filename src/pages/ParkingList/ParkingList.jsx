import React, { useEffect, useState } from "react";
import aceParking from "../../assets/aceparking-gatwick.png"
import CambridgeParking from "../../assets/cambridge.png"
import chophall from "../../assets/COPHALL-NEW.png"
import flightparking from "../../assets/flightparking.png"
import gatwickParking from "../../assets/gatwick.png"
import lg from "../../assets/lg.png"
import primeparking from "../../assets/primeparking.png"
import safeparking from "../../assets/safeparking.png"
import sure from "../../assets/sure.png"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PopupLoader from "./PopupLoader";
import Header from "../Homepage/components/Header/Header";
import Footer from "../Homepage/components/Footer/Footer";
import axios from "axios";
const ParkingList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    // Make content visible after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);


  const [parkingData, setParkingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { airport } = useParams()

  const location = useLocation(); // Access the location object

  const queryParams = new URLSearchParams(location.search);
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchParkingData = async () => {
      console.log("ok")
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:4000/get-parking-space-by-airport-company/${airport}`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch parking data");
        }
        setParkingData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchParkingData();
  }, []);
  console.log(parkingData)
  if (isLoading) {
    return <PopupLoader />;
  }



  // const cardData = [
  //   {
  //     title: "GAPS Park & Ride Gatwick",
  //     type: "Park And Ride",
  //     features: [
  //       "Park & Ride service",
  //       "On-demand 24/7 shuttles",
  //       "Extra charges for van",
  //       "All-inclusive price",
  //     ],
  //     logo: gatwickParking, // Replace placeholder with the imported image
  //     price: "£80.99",
  //     rating: "5",
  //     isRecommended: true,
  //   },
  //   {
  //     title: "FLIGHT PARK Meet & Greet",
  //     type: "Meet And Greet",
  //     features: [
  //       "Meet & Greet service",
  //       "24/7 Meet & Greet at Gatwick",
  //       "Friendly/Disabled Friendly Service",
  //       "Uniformed Staff at Arrival and Pickup",
  //     ],
  //     logo: flightparking,
  //     price: "£82.99",
  //     rating: "4.5",
  //     isRecommended: false,
  //   },
  //   {
  //     title: "Safe Park Meet & Greet Gatwick",
  //     type: "Meet And Greet",
  //     features: [
  //       "Uniformed insured chauffeurs",
  //       "Pickup & drop-off at the terminal",
  //       "Reliable, punctual & professional staff",
  //       "Comprehensively insured drivers",
  //     ],
  //     logo: safeparking,
  //     price: "£88.99",
  //     rating: "5",
  //     isRecommended: true,
  //   },
  //   {
  //     title: "LG PARKING MEET & GREET GATWICK",
  //     type: "Meet And Greet",
  //     features: [
  //       "Uniformed insured chauffeurs",
  //       "Pickup & drop-off at the terminal",
  //       "Reliable, punctual & professional staff",
  //       "Comprehensively insured drivers",
  //     ],
  //     logo: lg,
  //     price: "£88.99",
  //     rating: "4",
  //     isRecommended: false,
  //   },
  //   {
  //     title: "Cophall Parking Gatwick",
  //     type: "Park And Ride",
  //     features: [
  //       "Uniformed insured chauffeurs",
  //       "Pickup & drop-off at the terminal",
  //       "Reliable, punctual & professional staff",
  //       "Comprehensively insured drivers",
  //     ],
  //     logo: chophall,
  //     price: "£88.99",
  //     rating: "4.5",
  //     isRecommended: true,
  //   },
  //   {
  //     title: "Prime Meet & Greet Gatwick",
  //     type: "Meet And Greet",
  //     features: [
  //       "Uniformed insured chauffeurs",
  //       "Pickup & drop-off at the terminal",
  //       "Reliable, punctual & professional staff",
  //       "Comprehensively insured drivers",
  //     ],
  //     logo: primeparking,
  //     price: "£88.99",
  //     rating: "5",
  //     isRecommended: false,
  //   },
  //   {
  //     title: "Cambridge Hotel Park & Ride",
  //     type: "Park And Ride",
  //     features: [
  //       "Uniformed insured chauffeurs",
  //       "Pickup & drop-off at the terminal",
  //       "Reliable, punctual & professional staff",
  //       "Comprehensively insured drivers",
  //     ],
  //     logo: CambridgeParking,
  //     price: "£88.99",
  //     rating: "4.5",
  //     isRecommended: true,
  //   },
  //   {
  //     title: "Sure Parking",
  //     type: "Meet And Greet",
  //     features: [
  //       "Uniformed insured chauffeurs",
  //       "Pickup & drop-off at the terminal",
  //       "Reliable, punctual & professional staff",
  //       "Comprehensively insured drivers",
  //     ],
  //     logo: sure,
  //     price: "£88.99",
  //     rating: "4",
  //     isRecommended: true,
  //   },
  //   {
  //     title: "Ace Parking Gatwick",
  //     type: "Meet And Greet",
  //     features: [
  //       "Uniformed insured chauffeurs",
  //       "Pickup & drop-off at the terminal",
  //       "Reliable, punctual & professional staff",
  //       "Comprehensively insured drivers",
  //     ],
  //     logo: aceParking,
  //     price: "£88.99",
  //     rating: "5",
  //     isRecommended: false,
  //   },
  // ];



  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
    console.log("Form submitted");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen p-6 w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <PopupLoader />

        {/* Search Bar */}
        {/* <div className="mb-8">
          <div className="bg-yellow-100 text-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm lg:text-base font-medium text-gray-700 mb-4 lg:mb-0">
                <span className="font-semibold">You Have Searched: </span>
                Gatwick Airport from: 20-08-2024 12:00 to 27-08-2024 12:00
              </p>
              <button
                className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-600 transition"
                onClick={toggleForm}
              >
                MODIFY SEARCH
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${showForm ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg mt-2 bg-yellow-100">
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="travelingFrom"
                      className="text-sm font-medium text-gray-700"
                    >
                      Traveling From
                    </label>
                    <input
                      type="text"
                      id="travelingFrom"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      defaultValue="Gatwick"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="dropOffDate"
                      className="text-sm font-medium text-gray-700"
                    >
                      Drop Off Date
                    </label>
                    <input
                      type="date"
                      id="dropOffDate"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      defaultValue="2024-12-12"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="dropOffTime"
                      className="text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="dropOffTime"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      defaultValue="13:15"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="pickUpDate"
                      className="text-sm font-medium text-gray-700"
                    >
                      Pick Up Date
                    </label>
                    <input
                      type="date"
                      id="pickUpDate"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      defaultValue="2024-12-19"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="pickUpTime"
                      className="text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="pickUpTime"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      defaultValue="12:00"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="promoCode"
                      className="text-sm font-medium text-gray-700"
                    >
                      Promo Code
                    </label>
                    <input
                      type="text"
                      id="promoCode"
                      placeholder="Enter Promo Code"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    onAbort={toggleForm}
                  >
                    UPDATE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}




        {/* Cards Section */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {parkingData.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border-t-4 border-orange-400 hover:shadow-2xl transition-shadow ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
              {/* Recommended Tag */}
              {card.isRecommended && (
                <div className="absolute top-[-10px] left-[-10px] bg-pink-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-br-lg rounded-tl-lg">
                  Recommended
                </div>
              )}
              {/* Card Content */}
              <h2 className="text-lg md:text-xl font-bold text-gray-800 text-center">{card.parkingName}</h2>
              <p className="text-gray-500 mt-2 text-sm text-center">Meet And Greet</p>

              {/* Card Logo */}
              <div className="w-[95%] mb-2">
                <img
                  src={card.parkinglogo}
                  alt={`${card.parkingName} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Features */}
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                Cancellation Cover Available
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-600">
                {/* {card.features.map((feature, idx) => ( */}
                <li className="flex items-center">
                  <span className="text-white mr-2 bg-teal-300 rounded-full w-5 h-5 flex items-center justify-center">✔</span>
                  {card.feature1}
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2 bg-teal-300 rounded-full w-5 h-5 flex items-center justify-center">✔</span>
                  {card.feature2}
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2 bg-teal-300 rounded-full w-5 h-5 flex items-center justify-center">✔</span>
                  {card.feature3}
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2 bg-teal-300 rounded-full w-5 h-5 flex items-center justify-center">✔</span>
                  {card.feature4}
                </li>
                {/* ))} */}
              </ul>
              <div className="flex flex-col items-center mt-6 bg-[#22487F] p-1 rounded-md hover:bg-teal-600 transition w-full text-lg">
                <button className="text-yellow-200 hover:text-yellow-500">More Info</button>
              </div>

              {/* Price and Button */}
              <div className="flex justify-between mt-6 w-full text-sm items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-lg md:text-2xl font-bold text-gray-800">{card.pricing}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => {
                      const isFullStar = i + 1 <= Math.floor(card.rating);
                      const isHalfStar = !isFullStar && i + 1 - card.rating < 1;

                      return (
                        <span key={i} className="text-base">
                          {isFullStar ? (
                            <FaStar className="text-orange-500" />
                          ) : isHalfStar ? (
                            <FaStarHalfAlt className="text-orange-500" />
                          ) : (
                            <FaStar className="text-gray-300" />
                          )}
                        </span>
                      );
                    })}
                    <span className="text-blue-900 font-bold ml-2">{card.rating}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-1 bg-orange-500 hover:bg-orange-900 transition text-white h-8 text-lg font-bold"
                  onClick={() => navigate("/booking/" + card._id)}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParkingList;
