import { loginPage } from "../../pages/login";
import { initiativeAddEditPage, indicatorAddForInitiativeItem, createTargetForInitiativeIndicator } from "../../pages/settings/initiativeAddEditPage";

describe("template spec", () => {
  it("check initiative add and edit functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    initiativeAddEditPage();
  });

  it("create indicator functionality for initiative", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    indicatorAddForInitiativeItem();
  });

  it("create target for initiative indicator", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    createTargetForInitiativeIndicator();
  });

});