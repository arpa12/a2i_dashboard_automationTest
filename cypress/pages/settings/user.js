export const userAddPage = () => {
    // Now, let's create a user 
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("ব্যবহারকারী").click(); //click on initiative
    });
    cy.wait(2000);

    // Open the user create modal if needed
    cy.get('.usr-create-btn').should('be.visible').click(); // Replace with the actual selector for the "create user" button
    cy.get('.usr-modal-form').should('be.visible');
    cy.wait(2000); // Wait for the create form to appear

    // Fill user name
    cy.get('input#usr-create-name').type('Jui Saha');

    // Fill user email
    cy.get('input#usr-create-email').type('juisaha@example.com');

    cy.get('input#usr-create-mobile').type('01203456789');

    cy.get('input#usr-create-designation').type('Software Engineer');

    // Step 1: Role select (Team Lead example)
    cy.get('#usr-create-roles').select('Team Lead').should('have.value', '3');

    cy.get('#usr-create-status').select('সক্রিয়').should('have.value', '1');

    cy.get('select[id="usr-create-team"] option:last').then($el => {
        cy.get('select[id="usr-create-team"]').first().select($el.val());
    });
    cy.wait(2000);

    cy.get('#usr-create-password').type('JuiSaha!2026$');
    cy.get('#usr-create-password-confirmation').type('JuiSaha!2026$');

    // Step 2: Check initially 1 row exists
    cy.get('#usr-create-role-project tbody tr').should('have.length', 1);

    // Step 3: Add 2 new rows (total should be 3 rows)
    for (let i = 0; i < 2; i++) {
        cy.get('#usr-create-role-project').find('.addTableRows').filter(':visible').first().click({ force: true });
        cy.wait(500); // Wait for DOM update
    }

    // Final assertion: total 3 rows
    cy.get('#usr-create-role-project tbody tr').should('have.length', 3);


    // Step 4: For each row, select last option in the correct select
    cy.get('#usr-create-role-project tbody tr').each(($row, idx) => {
        // The select name is project_owner[0], project_owner[1], ...
        cy.wrap($row).find(`select[name="project_owner[${idx}]"]`).then($select => {
            cy.wrap($select).find('option').last().then($el => {
                cy.wrap($select).select($el.val());
            });
        });
    });

    // Step 5: Check all checkboxes in each row
    cy.get('#usr-create-role-project tbody tr').each(($row) => {
        cy.wrap($row).find('input[type="checkbox"]').check({ force: true });
    });

    //submit the form
    cy.get('.usr-submit-btn[type="submit"]').should('be.visible').first().click();
    cy.wait(2000); // Wait for the form submission to complete
};

export const userEditPage = () => {
  // Now, let's edit a user
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("ব্যবহারকারী").click(); //click on initiative
    });
    cy.wait(2000);

    // Open the user edit modal if needed
    cy.get('button[onclick^="usrOpenEditModal"]').should('be.visible').first().click();
    cy.get('.usr-modal-form').should('be.visible');
    cy.wait(2000); // Wait for the edit form to appear

    // Fill user email
    cy.get('input#usr-edit-email').clear().type('jui@gmail.com');

    cy.get('input#usr-edit-mobile').clear().type('01634567890');

    cy.get('input#usr-edit-designation').clear().type('Junior Software Developer');

    //submit the form (only the correct button in the visible modal footer)
    cy.get('.usr-modal-form:visible').within(() => {
        cy.get('.usr-modal-footer .usr-submit-btn[type="submit"]').contains('জমা দিন').should('be.visible').and('not.be.disabled').click();
    });
};