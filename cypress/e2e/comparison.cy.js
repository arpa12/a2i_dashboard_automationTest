import { loginPage } from "../pages/login";
import { comparisonPage } from "../pages/comparison";

describe("checking comparison module functionality", () => {
  it("check comparison module functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    comparisonPage();
  });
});
