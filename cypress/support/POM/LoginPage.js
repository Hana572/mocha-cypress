class LoginPage {

    visitLogin() {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
    }

    enterEmail(email) {
        cy.get('#email').should('be.visible').clear().type(email)
    }

    enterPassword(password) {
        cy.get('#password').should('be.visible').clear().type(password)
    }

    clickLogin() {
        cy.get('[data-test="login-submit"]').should('be.visible').click()
    }

    verifyOnLoginPage() {
        cy.url().should('include', 'login')
        cy.get('#email').should('be.visible')
        cy.get('#password').should('be.visible')
    }

    verifyPasswordMasked(password) {
        cy.get('#password').should('have.attr', 'type', 'password')
        cy.get('#password').should('have.value', password)
    }
}

export default new LoginPage()