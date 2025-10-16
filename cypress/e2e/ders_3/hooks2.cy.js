import login2 from "../../page/login2";

describe('Hooks', () =>{
    let userData;

    before(() =>{
        cy.log(":::::::: before metod çalişti")
        cy.fixture("user").then((data) =>{
            userData=data;
        })


    });
    
    after(() =>{
        cy.log("::::::::: after metod çalişti")


    });

    beforeEach(() =>{
        cy.log(":::::::: beforeEach metod çalişti")
        login2.login(userData.username,userData.password);


    });

    afterEach(() =>{
        cy.log(":::::::: afterEach metod çalişti")


    });

    it('tc01',() =>{
        cy.log(":::::::: tc01 çalişti")


    });

    it('tc02',() =>{
        cy.log(":::::::: tc02 çalişti")


    });


})
