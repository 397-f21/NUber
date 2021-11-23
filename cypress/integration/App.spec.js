describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
});
  
describe ('Button', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('is labeled as Submit', () => {
    cy.visit ('/');
    cy.get('[button-cy=button]').should('contain', 'Submit');
  });
});

describe('Input', () => {
  it('time works', () => {
    cy.visit ('/');
    cy.get('[time-cy=time]').type("11:10");
  });
  it('date works', () => {
    cy.visit ('/');
    cy.get('[date-cy=date]').type("2021-11-01");
  });
});

