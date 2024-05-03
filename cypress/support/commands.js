// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types = "Cypress"/>
/// <reference types = "cypress-xpath"/>

function generateRandomName() {
    const adjectives = ['Happy', 'Silly', 'Clever', 'Adventurous', 'Friendly','Stuntman','Angry','Cute','Generous','Super','Lilliput','Blossom','Powerfull'];
    const nouns = ['Dog', 'Cat', 'Elephant', 'Monkey', 'Dolphin','Mario','Jordan','Dora','Car','Lion','Bear','Shinchan','Nobita','Mickey','Mouse','Nemo','Mimi','Roger','David'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  }

  // cypress/support/commands.js or your custom file

// Define a custom Cypress command to generate a random name
Cypress.Commands.add('generateRandomName', () => {
    const randomName = generateRandomName();
    return cy.wrap(randomName); // Wrap the random name to make it chainable
  });
  