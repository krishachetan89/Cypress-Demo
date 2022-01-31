describe("Verify the website", function() {
  before(function() {
    cy.visit("/")
  })
  beforeEach(function() {
    cy.fixture("sample").then(function(sample) {
      this.sample = sample
    })
  })
  it("Click on accept cookies", function() {
    cy.get('#coiPage-1 > .coi-banner__page-footer > .coi-button-group > .coi-banner__accept').click()
  })
  it("verfiy the image icon on the site", function() {
    console.log(this.sample, "printing data")
    cy.get('.content-heading')
  })
})