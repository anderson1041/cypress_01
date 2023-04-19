describe('Login', () => {
  it('Tentativa de Login com user inexistente', () => {
    cy.visit('https://www.automationexercise.com/')
    //seleciona um elemento com a escrita resgister now e clica
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('pedro.jenkins@email.com');
    cy.get('[data-qa="login-password"]').type('123456789');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.login-form > form > p').should('be.visible');

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  })
})