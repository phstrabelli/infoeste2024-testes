# Bônus: Cobertura de Testes com NYC 📊

A cobertura de testes é uma métrica para avaliar o quanto de seu código está sendo testado. Ela permite identificar quais partes do seu código foram cobertas pelos testes e quais precisam de atenção. Neste guia bônus, vamos focar no uso do **NYC**, uma ferramenta de cobertura de código que funciona em conjunto com frameworks como Mocha.

> 👀 Observação: Este tutorial foi testado com versões específicas das ferramentas mencionadas. Para versões mais recentes, consulte sempre a documentação oficial.

## Visão Geral do Tutorial 📚

Neste tutorial, veremos:

- Importância da cobertura de testes em nossos projetos;
- Como configurar e utilizar o NYC.


## 1. Porque isso é importante? 🤔

Cobertura de testes refere-se à prática de mensurar o quanto do seu código(if, else, loops, functions, methods, e etc..) foi executado durante a execução dos testes. Um bom nível de cobertura ajuda a garantir que a maioria dos cenários críticos do seu sistema está sendo testada, reduzindo a chance de bugs não detectados em produção.

## 2. Instalação e Configuração do NYC ⚙️

O NYC é uma ferramenta...

### 2.1 Instalando o NYC

Para começar, instale o `NYC` executando o seguinte comando:

```bash
npm install nyc@15.1.0 -D
```

### 2.2 Configurando os Scripts

Atualize o arquivo `package.json` com os seguintes scripts para automatizar a execução dos testes:

```json
"scripts": {
  "cover": "nyc npm test"
}
```

> 👀 Observação: O script `"cover"` vai rodar seus testes e, ao mesmo tempo, gerar o relatório de cobertura usando o NYC.


### 2.2 Configurando aquivo `.nycrc.json` 🛠️

O arquivo .`nycrc.json` serve para configurar e personalizar o comportamento do NYC na geração dos relatórios de cobertura de testes. Com ele, você define exatamente como o NYC deve coletar e exibir as métricas de cobertura. Para isso, crie um arquivo `.nycrc.json` na raiz do projeto, com as configurações desejadas. Abaixo está um exemplo de configuração que você pode usar:

```json
{
  "all": true,
  "extension": [
    ".test.js"
  ],
  "include": [
    "src"
  ],
  "exclude": [
    "tests"
  ]
}
```

Essas configurações ajudam a adaptar o NYC às necessidades específicas de cada projeto, oferecendo relatórios mais úteis e garantindo uma análise de cobertura focada e eficaz. Para uma informação mais detalhada, leia abaixo: _"Principais configurações do arquivo ⭐"_

<details>
<summary> Principais configurações do arquivo ⭐</summary>

- `all`:
  - **Descrição:** Quando definido como `true`, inclui todos os arquivos correspondentes à configuração, mesmo os que não foram executados nos testes.
  - _Essa opção é útil para identificar código não testado, assim dando uma visão completa._
- `extension`:
  - **Descrição:** Especifica quais extensões de arquivos NYC deve incluir na cobertura.
  - _Por exemplo: `.spec.ts`, ou `.test.js`._
- `include`:
  - **Descrição:** Determina quais arquivos ou diretórios devem ser incluídos na análise de cobertura.
  - _Direciona a cobertura para partes importantes do código, como o diretório `src`._
- `exclude`:
  - **Descrição:** Lista arquivos ou diretórios a serem excluídos da análise de cobertura.
  - _Diretórios como `tests`, ou arquivos de configuaração, que não fazem sentido serem testados._

</br>

**💡 Outras Opções Úteis do `.nycrc.json`**

- `check-coverage`:
  - **Descrição**: Quando ativado, verifica se o projeto atende aos critérios mínimos de cobertura especificados.
  - _Útil para garantir que o código não seja considerado “concluído” sem atingir uma cobertura mínima._
- `per-file`:
  - **Descrição**: Quando ativado, exige que cada arquivo atenda aos critérios mínimos de cobertura, individualmente.
  - _Útil para garantir uniformidade na cobertura, evitando que um arquivo com alta cobertura compense outro com baixa cobertura._
- `branches`, `lines`, `functions` e `statements`:
  - **Descrição**: Especifica a porcentagem mínima de cobertura para esses quatro tipos de métricas.
  - Exemplo:
    ```json
    "branches": 80,
    "lines": 90,
    "functions": 85,
    "statements": 90
    ```
- `reporter`:
  - **Descrição**: Define o formato de relatório a ser gerado, como `text`, `html`, `lcov`, entre outros.
  - Exemplo:
    ```json
    "reporter": ["text", "html"]
    ```
- `report-dir`:
  - **Descrição**: Especifica o diretório onde o relatório de cobertura será salvo.
  - Exemplo:
    ```json
    "report-dir": "./coverage"
    ```
- `skip-full`:
  - **Descrição**: Quando ativado, exclui arquivos totalmente cobertos do relatório.
  - _Útil para deixar o relatório mais limpo, mostrando apenas arquivos com lacunas na cobertura._
- `watermarks`:
  - **Descrição**: Define níveis de cobertura em cores, ajudando na leitura de relatórios.

</details>

## 3. Executando a Cobertura de Testes 🟢

Para executar a cobertura e gerar o relatório, utilize o comando:

```bash
npm run cover
```

Ao final da execução, o NYC fornecerá um relatório detalhado que mostrará as partes do seu código que foram testadas e aquelas que ainda não foram cobertas pelos testes. Esse relatório inclui informações sobre as métricas de cobertura de linhas de código, funções, branches e declarações (statements).

| **Coluna**            | **Descrição**                                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------|
| **File**              | Indica o arquivo ou diretório que está sendo analisado.                                                                   |
| **% Stmts**           | Percentual de instruções (statements) do arquivo que foram executadas durante os testes.                                 |
| **% Branch**          | Percentual de ramificações (branches) do arquivo que foram testadas (ex.: estruturas condicionais como `if`, `else`).    |
| **% Funcs**           | Percentual de funções do arquivo que foram chamadas durante os testes.                                                   |
| **% Lines**           | Percentual de linhas de código do arquivo que foram executadas.                                                          |
| **Uncovered Line #s** | Número das linhas que não foram cobertas pelos testes.                                                                   |


## Conclusão 🏁

A cobertura de testes é uma prática essencial para manter a qualidade e a confiança no código. Com o **NYC**, você pode facilmente medir e melhorar a cobertura, garantindo que os testes não deixem passar partes importantes do sistema. Não deixe de integrar o relatório de cobertura em seus fluxos de trabalho de desenvolvimento para garantir uma base sólida de testes.

> _Para mais informações, consulte a [documentação oficial do NYC](https://github.com/istanbuljs/nyc)._ 
