import { loginPage } from "../../pages/login";
import { indicatorAddEditPage } from "../../pages/settings/indicator";

describe("Cypress Automation Testing for Indicator", () => {
  it("check initiative add and edit functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    indicatorAddEditPage();
  });

});