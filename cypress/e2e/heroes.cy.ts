describe("Hero", () => {
  it("render hero arena with generated fighters after play-heroes-button clicked", () => {
    cy.visit("localhost:4200")
    cy.get('[data-testid="play-heroes-button"]').click()
    cy.get('[data-testid="hero-card"]', { timeout: 5000 }).should("exist")
  })

  it("re-render hero arena when replay button clicked", () => {
    cy.visit("localhost:4200")
    cy.get('[data-testid="play-heroes-button"]').click()
    cy.get('[data-testid="hero-card"]', { timeout: 5000 }).should("exist")

    cy.get('[data-testid="replay-button"]').click()
    cy.get('[data-testid="hero-card"]', { timeout: 5000 }).should("exist")
  })

  it("navigate to main page after header link clicked", () => {
    cy.visit("localhost:4200")
    cy.get('[data-testid="play-heroes-button"]').click()
    cy.get('[data-testid="hero-card"]', { timeout: 5000 }).should("exist")

    cy.get('[data-testid="header-link"]').click()
  })
})
