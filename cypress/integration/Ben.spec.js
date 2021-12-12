describe ('App launches', () => {
    it ('launches', () => {
      cy.visit ('/');
    });
});

describe("Form test", () => {
    it("Doesn't render the results page if no info is added", () => {
      cy.visit("/");
      cy.get('[button-cy=button]').click()
      cy.get('[data-test-id="result-message"]').should('not.exist');
    });
  });