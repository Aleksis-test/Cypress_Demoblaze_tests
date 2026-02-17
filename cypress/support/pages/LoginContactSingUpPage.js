class LoginContactSingUpPage {
	elements = {
		loginLink: () => cy.contains('a.nav-link', 'Log in'),
		signupLink: () => cy.contains('a.nav-link', 'Sign up'),
		contactLink: () => cy.contains('a.nav-link', 'Contact'),
		contactModal: () => cy.get('#exampleModal'),
		loginModal: () => cy.get('#logInModal'),
		signupModal: () => cy.get('#signInModal'),
		contactEmail: () => cy.get('#recipient-email'),
		contactName: () => cy.get('#recipient-name'),
		contactMassage: () => cy.get('#message-text'),
		usernameInput: () => cy.get('#loginusername'),
		passwordInput: () => cy.get('#loginpassword'),
		signupUsername: () => cy.get('#sign-username'),
		signupPassword: () => cy.get('#sign-password'),
		contactButton: () => cy.contains('button', 'Send message'),
		loginButton: () => cy.contains('button', 'Log in').filter(':visible'),
		signupButton: () => cy.contains('button', 'Sign up').filter(':visible'),
		closeButton: (modalId) =>
			cy.get(`#${modalId} .close[data-dismiss="modal"]`),
	};
	openLoginModal() {
		this.elements.loginLink().click();
		this.elements.loginModal().should('be.visible');
		return this;
	}
	openSingupModal() {
		this.elements.signupLink().click();
		this.elements.signupModal().should('be.visible');
		return this;
	}
	openContactModal() {
		this.elements.contactLink().click();
		this.elements.contactModal().should('be.visible');
		return this;
	}
	closeModal(modalId) {
		this.elements.closeButton(modalId).click();
		cy.get(`#${modalId}`).should('not.be.visible');
		return this;
	}
	login(username, password) {
		this.elements.usernameInput().clear().type(username);
		this.elements.passwordInput().clear().type(password);
		this.elements.loginButton().click();
		return this;
	}
	signup(username, password) {
		this.elements.signupUsername().clear().type(username);
		this.elements.signupPassword().clear().type(password);
		this.elements.signupButton().click();
		return this;
	}
	contact(email, name, message) {
		this.elements.contactEmail().clear().type(email);
		this.elements.contactName().clear().type(name);
		this.elements.contactMassage().clear().type(message);
		this.elements.contactButton().click();
		return this;
	}

	verifyModalClosed(modalId) {
		cy.get(`#${modalId}`).should('not.be.visible');
		return this;
	}
	
}
export default new LoginContactSingUpPage();
