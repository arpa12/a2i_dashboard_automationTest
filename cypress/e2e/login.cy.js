import { loginPage } from "../pages/login";

describe("template spec", () => {
  it("visit system url and do login", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
  });
});
