import { loginPage } from "../pages/login";
import { monitoringPage } from "../pages/resultMonitoring";
import { resultFrameworkPage } from "../pages/resultFramework";

describe("template spec", () => {
  it.skip("check dashboard functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    monitoringPage();
  });

  it("check dashboard functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    resultFrameworkPage();
  });
});
