import { evaluateStudent } from '../src/school2.js'
import { expect } from "chai"

describe('Teste na funçãp evaluateStudent', () => {
    it('deve retornar Invalid name ao digitar um numero para nome e notas positivas', () => {
        const result = evaluateStudent(2,7,8)
        expect(result).to.equal('Invalid name')
    })

    it('deve retornar Invalid name ao digitar um nome com menos de 3 caracteres e notas positivas', () => {
        const result = evaluateStudent('Oi',7,8)
        expect(result).to.equal('Invalid name')
    })

    it('deve retornar Invalid grade ao digitar uma string para nome e notas negativas', () => {
        const result = evaluateStudent('Pedro',-7,8)
        expect(result).to.equal('Invalid grade')
    })

    it('deve retornar Invalid grade ao digitar uma string para nome e digitar uma string em notas', () => {
        const result = evaluateStudent('Pedro','7',8)
        expect(result).to.equal('Invalid grade')
    })

    it('deve retornar Invalid name ao digitar um numero para nome e digitar numero negativo', () => {
        const result = evaluateStudent(2,-7,8)
        expect(result).to.equal('Invalid name')
    })

    it('deve retornar Retained ao digitar uma string para nome e digitar notas positivas com media acima de 6 (5,5)', () => {
        const result = evaluateStudent('Pedro',5,5)
        expect(result).to.equal('Retained')
    })

    it.only('deve retornar Approved ao digitar uma string para nome e digitar notas positivas com media acima de 6 (7,8)', () => {
        const result = evaluateStudent('Pedro',7,8)
        expect(result).to.equal('Approved')
    })

})