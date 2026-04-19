import { loginPage } from "../pages/login";
import { reportPage } from "../pages/report";

describe("template spec", () => {
  it("check dashboard functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    reportPage();
  });
});
