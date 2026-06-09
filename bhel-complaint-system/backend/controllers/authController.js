const db = require('../config/db');

const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const result = await db.query(

      `SELECT * FROM users
       WHERE email = $1
       AND password = $2`,

      [email, password]

    );

    if (result.rows.length > 0) {

      res.json({
        success: true,
        message: 'Login Success'
      });

    }

    else {

      res.status(401).json({
        success: false,
        message: 'Invalid Credentials'
      });

    }

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

};

module.exports = {
  login
};