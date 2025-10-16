// @ts-nocheck
/// <reference types="cypress" />


describe('ilk dersimiz', function(){

it('TC01 ilk test senaryomuz', function(){


    // 1. cy cypress test kütüphanesinin temel komutudur.
    // 2. visit() --> url gider
    cy.visit('https://www.edu.goit.global/account/login');

    // 3. get() --> locate
    // 4. type() --> metin göndermek için kullanılır.
    cy.get('#user_email'). type("deneme");

    // 5. clear() --> metin silmeye yarar.
    // 6. as() --> allias olarak bir elemente isim verebiliriz.
    // cy.get('#user_email').as('email');
    // cy.get('@email').clear();

    // locate- selectors
    /* 
    1. id #
    2. class .
    3. atr=value -- [name='email']
    */
   cy.get('[name="password"]').type('1234567890');

   // 7. click() --> sol click yapar.
   cy.get('.eckniwg2');

   // 8. contains('') --> locate almak için kullanılır. text içermesine göre locate alınır.
   // contains('email')

   // 9. url() --> sayfanın url bize verecektir.
   cy.url().should('include','www.edu.goit');

   // 10. title() --> sayfanın başlığını alır.
   cy.title().should('include','Log in');

   // 11. wait(2000) --> milisaniye kadar bekler.
   cy.wait(20000);

   // 12. dbclick() --> çift click yapar
   cy.get('.next-1jphuq5').dblclick();
   cy.wait(20000);

   // 13. rightclick() --> sağ click yapar.
   cy.get('.next-1jphuq5').rightclick();

   // 14. should() --> and()
   // should('have.text','expected')
   // be.visible -- görünür olup olmadığını kontrol eder.
   // should('not.exist');
   // should('have.value', 'myUsername');
   // should('have.class', 'active');
   // should('be.checked');
   // should('not.be.checked');
   cy.get('.next-1jphuq5').
   should('have.text','Log in').
   and('be.visible').
   and('exist');

   // 15. check()
   //cy.get().check().should(be.checked);

   // 16. hover() --> bir elementin üstüne fareyi götürür.
   // cy.get().hover();










});

it('TC02 login butonunun doğrulanmasi', function(){
    cy.visit('https://www.edu.goit.global/account/login');
    cy.wait(10000);
    cy.get('.eckniwg2').
    should('have.text','Log in').
    and('have.css','background-color','rgb(255, 107, 10)');
    cy.get('[name="email"]').type("uysal.yavas@hotmail.com");
    cy.get('[name="password"]').type("7942424uR");
    cy.get('.next-1jphuq5').click();
    cy.wait(50000);
    cy.get('.next-18b9nhq > img').screenshot();
    // cy.get('#go-to-the-course-homepage-widget > .next-1jphuq5').scrollIntoView();
    cy.screenshot();




})



});