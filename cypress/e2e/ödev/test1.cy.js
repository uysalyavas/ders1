describe('log in ve log out olma', function(){

    it('test1 log in ve log out olma', function(){

        cy.visit('https://www.edu.goit.global/account/login');
        cy.login("user888@gmail.com","1234567890");
        cy.get('#open-navigation-menu-mobile').should('be.visible');
        cy.wait(2000);
        cy.get('#open-navigation-menu-mobile').click();
        cy.wait(2000);
        cy.contains('Log out').click();
        cy.wait(2000);
        cy.url().should('include','');
    })
    
    it('test2 log in ve log out olma', function(){

        cy.visit('https://www.edu.goit.global/account/login');
        cy.login("testowyqa@qa.team","QA!automation-1")
        cy.get('#open-navigation-menu-mobile').should('be.visible');
        cy.wait(2000);
        cy.get('#open-navigation-menu-mobile').click();
        cy.wait(2000);
        cy.contains('Log out').click();
        cy.wait(2000);
        cy.url().should('include','');


        
    })
})

 