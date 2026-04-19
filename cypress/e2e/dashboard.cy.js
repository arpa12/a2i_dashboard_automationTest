import { loginPage } from "../pages/login";
import { dashboardPage } from "../pages/dashboard";

describe("checking dashboard functionality", () => {
  it("check dashboard functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    dashboardPage();
  });
});
