//Automatização setando os componentes com Cypress

describe('Login', () => {
  it('Tentativa de Login com user inexistente', () => {
    cy.visit('https://www.automationexercise.com/')
    
    //seleciona um elemento com a escrita resgister now e clica
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    
    //Seleciona o campo Login email e preenche com um email
    cy.get('[data-qa="login-email"]').type('anderson.lima@email.com');

    // Seleciona o campo senha e insere a senha
    cy.get('[data-qa="login-password"]').type('123456789');

    //Clica no botão para logar
    cy.get('[data-qa="login-button"]').click();

    // Aguarda a label surgir com a frase
    cy.get('.login-form > form > p').should('be.visible').and('contain','Your email or password is incorrect!')
  
  })
 
})