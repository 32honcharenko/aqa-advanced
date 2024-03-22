describe('template spec', () => {

  it('test1', () => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

    cy.get('div.header_left.d-flex.align-items-center > nav > a').should('have.text', 'Home');
    cy.get('[appscrollto]').eq(0).should('have.text', 'About');
    cy.get('[appscrollto]').eq(1).should('have.text', 'Contacts');
    cy.get('#contactsSection div.col-md-6.d-flex.flex-column.align-items-center.align-items-md-start > h2').should('exist');
    cy.get('#contactsSection div.col-md-6.d-flex.flex-column.align-items-center.align-items-md-start > h2').should('be.visible')
  });


  it('test2', () => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

    cy.get('div.header_left.d-flex.align-items-center > nav > a').should('have.text', 'Home');
    cy.get('div.col-12.col-lg-4 > div > h1').contains('Do more!');
    cy.get('div.col-12.col-lg-4 > div > button').should('have.css', 'background-color', 'rgb(2, 117, 216)' );
    cy.get('div.col-12.col-lg-4 > div > button').should('have.css', 'border-color', 'rgb(2, 117, 216)');
    cy.get('[appscrollto]').filter(':visible').should('have.length', 2);
    
  });

    it('test3', () => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

    cy.get('button.header-link.-guest').click()
    cy.get(' div.panel-page_heading.d-flex.justify-content-between > h1').contains('Garage')
    cy.get('[routerlink="expenses"]').click()
    cy.get('div.panel-page_heading.d-flex.flex-column.flex-lg-row > h1').contains('Fuel expenses')
    cy.get('a.btn-sidebar.sidebar_btn').should('be.visible').first().click()
    cy.get(' div.panel-page_heading.d-flex.justify-content-between > h1').contains('Garage')
    cy.get('[class="btn btn-primary"]').should('be.visible').click()
    
  });
});
