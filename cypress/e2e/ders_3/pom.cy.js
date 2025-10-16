import login from "../../page/login";
import login2 from "../../page/login2";
import data from "../../fixtures/login.json";

describe('Page Object Model-POM', () => {
    
    it("TC-02 page object pattern(login.js)", () => {

        login.navigateUrl();
        login.checkTitle(data.loginTitle);
        login.checkEmailField();
        login.checkPasswordField();
        login.checkLoginButton();
        login.checkForgetPassword(data.forgetPasswordText);

    })

    it("TC-03 page object pattern (login2.js)", () => {

        login2.navigateUrl();
        login2.checkTitle(data.loginTitle);
        login2.checkEmailField();
        login2.checkPasswordField();
        login2.checkLoginButton();
        login2.checkForgetPassword(data.forgetPasswordText);

    })

    it("TC-04 page object pattern (login2.js)",() => {
        login2.login(data.username, data.password);
    })
    





   
    





})