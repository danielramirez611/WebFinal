const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  seats: { type: Number, required: true },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Table', TableSchema);
