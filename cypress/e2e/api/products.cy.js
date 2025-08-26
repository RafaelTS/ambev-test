describe('API - Produtos', () => {
  it('Deve listar produtos', () => {
    cy.apiRequest('GET', '/produtos').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('produtos');
      expect(res.body.produtos).to.be.an('array');
    });
  });

  it('Deve cadastrar produto com token', () => {
    const produto = {
      nome: `Produto ${Date.now()}`,
      preco: 100,
      descricao: 'Produto de teste',
      quantidade: 10
    };

    cy.apiLogin('fulano@qa.com', 'teste').then((token) => {
      cy.apiRequest('POST', '/produtos', produto, { Authorization: token })
        .then((res) => {
          expect(res.status).to.eq(201);
          expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
        });
    });
  });
});
