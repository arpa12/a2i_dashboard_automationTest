import { loginPage } from "../pages/login";
import { monitoringPage } from "../pages/resultMonitoring";
import { resultFrameworkPage } from "../pages/resultFramework";

describe("checking monitoring and result framework module functionality", () => {
  it.skip("check monitoring module functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    monitoringPage();
  });

  it("check result framework module functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    resultFrameworkPage();
  });
});
