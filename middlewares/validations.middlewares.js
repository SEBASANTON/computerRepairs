const { body, validationResult } = require('express-validator');

const createUserValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Pasword must be at least 8 characters long'),
  body('role').notEmpty().withMessage('Role cannot be empty'),
];

const createRepairValidations = [
  body('date')
    .notEmpty()
    .withMessage('Date cannot be empty')
    .isDate()
    .withMessage('Must be a valid date'),
  body('computerNumber')
    .notEmpty()
    .withMessage('Computer Number cannot be empty')
    .isNumeric()
    .withMessage('Must be a valid numeric'),
  body('comments').notEmpty().withMessage('Comments cannot be empty'),
];

const updateUserValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
];

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);
    const errorMsg = messages.join('. ');
    return res.status(400).json({
      status: 'error',
      message: errorMsg,
    });
  }
  next();
};

module.exports = {
  createUserValidations,
  createRepairValidations,
  updateUserValidations,
  checkValidations,
};
