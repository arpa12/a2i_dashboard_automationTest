export const reportPage = () => {
  cy.xpath("/html/body/header/div/nav/ul/li[5]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/main/div[2]/div[1]/a").click();
  cy.wait(2000);
  cy.get('[id="report_title"]').type("test");
  cy.wait(2000);
  cy.get('[id="tags"]').type("test");
  cy.wait(2000);
  cy.get('[id="report_para1"]').type("SELECT * from users");
  cy.wait(2000);
  cy.get('[id="verifyBtn"]').click();
  cy.wait(2000);
  cy.xpath("/html/body/main/div/form/div[3]/div[1]/button[1]").click();
};
