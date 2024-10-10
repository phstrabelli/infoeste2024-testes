/*
  - Mocha permite organizar e estruturar seus testes com os blocos describe e it. 
    - O "describe" é usado para agrupar testes relacionados, enquanto o "it" define testes individuais.
  
  - Chai é responsável pelas asserções, e expect é uma das formas de expressá-las. 
    - Com "expect", você verifica se o código está se comportando como esperado.
*/

import { expect } from 'chai';
import { sum } from '../src/mathFunctions.js';

describe('Teste na função sum:', () => {
  it('deve retornar a soma de dois números', () => {
    const result = sum(2, 3);
    expect(result).to.equal(5);
  });

  it('deve retornar um número negativo quando a soma for negativa', () => {
    const result = sum(-2, -3);
    expect(result).to.equal(-5);
  });
});
