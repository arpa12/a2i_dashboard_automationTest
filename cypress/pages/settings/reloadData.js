export const reloadDataCheckingConfirmation = () => {
    
    // Open manual data entry page
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("রিলোড ডাটা").click(); //click on initiative
    });
    cy.wait(2000);

    // Select the initiative 'মাইগভ' (value=117) from the dropdown
    cy.get('#rd-project').should('be.visible').select('117');

    // Select yesterday's date in the date picker (since today/future is not allowed)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yyyy = yesterday.getFullYear();
    const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
    const dd = String(yesterday.getDate()).padStart(2, '0');
    const yesterdayStr = `${yyyy}-${mm}-${dd}`;
    cy.get('#rd-date')
        .should('be.visible')
        .click()
        .clear()
        .type(yesterdayStr, {force: true});
    cy.get('.flatpickr-day[aria-label*="' + yesterday.toLocaleString('default', { month: 'long' }) + ' ' + dd + ', ' + yyyy + '"]:visible:not(.flatpickr-disabled)')
        .first()
        .click();

    // Click the reload button
    cy.get('#rd-reload-btn').should('be.visible').click();

    // Confirm the SweetAlert modal
    cy.get('.swal2-confirm').contains('হ্যাঁ, রিলোড করুন!').should('be.visible').click();

    // Click the "Reload Data" button
    cy.get('#rd-reload-btn').should('be.visible').click();

    // Assert success message appears
    cy.contains('ডেটা রিলোডের জন্য তারিখ পাঠানো হয়েছে', {timeout: 10000}).should('be.visible');
};

export const reloadDataCheckingCancellation = () => {
    
    // Open manual data entry page
    cy.get("[id='settings-dropdown-toggle']").should("be.visible").click(); //click on settings dropdown
    cy.get("[id='settings-dropdown-menu']").should("be.visible").within(() => {
        cy.contains("রিলোড ডাটা").click(); //click on initiative
    });
    cy.wait(2000);

    // Select the initiative 'মাইগভ' (value=117) from the dropdown
    cy.get('#rd-project').should('be.visible').select('117');

    // Select yesterday's date in the date picker (since today/future is not allowed)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yyyy = yesterday.getFullYear();
    const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
    const dd = String(yesterday.getDate()).padStart(2, '0');
    const yesterdayStr = `${yyyy}-${mm}-${dd}`;
    cy.get('#rd-date')
        .should('be.visible')
        .click()
        .clear()
        .type(yesterdayStr, {force: true});
    cy.get('.flatpickr-day[aria-label*="' + yesterday.toLocaleString('default', { month: 'long' }) + ' ' + dd + ', ' + yyyy + '"]:visible:not(.flatpickr-disabled)')
        .first()
        .click();

    // Click the reload button
    cy.get('#rd-reload-btn').should('be.visible').click();

    // Confirm the SweetAlert modal
    cy.get('.swal2-cancel').contains('বাতিল').should('be.visible').click();

};