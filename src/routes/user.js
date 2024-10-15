const route = require('express').Router();
const userCtr = require('../controllers/user');
const { userValidation } = require('../middlewares/fieldValidation');

route.post(
  '/',
  userValidation,
  userCtr.create,
);

route.get(
  '/:id',
  userCtr.getById,
);

module.exports = route;
