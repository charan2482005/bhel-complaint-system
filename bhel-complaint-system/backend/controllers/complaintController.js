const connectDB = require('../config/db');

const createComplaint = async (req, res) => {
  try {
    const connection = await connectDB();

    const {
      employee_id,
      title,
      description,
      department
    } = req.body;

    await connection.execute(
      `INSERT INTO COMPLAINTS
      (EMPLOYEE_ID, TITLE, DESCRIPTION, DEPARTMENT, STATUS)
      VALUES
      (:employee_id, :title, :description, :department, 'Pending')`,
      {
        employee_id,
        title,
        description,
        department
      },
      { autoCommit: true }
    );

    res.status(201).json({
      message: 'Complaint Submitted Successfully'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Complaint Submission Failed'
    });
  }
};

const getComplaints = async (req, res) => {
  try {
    const connection = await connectDB();

    const result = await connection.execute(
      `SELECT * FROM COMPLAINTS`
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Failed to Fetch Complaints'
    });
  }
};
const updateComplaintStatus = async (req, res) => {
  try {
    const connection = await connectDB();

    const { id } = req.params;
    const { status } = req.body;

    await connection.execute(
      `UPDATE COMPLAINTS
       SET STATUS = :status
       WHERE COMPLAINT_ID = :id`,
      {
        status,
        id
      },
      { autoCommit: true }
    );

    res.status(200).json({
      message: 'Complaint Status Updated'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Failed to Update Status'
    });
  }
};
const deleteComplaint = async (req, res) => {
  try {
    const connection = await connectDB();

    const { id } = req.params;

    await connection.execute(
      `DELETE FROM COMPLAINTS
       WHERE COMPLAINT_ID = :id`,
      { id },
      { autoCommit: true }
    );

    res.status(200).json({
      message: 'Complaint Deleted Successfully'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Failed to Delete Complaint'
    });
  }
};

module.exports = {
  createComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint
};