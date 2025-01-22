import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        default: () => new mongoose.Types.ObjectId()
    }, contactData: {
        title: String,
        firstName: String,
        lastName: String,
        email: String,
        mobileNo: String,
        people: Number,
    },
    flightDetails: {
        departureTerminal: String,
        departureFlightNo: String,
        arrivalTerminal: String,
        arrivalFlightNo: String,
    },
    vehicleDetails: [
        {
            make: String,
            model: String,
            color: String,
            regNo: String,
        },
    ],
    additionalOptions: {
        textMessage: { type: Boolean, default: false },
        cancellationCover: { type: Boolean, default: false },
    },
    payment: {
        pricing: { type: String },
        paymentCompleted: { type: String, default: "Pending" }
    },
    parkingId: { type: mongoose.Schema.Types.ObjectId, ref: "ParkingSpace" },
    createdAt: { type: Date, default: Date.now },
    cancelled :{
        type: Boolean,
        default: false
    }
});

export default mongoose.model("Booking", BookingSchema);

