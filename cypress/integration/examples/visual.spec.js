context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://barratthomes.co.uk/')
  })

  it('tests Barratt homes layout', () => {
 	 cy.eyesOpen({
      appName: 'Barratt home page',
      browser: { width: 800, height: 600 },
    });
    cy.eyesCheckWindow({
      layout: [
          {selector: '.marketing-header'},
          {selector: '.hero-image-intro'},
          {selector: '.cookie-alert'}
      ]
    });
 	cy.eyesClose();    

  })
})



