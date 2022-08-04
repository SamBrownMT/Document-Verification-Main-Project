describe('landing page', () => {
  it('should go to the landing page', () => {
    cy.visit('localhost:3000')
  })
  it('finds the content "Hello there!"', () => {
    cy.visit('localhost:3000')

    cy.contains('Hello there!')
  })
})