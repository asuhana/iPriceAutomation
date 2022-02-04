describe('My test suite', function (){
    
    it('Display count of TOP TRENDING PRODUCTS', function(){
        cy.visit('https://www.iprice.my/') 
    
        cy.get('.C.I > .qH > .i-amphtml-carousel-content > .i-amphtml-carousel-scroll')
        .each(function($el, index, $listofElements){
       
          cy.log($el.text())
          cy.log($listofElements.length)
      })

    })

  })