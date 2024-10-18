const { expect } = require('chai');
const sinon = require('sinon');
const userController = require('../../../src/controllers/user');
const userService = require('../../../src/services/user');

describe('CONTROLLER USER - Teste da função CREATE:', function () {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = { body: { fullName: 'Vinicius Vasconcelos', nickname: 'VinD' } };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    next = sinon.stub();
  });

  this.afterEach(() => {
    sinon.restore();
  });

  it('Deve-se cadastrar um usuário com sucesso', async function () {
    const output = { id: 67, fullName: 'Vinicius Vasconcelos', nickname: 'VinD' };
    sinon.stub(userService, 'create').resolves(output);

    await userController.create(req, res, next);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith(output)).to.be.true;
    expect(next.called).to.be.false;
  });

  it('Deve-se chamar next com erro em caso de falha', async function () {
    const error = new Error('Erro ao cadastrar usuário');
    sinon.stub(userService, 'create').rejects(error);

    await userController.create(req, res, next);

    expect(next.calledWith(error)).to.be.true;
    expect(res.status.called).to.be.false;
    expect(res.json.called).to.be.false;
  });
});
