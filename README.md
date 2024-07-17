# entrega dos desafios propostos

### Olá, meu nome é Adriel e segue os resultados do desafio previsto

O desafio consistia em testar 2 paginas e trazer os resultados do teste, sendo eles:

1 - funcionalidade login:

- acessar a url: http://www.exemplo.com.br/login
- validar a usabilidade dos campos: email, senha e o botao de confirmação.
- validar o acesso com um usario e a redirecionamento para uma pasgina logada pós login.

2 - funcionalidade search:

- acessar url: http://www.exemplo.com.br/busca
- validar usabilidade dos campos: campo busca e botão busca
- validar busca e verificar.

## Elaboração do teste e resultado

### Login

As funcionalidades testadas são:

- acesso a url e carregamento da pagina
- Apresentação do campos descritos
- Preenchimento e acionamento dos campos

Esperado: 

- carregamento da pagina, apresentação dos campos no qual usuario irá interagir e preenchimento e envio do form de login
- Login efetivo e direcionamento para pagina home

Resultado:

sucessido:

- carregamento completo da pagina
- Apresentação dos campos descritos
- Preenchimento e ação de envio do form de login

falhos:

- Validação de usuario
- Direcionamento para pagina home

### Search

As funcionalidades testadas são:

- cesso a url e carregamento da pagina
- Apresentação do campos descritos
- Preenchimento do campo de pesquisa e retorno com resultado referente a pesquisa

esperado:

- carregamento da pagina por completo
- Apresentação dos campos descritos
- Preenchimento do form de pesquisa e seu envio
- Validar carregamento e retorno da página com o resutado da pesquisa

Resultado:

sucessido:

- carregamento completo da pagina
- Apresentação dos campos descritos
- Preenchimento do campo da pesquisa

Falhos:

- Carregamento da pagina com resultado da pesquisa
- Não apresentação do resultado da pesquisa

## Dependencia e comandos de execução

Para a instalação das dependencias 

```jsx
npm install
//irá baixar todas as bibliotecas usadas no projeto
```

para abrir a ide 

```jsx
npx cypress open
//irá abrir uma interface grafica que mostrará o teste rodando em tempo real
```

para o codigo ser execultado no terminal 

```jsx
npx cypress run --spec "cypress/e2e/exemplo.cy.js”
// nesse caminho usaremos cypress/e2e/verification-login.cy.js e cypress/e2e/verification-search.cy.js
```
