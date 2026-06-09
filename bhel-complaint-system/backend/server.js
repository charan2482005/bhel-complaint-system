const express = require('express');
const path = require("path");
const cors = require('cors');
require('dotenv').config();

const hpvpRoutes = require('./routes/hpvpRoutes');
const saleOrderRoutes = require('./routes/saleOrderRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  '/uploads',
  express.static(path.join(__dirname, "uploads"))
);

app.use('/api/hpvp', hpvpRoutes);
app.use('/api/saleorder', saleOrderRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('BHEL Complaint Management API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});