const { expect } = require('chai')
const sinon = require('sinon')
const model = require('../../../src/models/user')
const conn = require('../../../src/databases/connection')

describe('Model user - Teste da função getById: ', () => {
    it('Deve-se achar um usuário com sucesso', async () => {
        const input = 67
        const output = { 
            insertId: 67,
            fullName: 'Pedro Henrique Trevisi',
            nickname: 'Botelho',
        }



        sinon.stub(conn , 'execute').resolves([[{ 
            insertId:67,
            fullName: 'Pedro Henrique Trevisi',
            nickname: 'Botelho'
         }]])

        const result = await model.getById(input)
        expect(result).to.deep.equal(output) 

        sinon.restore() //para ter mais stubs, restaurando

    })
})
//returns faz o stub de uma função normal
//resolves faz o stub de uma função assincrona
//equal para objeto -> deep.equal

