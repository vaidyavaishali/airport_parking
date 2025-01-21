import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
  transactionId: { type: String, required: true },
  phonepeTransactionId: { type: String, required: false },  // Store PhonePe transaction ID after successful payment
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
