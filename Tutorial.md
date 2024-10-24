# Tutorial de Testes Automatizados com Mocha e Chai 🧪

Boas-vindas ao **Tutorial de Testes Automatizados**! Este guia complementa o curso **Introdução aos Testes Automatizados: Desvendando o Poder da Automação**. Aqui, você encontrará tudo o que precisa para implementar testes automatizados em projetos Node.js utilizando Mocha e Chai.

> _👀 **Observação**: Para projetos mais antigos, verifique a compatibilidade das versões das dependências!_

## Visão Geral do Tutorial 📚

O que iremos ver:
- Instalação das dependências necessárias;
- Configuração dos scripts de teste de forma prática;
- O que são e como utilizar os blocos `describe` e `it` em seus testes.

## 1. Instalação das Dependências ⚙️

Para começar, vamos instalar o **Mocha** e o **Chai**! Execute o comando abaixo no seu terminal:

```bash
npm install mocha chai -D
```

## 2. Configuração dos Scripts de Teste 📋

Após a instalação, você precisará configurar o seu `package.json` para incluir o script de teste. Adicione o seguinte trecho na seção de "scripts":

```json
"scripts": {
  "test": "mocha ./tests/*.test.js --exit"
}
```

> _👀 **Observação**: Este trecho configura o comando `npm test` para executar todos os arquivos de teste que correspondem ao padrão `*.test.js` na pasta `tests`, finalizando o processo após a execução dos testes._

Agora, você pode executar todos os testes com o comando:

```bash
npm test
```

## 3. Estrutura Básica dos Testes 📝

O **Mocha** organiza seus testes usando os blocos `describe` e `it`. Vamos entender melhor:

### 3.1 O que é um `describe`

O bloco `describe` agrupa testes relacionados. Use-o para descrever o que está sendo testado:

```javascript
describe('Teste da função XYZ', () => {
  // espaço para seus testes 'it'
});
```

### 3.2 O que é um `it`

O bloco `it` define testes individuais. Veja como utilizá-lo na prática:

```javascript
describe('Teste da função XYZ', () => {
  it('deve retornar o resultado esperado', () => {
    // espaço para asserções
  });
});
```

### 3.3 Usando Chai para Asserções

O **Chai** permite que você verifique se seu código está funcionando como esperado. Aqui, utilizaremos o estilo `expect`:

```javascript
import { expect } from 'chai';

describe('Teste da função XYZ', () => {
  it('deve retornar o resultado esperado', () => {
    const result = function(param1, paramN);
    expect(result).to.equal(expectedResult);
  });
});
```

> _👀 **Observação**: Para mais asserções, acesse a [documentação oficial do Chai](https://www.chaijs.com/api/bdd/)._


## Conclusão 🌟

Explore, pratique e divirta-se realizando testes em seus códigos! Se surgir alguma dúvida, não hesite em buscar ajuda. Boa sorte! 🍀

> _Para mais detalhes sobre a organização do repositório e outros conceitos, consulte o [README.md](./README.md). E sempre consulte a documentação oficial do [Mocha](https://mochajs.org/) e do [Chai](https://www.chaijs.com/) para aprofundar seus conhecimentos e explorar mais funcionalidades!_
