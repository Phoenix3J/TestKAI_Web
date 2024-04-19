describe('Login - Negative Case', () => {
    it('Login with all blank field',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/auth/login')
      cy.get('.btn').click()
      cy.get('.col-md-6').find('li').eq(0).should('have.text','Username wajib diisi.')
      cy.get('.col-md-6').find('li').eq(1).should('have.text','Please fill out this field.')         
    })


    it('Login with Username Blank',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/auth/login')
      cy.get('#password').type('112233')
      cy.get('.btn').click()
      cy.get('.col-md-6').find('li').eq(1).should('have.text','Please fill out this field.')        
    })

    it('Login with Password Blank',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/auth/login')
      cy.get('#username').type('Budi')
      cy.get('.btn').click()
      cy.get('.col-md-6').find('li').eq(0).should('have.text','Password wajib diisi.')
      
    })

})
