const sinon = require("sinon")
const controller = require('../../../src/controllers/user')
const services = require('../../../src/services/user')
const { expect } = require("chai")


describe('Controller user - Teste da função create', () => {
    //beforeEach
    //beforeAll
    //afterAll
    //afterEach

    beforeEach(() => {
        req = { 
            body: {
                fullName: 'Pedro Henrique Trevisi',
                nickname: 'Botelho'
            } 
         }
        res = { 
            status: sinon.stub().returnsThis(), //returnThis retorna ele mesmo
            json: sinon.stub()
        }
        next = sinon.stub()
    })

    afterEach(() => {
        sinon.restore()
    })

    it('Deve-se cadastrar um usuário com sucesso', async () => {
        const output = {
            fullName: 'Pedro Henrique Trevisi',
            nickname: 'Botelho'
        }

        sinon.stub(services, 'create').resolves(output)

        await controller.create(req,res,next)

        expect(res.status.calledWith(201)).to.be.true
        expect(res.json.calledWith(output)).to.be.true
    })
})