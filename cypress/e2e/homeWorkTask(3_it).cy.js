describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.guru99.com');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('it1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.guru99.com');
    cy.contains('SAP Beginner').should('exist');
    cy.get(
      ':nth-child(2) > .featured-box > :nth-child(2) > :nth-child(5) > a',
    ).click();
    cy.get(
      ':nth-child(10) > tbody > :nth-child(4) > .responsivetable > a > strong',
    ).click();
    cy.contains('What is SAP R/3?').should('exist');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('it2', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.guru99.com');
    cy.contains('COBOL').should('exist');
    cy.contains('WPF').should('exist');
    cy.get(
      ':nth-child(4) > .featured-box > :nth-child(2) > :nth-child(20) > a',
    ).click();
    cy.get('.kb-table-of-contents-icon-trigger').click();
    cy.get(':nth-child(14) > :nth-child(10) > a').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('it3', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.guru99.com');
    cy.get(
      '.menu-toggle-icon > .kadence-svg-iconset > .kadence-svg-icon',
    ).click();
    cy.get('.menu-item-3175 > .drawer-nav-drop-wrap > a').click();
    cy.get(
      ':nth-child(9) > tbody > :nth-child(1) > :nth-child(2) > strong > a > span',
    ).click();
    cy.contains('Java Definition and Meaning').should('exist');
    /* ==== End Cypress Studio ==== */
  });
});
