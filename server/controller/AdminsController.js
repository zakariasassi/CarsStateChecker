const Admins = require('../model/Admins')
const {Sequelize} = require('sequelize')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { literal } = require('sequelize');



exports.createnewadmin = async (req, res) => {
    const { username, password, role, fullname, email } = req.body;
  
    if (!username || !password || !role || !fullname || !email) {
      return res.status(400).json({
        message: 'Please enter all required information.',
        state: 0,
      });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newAdmin = await Admins.create({
        username,
        password: hashedPassword,
        role,
        fullname,
        email,
      });
  
      if (newAdmin) {
        return res.json({
          message: 'User account created successfully.',
          state: 1,
        });
      } else {
        return res.status(500).json({
          message: 'Failed to create user account.',
          state: 0,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'An error occurred. Please try again later.',
        state: 0,
      });
    }
  };



 exports.loginadmin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: 'Please enter valid credentials.',
        state: 0,
      });
    }
  
    try {
      const admin = await Admins.findOne({
        where: {
          username: username,
        },
      });
  
      if (!admin) {
        return res.status(401).json({
          message: 'Authentication failed. Invalid credentials.',
          state: 0,
        });
      }
  
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          message: 'Authentication failed. Invalid credentials.',
          state: 0,
        });
      }
  
      await Admins.update(
        {
          last_login: literal('CURRENT_DATE'),
        },
        {
          where: {
            id: admin.id,
          },
        }
      );
  
      res.json({
        message: 'Authentication successful.',
        state: 1,
        user: admin,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'An error occurred. Please try again later.',
        state: 0,
      });
    }
  };