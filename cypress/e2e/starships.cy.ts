describe("Starship", () => {
  it("render starship arena with generated starships after play-heroes-button clicked", () => {
    cy.visit("localhost:4200")
    cy.get('[data-testid="play-starships-button"]').click()
    cy.get('[data-testid="starship-card"]', { timeout: 5000 }).should("exist")
  })

  it("re-render starship arena when replay button clicked", () => {
    cy.visit("localhost:4200")
    cy.get('[data-testid="play-starships-button"]').click()
    cy.get('[data-testid="starship-card"]', { timeout: 5000 }).should("exist")

    cy.get('[data-testid="replay-button"]').click()
    cy.get('[data-testid="starship-card"]', { timeout: 5000 }).should("exist")
  })

  it("navigate to main page after header link clicked", () => {
    cy.visit("localhost:4200")
    cy.get('[data-testid="play-starships-button"]').click()
    cy.get('[data-testid="starship-card"]', { timeout: 5000 }).should("exist")

    cy.get('[data-testid="header-link"]').click()
  })
})
