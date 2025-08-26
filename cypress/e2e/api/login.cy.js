describe('API - Login', () => {
  it('Login válido', () => {
    cy.apiRequest('POST', '/login', {
      email: 'fulano@qa.com',
      password: 'teste'
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('message', 'Login realizado com sucesso');
      expect(res.body).to.have.property('authorization');
    });
  });

  it('Login inválido (senha errada)', () => {
    cy.apiRequest('POST', '/login', {
      email: 'fulano@qa.com',
      password: 'errada'
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).to.have.property('message', 'Email e/ou senha inválidos');
    });
  });
});
