describe('summary page', () => {
    it('should display name "Ibrahima Bakayoko" if given the ID "1"', () => {
        cy.window().then((win) => {
            win.sessionStorage.setItem('id',1)
        })
        cy.visit('localhost:3000/summary')
        cy.contains('Ibrahima Bakayoko')
    })
  })