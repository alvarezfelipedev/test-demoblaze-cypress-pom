import { CommonPageHelper } from "../pages/common-page/common-page.helper"
import { HomeConstants } from "../pages/home/home.constants";
import { HomeHelper } from "../pages/home/home.helper";
import { LoginHelper } from "../pages/login/login.helper";
import { SignUpHelper } from "../pages/sign-up/sign-up.helper";

describe("Place order", function () {
    it("Place order with newly created user account", function () {
        const username = CommonPageHelper.generateRandomString();
        const password = CommonPageHelper.generateRandomString();
        const productName = HomeConstants.testData.productName;

        CommonPageHelper.navigateToTheAplication();
        CommonPageHelper.clickOnSignUpOption();
        SignUpHelper.insertUsername(username);
        SignUpHelper.insertPassword(password);
        SignUpHelper.clickOnSignUpButton();


        CommonPageHelper.clickOnLoginOption();
        LoginHelper.insertUsername(username);
        LoginHelper.insertPassword(password);
        LoginHelper.clickOnLoginButton();
        // CommonPageHelper.verifySignedUser(username);

        CommonPageHelper.clickOnHomePage();
        HomeHelper.clickOnProductName(productName)

        cy.wait(5000);
    });
})