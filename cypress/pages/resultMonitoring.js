export const monitoringPage = () => {
  cy.get('[id="monitoring-dropdown-toggle"]').click();
  cy.wait(2000);
  cy.xpath("/html/body/header/div/nav/ul/li[4]/ul/li[1]/a").click();
  cy.wait(2000);
  cy.xpath(
    "/html/body/main/div[1]/div[2]/div/div[1]/span/span[1]/span/span[1]",
  ).click();
  cy.wait(2000);
  cy.xpath("/html/body/span/span/span[2]/ul/li[1]").click();
  cy.wait(2000);
  cy.xpath(
    "/html/body/main/div[1]/div[2]/div/div[1]/span/span[1]/span/span[1]",
  ).click();
  cy.wait(2000);
  cy.xpath("/html/body/span/span/span[2]/ul/li[2]").click();
  cy.wait(2000);
  cy.xpath(
    "/html/body/main/div[1]/div[3]/div[2]/div[2]/div/div/div[3]/button[1]",
  ).click();
  cy.wait(2000);

  //Attachments
  cy.get('[id="bulkUploadDropZone"]').first().attachFile("demo.csv");
  cy.wait(2000);
  cy.xpath("/html/body/main/div[3]/div/div/div[2]/form/div[4]/button").click();
};
