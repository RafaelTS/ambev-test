describe('API - Users', () => {
  it('Should add a user with success', () => {
    const usuario = {
      nome: 'Rafael Teixeira',
      email: `rafa_${Date.now()}@ambev.com`,
      password: 'teste123',
      administrador: 'true'
    };

    cy.apiRequest('POST', '/usuarios', usuario).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
      expect(res.body).to.have.property('_id');
    });
  });

  it('Should list users', () => {
    cy.apiRequest('GET', '/usuarios').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('usuarios');
      expect(res.body.usuarios).to.be.an('array');
    });
  });
});
