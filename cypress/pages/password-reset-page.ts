export default class PasswordResetPage {

    txtUsername() {
        return cy.get('input[name="username"]')
    }

    btnResetPassword() {
        return cy.get('button[type="submit"]')
    }

    btnCancel() {
        return cy.contains('Cancel')
    }

}