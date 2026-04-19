import { loginPage } from "../pages/login";
import { mapPage } from "../pages/map";

describe("checking map module functionality", () => {
  it("check map module functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    mapPage();
  });
});
