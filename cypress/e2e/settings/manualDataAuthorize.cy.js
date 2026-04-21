import { loginPage } from "../../pages/login";
import { manualApprovedData, manualApprovedDataCancellation, manualNotApprovedData, manualNotApprovedDataCancellation } from "../../pages/settings/manualDataAuthorize";

describe("Cypress Automation Testing for Manual Data Authorization", () => {
  
  it("check manual data approval functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    manualApprovedData();
  });

  it("check manual data approval cancellation functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    manualApprovedDataCancellation();
  });

  it("check manual data rejection functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    manualNotApprovedData();
  });

  it("check manual data rejection cancellation functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    manualNotApprovedDataCancellation();
  });

});