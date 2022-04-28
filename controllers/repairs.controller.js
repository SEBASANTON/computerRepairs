const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({ where: { status: 'pending' } });

    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRepairs = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const newUser = await Repair.create({ date, userId });
    const users = await User.findAll({
      where: { id: userId, status: 'available' },
    });

    if (users.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Use not found given that userId',
      });
    }else{
        res.status(201).json({
          newUser,
          users
      });
    }

  } catch (error) {
    console.log(error);
  }
};

const getRepairsById = (req, res) => {
  try {
    const { repair } = req;

    if ({ status: 'completed' }) {
    }
    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepairs = async (req, res) => {
  try {
    const { repair } = req;

    await repair.update({ status: 'completed' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepairs = async (req, res) => {
  try {
    const { repair } = req;

    await repair.update({ status: 'cancelled' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairsById,
  updateRepairs,
  deleteRepairs,
};
