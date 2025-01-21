import React, { useEffect, useState } from "react";
import ContactDetails from "./Components/ContactDetails";
import VehicalsDetails from "./Components/VehicalsDetails";
import BookingDetails from "./Components/BookingDetails";
import OrderSummary from "./Components/OrderSummery";
import Header from "../Homepage/components/Header/Header";
import Footer from "../Homepage/components/Footer/Footer";
import FlightDetails from "./Components/FlightDetails";
import AdditionalOptions from "./Components/AdditionaOption";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
  const { id } = useParams();
  const [parkingDataById, setParkingDataById] = useState({});
  const [payment, setPayment] = useState({ pricing: null , paymentCompleted: "Pending" });
  const navigate = useNavigate()
  useEffect(() => {
    const fetchParkingById = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/get-parking-space-by-id/${id}`);
        setParkingDataById(response.data.data);
        console.log(response.data.data);
        setPayment((prevPayment) => ({
          ...prevPayment,
          pricing:response.data.data.pricing , // Set the pricing after fetching
        }));
      } catch (error) {
        console.error("Error fetching parking data:", error);
      }
    };

    if (id) {
      fetchParkingById();
    }
  }, [id]);
  console.log(parkingDataById.pricing)
  const pricing = parkingDataById.pricing;
  const [showForm, setShowForm] = useState(false);
  
    
  const [contactData, setContactData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    people: "",
  });

  const [flightDetails, setFlightDetails] = useState({
    departureTerminal: "",
    departureFlightNo: "",
    arrivalTerminal: "",
    arrivalFlightNo: "",
  });

  const [vehicleDetails, setVehicleDetails] = useState([
    { make: "", model: "", color: "", regNo: "" },
  ]);

  const [additionalOptions, setAdditionalOptions] = useState({
    textMessage: false,
    cancellationCover: false,
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    // Check if all form fields are filled
    const isContactComplete = Object.values(contactData).every((value) => value !== "");
    const isVehicleComplete = vehicleDetails.every(
      (vehicle) => vehicle.make !== "" && vehicle.model !== "" && vehicle.color !== "" && vehicle.regNo !== ""
    );
    const isOptionsComplete = additionalOptions.textMessage || additionalOptions.cancellationCover;

    setIsFormComplete(isContactComplete && isVehicleComplete && isOptionsComplete);
  }, [contactData, flightDetails, vehicleDetails, additionalOptions]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/create-booking", {
        contactData,
        flightDetails,
        vehicleDetails,
        additionalOptions,
        parkingId: id,
        payment
      });
      if (response.status === 201) {

        alert("Booking Successful");
        navigate(`/payment/${response.data.data.bookingId}`)
      }
      console.log(response.data.data.bookingId);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  const handleFlightDetailsChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails({
      ...flightDetails,
      [name]: value,
    });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleVehicleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVehicles = [...vehicleDetails];
    updatedVehicles[index] = { ...updatedVehicles[index], [name]: value };
    setVehicleDetails(updatedVehicles);
  };

  const handleAddVehicle = () => {
    setVehicleDetails([...vehicleDetails, { make: "", model: "", color: "", regNo: "" }]);
  };

  const handleRemoveVehicle = (index) => {
    const updatedVehicles = vehicleDetails.filter((_, i) => i !== index);
    setVehicleDetails(updatedVehicles);
  };

  const handleAdditionalOptionsChange = (e) => {
    const { name, checked } = e.target;
    setAdditionalOptions({
      ...additionalOptions,
      [name]: checked,
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Header />
      <div className="w-full h-full bg-blue-100">
        <div
          className={`w-[95%] lg:w-[80%] mx-auto overflow-hidden font-serif transition-all duration-300 ease-in-out ${showForm ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="border border-gray-300 p-6 rounded-lg shadow-lg mt-2 bg-transparent">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="travelingFrom" className="text-sm lg:text-base font-semibold text-gray-700">
                    Traveling From
                  </label>
                  <input
                    type="text"
                    id="travelingFrom"
                    className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    defaultValue="Gatwick"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dropOffDate" className="text-sm lg:text-base font-semibold text-gray-700">
                    Drop Off Date
                  </label>
                  <input
                    type="date"
                    id="dropOffDate"
                    className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    defaultValue="2024-12-12"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dropOffTime" className="text-sm lg:text-base font-semibold text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    id="dropOffTime"
                    className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    defaultValue="13:15"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="pickUpDate" className="text-sm lg:text-base font-semibold text-gray-700">
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    id="pickUpDate"
                    className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    defaultValue="2024-12-19"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="pickUpTime" className="text-sm lg:text-base font-semibold text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    id="pickUpTime"
                    className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    defaultValue="12:00"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="promoCode" className="text-sm lg:text-base font-semibold text-gray-700">
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promoCode"
                    placeholder="Enter Promo Code"
                    className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  onClick={toggleForm}
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container lg:w-[85%] mx-auto py-10 px-4 flex flex-col md:flex-row md:space-x-6">
          <div className="w-full md:w-2/3 flex flex-col space-y-6">
            <ContactDetails formData={contactData} setFormData={setContactData} handleContactChange={handleContactChange} />
            <FlightDetails flightDetails={flightDetails} handleFlightDetailsChange={handleFlightDetailsChange} />
            <VehicalsDetails
              vehicleDetails={vehicleDetails}
              handleVehicleChange={handleVehicleChange}
              handleAddVehicle={handleAddVehicle}
              handleRemoveVehicle={handleRemoveVehicle}
            />
            <AdditionalOptions
              additionalOptions={additionalOptions}
              handleAdditionalOptionsChange={handleAdditionalOptionsChange}
            />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 flex flex-col space-y-6">
            <BookingDetails showform={showForm} setShowForm={setShowForm} toggleForm={toggleForm} parkingData={parkingDataById} />
            <OrderSummary parkingData={parkingDataById} isFormComplete={isFormComplete} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
