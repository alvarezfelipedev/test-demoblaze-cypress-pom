import { CommongPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {
    static navigateToTheAplication() {
        cy.visit(CommongPageConstants.applicationURL);
    }
    static clickOnSignUpOption() {
        CommonPageElements.signUp.click();
    }

    static clickOnLoginOption() {
        CommonPageElements.login.click()
    }

    /* static verifySignedUser(username) {
        CommonPageElements.nameOfUser.should('contain', `Welcome ${username}`)
    } */

    static generateRandomString = (length = 10) => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    };

    static clickOnHomePage() {
        CommonPageElements.home.click();
    }
}