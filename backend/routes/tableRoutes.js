const express = require('express');
const Table = require('../models/Table');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const table = new Table(req.body);
    await table.save();
    res.status(201).json(table);
  } catch (error) {
    res.status(400).json({ message: 'Error adding table', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tables', error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const table = await Table.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(table);
  } catch (error) {
    res.status(400).json({ message: 'Error updating table', error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Table.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Table deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting table', error });
  }
});

module.exports = router;
