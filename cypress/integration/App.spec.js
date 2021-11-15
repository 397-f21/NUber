describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
});
  
describe ('Button test', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('check if the button is here', () => {
    cy.visit ('/');
    cy.get('[button-cy=button]').should('contain', 'Submit');
  });

  it('input date', () => {
    cy.visit ('/');
    cy.get('[date-cy=date]').type("2021-11-01");
  });
});

