describe('account page', () => {
	it('should display Ibrahimas details if given the ID "1"', () => {
		cy.window().then((win) => {
				win.sessionStorage.setItem('id',1)
		})
		cy.visit('localhost:3000/account')
		cy.contains('Ibrahima Bakayoko')
		cy.contains('28/04/1976')
		cy.contains('Goodison Road')
		cy.contains('YO21 7BH')
		cy.contains('07934 283482')
		cy.contains('ibrahima@bakayoko.com')
	})
    
})