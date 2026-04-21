export const manualApprovedData = () => {
    // Open manual data authorization page
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("ম্যানুয়াল ডাটা অনুমোদন").click(); //click on initiative
    });
    cy.wait(2000);


    // Check the first checkbox for manual data approval
    cy.get('input.mda-checkbox.man_check').first().check({force: true});

    // Click the approve button for the same item (example: make_authorize(2005, 1))
    cy.get('button.btn-success').contains('অনুমোদন').click({force: true});

    // Handle SweetAlert modal confirmation (second approve button)
    cy.get('.sweet-alert.showSweetAlert.visible').should('be.visible');
    cy.get('.sweet-alert.showSweetAlert.visible button.confirm').contains('অনুমোদন').click({force: true});

    // Optionally, verify the result (success message, state change, etc.)
    // cy.contains('অনুমোদিত').should('exist');
};

export const manualApprovedDataCancellation = () => {
    // Open manual data authorization page
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("ম্যানুয়াল ডাটা অনুমোদন").click(); //click on initiative
    });
    cy.wait(2000);


    // Check the first checkbox for manual data approval
    cy.get('input.mda-checkbox.man_check').first().check({force: true});

    // Click the cancel approved button for the same item (example: make_authorize(2005, 1))
    cy.get('button.btn-success').contains('অনুমোদন').click({force: true});

    // Handle SweetAlert modal cancellation (cancel button)
    cy.get('.sweet-alert.showSweetAlert.visible').should('be.visible');
    cy.get('.sweet-alert.showSweetAlert.visible button.cancel').contains('বাতিল').click({force: true});

};

export const manualNotApprovedData = () => {
    // Open manual data authorization page
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("ম্যানুয়াল ডাটা অনুমোদন").click(); //click on initiative
    });
    cy.wait(2000);


    // Check the first checkbox for manual data approval
    cy.get('input.mda-checkbox.man_check').first().check({force: true});

    // Click the not approved button for the same item (example: make_authorize(2005, 1))
    cy.get('button.btn-danger').contains('অননুমোদিত').click({force: true});

    // Handle SweetAlert modal confirmation (second not approve button)
    cy.get('.sweet-alert.showSweetAlert.visible').should('be.visible');
    cy.get('.sweet-alert.showSweetAlert.visible button.confirm').contains('অননুমোদিত').click({force: true});

};

export const manualNotApprovedDataCancellation = () => {
    // Open manual data authorization page
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("ম্যানুয়াল ডাটা অনুমোদন").click(); //click on initiative
    });
    cy.wait(2000);


    // Check the first checkbox for manual data approval
    cy.get('input.mda-checkbox.man_check').first().check({force: true});

    // Click the cancel not approved button for the same item (example: make_authorize(2005, 1))
    cy.get('button.btn-danger').contains('অননুমোদিত').click({force: true});

    // Handle SweetAlert modal cancellation (cancel button)
    cy.get('.sweet-alert.showSweetAlert.visible').should('be.visible');
    cy.get('.sweet-alert.showSweetAlert.visible button.cancel').contains('বাতিল').click({force: true});

};