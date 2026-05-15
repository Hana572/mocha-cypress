describe('Contact Page Test Cases', () => {

  beforeEach(function () {
    cy.visit('https://practicesoftwaretesting.com/contact');
    cy.fixture('contact').as('data');
  });

  it('TC01 - Valid submission', function () {
    cy.enterFirstName(this.data.firstName);
    cy.enterLastName(this.data.lastName);
    cy.enterEmail(this.data.email);
    cy.selectSubject();
    cy.enterMessage(this.data.message);
    cy.clickSend();

    // Assertions
    cy.url().should('include', 'contact');
    cy.get('form').should('exist');
    cy.contains('Send').should('exist');
  });

  it('TC02 - Empty form', () => {
    cy.clickSend();

    // Assertions
    cy.get('form').should('exist');
    cy.url().should('include', 'contact');
    cy.get('input').should('have.length.greaterThan', 0);
  });

  it('TC03 - Invalid email', () => {
    cy.enterFirstName('hana');
    cy.enterLastName('mohamed');
    cy.enterEmail('wrongEmail');
    cy.enterMessage('test');
    cy.clickSend();

    // Assertions
    cy.get('input').eq(2).should('have.value', 'wrongEmail');
    cy.url().should('include', 'contact');
    cy.get('form').should('exist');
  });

  it('TC04 - Missing message', () => {
    cy.enterFirstName('hana');
    cy.enterLastName('mohamed');
    cy.enterEmail('hana@test.com');
    cy.selectSubject();
    cy.clickSend();

    // Assertions
    cy.get('textarea').should('exist');
    cy.url().should('include', 'contact');
    cy.get('form').should('exist');
  });

  it('TC05 - Only first name', () => {
    cy.enterFirstName('hana');
    cy.clickSend();

    // Assertions
    cy.get('input').eq(0).should('have.value', 'hana');
    cy.url().should('include', 'contact');
    cy.get('form').should('exist');
  });

});