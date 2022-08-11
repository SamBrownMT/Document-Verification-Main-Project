describe('summary page', () => {
	it('should display Ibrahimas details if given the ID "1"', () => {
		cy.window().then((win) => {
				win.sessionStorage.setItem('id',1)
		})
		cy.visit('localhost:3000/summary')
		cy.contains('Ibrahima Bakayoko')
        cy.contains('28/04/1976')
        cy.contains('Goodison Road')
        cy.contains('TO21 7BH')
	})
    
})