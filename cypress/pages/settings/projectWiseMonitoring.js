export const projectWiseMonitoringAddPage = () => {
    // Now, let's create a project wise monitoring entry for the initiative "xyz"
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("মনিটরিং সেটিংস").click(); //click on initiative
    });
    cy.wait(2000);

    // Open the project wise monitoring create modal if needed
    cy.get('.mstn-create-btn').should('be.visible').click(); // Replace with the actual selector for the "create indicator" button
    cy.get('.mstn-modal-form').should('be.visible');
    cy.wait(2000); // Wait for the create form to appear

    // Select team (scoped to modal form to avoid multiple matches)
    cy.get('select[name="project_id"]').first().find('option').then(options => {
        const lastIndex = options.length - 1;
        cy.get('select[name="project_id"]').first().select(options[lastIndex].value);
    });
    cy.wait(2000); // Wait for the team selection to be processed

    cy.get('select[name="product_owner"] option:last').then($el => {
        cy.get('select[name="product_owner"]').first().select($el.val());
    });
    cy.wait(2000); // Wait for the product owner selection to be processed
    cy.get('input[name="product_owner_email_days"]').should('be.visible').first().type('5');
    cy.wait(2000); // Wait for the input to be processed

    cy.get('select[name="team_lead"] option:last').then($el => {
        cy.get('select[name="team_lead"]').first().select($el.val());
    });
    cy.wait(2000); // Wait for the team lead selection to be processed
    cy.get('input[name="team_lead_email_days"]').should('be.visible').first().type('5');
    cy.wait(2000); // Wait for the input to be processed
    
    cy.get('select[name="cluster_head"] option:last').then($el => {
        cy.get('select[name="cluster_head"]').first().select($el.val());
    });
    cy.wait(2000); // Wait for the cluster head selection to be processed
    cy.get('input[name="cluster_head_email_days"]').should('be.visible').first().type('5'); 
    cy.wait(2000); // Wait for the input to be processed

    cy.get('select[name="management"] option:last').then($el => {
        cy.get('select[name="management"]').first().select($el.val());
    });
    cy.wait(2000); // Wait for the management selection to be processed
    cy.get('input[name="management_email_days"]').should('be.visible').first().type('5'); 
    cy.wait(2000); // Wait for the input to be processed

    cy.get('.mstn-modal-submit[type="submit"]').should('be.visible').first().click();   
    cy.wait(2000); // Wait for the form submission to complete
};

export const projectWiseMonitoringEditPage = () => {
    // Now, let's create a project wise monitoring entry for the initiative "xyz"
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("মনিটরিং সেটিংস").click(); //click on initiative
    });
    cy.wait(2000);

    // Edit the first team in the table (open action dropdown and click edit)
    // cy.get('.dropdown.ud-action-dropdown .dropdown-toggle').first().click();
    cy.get('.mstn-edit-btn').first().should('be.visible').click();

    cy.get('#edit_project_id').find('option').eq(1).then(option => {
        cy.get('#edit_project_id').select(option.val());
    });
    cy.wait(2000); // Wait for the edit form to appear

    cy.get('#edit_product_owner').find('option').eq(1).then(option => {
        cy.get('#edit_product_owner').select(option.val());
    });
    cy.wait(2000); // Wait for the project selection to be processed

    cy.get('input[id="edit_product_owner_email_days"]').should('be.visible').clear().type('111');
    cy.wait(2000); // Wait for the input to be processed

    cy.get('#edit_team_lead').find('option').eq(1).then(option => {
        cy.get('#edit_team_lead').select(option.val());
    });
    cy.wait(2000); // Wait for the edit form to appear

    cy.get('input[id="edit_team_lead_email_days"]').should('be.visible').clear().type('125');
    cy.wait(2000); // Wait for the input to be processed
    
    cy.get('#edit_cluster_head').find('option').eq(1).then(option => {
        cy.get('#edit_cluster_head').select(option.val());
    });
    cy.wait(2000); // Wait for the edit form to appear

    cy.get('input[id="edit_cluster_head_email_days"]').should('be.visible').clear().type('254'); 
    cy.wait(2000); // Wait for the input to be processed

    cy.get('#edit_management').find('option').eq(1).then(option => {
        cy.get('#edit_management').select(option.val());
    });
    cy.wait(2000); // Wait for the management selection to be processed
    cy.get('input[id="edit_management_email_days"]').should('be.visible').clear().type('146'); 
    cy.wait(2000); // Wait for the input to be processed

    cy.contains("হালনাগাদ").click();
    cy.wait(2000); // Wait for the form submission to complete
};