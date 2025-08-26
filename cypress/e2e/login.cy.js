describe('login scenarios', () => {

  const anyFieldRequiredMessage = '×Email e/ou senha inválidos'
  const emailRequiredMessage = 'Email é obrigatório'
  const passwordRequiredMessage = 'Password é obrigatório'

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should return a message with email/password incorrect', () => {

    cy.login('test@gmail.com', '222')

    cy.get('.alert-secondary').should('have.text', anyFieldRequiredMessage) 
    
  })

  it('Should return a message when both email and password are empty', () => {

    cy.login()
    
    cy.get('.btn-close-error-alert').eq(0).siblings('span').should('have.text', emailRequiredMessage);
    cy.get('.btn-close-error-alert').eq(1).siblings('span').should('have.text', passwordRequiredMessage);
    
  })
  
  it('Should return a message without email', () => {

    cy.login('usuario@teste.com') 

    cy.get('.btn-close-error-alert').eq(0).siblings('span').should('have.text', passwordRequiredMessage);
    
  })

  it('User must log in successfully', () => {

    cy.fixture('users').then((user) => {
 
      cy.register(user.nome, user.email, user.password) 

      cy.login(user.email, user.password)

      cy.title().should('eq', 'Front - ServeRest')
    })
  })
})