# Tutorial de Testes Automatizados com Chai-HTTP 🌐

Boas-vindas ao Tutorial de Testes Automatizados! Neste guia, daremos continuidade ao que foi abordado no tutorial anterior e exploraremos o uso do **Chai-HTTP** para criar testes de integração.

> 👀 **Observação**: Este tutorial foi testado com versões específicas das ferramentas mencionadas. Para versões mais recentes, consulte sempre a documentação oficial.

## Visão Geral do Tutorial 📚

Neste tutorial, veremos:

- A diferença entre testes de integração e testes de unidade;
- Como utilizar o `Chai-HTTP` para criar testes de integração.

## 1. Testes de Unidade vs Testes de Integração 🔸🔶

Antes de começar, é importante entender a diferença entre testes de unidade e testes de integração.

Os **testes de unidade** verificam pequenas partes individuais do código, como funções ou métodos, de forma isolada. Eles garantem que cada componente do sistema funcione conforme o esperado. Normalmente, são mais rápidos e fáceis de executar, uma vez que testam pequenas partes do código sem dependências externas.

Já os **testes de integração** verificam como diferentes partes do sistema funcionam juntas. Eles garantem que os componentes integrados se comportem conforme o esperado. Esses testes geralmente envolvem interações com serviços externos, como bancos de dados, APIs e sistemas de arquivos, e podem ser mais lentos que os testes de unidade.

## 2. Usando Chai-HTTP para Testes de API 🏹

O **Chai-HTTP** é uma extensão do Chai que facilita a realização de testes em APIs HTTP. Com ele, você pode fazer requisições HTTP e verificar as respostas de forma fácil e intuitiva.

### 2.1 Instalando o Chai-HTTP

Para começar, instale o `Chai-HTTP` executando o seguinte comando:

```bash
npm install chai-http@4.3.0 -D
```

### 2.2 Fazendo Testes com Chai-HTTP

Agora que você instalou o **Chai-HTTP**, vamos ver um exemplo de uso:

```javascript
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// ...

  const response = await chai.request('core da aplicação').post('/rota').send('corpo da requisição');
  expect(response.status).to.be.equal(201);

// ...
```

### 2.3 Exemplo com Nossa API

Vamos realizar um teste de integração que vai da chamada da rota até o `insert` no banco de dados, passando por todas as camadas. Isso simulará como o comportamento da aplicação acontece de ponta a ponta:

```javascript
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const connection = require('../../src/databases/connection');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração - Teste do método POST na rota /user', function() {
  it('Deve cadastrar um usuário com sucesso, quando passado um body válido', async function() {
    const body = { fullName: 'Ronaldo Nazário', nickname: 'theBest9' };
    const output = { id: 67, fullName: 'Ronaldo Nazário', nickname: 'theBest9' };
    sinon.stub(connection, 'execute').resolves([{ insertId: 67 }]);

    // Chamada ao nosso endpoint
    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal(output);

    sinon.restore();
  });
});
```

## Conclusão 🎯

Com o **Chai-HTTP**, agora você consegue realizar testes de integração e pode adicionar essa habilidade importante ao seu arsenal de ferramentas! Isso é essencial para entrevistas de emprego e testes técnicos. Se surgir alguma dúvida, não hesite em buscar ajuda. Boa sorte! 🍀

> _Para mais detalhes, consulte a [documentação do Chai-HTTP](https://www.chaijs.com/plugins/chai-http/)._ 
