/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
    
    it('My FirstTest case',function() {
    
    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //need to use invoke to access jquery function 'show' to expose the hover over menu
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    //In this example clicking the dropdown added #top to the URL: https://rahulshettyacademy.com/AutomationPractice/#top
    cy.url().should('include','top')
 
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 