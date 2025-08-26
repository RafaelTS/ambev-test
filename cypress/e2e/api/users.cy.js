describe('API - Users', () => {
  it('Should add a user with success', () => {
    const usuario = {
      nome: 'Rafael QA',
      email: `rafa_${Date.now()}@qa.com`,
      password: 'teste123',
      administrador: 'true'
    };

    cy.apiRequest('POST', '/usuarios', usuario).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
      expect(res.body).to.have.property('_id');
    });
  });

  it('Deve listar usuários', () => {
    cy.apiRequest('GET', '/usuarios').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('usuarios');
      expect(res.body.usuarios).to.be.an('array');
    });
  });
});
