// backend/routes/documents.js
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.post('/', documentController.createDocument);
router.get('/', documentController.getDocuments);
router.put('/:id', documentController.updateDocument);
router.delete('/:id', documentController.deleteDocument);

module.exports = router;
