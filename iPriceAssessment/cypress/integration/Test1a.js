describe('My test suite', function (){
    
    it('Display list of stores in "Find The Best Deals Online"', function(){
        cy.visit('https://www.iprice.my/') 
    
        
        cy.get('.kF > .rk > .i-amphtml-carousel-content > .i-amphtml-carousel-scroll')
        .each(function($el, index, $listofElements){
       cy.log($listofElements.length)
        cy.log($el.text())

      })

    })

})