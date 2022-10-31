import LoginPage from '../pages/login-page'
const loginPage = new LoginPage()

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.txtUsername().type(username)
    loginPage.txtPassword().type(password)
    loginPage.btnLogin().click()
})
