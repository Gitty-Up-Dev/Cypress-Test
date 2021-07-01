/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca') //Should only bring up four items

cy.wait(2000)
//selenium get hit url in browser, cypress get acts like findElement of selenium
cy.get('.product').should('have.length',5) //Has five because one element is invisible that has class id = product
cy.get('.product:visible').should('have.length',4) //Only validate against the visible elements with class id = product
//Parent child chaining
cy.get('.products').as('productLocator') //Alias the element located so you can update it for all if there is a change

cy.get('@productLocator').find('.product').should('have.length',4)
cy.get(':nth-child(3) > .product-action > button').click()

//Console.log function has to be handled manually as promise with then because it is not a Cypress function and not handled by Cypress
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
})
 
cy.get('@productLocator').find('.product').each(($el, index, $list) => {  
 
    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
        $el.find('button').click()
        //you could return false at this point to exit the loop early
    }
})
 
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 
//this is to print in logs
//parameter is the located element to pass into the function; Need to write this way due to promises and needing then to wait before executing the rest of code
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
 
})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())
 
 
 
 
 
 
 
 
 
 
 
//fixture
 
}  )
 
 
 
}  )