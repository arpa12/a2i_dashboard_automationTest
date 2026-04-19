export const resultFrameworkPage = () => {
  cy.get('[id="monitoring-dropdown-toggle"]').click();
  cy.wait(2000);
  cy.xpath("/html/body/header/div/nav/ul/li[4]/ul/li[2]/a").click();
  cy.wait(2000);
  cy.get('[id="rfUploadBtn"]').click();
  cy.wait(2000);
  cy.get('[name="project_id"]').select("ডিজিটাল সেন্টার");
  cy.wait(2000);
  cy.xpath("/html/body/main/div/div[3]/div/form/div[1]/label")
    .first()
    .attachFile("demo.csv");
  cy.wait(2000);
  cy.get('[id="rfModalUpload"]').click();
};
