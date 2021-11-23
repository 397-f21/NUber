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

  it('input all info and get no results', () => {
      cy.visit('/');
      cy.get('[fname-cy=fname]').type("Alex");
      cy.get('[phone-cy=phone]').type("123456");
      cy.get('[netid-cy=netid]').type("acg1245");
      cy.get('[date-cy=date]').type("2021-11-25");
      cy.get('[time-cy=time]').type("11:00");
      cy.get('[button-cy=button]').click();
      cy.get('[res=res]').contains("NUber Results");
  });
});

