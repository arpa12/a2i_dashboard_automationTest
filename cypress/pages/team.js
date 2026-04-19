export const teamPage = () => {
  cy.get('[id="team-dropdown-toggle"]').click();
  cy.wait(5000);
  cy.xpath("/html/body/header/div/nav/ul/li[2]/ul/li[1]/a").click();
  cy.wait(5000);
  cy.xpath("/html/body/header/div/nav/ul/li[2]/ul/li[1]/ul/li[1]/a").click({
    force: true,
  });
  cy.wait(5000);
  cy.get('[id="indicator_list_drop"]').select("মোট নারী উদ্যোক্তা");
  cy.wait(5000);

  cy.get('[id="cc-chart-indicator-name"]')
    .scrollIntoView({ duration: 3000 })
    .should("be.visible");
  cy.contains("ডাউনলোড করুন").click();
  cy.wait(5000);
  cy.contains("Download as Image").invoke("removeAttr", "target").click();

  cy.xpath("/html/body/main/div/div[4]/div[2]/div/div/div[1]/div[1]/p")
    .scrollIntoView({ duration: 3000 })
    .should("be.visible");
  cy.xpath(
    "/html/body/main/div/div[4]/div[2]/div/div/div[1]/div[2]/button",
  ).click();
  cy.wait(5000);
  cy.contains("Download as CSV").click({ force: true });

  cy.contains("সূচক ভিত্তিক তুলনা")
    .scrollIntoView({ duration: 3000 })
    .should("be.visible");
  cy.get('[id="cc-compare-indicator-1761"]').click();
  cy.wait(2000);
  cy.get('[id="cc-compare-indicator-1762"]').click();
  cy.wait(2000);
  cy.get('[id="cc-compare-indicator-1763"]').click();
  cy.wait(2000);

  cy.contains("ডাউনলোড করুন").click();
  cy.wait(5000);
  cy.contains("Download as Image").invoke("removeAttr", "target").click();
};
