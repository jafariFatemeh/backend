// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
require('./config/dotenv'); 
const cors = require('cors');

const app = express();
connectDB();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const clientRoutes = require('./routes/clients');
const caseRoutes = require('./routes/cases');
const documentRoutes = require('./routes/documents');
const communicationRoutes = require('./routes/communications');
const authRoutes = require('./routes/auth');

app.use('/api/clients', clientRoutes);
app.use('/api/cases', caseRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/communications', communicationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health-check', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




