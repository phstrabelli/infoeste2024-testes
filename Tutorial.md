# Tutorial de Testes Automatizados com Sinon 🎭

Boas-vindas ao **Tutorial de Testes Automatizados**! Neste guia, daremos continuidade ao que foi abordado no tutorial anterior e vamos explorar o uso do **Sinon** para criar _stubs_, uma ferramenta poderosa para isolar comportamentos nos nossos testes.

> 👀 **Observação**: Este tutorial foi testado com versões específicas das ferramentas mencionadas. Para versões mais recentes, consulte sempre a documentação oficial.

## Visão Geral do Tutorial 📚

O que iremos ver:
- Como utilizar o Sinon para criar _stubs_ em seus testes;
- A importância de isolar funções críticas para testar o comportamento dos seus algoritmos;
- Como organizar a estrutura de diretórios, arquivos e scripts para executar seus testes.

## 1. Utilizando o Sinon para Stubs ⚙️

O **Sinon** é uma biblioteca poderosa que oferece recursos como _stubs_, _spies_ e _mocks_ para simular comportamentos em seus testes automatizados. Os _stubs_ são especialmente úteis para substituir funções reais por versões simuladas.

### 1.1 Instalando o Sinon

Para começar, instale o Sinon executando o seguinte comando:

```bash
npm install sinon@14.0.1 -D
```

### 1.2 Exemplo de Stubbing

Imagine que você tenha uma função que faz uma chamada a um serviço externo. Durante os testes, podemos usar um _stub_ para simular essa chamada sem realmente acessar o serviço.

```javascript
const sinon = require('sinon');

// ...

  sinon.stub(object, 'functionOrMethod').returns('Resultado simulado');

  // const result = function(param1, paramN);
  // expect(result).to.equal(expectedResult);

  sinon.restore();

// ...
```

### 1.3 Exemplo com o Banco de Dados

Agora, pense em uma função `create` que insere dados em um banco, executando um comando `INSERT INTO`. Durante os testes, não queremos inserir dados reais, pois isso pode poluir nossa base de dados. Para isso, usamos um _stub_ para simular a resposta da conexão com o banco.

**O que é um Stub neste contexto?**

Um _stub_ substitui temporariamente a função que interage com o banco de dados, permitindo simular o comportamento sem interagir com o banco real.

#### Exemplo de Teste com Stub:

```javascript
const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/databases/connection');
const model = require('../../../src/models/user');

describe('MODEL USER - Teste da função CREATE:', function() {
  it('Deve cadastrar um usuário com sucesso', async function() {
    const input = {
      fullName: 'Vinicius Vasconcelos',
      nickname: 'VinD',
    };
    const output = {
      id: 67,
      fullName: 'Vinicius Vasconcelos',
      nickname: 'VinD',
    };

    // Stub para simular a resposta do banco de dados
    sinon.stub(connection, 'execute').resolves([{ insertId: 67 }]);

    // Executa a função create e verifica o resultado
    const result = await model.create(input);
    expect(result).to.deep.equal(output);

    // Restaura a função original
    sinon.restore();
  });
});
```

#### Benefícios de usar stubs em testes de banco de dados:
- **Isolamento**: Seus testes não dependem do banco de dados real, tornando-os mais rápidos e previsíveis.
- **Eficiência**: Você evita a necessidade de configurar e limpar o banco a cada teste.
- **Controle**: Com _stubs_, você simula diferentes cenários (como erros de conexão) para verificar como sua função se comporta.

## 2. Estrutura de Diretórios 🗂️

Organizar seus testes em diferentes diretórios ajuda na manutenção e escalabilidade do projeto. Veja o exemplo abaixo:

```bash
tests/
├── unit/
│   ├── controllers/
│   ├── models/
│   ├── services/
└── integration/
```

Essa divisão entre testes de unidade e de integração facilita a identificação e manutenção dos testes.

## 3. Configurando os Scripts 👨‍🔧

Atualize o arquivo `package.json` com os seguintes scripts para automatizar a execução dos testes:

```json
"scripts": {
  "test": "npm run test:unit && npm run test:integration --exit",
  "test:unit": "mocha ./tests/unit/**/*.test.js --exit",
  "test:integration": "mocha ./tests/integration/**/*.test.js --exit"
}
```

Com esses scripts, você pode rodar todos os testes com `npm test`, ou executar testes específicos de unidade ou integração.

## Conclusão 🌟

Parabéns! Agora você começou a entender como usar o Sinon para criar _stubs_ e isolar partes críticas de suas funções nos testes. Isso permitirá que você teste seu código de forma eficiente, sem impactar o banco de dados ou outros serviços reais. Continue praticando, explore mais cenários e aproveite os benefícios de testes automatizados! 

Se surgir alguma dúvida, não hesite em buscar ajuda. Boa sorte! 🍀

> _Para mais informações sobre o Sinon, consulte a [documentação oficial do Sinon](https://sinonjs.org/)._
