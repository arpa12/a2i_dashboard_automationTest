export const manualDataEntryAddPage = () => {
    
    // Open manual data entry page
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("ম্যানুয়াল ডাটা এন্ট্রি").click(); //click on initiative
    });
    cy.wait(2000);

    // create a new manual data entry to approve
    cy.get('.mde-create-btn').should('be.visible').click();
    cy.get('.mde-modal-form').should('be.visible');
    cy.wait(1000); // Wait for the create form to appear


    // Select the 3rd available project using Select2 (excluding the placeholder)
    cy.get('#select2-mde-create-project-container').click();
    cy.get('.select2-results__option').not(':contains("উদ্যোগ নির্বাচন করুন")').eq(2).click();

    // Wait for indicator options to load (if dynamic)
    cy.get('#select2-mde-create-indicator-container').click();
    cy.get('.select2-results__option').not(':contains("সূচক নির্বাচন")').first().click();

    // Fill date (today's date) in the visible input only and blur to close date picker
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    // Type the date and then click the day in the calendar
    cy.get('input.form-control.input[placeholder="YYYY-MM-DD"]').should('be.visible').click().clear().type(todayStr, {force: true});
    cy.get('.flatpickr-day[aria-label*="' + today.toLocaleString('default', { month: 'long' }) + ' ' + dd + ', ' + yyyy + '"]:visible:not(.flatpickr-disabled)').first().click();

    // Fill value and target
    cy.get('#mde-create-value').type('123');
    cy.get('#mde-create-target').type('456');

    // Submit the form (only the visible, enabled button inside the modal)
    cy.get('.mde-modal-form').find('.mde-submit-btn:visible:enabled').click();
};

export const manualDataEntryEditPage = () => {

        // Open manual data entry page
        cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
        cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
            cy.contains("ম্যানুয়াল ডাটা এন্ট্রি").click(); //click on initiative
        });
        cy.wait(2000);

        // Edit the first team in the table (open action dropdown and click edit)
        cy.get('.mde-action-btn').first().should('be.visible').click();
        cy.get('#mde-popup-edit').should('be.visible').click();

        // Wait for the edit modal to appear
        cy.get('#mde-edit-form').should('be.visible');
        cy.wait(500);

        // Fill value and target
        cy.get('#mde-edit-data').clear().type('999');
        cy.get('#mde-edit-target').clear().type('888');

        // Submit the form (only the visible, enabled button inside the modal)
        cy.get('#mde-edit-form').find('.mde-submit-btn:visible:enabled').click();
};