/// <reference types="Cypress" />

context('Location', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1500)
    })

    it('Test display day of week element', () => {
        cy.get('.date-container').should('be.visible')
    })

    it('Test display  datetime display correctly', () => {
        cy.get('.firstHourDigit').should('be.visible')
        cy.get('.secondHourDigit').should('be.visible')
        cy.get('.firstMinuteDigit').should('be.visible')
        cy.get('.secondMinuteDigit').should('be.visible')
        cy.get('.firstSecondDigit').should('be.visible')
        cy.get('.secondSecondDigit').should('be.visible')
    })

    it('Test background display', () => {
        const hours = new Date().getHours();

        if (5 < hours && hours > 18) {
            cy.get('.daylight').should('not.be.visible')
        } else {
            cy.get('.nightlight').should('not.be.visible')
        }
    })
})
  