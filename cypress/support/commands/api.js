Cypress.Commands.add('apiRequest', (method, path, body = null, headers = {}) => {
  const base = Cypress.env('apiBaseUrl'); 
  const url = `${base}${path.startsWith('/') ? '' : '/'}${path}`;

  return cy.request({
    method,
    url,
    body,
    headers,
    failOnStatusCode: false, 
  });
});


Cypress.Commands.add('apiLogin', (email, password) => {
  return cy.apiRequest('POST', '/login', { email, password })
    .then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('authorization');
      const token = res.body.authorization;
      Cypress.env('token', token); 
      return token;
    });
});
