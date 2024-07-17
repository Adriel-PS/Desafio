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

v

## Teste elaborados e comentados nos seguintes diretorios.

```jsx
cypress/e2e/verification-login.cy.js
cypress/e2e/verification-search.cy.js
```

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/07eb2c27-d943-4da7-ae01-d4fbacc339ab/c0b678a4-42e0-4717-a755-65e8ae6b97c3/Untitled.png)

A partir do terminal temos, o teste que deu a negativa, no caso, a validação da mudança de url para home.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/07eb2c27-d943-4da7-ae01-d4fbacc339ab/636ba1d7-8fc3-4c17-8bce-bf0130dddbca/Untitled.png)

a partir da ide, podemos ver as validações e ver os pontos no qual o teste teve sua negativa.

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/07eb2c27-d943-4da7-ae01-d4fbacc339ab/97fb809a-f73f-4cce-bfcd-727abfe9a571/Untitled.png)

na captura é apresentado que o teste “passe” ( nome do teste) não passou na etapa de encontrar a “ palavra chave” na pagina.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/07eb2c27-d943-4da7-ae01-d4fbacc339ab/bf3fc03c-eae8-4901-a796-f5d03c454ae5/Untitled.png)

A partir da ide, podemos ver as validações anteriores e o trexo no qual o texto da erro

## Dependencia e comandos de execução

Para a instalação das dependencias 

```jsx
npm install
//irá baixar todas as bibliotecas usadas no projeto
```

***recomendado que o node esteja na versão 18.x, 20.x, 22.x ou em algumas versão estavel a partir dessas*** 

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
