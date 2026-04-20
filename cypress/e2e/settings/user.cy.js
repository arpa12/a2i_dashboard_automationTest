import { loginPage } from "../../pages/login";
import { userAddPage, userEditPage } from "../../pages/settings/user";

describe("Cypress Automation Testing for User", () => {
  it("check user add functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    userAddPage();
  });

  it("check user edit functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    userEditPage();
  });

});