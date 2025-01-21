import mongoose from "mongoose";
const parkingSpaceSchema = new mongoose.Schema({
    parkingId: {
        type: String,
        default: () => new mongoose.Types.ObjectId()
    },
    airportCompany: {
        type: String
    },
    parkingName: {
        type: String,
    },
    parkinglogo: {
        type: String,
    },
    location: {
        type: String,
    },
    pricing: {
        type: Number,
    },
    feature1: {
        type: String,
    },
    feature2: {
        type: String,
    },
    feature3: {
        type: String,
    },
    feature4: {
        type: String,
    },
    rating: {
        type: String,
    },
    noOfSlots: {
        type: String,
    },
    recommanded: {
        type: Boolean,
        default: false
    },
    avaibility: {
        type: String,
    },
    pickupDate: {
        type: String,
    },
    dropOffDate: {
        type: String,
    }
})
export default mongoose.model('ParkingSpace', parkingSpaceSchema)