describe('landing page', () => {
  it('should go to the landing page', () => {
    cy.visit('localhost:3000')
  })
  it('finds the content "name of service"', () => {
    cy.visit('localhost:3000')

    cy.contains('Name of Service')
  })
})