Cypress.Commands.add('enterFirstName', (name) => {
  cy.get('input').eq(0).type(name);
});

Cypress.Commands.add('enterLastName', (name) => {
  cy.get('input').eq(1).type(name);
});

Cypress.Commands.add('enterEmail', (email) => {
  cy.get('input').eq(2).type(email);
});

Cypress.Commands.add('selectSubject', () => {
  cy.get('select').select(1);
});

Cypress.Commands.add('enterMessage', (msg) => {
  cy.get('textarea').type(msg);
});

Cypress.Commands.add('clickSend', () => {
  cy.contains('Send').click();

});



// Enter Email
Cypress.Commands.add('enterEmail', (email) => {
  cy.get('#email').should('be.visible').clear().type(email)
})

// Enter Password
Cypress.Commands.add('enterPassword', (password) => {
  cy.get('#password').should('be.visible').clear().type(password)
})

// Click Login Button
Cypress.Commands.add('clickLogin', () => {
  cy.get('[data-test="login-submit"]').should('be.visible').click()
})



// Search input
Cypress.Commands.add('searchProduct', (text) => {
  cy.get('input[placeholder="Search"]').clear().type(text + '{enter}')
})

// Check products exist
Cypress.Commands.add('checkProductsVisible', () => {
  cy.get('.card').should('have.length.greaterThan', 0)
})

// Check no products
Cypress.Commands.add('checkNoProducts', () => {
  cy.get('.card').should('have.length', 0)
})