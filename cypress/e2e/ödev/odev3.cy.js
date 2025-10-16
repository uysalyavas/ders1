import login3 from '../../page/login3';
import homePage from '../../page/homepage';
import data from '../../fixtures/odev3.json';

describe('Login ve Logout olma', () => {

    beforeEach(() =>{
        login3.navigateUrl();
    })

  it('sayfa elementlerinin görünürlüğünü doğrula', () => {
    login3.checkTitle(data.loginPage.title);
    login3.checkEmailField();
    login3.checkPasswordField();
    login3.checkLoginButton();
    login3.checkForgetPassword(data.loginPage.forgetPasswordText);

  it('user1 ile login ve logout yapilabilmeli')
    login3.login(data.users.user1.email, data.users.user1.password);

    homePage.openMenu();
    homePage.clickLogout();
    homePage.checkLoginPage();
  });

  it('user2 ile login ve logout yapilabilmeli', () => {
    login3.login(data.users.user2.email, data.users.user2.password);

    homePage.openMenu();
    homePage.clickLogout();
    homePage.checkLoginPage();
  });

});


