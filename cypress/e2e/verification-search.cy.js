//declaração de variavel
let pesquisa = 'palavra chave'

describe('Verification search', () => {
    //Visitando e a pagina e validando que o carregamento foi completado
    before('validação de carragamento', () =>{
        cy.visit('../../desafios/search.html')
        cy.window().then((win) => {
            expect(win.document.readyState).to.equal('complete')
        })
    })

    it('passes', () => {
        //validando se o formulario de pesquisa foi apresentado ao usuario
        cy.get('#search_form').should('be.visible')

        //verificando se os campos selecionados estao sendo apresentados e preenchendo
        cy.get('#search_input').should('be.visible').type(pesquisa)

        //clicando e validando pesquisa 
        cy.get('#search_button').should('be.visible').click()
        cy.contains('body', pesquisa).should('exist')
    })
  })