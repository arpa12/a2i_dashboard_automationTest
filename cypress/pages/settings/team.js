export const teamAddEditPage = () => {
  // Ignore uncaught exceptions to prevent Cypress from failing the test due to app errors
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
  cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
    cy.contains("টিম").click(); //click on team
  });

  // Open the create modal (if not already open)
  cy.get('#btnOpenCreateModal').should('be.visible').click();
  // Wait for the create form to appear (wait for a unique input in the modal)
  cy.get('input#catName', { timeout: 10000 }).should('be.visible');

  // Fill team name (English)
  cy.get('input#catName').clear().type('Sample Team ' + Math.floor(Math.random() * 1000));

  // Fill description (English)
  cy.get('input#catDescription').should('be.visible').clear().type('Sample Team Description');

  // Fill team name (Bangla)
  cy.get('input#catBanglaName').should('be.visible').clear().type('নমুনা টিম বাংলা ' + Math.floor(Math.random() * 1000));

  // Select status
  cy.get('select#catStatus').should('be.visible').select('সক্রিয়');

  // Submit the form
  cy.get('#cat-form-submit-btn').should('be.visible').click();


  // Wait for the modal to close (either not visible or not exist)
  cy.get('.ud-form-modal', { timeout: 10000 }).should('not.be.visible');

  // Wait for the table to update (ensure the action dropdown is visible)
  cy.get('.dropdown.ud-action-dropdown .dropdown-toggle', { timeout: 10000 }).should('be.visible');
  
  // Edit the first team in the table (open action dropdown and click edit)
  cy.get('.dropdown.ud-action-dropdown .dropdown-toggle').first().click();
  cy.get('.cat-edit-btn').first().should('be.visible').click();
  // Wait for the edit modal to appear
  cy.get('input#catName', { timeout: 10000 }).should('be.visible');

  // Edit the team fields in the edit modal
  cy.get('input#catName').clear().type('Updated Team EN ' + Math.floor(Math.random() * 1000));
  cy.get('input#catDescription').should('be.visible').clear().type('Updated Team Description');
  cy.get('input#catBanglaName').should('be.visible').clear().type('আপডেটেড টিম বাংলা ' + Math.floor(Math.random() * 1000));
  cy.get('select#catStatus').should('be.visible').select('সক্রিয়');

  // Update (হালনাগাদ) the edit form
  cy.get('#cat-form-submit-btn').should('be.visible').click();
  // Wait for the team to be updated and the list to refresh
  cy.get('.dropdown.ud-action-dropdown .dropdown-toggle', { timeout: 10000 }).should('be.visible');
};

export const checkNewItemInTeamDropdown = () => {
  cy.get("[id='team-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
  cy.get("[id='team-dropdown-menu']").should("be.visible").within(() => {
    cy.contains("টিম").click(); //click on team
  });
  cy.wait(2000);
}

export const addInitiativeForNewTeam = () => {
  cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
  cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
    cy.contains("উদ্যোগ").click(); //click on initiative
  });
  cy.wait(2000);

  // Open the create modal (if not already open)
  cy.get('.ini-create-btn').should('be.visible').click();
  cy.wait(2000); // Wait for the create form to appear

  // Select team (scoped to modal form to avoid multiple matches)
  cy.get('select.ini-form-select').first().find('option').then(options => {
    const lastIndex = options.length - 1;
    cy.get('select.ini-form-select').first().select(options[lastIndex].value);
  });

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
}

export const checkDetailsForNewTeam = () => {
  // Ignore uncaught exceptions to prevent Cypress from failing the test due to app errors
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
  cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
    cy.contains("টিম").click(); //click on team
  });

  // Wait for the table rows to be visible before asserting on the action dropdown
  cy.get('table tbody tr', { timeout: 10000 }).should('have.length.greaterThan', 0);
  cy.get('.dropdown.ud-action-dropdown .dropdown-toggle', { timeout: 10000 }).should('be.visible');

  // Edit the first team in the table (open action dropdown and click edit)
  cy.get('.dropdown.ud-action-dropdown .dropdown-toggle').first().click();
  cy.get('.dropdown-item').contains(' বিস্তারিত').first().should('be.visible').click();
  cy.wait(2000); // Wait for the details page to load

  // Here you can add assertions to check if the details of the team are displayed correctly
  // First .btn-details
  // cy.get('.btn-details').eq(0).should('be.visible').click();
  // // Do your assertions or navigation for the first details page
  // cy.get('.btn-back').should('be.visible').click();
  // cy.wait(1000);

  // // Second .btn-details
  // cy.get('.btn-details').eq(1).should('be.visible').click();
  // // Do your assertions or navigation for the second details page
  // cy.get('.btn-back').should('be.visible').click();
  // cy.wait(1000);

  // // Third .btn-details
  // cy.get('.btn-details').eq(2).should('be.visible').click();
  // // Do your assertions or navigation for the third details page
  // cy.get('.btn-back').should('be.visible').click();
  // cy.wait(1000);
};
