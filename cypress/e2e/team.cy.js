import { loginPage } from "../pages/login";
import { teamPage } from "../pages/team";

describe("template spec", () => {
  it("check team module functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    teamPage();
  });
});
