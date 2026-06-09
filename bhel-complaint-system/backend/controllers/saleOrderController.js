
const db = require('../config/db');

const createSaleOrder = async (req, res) => {

  try {

    const {

      sale_order,
      io_number,
      sector,
      enquiry_no,
      group_name,
      customer,
      description,
      qty,
      weight_mt,
      zero_date,
      delivery,
      docs

    } = req.body;

    await db.query(

      `INSERT INTO sale_orders (

        sale_order,
        io_number,
        sector,
        enquiry_no,
        group_name,
        customer,
        description,
        qty,
        weight_mt,
        zero_date,
        delivery,
        docs

      )

      VALUES (

        $1,$2,$3,$4,$5,$6,
        $7,$8,$9,$10,$11,$12

      )`,

      [

        sale_order,
        io_number,
        sector,
        enquiry_no,
        group_name,
        customer,
        description,
        qty,
        weight_mt,
        zero_date,
        delivery,
        docs

      ]

    );

    res.json({
      message: 'Sale Order Created Successfully'
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

};

const getAllSaleOrders = async (req, res) => {

  try {

    const result = await db.query(
      `SELECT *
       FROM sale_orders
       ORDER BY id DESC`
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

  createSaleOrder,
  getAllSaleOrders

};