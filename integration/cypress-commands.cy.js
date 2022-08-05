//const { cy } = require("date-fns/locale");

describe("Custom Cypress Commands", () => {
  it("uses cy.getAllPosts()to retrieve all posts from the /api/posts endpoint", () => {
    // Create a custom Cypress Command called 'getAllPosts' which uses
    // cy.request() to get all of the posts from the /api/posts endpoint
    // Then use this custom command in this test to assert that the length of the posts
    // returned is equal to 2

    // cy.getAllPosts().then((post) => {
    //   cy.wrap(post).its("length").should("eq", 2);
    // });

    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      console.log(response.body)
      return cy.wrap(response.body).its(0);
    }).then((post) => {
      cy.wrap(post).its("id").should("eq", "pre-rendering");
    })
  });


  it("uses cy.getFirstPost() to retrieve the first post from the /api/posts endpoint", () => {
    // Create a custom Cypress Command called 'getFirstPost' which uses
    // cy.request() to get the first post from the /api/posts endpoint
    // Then use this custom command in this test to assert that the id of the first post
    // is equal to 'pre-rendering'

    cy.getFirstPost().then((post) => {
      cy.wrap(post).its("id").should("eq", "pre-rendering");
    });
  });
})
