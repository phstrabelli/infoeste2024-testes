const userService = require('../services/user');

const create = async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getById,
};
