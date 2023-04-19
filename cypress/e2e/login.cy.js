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
  
  it('Acessando a tela de registro',() =>{
    cy.visit('https://www.automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type('Anderson Lima');
    cy.get('[data-qa="signup-email"]').type('meuemail@email.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('be.visible');

  })

  it('Criação de usuário', ()=>{
    cy.visit('https://www.automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type('Anderson Lima');
    cy.get('[data-qa="signup-email"]').type('meuemail@email.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('be.visible');

    cy.get('#id_gender1').click();
    cy.get('[data-qa="password"]').type('password');
  })
})