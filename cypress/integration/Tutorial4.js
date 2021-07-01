/// <reference types="Cypress" />
//Mocha Describe 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()


//Cypress automatically closes any alerts. But you can use this if you need to validate something on the alert though it will still close it.
//It is just listening to the event and acting on it
//window:alert
cy.on('window:alert',(str)=>
{
    //Chai
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Chai
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

//If a link opens a new tab, you cannot go to a new tab in Cypress. Just a fact with the architecture (though you can with other automation frameworks like Selenium)
 //So you have to use jquery function to remove target attribute in link so that browser opens it in the current tab where Cypress can resume the test
cy.get('#opentab').invoke('removeAttr','target').click()
 
cy.url().should('include','qaclickacademy')
 
cy.go('back')
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}  )
 
 
 
}  )