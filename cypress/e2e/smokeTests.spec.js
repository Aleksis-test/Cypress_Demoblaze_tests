/// <reference types="cypress" />
import LoginContactSingUpPage from '../support/pages/LoginContactSingUpPage';

describe('Smoke Testy', () => {
	beforeEach('Open home page', () => {
		cy.visit('');
	});
	it('TC-001 Sprawdzenie, dostępnośći strony głównej ', () => {
		cy.get('#nava').should('be.visible').and('contain', 'PRODUCT STORE');
		cy.get('img[src="blazemeter-favicon-512x512.png"]').should('be.visible');
	});
	it('TC-002 Błędny URL', () => {
		cy.visit('/nieistnieje', { failOnStatusCode: false });
		cy.get('body').should('contain', 'Not Found');
	});
	it('TC-003 Nawigacja w menu', () => {
		// Home
		cy.contains('a.nav-link', 'Home ').click();
		cy.url().should('include', '/index.html');
		//Contact
		LoginContactSingUpPage.openContactModal();
		cy.wait(500);
		LoginContactSingUpPage.closeModal('exampleModal').verifyModalClosed(
			'exampleModal',
		);
		//About us
		cy.contains('a.nav-link', 'About us').click();
		cy.get('#videoModal').should('be.visible');
		cy.wait(500);
		cy.get('#videoModal .close[data-dismiss="modal"]').click();
		cy.get('#videoModal').should('not.be.visible');
		//Card
		cy.contains('a.nav-link', 'Cart').click();
		cy.url().should('include', '/cart.html');
		//Log in
		cy.visit('');
		LoginContactSingUpPage.openLoginModal();
		cy.wait(500);
		LoginContactSingUpPage.closeModal('logInModal').verifyModalClosed(
			'logInModal',
		);
		//Sing up
		LoginContactSingUpPage.openSingupModal();
		cy.wait(500);
		LoginContactSingUpPage.closeModal('signInModal').verifyModalClosed(
			'signInModal',
		);
	});
	it('TC-004 Wysyłanie wiadomości kontaktowej (brak walidacji)', () => {
		cy.on('window:alert', (alertText) => {
			expect(alertText).to.equal('Thanks for the message!!');
			// expect(alertText).to.contain('error')
		});
		LoginContactSingUpPage.openContactModal()
			.contact(`ale@@@wp.pl`, 'Aleksandra', 'przykładowa wiadomość')
			.verifyModalClosed('exampleModal');
	});

	it('TC-005 Logowanie z błędnymi danymi', () => {
		cy.on('window:alert', (alertText) => {
			expect(alertText).to.equal('Wrong password.');
			// expect(alertText).to.contain('success')
		});
		LoginContactSingUpPage.openLoginModal()
			.login('Alexis', 'Java')
			.closeModal('logInModal')
			.verifyModalClosed('logInModal');
	});
	it('TC-006 Rejestracja użytkownika', () => {
		cy.on('window:alert', (alertText) => {
			expect(alertText).to.be.oneOf([
				'This user already exist.',
				'Sign up successful.',
			]);
		});
		LoginContactSingUpPage.openSingupModal()
			.signup('Alexis', '1234')
			.closeModal('signInModal')
			.verifyModalClosed('signInModal');
	});
	it('TC-007 Aktywność karuzeli na stronie głównej', () => {
		cy.get('.carousel').should('be.visible');
		cy.get('.carousel-inner .active')
			.should('be.visible')
			.and('have.class', 'active');
		cy.get('.carousel-inner .active img')
			.should('be.visible')
			.and('have.attr', 'src')
			.and('not.be.empty');
	});
	it('TC-008 Zamiana slajdu po kliknięciu w karuzeli', () => {
		let firstSlideSrc;
		cy.get('.carousel-inner .active img')
			.invoke('attr', 'src')
			.then((src) => {
				firstSlideSrc = src;
			});
		cy.get('.carousel-control-next').click();
		cy.wait(1000);
		cy.get('.carousel-inner .active img')
			.invoke('attr', 'src')
			.should('not.equal', firstSlideSrc);
	});
	it('TC-009 Sortowanie po kategori Phones', () => {
		cy.contains('.list-group-item', 'Phones').click();
		cy.wait(1000);
		cy.contains('.card-title', 'Samsung').should('be.visible');
		cy.contains('.card-title', 'Nokia').should('be.visible');
	});
	it('TC-010 Sortowanie po kategori Laptops', () => {
		cy.contains('.list-group-item', 'Laptops').click();
		cy.wait(1000);
		cy.contains('.card-title', 'Sony vaio i5').should('be.visible');
		cy.contains('.card-title', 'Dell i7 8gb').should('be.visible');
	});
	it('TC-011 Sortowanie po kategori Monitors', () => {
		cy.contains('.list-group-item', 'Monitors').click();
		cy.wait(1000);
		cy.contains('.card-title', 'Apple monitor 24').should('be.visible');
		cy.contains('.card-title', 'ASUS Full HD').should('be.visible');
	});
	it('TC-012 Poprawność danych w footer', () => {
		cy.get('#footc').should('be.visible');
		cy.get('#footc')
			.contains(/about us/i)
			.should('exist');
		cy.get('#footc')
			.contains(/get in touch/i)
			.should('exist');
		cy.get('#footc')
			.contains(/address/i)
			.should('exist');
		cy.get('#footc')
			.contains(/\d{3}-\d{3}-\d{3}|Phone/i)
			.should('exist');
		cy.get('#footc')
			.contains(/@.*\.com|Email/i)
			.should('exist');
	});
});
