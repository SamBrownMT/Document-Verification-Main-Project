describe('landing page', () => {
  it('should go to the landing page', () => {
    cy.visit('localhost:3000')
  })
  it('finds the content "name of service"', () => {
    cy.visit('localhost:3000')

    cy.contains('Name of Service')
  })
})

describe('login page', () => {
	it('should redirect to login page after clicking continue', () => {
		cy.visit('localhost:3000/login')
		cy.get('button').click()
		cy.url().should('eq','http://localhost:3000/account')
  })
})

describe('account page', () => {
	it('should handle post requests', () => {
		cy.request({
      method: 'POST',
      url: 'localhost:3000/account'
    })
  })
})

describe('confirmation page', () => {
  it('should go to the confirmation page', () => {
    cy.visit('localhost:3000/confirmation')
  })
  it('finds the content "Application complete"', () => {
    cy.visit('localhost:3000/confirmation')

    cy.contains('Application complete')
  })
})