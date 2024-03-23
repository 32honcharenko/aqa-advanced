describe('template spec', () => {


  /*it('checkMandatory', () => {
    
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
        //Check that all fields are mandatory
    cy.get('[class="hero-descriptor_btn btn btn-primary"]').should('be.visible').click()
    cy.get('[name="name"]').type('Serhii');
    cy.get('button[class="btn btn-primary"]').should('not.be.enabled');
    cy.get('[name="lastName"]').type('Honcharenko')
    cy.get('button[class="btn btn-primary"]').should('not.be.enabled');
    cy.get('[formcontrolname="email"]').type('koko000@gmail.com')
    cy.get('button[class="btn btn-primary"]').should('not.be.enabled');
    cy.get('#signupPassword').type('11111111Qq')
    cy.get('button[class="btn btn-primary"]').should('not.be.enabled');
    cy.get('#signupRepeatPassword').type('11111111Qq')
    cy.get('button[class="btn btn-primary"]').should('be.enabled');
    cy.get('[name="name"]').clear();
    cy.get('[name="lastName"]').clear()
    cy.get('[formcontrolname="email"]').clear()
    cy.get('#signupPassword').clear()
    cy.get('#signupRepeatPassword').clear()
  })

  it('checkFields', () => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });


    //Name filed
    cy.get('[class="hero-descriptor_btn btn btn-primary"]').should('be.visible').click()
    cy.get(' form > div:nth-child(1) > label').should('have.text', 'Name');
    cy.get('[name="name"]').click();
    cy.get(' div.modal-header').click();
    cy.get('[class="invalid-feedback"]').should('have.text', 'Name required');
    cy.get('[name="name"]').type('1');
    cy.get(' form > div:nth-child(1) > div > p:nth-child(1)').should('have.text', 'Name is invalid');
    cy.get(' form > div:nth-child(1) > div > p:nth-child(2)').should('have.text','Name has to be from 2 to 20 characters long');
    cy.get('[name="name"]').clear();
    cy.get('[name="name"]').type('aaaaaaaaaaaaaaaaaaaaa');
    cy.get('form > div:nth-child(1) > div > p').should('have.text','Name has to be from 2 to 20 characters long');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)' ) //border color
    cy.get('[name="name"]').clear();
    cy.get('[name="name"]').type('фвфівфівфв');
    cy.get(' form > div:nth-child(1) > div > p:nth-child(1)').should('have.text', 'Name is invalid');
    cy.get('[name="name"]').clear();
    cy.get('[name="name"]').type('Serhi i')
    cy.get(' form > div:nth-child(1) > div > p:nth-child(1)').should('have.text', 'Name is invalid');
    cy.get('[name="name"]').clear();
    cy.get('[name="name"]').type('Serhii');
    cy.get(' form > div:nth-child(1) > div > p:nth-child(1)').should('not.exist')

    //Last name field
    cy.get('[name="lastName"]').click()
    cy.get('[class="modal-title"]').click();
    cy.get('form div:nth-child(2) > div > p').should('have.text', 'Last name required');
    cy.get('[name="lastName"]').type('1')
    cy.get('form > div:nth-child(2) > div > p:nth-child(1)').should('have.text', 'Last name is invalid');
    cy.get(' form > div:nth-child(2) > div > p:nth-child(2)').should('have.text', 'Last name has to be from 2 to 20 characters long');
    cy.get('[name="lastName"]').clear()
    cy.get('[name="lastName"]').type('aaaaaaaaaaaaaaaaaaaaa');
    cy.get('form > div:nth-child(2) > div > p:nth-child(1)').should('have.text', 'Last name has to be from 2 to 20 characters long');
    cy.get('[name="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)' ) //border color
    cy.get('[name="lastName"]').clear()
    cy.get('[name="lastName"]').type('Honcha renko');
    cy.get('form > div:nth-child(2) > div > p:nth-child(1)').should('have.text', 'Last name is invalid');
    cy.get('[name="lastName"]').clear()
    cy.get('[name="lastName"]').type('Honcharenko')
    cy.get(' form > div:nth-child(2) > div > p:nth-child(1)').should('not.exist')

    //Email
    cy.get(' form > div:nth-child(3) > label').should('have.text', 'Email');
    cy.get('[formcontrolname="email"]').click()
    cy.get('[class="modal-title"]').click();
    cy.get('div:nth-child(3) > div > p').should('have.text', 'Email required')
    cy.get('[formcontrolname="email"]').type('1')
    cy.get('div:nth-child(3) > div > p').should('have.text', 'Email is incorrect')
    cy.get('[formcontrolname="email"]').should('have.css', 'border-color', 'rgb(220, 53, 69)' )
    cy.get('[formcontrolname="email"]').clear()
    cy.get('[formcontrolname="email"]').type('koko000@gmail.com')
    cy.get('div:nth-child(3) > div > p').should('not.exist')

    //Password
    cy.get('form > div:nth-child(4) > label').should('have.text', 'Password')
    cy.get('#signupPassword').click()
    cy.get('[class="modal-title"]').click();
    cy.get('form > div:nth-child(4) > div > p').should('have.text', 'Password required')
    cy.get('#signupPassword').type(1)
    cy.get('div:nth-child(4) > div > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)' ) //border color
    cy.get('#signupPassword').clear()
    cy.get('#signupPassword').type(1234567899999999)
    cy.get('div:nth-child(4) > div > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    cy.get('#signupPassword').clear()
    cy.get('#signupPassword').type('11111111Qq')
    cy.get('div:nth-child(4) > div > p').should('not.exist')

    //Re-enter password
    cy.get('[for="signupRepeatPassword"]').should('have.text', 'Re-enter password')
    cy.get('#signupRepeatPassword').click()
    cy.get('[class="modal-title"]').click();
    cy.get(' div:nth-child(5) > div > p').should('have.text', 'Re-enter password required')
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)' )
    cy.get('#signupRepeatPassword').type('1')
    cy.get('div:nth-child(5) > div > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    cy.get('#signupRepeatPassword').clear()
    cy.get('#signupRepeatPassword').type('11111111Qqq')
    cy.get(' div:nth-child(5) > div > p').should('have.text', 'Passwords do not match')

    //cheking enable or disable button
    cy.get('button[class="btn btn-primary"]').should('not.be.enabled'); //register button is not enabled
    cy.get('#signupRepeatPassword').clear()
    cy.get('#signupRepeatPassword').type('11111111Qq')
    cy.get('button[class="btn btn-primary"]').should('be.enabled'); //register button is enabled
    

    cy.get('button[class="btn btn-primary"]').click()
    cy.get('div.panel-page_heading.d-flex.justify-content-between > h1').should('have.text', 'Garage')
    
    
  });
*/

  it('LogIn', () => {
    
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
        //Log in
    cy.get('[class="btn btn-outline-white header_signin"]').should('be.visible').click()
    cy.get('[type="text"]').type('koko000@gmail.com')
    cy.get('[type="password"]').type('11111111Qq')
    cy.get('[class="btn btn-primary"]').click()
    cy.get('div.panel-page_heading.d-flex.justify-content-between > h1').should('have.text', 'Garage')
  })

})




