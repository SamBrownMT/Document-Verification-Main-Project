describe('file upload page', () => {
	it('should redirect to summary after clicking continue', () => {
		cy.visit('localhost:3000/file-upload')
		cy.get('button').click()
		cy.url().should('eq','http://localhost:3000/summary')
	})

	// it('should not be able to upload wrong file types', () => {
	// 	cy.visit('localhost:3000/file-upload')
	// 	cy.get('input[name=file-upload-1')
	// 	.selectFile('./cypress/fixtures/example.json')
	// 	cy.get('button').click()
	// 	cy.get('#uploaded-files').contains('example.json')
	// })
})