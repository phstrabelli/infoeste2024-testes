const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const sinon = require('sinon')
const conn = require('../../src/databases/connection');
const app = require('../../src/app');


chai.use(chaiHttp)

describe('Teste de integração user - Teste do método POST na rota /user', () => {
    it('Deve se cadastrar um usuário com sucesso, qunado passado um body válido', async () => {
        const body = {
            fullName: 'Pedro Henrique',
            nickname: 'Botelho'
        }
        const output = {
            id:67, 
            ...body //spread metod
        }

        sinon.stub(conn, 'execute').resolves([{insertId:67}])

        const response = await chai.request(app).post('/user').send(body)

        expect(response.status).to.be.equal(201)
        expect(response.body).to.deep.equal(output)
    })

    it('Deve se receber status 400 e uma mensagem de erro, quando "fullName" não for enviado', async () => {
        const body = {
            nickname: 'Botelho'
        }
        const response = await chai.request(app).post('/user').send(body)

        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Full name é um campo obrigatório')
    })
    
    it('Deve se receber status 400 e uma mensagem de erro, quando "nickname" não for enviado', async () => {
        const body = {
            fullName: 'Pedro Henrique Trevisi'
        }
        const response = await chai.request(app).post('/user').send(body)

        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Nickname é um campo obrigatório')
    })
})