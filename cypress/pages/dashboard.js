export const dashboardPage = () => {
  // Verify Dashboard Loaded
  cy.get("[id='svc-tab-data']").should("be.visible").click();
  cy.wait(2000); // Wait for dashboard to load

  cy.get('[id="svc-tab-graph"]').should("be.visible").click();
  cy.wait(2000);

  cy.contains("উদ্যোগ ভিত্তিক অগ্রগতি")
    .scrollIntoView({ duration: 3000 })
    .should("be.visible");
  cy.contains("ডাউনলোড").click();
  cy.wait(2000);
  cy.contains("Download as Excel").invoke("removeAttr", "target").click();

  cy.contains("আর্থিক অগ্রগতি")
    .scrollIntoView({ duration: 3000 })
    .should("be.visible");
  cy.xpath("/html/body/main/div[4]/div/div/div/div[1]/div[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/main/div/a").click();

  cy.contains("ক্রয় অগ্রগতি")
    .scrollIntoView({ duration: 3000 })
    .should("be.visible");
  cy.xpath("/html/body/main/div[5]/div/div[1]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/main/div/a").click();
};
