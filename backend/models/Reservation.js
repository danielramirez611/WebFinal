const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
