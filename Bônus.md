# Bônus: Cobertura de Testes com NYC 📊

A cobertura de testes é uma métrica para avaliar o quanto do seu código está sendo testado. Ela permite identificar quais partes do código foram cobertas pelos testes e quais precisam de atenção. Neste guia bônus, vamos focar no uso do **NYC**, uma ferramenta de cobertura de código que funciona em conjunto com framework como Mocha.

> 👀 Observação: Este tutorial foi testado com versões específicas das ferramentas mencionadas. Para versões mais recentes, consulte sempre a documentação oficial.

## Visão Geral do Tutorial 📚

Neste tutorial, veremos:

- A importância da cobertura de testes em projetos;
- Como configurar e utilizar o NYC.


## 1. Por que a Cobertura de Testes é Importante? 🤔

Cobertura de testes refere-se à prática de mensurar o quanto do seu código (estruturas como `if`, `else`, loops, funções, métodos, etc.) foi executado durante os testes. Um bom nível de cobertura ajuda a garantir que a maioria dos cenários críticos do sistema está sendo testada, reduzindo a chance de bugs não detectados em produção.

## 2. Instalação e Configuração do NYC ⚙️

O NYC é uma ferramenta...

### 2.1 Instalando o NYC

Para começar, instale o `NYC` executando o seguinte comando:

```bash
npm install nyc@15.1.0 -D
```

### 2.2 Configurando os Scripts

Atualize o arquivo `package.json` com o script para automatizar a execução dos testes com cobertura:

```json
"scripts": {
  "cover": "nyc npm test"
}
```

> 👀 Observação: O script `"cover"` executará os testes e, ao mesmo tempo, gerará o relatório de cobertura usando o NYC.


### 2.3 Configurando o Arquivo `.nycrc.json` 🛠️

O arquivo `.nycrc.json` serve para configurar e personalizar o comportamento do NYC na geração dos relatórios de cobertura. Com ele, você define exatamente como o NYC deve coletar e exibir as métricas de cobertura. Para isso, crie um arquivo `.nycrc.json` na raiz do projeto com as configurações desejadas. Abaixo está um exemplo de configuração:

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

Essas configurações ajudam a adaptar o NYC às necessidades específicas do projeto, oferecendo relatórios mais úteis e garantindo uma análise de cobertura focada e eficaz. Para detalhes adicionais, leia a seção abaixo: _"Principais Configurações do Arquivo ⭐"_

<details>
<summary> Principais Configurações do Arquivo ⭐</summary>

- `all`:
  - **Descrição:** Quando definido como `true`, inclui todos os arquivos especificados na configuração, mesmo aqueles que não foram executados nos testes.
  - _Útil para identificar códigos não testados, proporcionando uma visão completa do projeto._
- `extension`:
  - **Descrição:** Especifica as extensões de arquivos que o NYC deve incluir na cobertura.
  - _Exemplos: `.spec.ts`, `.test.js`._
- `include`:
  - **Descrição:** Determina quais arquivos ou diretórios devem ser incluídos na análise de cobertura.
  - _Direciona a cobertura para partes críticas do código, como o diretório `src`._
- `exclude`:
  - **Descrição:** Lista arquivos ou diretórios que devem ser excluídos da análise de cobertura.
  - _Exclui diretórios como `tests`, ou arquivos de configuração que não precisam ser testados._

</br>

**💡 Outras Opções Úteis do `.nycrc.json`**

- `check-coverage`:
  - **Descrição**: Quando ativado, verifica se o projeto atende aos critérios mínimos de cobertura especificados.
  - _Útil para garantir que o código não seja considerado “concluído” sem atingir uma cobertura mínima._
- `per-file`:
  - **Descrição**: Quando ativado, exige que cada arquivo individualmente atenda aos critérios mínimos de cobertura.
  - _Garante uniformidade na cobertura, evitando que arquivos com alta cobertura compensem outros com baixa cobertura._
- `branches`, `lines`, `functions` e `statements`:
  - **Descrição**: Define a porcentagem mínima de cobertura para esses quatro tipos de métricas.
  - Exemplo:
    ```json
    "branches": 80,
    "lines": 90,
    "functions": 85,
    "statements": 90
    ```
- `reporter`:
  - **Descrição**: Define o formato do relatório gerado, como `text`, `html`, `lcov`, entre outros.
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
  - _Útil para deixar o relatório mais limpo, exibindo apenas arquivos com lacunas na cobertura._
- `watermarks`:
  - **Descrição**: Define níveis de cobertura com cores, facilitando a leitura dos relatórios.

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

A cobertura de testes é uma prática essencial para manter a qualidade e a confiança no código. Com o **NYC**, você pode facilmente medir e melhorar a cobertura, garantindo que os testes não deixem passar partes importantes do sistema. Integre o relatório de cobertura aos seus fluxos de desenvolvimento para assegurar uma base sólida de testes.

> _Para mais informações, consulte a [documentação oficial do NYC](https://github.com/istanbuljs/nyc)._ 
