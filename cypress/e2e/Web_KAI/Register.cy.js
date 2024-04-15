/// <reference types="cypress" />

describe('Register Suites Case', () =>{
    it('Register with all blank field',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/register')
      cy.get('.btn').click()
      cy.get('.col-md-8 > :nth-child(1) > .help-block > .list-unstyled > li').should('Mohon isi Nama')
    })
})
