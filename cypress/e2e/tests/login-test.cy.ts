import PasswordResetPage from '../../pages/password-reset-page'
import {Login} from '../../types/login-type'
import {Reset} from '../../types/password-reset-type'

describe('Check Login Page', () => {

    const passwordResetPage = new PasswordResetPage()
    let login: Login
    let reset: Reset

    before(function () {
        cy.fixture('login').then(function (_login) {
            login = _login
        })

        cy.fixture('password-reset').then(function (_reset) {
            reset = _reset
        })
    })
                                                                                                                                                                                                                               
    it('Check login with valid username & password', function () {
        cy.login(login.username, login.password)
        cy.get('.oxd-userdropdown-tab').should('be.visible')
    })

    it('Check login with incorrect password', function () {
        cy.login(login.username, login.incorrectPassword)
        cy.contains('Invalid credentials').should('be.visible')
    })

    it('Check login with incorrect username', function () {
        cy.login(login.incorrectUsername, login.password)
        cy.contains('Invalid credentials').should('be.visible')
    })

    it('Check forgot password link', function () {
        cy.visit(login.URL)
        cy.contains('Forgot your password?').click()
        passwordResetPage.txtUsername().type(reset.username)
        passwordResetPage.btnResetPassword().click()
        cy
            .contains('Reset Password link sent successfully')
            .should('be.visible')
    })
    
    it('Check if user returns back to login page after clicking cancel on passwrd reset page', function () {
        cy.visit(login.URL)
        cy.contains('Forgot your password?').click()
        passwordResetPage.btnCancel().click()
        cy.contains('Login').should('be.visible')
    })

})