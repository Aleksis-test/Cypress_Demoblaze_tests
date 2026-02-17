/// <reference types="cypress" />
import LoginContactSingUpPage from '../support/pages/LoginContactSingUpPage';

describe('Kompletny test responsywności', () => {
	describe(' Urządzenia mobilne (375x667)', () => {
		beforeEach(() => {
			cy.viewport(375, 667);
			cy.visit('/');
		});

		it('TC-013 Strona główna - podstawowe elementy - mobile', () => {
			cy.get('#nava').should('be.visible');
			cy.get('.list-group').should('be.visible');
			cy.get('.card').should('have.length.gt', 0);
			cy.get('#footc').scrollIntoView().should('be.visible');
			cy.screenshot('mobile-home');
		});

		it('TC-014 Strona koszyka - mobile', () => {
			cy.contains('Cart').click();
			cy.url().should('include', 'cart');
			cy.screenshot('mobile-cart');
		});

		it('TC-015 Kategorie produktów - klikalność - mobile', () => {
			cy.contains('.list-group-item', 'Phones').click();
			cy.wait(1000);
			cy.get('.card').should('have.length.gt', 0);
			cy.screenshot('mobile-category');
		});
		it('TC-016 Widoczność modalu Contact na mobile', () => {
			LoginContactSingUpPage.openContactModal();
			cy.wait(500);
			cy.screenshot('mobile-menu-open-contact');
			cy.get('#exampleModal').within(() => {
				cy.get('.modal-title').should('contain', 'New message');
				cy.get('#recipient-email').should('be.visible');
				cy.get('#recipient-name').should('be.visible');
				cy.get('#message-text').should('be.visible');
				cy.contains('button', 'Send message').should('be.visible');
				cy.contains('button', 'Close').should('be.visible');
			});
			LoginContactSingUpPage.closeModal('exampleModal').verifyModalClosed(
				'exampleModal',
			);
		});
		it('TC-017 Widoczność modalu About us na mobile', () => {
			cy.contains('a.nav-link', 'About us').click();
			cy.get('#videoModal').should('be.visible');
			cy.wait(500);
			cy.screenshot('mobile-menu-open-aboutUs');
			cy.get('#videoModal .close[data-dismiss="modal"]').click();
			cy.get('#videoModal').should('not.be.visible');
		});
		it('TC-018 Widoczność modalu Sing up na mobile', () => {
			LoginContactSingUpPage.openSingupModal();
			cy.wait(500);
			cy.get('#signInModal').within(() => {
				cy.get('#sign-username').should('be.visible');
				cy.get('#sign-password').should('be.visible');
				cy.contains('button', 'Sign up').should('be.visible');
				cy.contains('button', 'Close').should('be.visible');
			});

			cy.screenshot('mobile-menu-open-singUp');
			LoginContactSingUpPage.closeModal('signInModal').verifyModalClosed(
				'signInModal',
			);
		});
		it('TC-019 Widoczność modalu Login na mobile', () => {
			LoginContactSingUpPage.openLoginModal();
			cy.wait(500);
			cy.get('#logInModal').within(() => {
				cy.get('#loginusername').should('be.visible');
				cy.get('#loginpassword').should('be.visible');
				cy.contains('button', 'Log in').should('be.visible');
				cy.contains('button', 'Close').should('be.visible');
			});

			cy.screenshot('mobile-menu-open-singUp');
			LoginContactSingUpPage.closeModal('logInModal').verifyModalClosed(
				'logInModal',
			);
		});
	});
	describe(' Urządzenia Tablet (768x1024)', () => {
		beforeEach(() => {
			cy.viewport(768, 1024);
			cy.visit('/');
		});

		it('TC-020 Strona główna - podstawowe elementy - tablet', () => {
			cy.get('#nava').should('be.visible');
			cy.get('.list-group').should('be.visible');
			cy.get('.card').should('have.length.gt', 0);
			cy.get('#footc').scrollIntoView().should('be.visible');
			cy.screenshot('tablet-home');
		});

		it('TC-021 Strona koszyka - tablet', () => {
			cy.contains('Cart').click();
			cy.url().should('include', 'cart');
			cy.screenshot('tablet-cart');
		});

		it('TC-022 Kategorie produktów - klikalność - tablet', () => {
			cy.contains('.list-group-item', 'Phones').click();
			cy.wait(1000);
			cy.get('.card').should('have.length.gt', 0);
			cy.screenshot('tablet-category');
		});
		it('TC-023 Widoczność modalu Contact na tablecie', () => {
			LoginContactSingUpPage.openContactModal();
			cy.wait(500);
			cy.screenshot('tablet-menu-open-contact');
			cy.get('#exampleModal').within(() => {
				cy.get('.modal-title').should('contain', 'New message');
				cy.get('#recipient-email').should('be.visible');
				cy.get('#recipient-name').should('be.visible');
				cy.get('#message-text').should('be.visible');
				cy.contains('button', 'Send message').should('be.visible');
				cy.contains('button', 'Close').should('be.visible');
			});
			LoginContactSingUpPage.closeModal('exampleModal').verifyModalClosed(
				'exampleModal',
			);
		});
		it('TC-024 Widoczność modalu About us na tablecie', () => {
			cy.contains('a.nav-link', 'About us').click();
			cy.get('#videoModal').should('be.visible');
			cy.wait(500);
			cy.screenshot('tablet-menu-open-aboutUs');
			cy.get('#videoModal .close[data-dismiss="modal"]').click();
			cy.get('#videoModal').should('not.be.visible');
		});
		it('TC-025 Widoczność modalu Sing up na tablecie', () => {
			LoginContactSingUpPage.openSingupModal();
			cy.wait(500);
			cy.get('#signInModal').within(() => {
				cy.get('#sign-username').should('be.visible');
				cy.get('#sign-password').should('be.visible');
				cy.contains('button', 'Sign up').should('be.visible');
				cy.contains('button', 'Close').should('be.visible');
			});

			cy.screenshot('tablet-menu-open-singUp');
			LoginContactSingUpPage.closeModal('signInModal').verifyModalClosed(
				'signInModal',
			);
		});
		it('TC-026 Widoczność modalu Login na tablecie', () => {
			LoginContactSingUpPage.openLoginModal();
			cy.wait(500);
			cy.get('#logInModal').within(() => {
				cy.get('#loginusername').should('be.visible');
				cy.get('#loginpassword').should('be.visible');
				cy.contains('button', 'Log in').should('be.visible');
				cy.contains('button', 'Close').should('be.visible');
			});

			cy.screenshot('tablet-menu-open-singUp');
			LoginContactSingUpPage.closeModal('logInModal').verifyModalClosed(
				'logInModal',
			);
		});
	});
});
