

class homepage {

menuButton = '#open-navigation-menu-mobile';
logoutButton = 'Log out';

    openMenu(){
        cy.get(this.menuButton).
        should('be.visible').
        click();
    }
    

    clickLogout(){
        cy.contains(this.logoutButton).
        should('be.visible').
        click();
    }

    checkLoginPage(){
        cy.url().
        should('include',"/account/login")
    }

    
}

export default new homepage();
