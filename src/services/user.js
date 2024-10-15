const user = require('../models/user');
const { isValidFullName, isValidNickname } = require('../validations/validations');

const _validations = ({ fullName, nickname }) => {
  if(!isValidFullName(fullName)) throw new Error('Full name errado! Deve conter entre 3 e 40 caracteres');
  if(!isValidNickname(nickname)) throw new Error('Nickname errado! Deve conter entre 3 e 8 caracteres');
}

const create = async (userObj) => {
  _validations(userObj);
  return await user.create(userObj);
};

const getById = async (id) => {
  const userFound = await user.getById(id);
  if (!userFound) throw new Error('Usuário não encontrado');
  return userFound;
};

module.exports = {
  create,
  getById,
};
