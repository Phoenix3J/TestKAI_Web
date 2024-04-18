/// <reference types="cypress" />

describe('Negative Case', () => {
    it('Register with all blank field',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/register')
      cy.get('.btn').click()
      cy.get('.col-md-8').find('li').eq(1).should('have.text','Mohon isi Nama')
      cy.get('.col-md-8').find('li').eq(2).should('have.text','Mohon isi Nomor Identitas')
      cy.get('.col-md-8').find('li').eq(3).should('have.text','Mohon isi Email')
      cy.get('.col-md-4 > .has-error > .help-block').should('have.text','Mohon isi No HP')
      cy.get('.col-md-12').find('li').eq(0).should('have.text','Password wajib diisi')
      cy.get('.col-md-12').find('li').eq(1).should('have.text','Konfirmasi Password wajib diisi')
                 
    })

    it('Register with invalid format of Nomor Identitas',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/register')
      cy.get('#member_nama').type('Budi')  
      cy.get('#member_notandapengenal').type('123123AAA1231231') //Format Alphanumeric untuk no KTP
      cy.get('#member_email').type('budi@gmail.co.id')
      cy.get('#member_nohp').type('085640022331')
      cy.get('#member_pass1').type('123abc123')
      cy.get('#member_pass2').type('123abc123')
      cy.get('.btn').click()
      cy.get('.has-error > .help-block').should('have.text','Format Nomor Identitas tidak sesuai dengan Tipe Identitas yang dipilih.')
              
    })


    it('Register with invalid format of Nomor Identitas (digit kurang dari <16)',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/register')
      cy.get('#member_nama').type('Budi')  
      cy.get('#member_notandapengenal').type('123') //hanya 3 digit
      cy.get('#member_email').type('budi@gmail.co.id')
      cy.get('#member_nohp').type('085640022331')
      cy.get('#member_pass1').type('123abc123')
      cy.get('#member_pass2').type('123abc123')
      cy.get('.btn').click()
      cy.get('.has-error > .help-block').should('have.text','Format Nomor Identitas tidak sesuai dengan Tipe Identitas yang dipilih.')
              
    })

    it('Register with invalid format of email',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/register')
      cy.get('#member_nama').type('Budi')  
      cy.get('#member_notandapengenal').type('3334441112223332') 
      cy.get('#member_email').type('budi@gmailco') //invalid format email
      cy.get('#member_nohp').type('085640022331')
      cy.get('#member_pass1').type('123abc123')
      cy.get('#member_pass2').type('123abc123')
      cy.get('.btn').click()
      cy.get('.has-error > .help-block').should('have.text','Format Email invalid.')
              
    })

    it('Register with invalid format password (alphabet only)',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/register')
      cy.get('#member_nama').type('Budi')  
      cy.get('#member_notandapengenal').type('3334441112223332') 
      cy.get('#member_email').type('budi@gmail.co.id') 
      cy.get('#member_nohp').type('085640022331')
      cy.get('#member_pass1').type('aaaaaa')
      cy.get('#member_pass2').type('aaaaaa')
      cy.get('.btn').click()
      cy.get('.has-error > .help-block').should('have.text','Format Password invalid.')
              
    })

    it('Register with invalid format password (numeric only)',() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.visit('https://booking.kai.id/register')
      cy.get('#member_nama').type('Budi')  
      cy.get('#member_notandapengenal').type('3334441112223332') 
      cy.get('#member_email').type('budi@gmail.co.id') 
      cy.get('#member_nohp').type('085640022331')
      cy.get('#member_pass1').type('123123')
      cy.get('#member_pass2').type('123123')
      cy.get('.btn').click()
      cy.get('.has-error > .help-block').should('have.text','Format Password invalid.')
              
    })


})
