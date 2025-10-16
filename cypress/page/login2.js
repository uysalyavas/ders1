
class login2 {

url='https://www.edu.goit.global/account/login';
title='.next-10stgr7 > .next-c1vj7d';
email='[name="email"]';
password='[name="password"]';
loginButton='.next-1jphuq5';
forgetPassword='.next-1f1fv1i > .next-1qrvie4';


// bu method ilgili url gider.
    navigateUrl(){
        cy.visit(this.url);
    }

    // bu method title alanının kontrolunu sağlar.
    checkTitle(title){
        cy.get(this.title).
        should('be.visible').
        and('have.text',title);
    }

    // bu method email alanının kontrolunu sağlar.
    checkEmailField(email){
        cy.get(this.email).
        should('be.visible').
        and('exist');
    }

    // bu method password alanının kontrolunu sağlar.
    checkPasswordField(){
        cy.get(this.password).
        should('be.visible').
        and('exist');
    }

    // bu method login butonunun kontrolunu sağlar.
    checkLoginButton(){
        cy.get(this.loginButton).
        should('be.visible').
        and('exist');
    }

    // bu method forget password alanının kontrolunun sağlar.
    checkForgetPassword(text){
        cy.get(this.forgetPassword).
        should('be.visible').
        and('have.text',text);
    }

    enterEmail(email){

        cy.get(this.email).type(email);
    }

    enterPassword(password){

        cy.get(this.password).type(password);
    }

    clickLoginButton(){

        cy.get(this.loginButton).click();
    }

    login(email, password){
        this.navigateUrl();
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();

    }
}

export default new login2();
