/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//We want to find an entry in one column of a table and see if the text in the next cell is what we expect
//This next line gets the second column and iterates through the array of cells in that column
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
        
        //With Cypress commands we can get the web object using index to then get the next sibling (i.e. next cell)
        //Because expect function is JQuery and not Cypress function we have to use 'then' to handle the promise and do the the assert on the text
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('26')
        })
    }
 
})
 
 
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 