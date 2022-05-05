const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');
const { catchAsync } = require('../utils/catchAsync');

const { AppError } = require('../utils/appError');

const repairExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: { id, status: 'pending' },
    include: [{ model: User }],
  });

  if (!repair) {
    return next(
      new AppError(
        'The repair does not exist with given Id or not is pending',
        404
      )
    );
  }

  req.repair = repair;
  next();
});

module.exports = { repairExists };
