describe('API - Produtos', () => {
  it('Must list products', () => {
    cy.apiRequest('GET', '/produtos').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('produtos');
      expect(res.body.produtos).to.be.an('array');
    });
  });

  it('Must register product with token', () => {
    const product = {
      nome: `Product ${Date.now()}`,
      preco: 100,
      descricao: 'Simple Test',
      quantidade: 10
    };

    cy.apiLogin('fulano@qa.com', 'teste').then((token) => {
      cy.apiRequest('POST', '/produtos', product, { Authorization: token })
        .then((res) => {
          expect(res.status).to.eq(201);
          expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
        });
    });
  });
});
