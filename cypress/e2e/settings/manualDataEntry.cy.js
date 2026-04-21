import { loginPage } from "../../pages/login";
import { manualDataEntryAddPage, manualDataEntryEditPage } from "../../pages/settings/manualDataEntry";

describe("Cypress Automation Testing for Manual Data Entry", () => {
  
  it("check manual data entry functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    manualDataEntryAddPage();
  });

  it("check manual data entry edit functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    manualDataEntryEditPage();
  });

});