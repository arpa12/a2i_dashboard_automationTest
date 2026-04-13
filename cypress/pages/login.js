export const loginPage = () => {
  cy.get("#mobile_no").type("01710622881");
  cy.get("#password").type("123456a@");
  cy.xpath("/html/body/div/div/section[2]/div/div[2]/div/form/button").click();
};
