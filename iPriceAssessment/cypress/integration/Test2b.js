const { getOriginalNode, WatchDirectoryFlags } = require("typescript")




it('Check all Top Stores redirecting properly: ', () => {


    cy.visit('https://www.iprice.my/coupons')
    
    cy.get('[data-vars-lb="Dell|position: 0"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
    .click()
   cy.title().should('eq','Dell Coupons (Verified) | 15% OFF | Feb 2022')
    cy.go('back')
    cy.wait(5000)


    cy.get('[data-vars-lb="Lazada|position: 1"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
    .click()
   cy.title().should('eq','CNY Sale | Lazada Voucher Codes (Verified) | 50% OFF')
    cy.go('back')
    cy.wait(5000)


    cy.get('[data-vars-lb="Shopee|position: 2"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
    .click()
   cy.title().should('eq','CNY Sale | Shopee Voucher Codes (Verified) | RM30 OFF')
    cy.go('back')
    cy.wait(3000)

    
    cy.get('[data-vars-lb="Lenovo|position: 3"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
    .click()
   cy.title().should('eq','CNY Sale | Lenovo Coupons (Verified) | RM450 OFF')
    cy.go('back')
    cy.wait(3000)


    cy.get('[data-vars-lb="Zalora|position: 4"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
    .click()
   cy.title().should('eq','CNY Sale | Zalora Promo Codes (Verified) | 25% OFF')
   cy.go('back')
cy.wait(5000)


   cy.get('[data-vars-lb="foodpanda|position: 5"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
    .click()
   cy.title().should('eq','CNY Sale | foodpanda Voucher Codes (Verified) | 50% OFF')
   cy.go('back')
   cy.wait(3000)


   cy.get('[data-vars-lb="Lalamove|position: 6"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','Lalamove Promo Codes (Verified) | 99% OFF | Feb 2022')
   cy.go('back')
   cy.wait(3000)


   cy.get('[data-vars-lb="Adidas|position: 7"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','CNY Sale | Adidas Promo Codes (Verified) | 10% OFF')
   cy.go('back')


   cy.wait(3000)
   cy.get('[data-vars-lb="GrabFood |position: 8"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','GrabFood Promo Codes (Verified) | 50% OFF | Feb 2022')
   cy.go('back')



      cy.wait(3000)
   cy.get('[data-vars-lb="Klook|position: 9"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','CNY Sale | Klook Promo Codes (Verified) | 5% OFF')
   cy.go('back')
   cy.wait(3000)
   cy.get('[data-vars-lb="Agoda|position: 10"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','CNY Sale | Agoda Promo Codes (Verified) | 15% OFF')
   cy.go('back')
   cy.wait(3000)
   
   cy.get('[data-vars-lb="Watsons Malaysia|position: 11"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','CNY Sale | Watsons Promo Codes (Verified) | RM20 OFF')
   cy.go('back')
   cy.wait(3000)
   cy.get('[data-vars-lb="AirAsia|position: 12"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','CNY Sale | AirAsia Promo Codes (Verified) | RM200 OFF')
   cy.go('back') 
   cy.wait(3000)
   cy.get('[data-vars-lb="Grab|position: 13"] > :nth-child(1) > .iT > .i-amphtml-element > .i-amphtml-fill-content')
   .click()
  cy.title().should('eq','CNY Sale | Grab Promo Codes (Verified) | RM5 OFF')
   cy.go('back') 
   
})