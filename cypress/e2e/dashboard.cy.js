import { loginPage } from "../pages/login";
import { dashboardPage } from "../pages/dashboard";

describe("template spec", () => {
  it("check dashboard functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    dashboardPage();
  });
});
