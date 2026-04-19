export const mapPage = () => {
  cy.get('[id="comparison-dropdown-toggle"]').click();
  cy.wait(2000);
  cy.xpath("/html/body/header/div/nav/ul/li[3]/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath(
    "/html/body/main/div[1]/div/div[2]/span/span[1]/span/span[1]",
  ).click();
  cy.wait(2000);
  cy.xpath("/html/body/span/span/span[2]/ul/li[1]").click();
  cy.wait(2000);
  cy.get('[id="indicator_id_1"]').select("ডিজিটাল সেন্টার স্থাপন");
  cy.wait(2000);
  cy.get('[id="sorting"]').select("ঊর্ধ্বগামী");
  cy.wait(2000);
  // cy.get('[id="top_portion_date_val"]').select("2026-04-19");
  // cy.wait(2000);
  cy.get('[id="submit"]').click();
};
