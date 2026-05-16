describe('Home Page Tests', () => {

  let data

  beforeEach(() => {
   cy.visit('https://practicesoftwaretesting.com/', { failOnStatusCode: false })
    cy.fixture('home').then((d) => {
      data = d
    })
  })

  // TC6 - Home page loads successfully
  it('TC6-Home page loads successfully', () => {

    cy.url().should('include', 'practicesoftwaretesting')
    cy.get('body').should('be.visible')
    cy.get('input[placeholder="Search"]').should('be.visible')

  })

  // TC7 - Search input is visible
  it('TC7-Search input is visible', () => {

    cy.get('input[placeholder="Search"]').should('be.visible')
    cy.get('input[placeholder="Search"]').should('exist')
    cy.get('body').should('be.visible')

  })

  // TC8 - Products are displayed
  it('TC8-Products are displayed', () => {

    cy.checkProductsVisible()

    // extra assertions
    cy.get('.card').should('exist')
    cy.get('body').should('be.visible')

  })

it('TC9 - Product image is visible', () => {

  cy.get('.card img')
    .first()
    .should('be.visible')
    .and('have.attr', 'src')
    .and('not.be.empty')

  // Extra assertions
  cy.get('.card img').should('exist')
  cy.get('body').should('be.visible')

})
  // TC10 - Categories are visible
  it('TC10-Categories are visible', () => {

    cy.contains('Categories').should('be.visible')
    cy.get('body').should('be.visible')
    cy.get('input[placeholder="Search"]').should('exist')

  })

})