const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }, // Asegúrate de que este campo esté definido como requerido
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
