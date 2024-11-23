const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating reservation', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reservations', error });
  }
});

module.exports = router;
