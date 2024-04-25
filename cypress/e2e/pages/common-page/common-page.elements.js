export class CommonPageElements {
    static get signUp() {
        return cy.get('a[data-target="#signInModal"]');
    }

    static get login() {
        return cy.get('a[data-target="#logInModal"]')
    }

    /* static get nameOfUser() {
        return cy.get('#nameofuser')        
    } */

    static get home() {
        return cy.contains('a', 'Home');
    }
}
