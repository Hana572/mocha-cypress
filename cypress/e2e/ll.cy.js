describe('test', ()=> {

it('click on product ',()=>{

cy.visit('https://automationexercise.com/')

cy.get('a[href="/products"]').click()
})


})