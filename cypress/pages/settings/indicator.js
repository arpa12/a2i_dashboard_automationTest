export const indicatorAddEditPage = () => {
  // Now, let's create an indicator for the initiative "xyz"
  cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
  cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
    cy.contains("সূচক এর নাম").click(); //click on initiative
  });
  cy.wait(2000);

  // Open the indicator create modal if needed
  cy.get('.ind-create-btn').should('be.visible').click(); // Replace with the actual selector for the "create indicator" button
  cy.get('.ind-modal-form').should('be.visible');
  cy.wait(2000); // Wait for the create form to appear

  // Fill indicator name (English)
  cy.get('input#indFieldName').type('Sample Indicator ' + Math.floor(Math.random() * 1000));

  // Fill indicator name (Bangla)
  cy.get('input#indFieldBanglaName').type('নতুন সূচক বাংলা ' + Math.floor(Math.random() * 1000));

  // Select initiative/project (last option)
  cy.get('select#indFieldProjectId option').then(options => {
    const lastIndex = options.length - 1;
    cy.get('select#indFieldProjectId').select(options[lastIndex].value);
  });

  // Select data process
  cy.get('select#indFieldDataProcess').select('ম্যানুয়াল'); // or .select('MAN')

  // Fill unit
  cy.get('input#indFieldUnit').type('sample_unit');

  // Fill short form (optional)
  cy.get('input#indFieldShortForm').type('SU');

  // Fill English short form (optional)
  cy.get('input#indFieldShortFormEn').type('SUE');

  // Select default chart
  cy.get('select#indFieldDefaultChart').select('2');

  // Select multiple charts (optional)
  cy.get('select#indFieldChart').select(['2', '3'], { force: true });
  // Select status
  cy.get('select#indFieldStatus').select('সক্রিয়'); // or .select('1')

  // Submit the form
  cy.get('.ind-modal-submit[type="submit"]').click();

  cy.wait(2000); // Wait for the form submission to complete

  // edit the indicator list item
    cy.get('.ind-edit-btn').should('be.visible').first().click(); // Replace with the actual selector for the "edit indicator" button
    cy.wait(2000); // Wait for the edit form to appear

    // Update the indicator name (English)
    cy.get('input#indFieldName').clear().type('Updated Sample Indicator ' + Math.floor(Math.random() * 1000));
    cy.wait(2000); // Wait for the input to be updated

    cy.get('select#indFieldChart').select(['2', '3', '4'], { force: true });
    // Submit the edit form
    cy.get('.ind-modal-submit[type="submit"]').click();
    cy.wait(2000); // Wait for the form submission to complete
};