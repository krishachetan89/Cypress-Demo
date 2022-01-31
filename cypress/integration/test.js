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
    cy.get('#coiPage-1 > .coi-banner__page-footer > .coi-button-group > .coi-banner__accept')
      .click()
  })
  it("Verify the image icon on the site", function() {
    console.log(this.sample, "printing data")
    cy.get('.content-heading')
  })

  it("Verify if user is able to click on search button", function() {
    cy.get('.nav-item > .nav-link > .icon').click()
  })

  it("Verify if user is able to search for a value using search box", function() {
    cy.get('#q').click().type(this.sample.Name)
  })
})