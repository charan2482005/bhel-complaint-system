const db = require("../db");

const createEnquiry = async (req, res) => {

  try {

    const {
      hpvp_enq_no,
      hpvp_enq_date,
      sector,
      cust_enq_ref,
      customer,
      description,
      qty,
      weight_mt,
      bid_sub_due,
      offer_date,
      status,
      remarks
    } = req.body;

    await db.query(

      `
      INSERT INTO hpvp_enquiries
      (
        hpvp_enq_no,
        hpvp_enq_date,
        sector,
        cust_enq_ref,
        customer,
        description,
        qty,
        weight_mt,
        bid_sub_due,
        offer_date,
        status,
        remarks,
        document_name
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,
        $7,$8,$9,$10,$11,$12,$13
      )
      `,

      [
        hpvp_enq_no,
        hpvp_enq_date,
        sector,
        cust_enq_ref,
        customer,
        description,
        qty,
        weight_mt,
        bid_sub_due,
        offer_date,
        status,
        remarks,
        req.file ? req.file.filename : null
      ]

    );

    res.json({
      message: "Enquiry Created Successfully"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

};

const getAllEnquiries = async (req, res) => {

  try {

    const result = await db.query(

      `
      SELECT *
      FROM hpvp_enquiries
      ORDER BY id DESC
      `

    );

    res.json(result.rows);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

};

module.exports = {
  createEnquiry,
  getAllEnquiries
};