# Automação com Cypress

## Projeto de automação para demonstrar conhecimento com cypress e automação de api's e web

<li><b> Frontend</b>: https://front.serverest.dev/</li>
<li><b> Swagger API</b>: https://serverest.dev/ </li>
</br>

#### Clonando o projeto:

```bash
git clone https://github.com/RafaelTS/ambev-test
cd ambev-test
```

Instale as dependências

```bash
npm install
```

### Execução dos testes

Este projeto utiliza o pacote ntl para facilitar a execução de scripts.
Instale-o globalmente:

```bash
npm i -g ntl
```

E você verá a lista de comandos disponíveis definidos no package.json:

```bash
√  Node Task List
? Select a task to run:
> cypress:web        # Abre o Cypress em modo interativo
  cypress:headless   # Executa em modo headless (Electron)
  cypress:api        # Executa apenas testes de API
```


#### Executando sem ntl

Você também pode rodar diretamente pelo terminal:

<li>Cypress interativo (UI antiga):</li>

```bash
npx cypress open
```
<li>Cypress headless:</li>

```bash
npx cypress run --browser electron
```

### Estrutura do projeto


```bash

ambev-test/
  ├── cypress/
  │   ├── e2e/
  │   │   ├── api/       # Testes de API
  │   │   └── ui/        # Testes de frontend
  │   └── support/       # Custom commands e configurações
  ├── package.json
  └── cypress.config.js
```

### Tecnologias:

<li> <b>Cypress</b> para automação de testes </li>
<li> <b>Node Task List (ntl)</b> para facilitar execução de scripts</li>
<li> <b>Serverest</b> como aplicação de testes</li>
