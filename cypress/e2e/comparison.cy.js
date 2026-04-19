import { loginPage } from "../pages/login";
import { comparisonPage } from "../pages/comparison";

describe("template spec", () => {
  it.skip("check dashboard functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    comparisonPage();
  });
});
