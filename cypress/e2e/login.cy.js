describe('Login e Registro de usuários', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
  })
})

it ('Tentativa de Login com user inexistente'),() =>{
  //seleciona um elemento com a escrita resgister now e clica
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
}