class login{




// bu method ilgili url gider.
    navigateUrl(){
        cy.visit('https://www.edu.goit.global/account/login');
    }

    // bu method title alanının kontrolunu sağlar.
    checkTitle(title){
        cy.get('.next-10stgr7 > .next-c1vj7d').
        should('be.visible').
        and('have.text',title);
    }

    // bu method email alanının kontrolunu sağlar.
    checkEmailField(email){
        cy.get('[name="email"]').
        should('be.visible').
        and('exist');
    }

    // bu method password alanının kontrolunu sağlar.
    checkPasswordField(){
        cy.get('[name="password"]').
        should('be.visible').
        and('exist');
    }

    // bu method login butonunun kontrolunu sağlar.
    checkLoginButton(){
        cy.get('.next-1jphuq5').
        should('be.visible').
        and('exist');
    }

    // bu method forget password alanının kontrolunun sağlar.
    checkForgetPassword(text){
        cy.get('.next-1f1fv1i > .next-1qrvie4').
        should('be.visible').
        and('have.text',text);
    }
}

export default new login();
