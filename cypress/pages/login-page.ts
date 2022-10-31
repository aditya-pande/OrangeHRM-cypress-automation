export default class Loginpage {

    txtUsername() {
        return cy.get('input[name="username"]')
    }

    txtPassword() {
        return cy.get('input[name="password"]')
    }

    btnLogin() {
        return cy.get('.orangehrm-login-button')
    }
    
}













