// backend/controllers/caseController.js
const Case = require('../models/Case');

// Get all cases
exports.getCases = async (req, res) => {
  try {
    const cases = await Case.find().populate('client');
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cases', error });
  }
};

// Get a single case by ID
exports.getCaseById = async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id).populate('client');
    if (!caseItem) return res.status(404).json({ message: 'Case not found' });
    res.json(caseItem);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching case', error });
  }
};

// Create a new case
exports.createCase = async (req, res) => {
  try {
    const newCase = new Case(req.body);
    await newCase.save();
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: 'Error creating case', error });
  }
};

// Update a case
exports.updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCase) return res.status(404).json({ message: 'Case not found' });
    res.json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: 'Error updating case', error });
  }
};

// Delete a case
exports.deleteCase = async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);
    if (!deletedCase) return res.status(404).json({ message: 'Case not found' });
    res.json({ message: 'Case deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting case', error });
  }
};
