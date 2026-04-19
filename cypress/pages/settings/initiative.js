export const initiativeAddEditPage = () => {
  cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
  cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
    cy.contains("উদ্যোগ").click(); //click on initiative
  });
  cy.wait(2000);

  // Open the create modal (if not already open)
  cy.get('.ini-create-btn').should('be.visible').click();
  cy.wait(2000); // Wait for the create form to appear

  // Select team (scoped to modal form to avoid multiple matches)
  cy.get('.ini-modal-form select[name="project_category_id"]').should('be.visible').select('ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট-১');

  // Fill initiative name (English)
  cy.get('input[name="name"]').should('be.visible').type('Sample Initiative ' + Math.floor(Math.random() * 1000));

  // Fill initiative name (Bangla)
  cy.get('input[name="bangla_name"]').should('be.visible').type('নমুনা উদ্যোগ বাংলা ' + Math.floor(Math.random() * 1000));

  // Fill reference table names
  cy.get('input[name="reference_table_name"]').type('ref_table_' + Math.floor(Math.random() * 100));
  cy.get('input[name="reference_child_table_name"]').type('ref_child_' + Math.floor(Math.random() * 100));
  cy.get('input[name="reference_child_2_table_name"]').type('ref_child2_' + Math.floor(Math.random() * 100));

  // Fill descriptions
  cy.get('textarea[name="description_eng"]').type('This is a sample initiative description.');
  cy.get('textarea[name="description"]').type('এটি একটি নমুনা উদ্যোগের বিস্তারিত।');

  // (Optional) Upload logo if needed
  // cy.get('input#iniLogoInput').attachFile('sample_logo.png'); // Requires cypress-file-upload plugin

  // Select visibility
  cy.get('select[name="is_public"]').select('সক্রিয় (পাবলিক)');

  // Select status
  cy.get('select#iniStatusSelect').select('সক্রিয়');

  // Submit the form
  cy.get('.ini-modal-submit[type="submit"]').click();
  cy.wait(2000); // Wait for the initiative to be created and the list to refresh


  // Edit the first initiative in the table (first action button)
  cy.get('.ini-action-btn').first().click();
  cy.wait(1000); // Wait for the action menu to appear

  // Then click the "সম্পাদনা" button
  cy.get('.ini-action-item--edit').first().click();
  cy.wait(2000); // Wait for the target page to load


  // edit the initiative bangla_name field
  cy.get('input[name="bangla_name"]').should('be.visible').clear().type('আপডেটেড উদ্যোগ বাংলা ' + Math.floor(Math.random() * 1000));
  cy.wait(1000); // Wait for the input to be updated
  
  // Submit the edit form
  cy.get('.ini-modal-submit[type="submit"]').click();
  cy.wait(2000); // Wait for the initiative to be created and the list to refresh

};

export const indicatorAddForInitiativeItem = () => {
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


};

export const createTargetForInitiativeIndicator = () => {
  // edit the first indicator in the list
  cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
  cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
    cy.contains("উদ্যোগ").click(); //click on initiative
  });
  cy.wait(2000); // Wait for dashboard to load


  cy.get('.ini-select-wrap').within(() => {
    cy.get('select[name="project_category_id"]').select('ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট-১');
  });
  cy.wait(2000);


  cy.get('[id="ini-search-input"]').type('Sample{enter}');
  cy.wait(2000);

  // Open the action menu for the correct row (e.g., for "xyz")
  cy.get('.ini-action-btn').first().click();
  cy.wait(1000); // Wait for the action menu to appear

  // Then click the "লক্ষ্যমাত্রা" button
  cy.get('.ini-action-item--target').first().click();
  cy.wait(2000); // Wait for the target page to load

  cy.get('.ini-create-btn').click();
  cy.wait(2000); // Wait for the create target form to appear


  cy.get('select#tgt_indicator').find('option').eq(1).then(option => {
    cy.get('select#tgt_indicator').select(option.val());
  });
  // Fill last year achievement
  cy.get('input#tgt_last_data').should('be.visible').clear().type(Math.floor(Math.random() * 1000000).toString());

  // Fill all month target inputs with random values
  cy.get('.tgt-month-input').each(($input) => {
    cy.wrap($input).clear().type((Math.floor(Math.random() * 100) + 1).toString());
  });

  // Submit the form
  cy.get('.ini-modal-submit.tgt-submit-green').first().click();
  cy.wait(2000); // Wait for the form submission to process 
};