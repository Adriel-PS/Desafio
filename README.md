# Entrega Dos Desafios Propostos

### Olá, meu nome é Adriel e segue os resultados do desafio previsto

O desafio consistia em testar 2 paginas e trazer os resultados do teste,
As automações foram criadas a partir de Javasscript/node e Cypress(framework de testes)
***vale ressaltar que a versao usada do node é 21.7.1***
e os teste propostos são:

1 - Funcionalidade login:

- Acessar a url: http://www.exemplo.com.br/login
- Validar a usabilidade dos campos: e-mail, senha e o botão de confirmação.
- Validar o acesso com um usuário e a redirecionamento para uma pagina logada pós login.

2 - Funcionalidade search:

- Acessar url: http://www.exemplo.com.br/busca
- Validar usabilidade dos campos: campo busca e botão busca
- Validar busca e verificar.

## Teste elaborados e comentados nos seguintes diretórios.

```jsx
cypress/e2e/verification-login.cy.js
cypress/e2e/verification-search.cy.js

```

## Elaboração do teste e resultado

### Login

As funcionalidades testadas são:

- Acesso a url e carregamento da pagina
- Apresentação do campos descritos
- Preenchimento e acionamento dos campos

Esperado:

- carregamento da pagina, apresentação dos campos no qual usuário irá interagir e preenchimento e envio do form de login
- Login efetivo e direcionamento para pagina home

Resultado:

Com sucesso:

- carregamento completo da pagina
- Apresentação dos campos descritos
- Preenchimento e ação de envio do form de login

falhas:

- Validação de usuário
- Direcionamento para pagina home

https://github.com/user-attachments/assets/dc4b6b9f-a7f2-48f6-8368-e0fc670153d0

A partir do terminal temos, o teste que deu a negativa, no caso, a validação da mudança de url para home.

https://github.com/user-attachments/assets/8b75787b-4a97-47cd-8cfb-4a60fd22c4ab

a partir da ide, podemos ver as validações e ver os pontos no qual o teste teve sua negativa.

### Search

As funcionalidades testadas são:

- Acesso a url e carregamento da pagina
- Apresentação do campos descritos
- Preenchimento do campo de pesquisa e retorno com resultado referente a pesquisa

Esperado:

- Carregamento da pagina por completo
- Apresentação dos campos descritos
- Preenchimento do form de pesquisa e seu envio
- Validar carregamento e retorno da página com o resutado da pesquisa

Resultado:

Com sucesso:

- Carregamento completo da pagina
- Apresentação dos campos descritos
- Preenchimento do campo da pesquisa

falhas:

- Carregamento da pagina com resultado da pesquisa
- Não apresentação do resultado da pesquisa

https://github.com/user-attachments/assets/613cb872-2a2a-4df4-b4bc-d7b384ff81d2

Na captura é apresentado que o teste “passe” ( nome do teste) não passou na etapa de encontrar a “ palavra chave” na pagina.

https://github.com/user-attachments/assets/be6568a1-ad7e-4270-9c10-c0277189ebf9

A partir da ide, podemos ver as validações anteriores e o trexo no qual o texto da erro

## Dependência e comandos de execução

Para a instalação das dependências

```jsx
npm install
//irá baixar todas as bibliotecas usadas no projeto
npm install cypress --save-dev
//instalar cypress
```

***recomendado que o node esteja na versão 18.x, 20.x, 22.x ou em algumas versão estavel a partir dessas***

Para abrir a ide

```jsx
npx cypress open
//irá abrir uma interface grafica que mostrará o teste rodando em tempo real

```

Para o código ser executado no terminal

```jsx
npx cypress run --spec "cypress/e2e/exemplo.cy.js”
// nesse caminho usaremos cypress/e2e/verification-login.cy.js e cypress/e2e/verification-search.cy.js

```
