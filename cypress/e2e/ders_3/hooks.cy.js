import login2 from "../../page/login2";

describe('Hooks', () =>{

    before(() =>{
        cy.log(":::::::: before metod çalıştı")


    });
    
    after(() =>{
        cy.log("::::::::: after metod çalıştı")


    });

    beforeEach(() =>{
        cy.log(":::::::: beforeEach metod çalıştı")


    });

    afterEach(() =>{
        cy.log(":::::::: afterEach metod çalişti")


    });

    it('tc01',() =>{
        cy.log(":::::::: tc01 çalişti")


    });

    it('tc02',() =>{
        cy.log(":::::::: tc02 çalıştı")


    });


})
