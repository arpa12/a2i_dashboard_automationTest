import { loginPage } from "../pages/login";
import { reportPage } from "../pages/report";

describe("checking report module functionality", () => {
  it("check report module functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    reportPage();
  });
});
