const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

const { catchAsync } = require('../utils/catchAsync');

const getAllRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({
    where: { status: 'pending' },
    include: [{ model: User }],
  });

  res.status(200).json({
    repairs,
  });
});

const createRepairs = catchAsync(async (req, res, next) => {
  const { date, computerNumber, comments, userId } = req.body;

  const newRepair = await Repair.create({
    date,
    computerNumber,
    comments,
    userId,
  });
  res.status(201).json({
    newRepair,
  });
});

const getRepairsById = catchAsync(async (req, res, next) => {
  const { repair } = req;

  res.status(200).json({
    repair,
  });
});

const updateRepairs = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({ status: 'completed' });

  res.status(200).json({
    status: 'success',
  });
});

const deleteRepairs = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({ status: 'cancelled' });

  res.status(200).json({
    status: 'success',
  });
});

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairsById,
  updateRepairs,
  deleteRepairs,
};
