const express = require('express');

const router = express.Router();

const {
  createComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint
} = require('../controllers/complaintController');

router.post('/create', createComplaint);

router.get('/all', getComplaints);
router.put('/update/:id', updateComplaintStatus);
router.delete('/delete/:id', deleteComplaint);

module.exports = router;