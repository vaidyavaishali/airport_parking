import bookingModel from "../models/bookingModel.js";
import Booking from "../models/bookingModel.js";
import parkingSpaceModel from "../models/parkingSpaceModel.js";

// Create new booking
// Generate booking ID
const generateBookingId = async () => {
    const currentDate = new Date();
    const datePrefix = `BKID${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;

    // Find the last booking created on the same day
    const lastBooking = await Booking.find({ bookingId: { $regex: `^${datePrefix}` } })
        .sort({ bookingId: -1 })  // Sort by booking ID in descending order
        .limit(1);

    // If no bookings for the current day, start with 001
    const lastNumber = lastBooking.length > 0 ? parseInt(lastBooking[0].bookingId.slice(-3)) : 0;

    // Increment the last number and pad with leading zeros
    const newBookingId = `${datePrefix}${(lastNumber + 1).toString().padStart(3, '0')}`;

    return newBookingId;
};

// Create new booking
export const createBooking = async (req, res) => {
    try {
        const { contactData, flightDetails, vehicleDetails, additionalOptions, parkingId, payment } = req.body;
        console.log(req.body)
        const parkingSpace = await parkingSpaceModel.findById(parkingId);
        if (!parkingSpace || parkingSpace.occupied >= parkingSpace.capacity) {
            return res.status(400).json({ success: false, message: "Parking is full or not available" });
        }

        // Generate booking ID
        const bookingId = await generateBookingId();

        // Create booking
        const newBooking = new Booking({ bookingId, contactData, flightDetails, vehicleDetails, additionalOptions, parkingId, payment });
        const savedBooking = await newBooking.save();

        // Update parking space occupancy
        parkingSpace.occupied += 1;
        await parkingSpace.save();

        res.status(201).json({ success: true, data: savedBooking });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating booking", error });
    }
};

// Get booking by Booking ID
export const getBookingByBookingId = async (req, res) => {
    try {
        const { bookingId } = req.params;  // Get booking ID from the route parameters
        console.log(bookingId)
        // Find the booking by its ID
        const booking = await bookingModel.findOne({ bookingId: bookingId }); // Populating the parkingId to get related parking details

        // If booking is not found
        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching booking", error });
    }
};
export const getAllBooking = async (req, res) => {
    try {
        // const { bookingId } = req.params;  // Get booking ID from the route parameters
        // console.log(bookingId)
        // Find the booking by its ID
        const booking = await bookingModel.find(); // Populating the parkingId to get related parking details

        // If booking is not found


        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching booking", error });
    }
};

// Delete a parking space by ID
export const deleteBooking = async (req, res) => {
  try {
    console.log("ok")
    const { id } = req.params;
    const deletedBooking = await bookingModel.findByIdAndDelete(id);
    
    if (!deletedBooking) {
      return res.status(404).json({ message: "booking space not found" });
    //   console.log(res.)
    }
    res.status(200).json({ message: "booking space deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}