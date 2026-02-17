class CardOrderPage{

 	elements = {
		inputName: () => cy.get('#name'),
		inputCountry: () => cy.get('#country'),
		inputCity: () => cy.get('#city'),
		inputCreditCard: () => cy.get('#card'),
		inputMonth: () => cy.get('#month'),
		inputYear: () => cy.get('#year'),
		purchaseButton: () => cy.contains('button', 'Purchase')
	};
    addProductToCart(productName) {
     cy.contains('a[href^="prod.html"]', productName).click()
    cy.get('h2.name').should('be.visible');
    cy.get('.btn-success').contains('Add to cart').click();
     cy.on('window:alert', (alertText) => {
			expect(alertText).to.equal('Product added');
		})
}
goToCart(){
    cy.contains('a.nav-link', 'Cart').click();
		cy.url().should('include', '/cart.html');
}
 shouldContainProduct(productName) {
    cy.contains('tbody tr td', productName).should('be.visible');
    return this;
  }
   deleteProductByName(productName) {
    
    cy.contains('tbody tr td', productName)
      .parents('tr')
      .within(() => {
        
        cy.contains('a', 'Delete').click();
        cy.contains('tbody tr td', productName).should('not.exist');
      })
      

}
 verifyTotalPriceIs(expectedPrice) {
    cy.get('#totalp').should('have.text', expectedPrice.toString());
    return this;
  }

 order(name,country,city,creditCard,month,year){
this.elements.inputName().clear().type(name)
this.elements.inputCountry().clear().type(country)
this.elements.inputCity().clear().type(city)
this.elements.inputCreditCard().clear().type(creditCard)
this.elements.inputMonth().clear().type(month)
this.elements.inputYear().clear().type(year)
this.elements.purchaseButton().click()
  }
}

export default new CardOrderPage;