/// <reference types="cypress" />
import CartPage from '../support/pages/CartOrderPage';

describe('Card Testy', () => {
	beforeEach('Open home page', () => {
		cy.visit('');
	});
	it('TC-027 Dodawanie produktu do koszyka ze strony głównej', () => {
		CartPage.addProductToCart('Samsung galaxy s6');
		CartPage.goToCart();
		CartPage.shouldContainProduct('Samsung galaxy s6');
	});
	it('TC-028 Usuwanie produktu z koszyka', () => {
		CartPage.addProductToCart('Samsung galaxy s6');
		CartPage.goToCart();
		CartPage.shouldContainProduct('Samsung galaxy s6');
		CartPage.deleteProductByName('Samsung galaxy s6');
	});
	it('TC-029 Sprawdzenie sumy końcowej koszyka', () => {
		CartPage.addProductToCart('Samsung galaxy s6');
		cy.visit('');
		CartPage.addProductToCart('Nexus 6');
		cy.visit('');
		CartPage.addProductToCart('Samsung galaxy s6');
		CartPage.goToCart();
		cy.wait(1000);
		cy.get('#totalp').invoke('text').then(Number).should('be.gt', 0);
	});
	it.skip('TC-030 Składanie zamówienia-Pusty formularz BUG!', () => {
		CartPage.goToCart();
		cy.contains('button', 'Place Order').should('be.disabled');
	});
	it('TC-031 Składanie pustego formularza', () => {
		cy.contains('a[href="prod.html?idp_=1"]', 'Samsung galaxy s6').click();
		cy.get('h2.name').should('be.visible');
		cy.get('.btn-success').contains('Add to cart').click();
		CartPage.goToCart();
		cy.contains('button', 'Place Order').click();
		cy.get('#orderModal').should('be.visible');
		cy.contains('button', 'Purchase').click();
		cy.on('window:alert', (alertText) => {
			expect(alertText).to.equal('Please fill out Name and Creditcard.');
		});
	});
	it('TC-032 Składanie wypełnionego formularza', () => {
		CartPage.addProductToCart('Samsung galaxy s6');
		CartPage.goToCart();
		CartPage.shouldContainProduct('Samsung galaxy s6');
		cy.contains('button', 'Place Order').click();
		cy.get('#orderModal').should('be.visible');
		CartPage.order(
			'Alex',
			'Polska',
			'Warszawa',
			'43666666666666',
			'Maj',
			'1988',
		);
		cy.get('div.sweet-alert')
			.should('be.visible')
			.and('contain', 'Thank you for your purchase!')
			.and('contain', 'Alex');
		cy.get('.confirm').click();
		cy.get('div.sweet-alert').should('not.be.visible');
	});
});
