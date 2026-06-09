const express = require('express');
const router = express.Router();

const upload = require('../middleware/upload');

const {
  createEnquiry,
  getAllEnquiries
} = require('../controllers/hpvpController');

router.post(
  '/create',
  upload.single('document'),
  createEnquiry
);

router.get('/all', getAllEnquiries);

module.exports = router;