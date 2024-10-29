const { expect } = require('chai')
const sinon = require('sinon')
const model = require('../../../src/models/user')
const conn = require('../../../src/databases/connection')

describe('Model user - Teste da função create: ', () => {
    it('Deve-se cadastrar um usuário com sucesso', async () => {
        const input = { 
            fullName: 'Pedro Henrique Trevisi',
            nickname: 'Botelho',
        }
        const output = { //dummys
            id: 67, 
            fullName: 'Pedro Henrique Trevisi',
            nickname: 'Botelho',
        }

        sinon.stub(conn , 'execute').resolves([{ insertId: 67 }])

        const result = await model.create(input)
        expect(result).to.have.property('id') //propriedades necessárias para o objeto
        expect(result).to.have.property('fullName')
        expect(result).to.have.property('nickname')
        expect(result).to.deep.equal(output)

        sinon.restore() //para ter mais stubs, restaurando

    })
})
//returns faz o stub de uma função normal
//resolves faz o stub de uma função assincrona
//equal para objeto -> deep.equal

