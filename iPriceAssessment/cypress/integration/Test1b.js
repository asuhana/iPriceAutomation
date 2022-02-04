describe('My test suite', function (){
    it('Count the list of stores in FIND THE BEST DEALS ONLINE', function(){
        cy.visit('https://www.iprice.my/') 
          
        cy.get('.kF > .rk > .i-amphtml-carousel-content > .i-amphtml-carousel-scroll')
          .each(function($el, index, $listofElements){
           
            cy.log($el.text())
            cy.log($listofElements.length)
        
          })
    
    
    })
    
    })
    
    
    
    
    
    