import { loginPage } from "../../pages/login";
import { projectWiseMonitoringAddPage, projectWiseMonitoringEditPage } from "../../pages/settings/projectWiseMonitoring";

describe("Cypress Automation Testing for Project Wise Monitoring", () => {
  it("check project wise monitoring add functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    projectWiseMonitoringAddPage();
  });

  it("check project wise monitoring edit functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    projectWiseMonitoringEditPage();
  });

});