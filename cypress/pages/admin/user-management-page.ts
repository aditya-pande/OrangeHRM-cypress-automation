export default class UserManagementPage {

    mnuUserManagement() {
        return cy.contains('nav li', 'User Management')
    }

    mnuItmUsers() {
        return cy.contains('li > a[role="menuitem"]', 'Users')
    }

    btnAdd() {
        return cy.contains('button.oxd-button', 'Add')
    }

    btnSave() {
        return cy.contains('button[type="submit"]', 'Save')
    }

    frmInput(inputName: string) {
        return cy
            .contains('div.oxd-input-group', inputName)
            .find('> div:last-of-type')
    }

    ddItem(item: string) {
        return cy.contains('div[role="listbox"]', item)
    }
}