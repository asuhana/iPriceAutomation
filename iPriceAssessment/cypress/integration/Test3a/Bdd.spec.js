Given ('I navigate to the coupons', () => {
    cy.visit('https://iprice.my/coupons/')
    })
    
    When ('I click on Dell image',() => {
    cy.get('[data-vars-lb="Dell|position: 0"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
        .click()
    })
    
    And ('validate the page title', () => {
        cy.title().should('eq','Dell Coupons (Verified) | 15% OFF | Feb 2022')
    })
    
    
    