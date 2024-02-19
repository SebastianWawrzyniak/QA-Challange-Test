describe('Task no. 1', () => { 
  it('Check if the button is yellow', () => {
    cy.visit('https://www.sapfioneer.com/');
    cy.get('.header-nav > .html > .header-button > .button').should('have.css', 'background-color', 'rgb(255, 212, 60)');
    
    cy.on('uncaught:exception', (err) => {
      console.error('Console error jQuery', err.message);
      return false;
    });
  });
});
 

   describe ('Task no.2', () => {
  it('Veryfy the correct page', () => {
    cy.visit('https://www.sapfioneer.com/');
    cy.get('#menu-item-29979 > .nav-top-link').click();
    cy.contains('ESG KPI Engine').click({force:true});
    //check correct page
    cy.url().should('include', '/finance-esg/esg-kpi-engine');

    cy.on('uncaught:exception', (err) => {
    console.error('Console error jQuery', err.message);
    return false;
   })
  })
}); 


 describe ('Task no 3', () =>{
  it ('Validation error massage', () =>{
    cy.visit('https://www.sapfioneer.com/');
    
    cy.on('uncaught:exception', (err) => {
      console.error('Console error jQuery', err.message);
      return false;
  })
 
    cy.get('.header-nav > .html > .header-button > .button > span').click();
    cy.get('#hs-form-iframe-0').scrollIntoView();
    
    cy.get('iframe').then(($iframe) => {
      const iframeContent = $iframe.contents().find('body');
    
      // connect to iframe
    cy.wrap(iframeContent).as('iframe');
    
      //Type incorect mail
    cy.get('@iframe').find('input.hs-input[type="email"]').type('342323');
    cy.wait(2000)

      //Validation message be visible
    cy.get('@iframe').find('.hs-error-msg.hs-main-font-element').should('be.visible').and('contain', 'Email must be formatted correctly.');
    });
  })
});  
