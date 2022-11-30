import UserManagementPage from '../../pages/admin/user-management-page'
import { Login } from '../../types/login-type'
import { Employee } from '../../types/employee-type'


describe('Check admin page', () => {
    let login: Login
    let emp: Employee
    let usrMgmtPg = new UserManagementPage()

    before(() => {
        cy.fixture('login.json').then((_login) => {
            login = _login
        })

        cy.fixture('employee.json').then((employee) => {
            emp = employee
        })

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    beforeEach(() => {
        cy.login(login.username, login.password)
        cy
            .contains('ul.oxd-main-menu span', 'Admin')
            .click()
    })

    it('Check if user can be added', () => {

        usrMgmtPg.mnuUserManagement().click()
        usrMgmtPg.mnuItmUsers().click()
        usrMgmtPg.btnAdd().click()

        cy
            .contains('Add User')
            .should('be.visible')

        usrMgmtPg.frmInput('User Role').click()
        usrMgmtPg.ddItem('Admin').click()
        usrMgmtPg.frmInput('Employee Name').type(emp.name)
        usrMgmtPg.ddItem(emp.name).click()
        usrMgmtPg.frmInput('Status').click()
        usrMgmtPg.ddItem('Enabled').click()
        usrMgmtPg.frmInput('Username').type(emp.username)

        cy
            .get('.oxd-input-field-error-message')
            .should('not.exist')
        
        usrMgmtPg.frmInput('Password').type(emp.password)
        usrMgmtPg.frmInput('Confirm Password').type(emp.password)
        usrMgmtPg.btnSave().click()
        
        cy
            .contains('.oxd-toast', 'Successfully Saved')
            .should('be.visible')
    })

})