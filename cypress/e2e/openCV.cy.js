/* eslint-disable prefer-arrow-callback */

describe('template spec', () => {
  // eslint-disable-next-line linebreak-style
  it('passes', () => {
    cy.visit('https://www.guru99.com/');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('open website guru', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.guru99.com/');
    cy.get(
      ':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(1) > a',
    ).click();
    cy.get('.entry-content > :nth-child(5)').click();
    cy.get('.entry-content > :nth-child(5)').click();
    cy.get(
      ':nth-child(11) > tbody > :nth-child(4) > .responsivetable > a > strong',
      // eslint-disable-next-line linebreak-style
    ).click();
    cy.get(
      ':nth-child(11) > tbody > :nth-child(3) > .responsivetable > a > strong',
    ).should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
});
