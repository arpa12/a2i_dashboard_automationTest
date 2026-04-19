import { loginPage } from "../../pages/login";
import { teamAddEditPage, checkNewItemInTeamDropdown, addInitiativeForNewTeam, checkDetailsForNewTeam} from "../../pages/settings/team";

describe("template spec", () => {
  it("check team add and edit functionality", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    teamAddEditPage();
  });

  it("check new item in team dropdown", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    checkNewItemInTeamDropdown();
  });

  it("check new initiative for new team", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    addInitiativeForNewTeam();
  });

  it("check new item id details in team page", () => {
    cy.visit("https://uat-dashboard.a2i.gov.bd/");
    loginPage();
    checkDetailsForNewTeam();
  });
});