import { CommonPageHelper } from "../common-page/common-page.helper";
import { SignUpElements } from "./sign-up.elements";

export class SignUpHelper {
    static insertUsername(username) {
        SignUpElements.elements.username.invoke('val', username);
    };

    static insertPassword(password) {
        SignUpElements.elements.password.click();
        SignUpElements.elements.password.invoke('val', password);
    };

    static clickOnSignUpButton() {
        SignUpElements.elements.signUpButton.click();
    };

    static createUserAccount(username, password) {
        CommonPageHelper.clickOnSignUpOption();
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignUpButton();
    }
}