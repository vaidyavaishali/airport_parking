import multer from "multer";
import ParkingSpace from "../models/parkingSpaceModel.js";
import cloudinary from '../middlware/cloudinary.js';
// import { v4 as uuidv4 } from 'uuid';export const createParkingSpace = async (req, res) => {
export const createParkingSpace = async (req, res) => {
  try {
    console.log('Request Body:', req.body);  // Check if body is coming in
    console.log('Uploaded File:', req.file);  // Check if file is being uploaded

    const { parkingName, location, pricing, feature1, feature2, feature3, feature4, rating, noOfSlots, recommanded, avaibility, pickupDate, dropOffDate, airportCompany } = req.body;
    let uploadedImage = null;

    if (req.file) {
      uploadedImage = await cloudinary.uploader.upload(req.file.path, {
        folder: 'parking-logos',
      });
    }

    const newParkingSpace = new ParkingSpace({
      parkingName,
      parkinglogo: uploadedImage ? uploadedImage.secure_url : 'default-logo-url',
      location,
      pricing,
      feature1,
      feature2,
      feature3,
      feature4,
      rating,
      noOfSlots,
      recommanded,
      avaibility,
      pickupDate,
      dropOffDate,
      airportCompany
    });

    const savedParkingSpace = await newParkingSpace.save();
    res.status(201).json({ message: 'Parking space created successfully!', data: savedParkingSpace });
  } catch (error) {
    console.error('Error creating parking space:', error);
    res.status(500).json({ message: error.message });
  }
};


// Get all parking spaces
export const getAllParkingSpaces = async (req, res) => {
  try {
    const parkingSpaces = await ParkingSpace.find();
    res.status(200).json(parkingSpaces);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get a single parking space by ID
export const getParkingSpaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const parkingSpace = await ParkingSpace.findById(id);
    if (!parkingSpace) {
      return res.status(404).json({ message: "Parking space not found" });
    }
    res.status(200).json({data:parkingSpace});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


export const getParkingSpaceByAirportCompany = async (req, res) => {
  try {
    const { airportCompanyName } = req.params;
    const { pickUpDate, dropOffDate } = req.query;

    // if (!pickUpDate || !dropOffDate) {
    //   return res.status(400).json({ message: "Pick-up date and drop-off date are required" });
    // }

    // Convert DD/MM/YYYY to ISO format (YYYY-MM-DD)
    const parseDate = (dateStr) => {
      const [day, month, year] = dateStr.split('/');
      return new Date(`${year}-${month}-${day}`);
    };

    // const start = parseDate(pickUpDate);
    // const end = parseDate(dropOffDate);

    // if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    //   return res.status(400).json({ message: "Invalid date format. Use DD/MM/YYYY." });
    // }

    // console.log("Parsed Dates:", { start, end });
    // console.log("Airport Company:", airportCompanyName);

    // Query for parking spaces
    const parkingSpace = await ParkingSpace.find({
      airportCompany: airportCompanyName,
      // $and: [
      //   { pickUpDate: { $lte: end } },
      //   { dropOffDate: { $gte: start } },
      // ],
    });

    if (!parkingSpace || parkingSpace.length === 0) {
      return res.status(404).json({ message: "No parking spaces found for the given criteria" });
    }

    res.status(200).json(parkingSpace);
  } catch (err) {
    console.error("Error fetching parking spaces:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};



// Update a parking space by ID
export const updateParkingSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedParkingSpace = await ParkingSpace.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedParkingSpace) {
      return res.status(404).json({ message: "Parking space not found" });
    }
    res.status(200).json(updatedParkingSpace);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Delete a parking space by ID
export const deleteParkingSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedParkingSpace = await ParkingSpace.findByIdAndDelete(id);
    if (!deletedParkingSpace) {
      return res.status(404).json({ message: "Parking space not found" });
    }
    res.status(200).json({ message: "Parking space deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

