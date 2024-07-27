// backend/routes/cases.js
const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

router.get('/', caseController.getCases);
router.get('/:id', caseController.getCaseById);
router.post('/', caseController.createCase);
router.put('/:id', caseController.updateCase);
router.delete('/:id', caseController.deleteCase);

module.exports = router;
