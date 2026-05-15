import LoginPage from '../support/POM/LoginPage.js'

describe('Login Test Cases', () => {

  beforeEach(() => {
    cy.fixture('login').as('loginData')
    LoginPage.visitLogin()
  })

  it('TC1 - Wrong Password', () => {
    cy.get('@loginData').then((data) => {
      LoginPage.enterEmail(data.wrongPassword.email)
      LoginPage.enterPassword(data.wrongPassword.password)
      LoginPage.clickLogin()
      LoginPage.verifyOnLoginPage()
    })
  })

  it('TC2 - Wrong Email', () => {
    cy.get('@loginData').then((data) => {
      LoginPage.enterEmail(data.wrongEmail.email)
      LoginPage.enterPassword(data.wrongEmail.password)
      LoginPage.clickLogin()
      LoginPage.verifyOnLoginPage()
    })
  })

  it('TC3 - Empty Fields', () => {
    LoginPage.clickLogin()
    LoginPage.verifyOnLoginPage()
  })

  it('TC4 - Invalid Email Format', () => {
    cy.get('@loginData').then((data) => {
      LoginPage.enterEmail(data.invalidEmail.email)
      LoginPage.enterPassword(data.invalidEmail.password)
      LoginPage.clickLogin()
      LoginPage.verifyOnLoginPage()
    })
  })

  it('TC5 - Password is Masked', () => {
    cy.get('@loginData').then((data) => {
      LoginPage.enterEmail(data.validUser.email)
      LoginPage.enterPassword(data.validUser.password)
      LoginPage.verifyPasswordMasked(data.validUser.password)
    })
  })
})