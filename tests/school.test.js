import { isApproved } from '../src/school.js'
import { expect } from "chai"

describe('Teste na função isApproved:', () => {
    it('deve returnar true ao passar notas 10 e 10',() => {
        const result = isApproved(10,10)
        expect(result).to.be.true
    })

    it('deve returnar false ao passar notas 0 e 0',() => {
        const result = isApproved(0,0)
        expect(result).to.be.false
    })

    it('deve returnar true ao passar notas 6.5 e 6.5',() => {
        const result = isApproved(6.5,6.5)
        expect(result).to.be.true
    })

    it('deve returnar true ao passar a média exata de 6',() => {
        const result = isApproved(6,6)
        expect(result).to.be.true
    })

    it('deve returnar false ao passar notas 5.5 e 5.5',() => {
        const result = isApproved(5.5,5.5)
        expect(result).to.be.false
    })
    
    it('deve returnar false ao passar notas negativas',() => {
        const result = isApproved(-1,-2)
        expect(result).to.be.false
    })

})