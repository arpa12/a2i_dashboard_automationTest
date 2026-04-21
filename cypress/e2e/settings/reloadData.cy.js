import { loginPage } from "../../pages/login";
import { reloadDataCheckingConfirmation, reloadDataCheckingCancellation  } from "../../pages/settings/reloadData";

describe("Cypress Automation Testing for Reload Data", () => {
  
  it("check reload data functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    reloadDataCheckingConfirmation();
  });

  it("check reload data functionality cancellation", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    reloadDataCheckingCancellation();
  });

});