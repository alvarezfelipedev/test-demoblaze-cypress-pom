import { CartHelper } from "../pages/cart/cart.helper";
import { CommonPageHelper } from "../pages/common-page/common-page.helper"
import { HomeConstants } from "../pages/home/home.constants";
import { HomeHelper } from "../pages/home/home.helper";
import { LoginHelper } from "../pages/login/login.helper";
import { PlaceOrderConstants } from "../pages/place-order/place-order.constants";
import { PlaceOrderHelper } from "../pages/place-order/place-order.helper";
import { SignUpHelper } from "../pages/sign-up/sign-up.helper";

describe("Place order", function () {
    it("Place order with newly created user account", function () {
        const username = CommonPageHelper.generateRandomString();
        const password = CommonPageHelper.generateRandomString();
        const productName = HomeConstants.testData.productName;
        const orderTestData = PlaceOrderConstants.testData;

        CommonPageHelper.navigateToTheAplication();
        SignUpHelper.createUserAccount(username, password)
        LoginHelper.login(username, password);
        CommonPageHelper.clickOnHomePage();
        HomeHelper.clickOnProductName(productName)
        CommonPageHelper.clickOnCartOption();
        CartHelper.clickOnPlaceOrderButton();

        PlaceOrderHelper.insertName(orderTestData.name);
        PlaceOrderHelper.insertCountry(orderTestData.country);
        PlaceOrderHelper.insertCity(orderTestData.city);
        PlaceOrderHelper.insertCreditCard(orderTestData.creditCard);
        PlaceOrderHelper.insertMonth(orderTestData.month);
        PlaceOrderHelper.insertYear(orderTestData.year);
        PlaceOrderHelper.clickOnPurchaseButton()
        PlaceOrderHelper.verifyPurchaseSuccessful();
    });
})