const { expect } = require('chai')
const  sinon  = require('sinon')
const service = require('../../../src/services/user')
const model = require('../../../src/models/user')

//fulName: Ter pelo menos 3 caracteres e menos que 40
//nickname: Ter pelo menos 3 caracteres e menos que 8
describe('Service user - Teste da função create: ', () => {
    it('Deve-se cadastrar um usuário com sucesso, quando passado um input válido', async () => {
        const input = {
            fullName: 'Pedro Henrique Trevisi',
            nickname: 'Botelho'
        }
        const output = { 
            id: 67, 
            fullName: 'Pedro Henrique Trevisi',
            nickname: 'Botelho',
        }

        sinon.stub(model, 'create').resolves(output)

        const result = await service.create(input)
        expect(result).to.deep.equal(output)
        
        sinon.restore()
    })
    
    it('Deve-se lançar uma exceção, quando fullName tiver menos que 3 caracteres', async () => {
        const input = {
            fullName: 'Pe',
            nickname: 'Botelho'
        }

        try {
            const result = await service.create(input)
        } catch (error) {
            expect(error.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
        }
        
    })

    it('Deve-se lançar uma exceção, quando fullName tiver mais que 40 caracteres', async () => {
        const input = {
            fullName: 'Pedro Henrique Trevisi Strabelli da Silva Correia Moraes De Azevedo',
            nickname: 'Botelho'
        }

        try {
            const result = await service.create(input)
        } catch (error) {
            expect(error.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
        }
        
    })

    it('Deve-se lançar uma exceção, quando nickname tiver menos que 3 caracteres', async () => {
        const input = {
            fullName: 'Pedro Henrique Trevisi ',
            nickname: 'Bo'
        }

        try {
            const result = await service.create(input)
        } catch (error) {
            expect(error.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
        }
        
    })

    it('Deve-se lançar uma exceção, quando nickname tiver mais que 8 caracteres', async () => {
        const input = {
            fullName: 'Pedro Henrique Trevisi ',
            nickname: 'Botelhoosss'
        }

        try {
            const result = await service.create(input)
        } catch (error) {
            expect(error.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
        }
        
    })
})