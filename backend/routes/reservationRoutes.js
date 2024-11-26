const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

// Obtener todas las reservaciones
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reservations', error });
  }
});

// Crear una nueva reservación
router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation); // Retorna la reservación creada
  } catch (error) {
    res.status(400).json({ message: 'Error creating reservation', error });
  }
});

module.exports = router;
