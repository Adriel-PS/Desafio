//declarando variaveis para teste 
let user = {nick_name: "user1", senha: "12345678"}

//função do teste
describe('Verification login', () => {
    
    //Visitando e a pagina e validando que o carregamento foi completado
    before('validação de carragamento', () =>{
        cy.visit('../../desafios/login.html')
        cy.window().then((win) => {
            expect(win.document.readyState).to.equal('complete')
        })
    })

    //Teste em si, aqui fazemos as validações que irá trazer a resposta se o teste foi bem sucedido 
    //Usamos o Id para capturar o conteudo no qual queremos testar. Sendo assim, id="login_form" é validado com #login_form
    it('login e direcionamento', () => {

        //verificando se o formulario
        cy.get('#login_form').should('be.visible')

        //verificando se os campos selecionados estão sendo apresentados para o usario e preenchendo
        cy.get('#username').should('be.visible').type(user.nick_name)
        cy.get('#password').should('be.visible').type(user.senha)

        //verificando se o botao esta sendo apresentado, clincado e validando o direcionamento para pagina logada
        cy.get('#login_form button[type="submit"]').should('be.visible').click()
        cy.url().should('include', '/home')
    })
  })