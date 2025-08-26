Cypress.Commands.add('login', (email, password) => {   
  cy.visit('/')

  if (email !== undefined) {
    cy.get('#email').type(email)
  }  

  if (password !== undefined) {
    cy.get('#password').type(password)
  }

  cy.get('[data-testid="entrar"]').should('be.visible').click()
})


Cypress.Commands.add('register', (nome, email, senha) => {
  cy.visit('/cadastrarusuarios') // página de cadastro

  cy.get('[data-testid="nome"]').type(nome)
  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="password"]').type(senha)
  

  cy.get('[data-testid="cadastrar"]').click()
})
