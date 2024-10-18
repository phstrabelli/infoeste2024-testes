import { expect } from 'chai';
import { evaluateStudent } from '../src/school2.js';

describe('Teste na função evaluateStudent:', () => {
  it('deve retornar "Invalid name" para um nome com menos de 3 caracteres', () => {
    const result = evaluateStudent('Vi', 6.5, 6.5);
    expect(result).to.equal('Invalid name');
  }); 
  
  it('deve retornar "Invalid grade" quando a 1° nota é diferente de um número', () => {
    const result = evaluateStudent('Vinicius', '6', 6.5);
    expect(result).to.equal('Invalid grade');
  });

  it('deve retornar "Invalid grade" quando a 2° nota é diferente de um número', () => {
    const result = evaluateStudent('Vinicius', 6.5, 'one');
    expect(result).to.equal('Invalid grade');
  });

  it('deve retornar "Invalid grade" quando a 1° nota é negativa', () => {
    const result = evaluateStudent('Vinicius', -1.5, 6.5);
    expect(result).to.equal('Invalid grade');
  });

  it('deve retornar "Invalid grade" quando a 2° nota é negativa', () => {
    const result = evaluateStudent('Vinicius', 6.5, -1.5);
    expect(result).to.equal('Invalid grade');
  });

  it('deve retornar "Retained" para notas válidas que a média esta abaixo de 6', () => {
    const result = evaluateStudent('Vinicius', 4.5, 6);
    expect(result).to.equal('Retained');
  });

  it('deve retornar "Retained" para notas válidas que a média esta igual 6', () => {
    const result = evaluateStudent('Vinicius', 6, 6);
    expect(result).to.equal('Retained');
  });

  it('deve retornar "Approved" para notas válidas que a média esta acima de 6', () => {
    const result = evaluateStudent('Vinicius', 6.5, 6);
    expect(result).to.equal('Approved');
  });
});