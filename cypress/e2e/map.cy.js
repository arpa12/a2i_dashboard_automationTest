import { loginPage } from "../pages/login";
import { mapPage } from "../pages/map";

describe("template spec", () => {
  it("check dashboard functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    mapPage();
  });
});
