import React from "react";
import logo from '../../../assets/flyawayLogo.png'
import { useNavigate } from "react-router-dom";
const BookingDetails = ({setShowForm, toggleForm, parkingData}) => {
  const navigate = useNavigate()
  const booking = {
    bookingId: "BK20241117",
    heading: "FLIGHT PARK MEET & GREET GATWICK",
    dropOff: "20/08/2024 AT 12:00",
    pickUp: "27/08/2024 AT 12:00",
    airport: "Gatwick",
  };
// console.log(parkingData)
  return (
    <div className="flex justify-center rounded-lg items-center bg-gradient-to-b from-blue-950 to-teal-500 shadow-xl shadow-teal-600">
      <div className=" rounded-lg shadow-lg p-6  text-white">
        <h4 className="text-2xl font-bold mb-4 text-center">
          Booking Details
        </h4>

        {/* Icon and Heading */}
        <div className="mb-2 border-t py-6 w-full text-center">
          <div className="bg-white w-32 mx-auto my-2">
            <img src={parkingData.parkinglogo} alt="flyaway logo booking details" className="w-full h-full" />
          </div>
          <div>
            <h5 className="text-lg font-bold font-serif text-center mt-4">
              {parkingData.parkingName}
            </h5>
            <button className="bg-yellow-500 text-white px-4 py-1 mt-1 rounded-full flex items-center space-x-2 mx-auto" onClick={()=>{navigate("/"); window.scrollTo(0, 0);}}>Change</button>
          </div>

        </div>

        {/* Booking Info */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold ">Booking ID:</span>
            <span className="">{booking.bookingId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold ">Drop Off:</span>
            <span className="">{parkingData.dropOffDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold ">Pick Up:</span>
            <span className="">{parkingData.pickupDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold ">Airport:</span>
            <span className="">{booking.airport}</span>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default BookingDetails;

