/*
  - Mocha permite organizar e estruturar seus testes com os blocos describe e it. 
    - O "describe" é usado para agrupar testes relacionados, enquanto o "it" define testes individuais.
  
  - Chai é responsável pelas asserções, e expect é uma das formas de expressá-las. 
    - Com "expect", você verifica se o código está se comportando como esperado.
*/
import { expect } from "chai"
import { sum } from "../src/mathFunctions.js"
import { sub } from "../src/mathFunctions.js"
import { div } from "../src/mathFunctions.js"
import { mul } from "../src/mathFunctions.js"

describe('Teste na função SUM: ', () => {
  it('deve retornar a soma de dois números', () => {
    const result = sum(2,3)
    expect(result).to.equal(5)
  })
})

describe('Teste na função SUB: ', () => {
  it('deve retornar a subtração de dois números', () => {
    const result = sub(3,2)
    expect(result).to.equal(1)
  })
})

describe('Teste na função DIV: ', () => {
  it('deve retornar a divisão de dois números', () => {
    const result = div(6,2)
    expect(result).to.equal(3)
  })
})

describe('Teste na função DIV: ', () => {
  it('deve retornar a multiplicação de dois números', () => {
    const result = mul(2,3)
    expect(result).to.equal(6)
  })
})