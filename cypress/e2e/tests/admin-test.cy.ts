import { Login } from '../../types/login-type'


describe('Check admin page', () => {
    let login: Login

    before(() => {
        cy.fixture('login.json').then((_login) => {
            login = _login
        })
    })

    beforeEach(() => {
        cy.login(login.username, login.password)
        cy
            .get('ul.oxd-main-menu')
            .contains('Admin')
            .click()
    })

    it('Check if user can be added', () => {
        cy
            .contains('[class^=oxd-button]', 'Add')
            .click()
        cy    
            .contains('Add User')
            .should('be.visible')
        
    })

})