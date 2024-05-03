
import Login_Page from "./Login_Page";
import Forgot_Password_Page from "./Forgot_Password_Page";
const login = new Login_Page
const forgot_pwd = new Forgot_Password_Page
const user = require("../../fixtures/data")
import Homepage from "./Homepage";
const home = new Homepage
const image = "cypress/fixtures/Picture.png"
import Create_Client_Page from "./Create_Client_Page";
const create_client = new Create_Client_Page
import Common_Utils from "./Common_Utils";
const utils = new Common_Utils
import Client_List_Page from "./Client_List_Page";
const client_list = new Client_List_Page


describe('end to end testing for yebo application', () => {
    let isLoggedIn = false;
    beforeEach('login', () => {
        //cy.visit(Cypress.env("url"))
        // cy.visit(Cypress.env("uat"))
        cy.viewport(1536, 960)
        cy.visit(Cypress.env("sandbox"))
        cy.reload()
        login.get_email_field().type(user.name)
        login.get_password_field().type(user.password)
        login.get_login_btn().click({ force: true })

    })
    afterEach('', () => {
        cy.wait(4000)
    })
   it('Testcase 1----> check whether user is able to see all NFTs', () => {
        home.get_total_nft().click()
        cy.log(cy.url().should('include', 'nft-list') ? "user is successfully navigated to nft list page,testcase passed" : "user is not able to land on nft list page,testcase failed")

    })

   it('Testcase 2----> check whether user is able to see all Clients', () => {
        home.get_total_client().click()
        cy.log(cy.url().should('include', 'clients') ? "user is successfully navigated to client list page,testcase passed" : "user is not able to land on client list page,testcase failed")

    })
   it('Testcase 3----> check whether user is able to create client', () => {
        home.get_create_client_id_btn().click()
        create_client.get_client_profile_upload_btn().selectFile(image)

        cy.generateRandomName().then((randomName) => {
            // Use the generated random name in your test
            create_client.get_full_legal_name().type(randomName)
        });
        create_client.get_documentation_id_number().type(user.number)
        create_client.get_email_address().type(user.name)
        create_client.get_gender().select('Male')
        create_client.get_dob().type('1996-08-07')
        create_client.get_save_and_next_btn().click()
        cy.log(cy.get('.info-text').should('be.visible') ? "client created successfully,testcase got passed" : "client not created testcase got failed")

    })
   it('Testcase 4----> check whether user is able to create wallet', () => {
        home.get_create_client_id_btn().click()
        create_client.get_client_profile_upload_btn().selectFile(image)

        cy.generateRandomName().then((randomName) => {
            // Use the generated random name in your test
            create_client.get_full_legal_name().type(randomName)
        });
        create_client.get_documentation_id_number().type(user.number)
        create_client.get_email_address().type(user.name)
        create_client.get_gender().select('Male')
        create_client.get_dob().type('1996-08-07')
        create_client.get_save_and_next_btn().click()
        cy.get('.info-text').should('be.visible')
        create_client.get_create_wallet_button().click()
        cy.generateRandomName().then((randomName) => {
            create_client.get_wallet_name().type(randomName)
        })
        create_client.get_wallet_pin().type('1234')
        create_client.get_save_wallet_button().click()
        create_client.get_complete_wallet_creation_btn().click()
    })

   it.skip('Testcase 5----> check whether user is able to mint nft using solana', () => {
        home.get_total_client().click()
        client_list.get_search_client().type('Clever cat')
        cy.wait(4000)
        client_list.get_view_client_details_btn().click({ multiple: true })
        cy.wait(14000)
        client_list.get_funds_btn().click()
        client_list.get_amts_field().type('1')
        // client_list.get_select_blockchain().select('solana')
        client_list.get_select_blockchains().select('SOL')
        //cy.iframe(client_list.get_credit_card_number()).find(client_list.get_cc()).type('4242424242424242424242424242',{force:true});
        // client_list.get_credit_card_number().type('{enter}')
        //client_list.get_save_btn().click()
        // client_list.get_credit_card_number().click()
        cy.wait(2000)
        //client_list.get_credit_card_number().dblclick({force:true})
        //client_list.get_credit_card_number().type('4242424242424242424242424242',{force:true})
        //const iframe = cy.get('.__PrivateStripeElement > iframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap({ foo: 'bar' }).its('quux').should('not.exist'))
        // iframe.clear().type('4242424242424242424242424242',{force:true})
        const getIframeDocument = () => {
            return cy
                .get('.__PrivateStripeElement > iframe')

                .its('0.contentDocument.body').should('not.exist')
        }

        const getIframeBody = () => {

            return getIframeDocument()

                .its('body').should('be.undefined')

                .then(cy.wrap)
        }
        getIframeBody().find('input[class="InputElement is-empty Input Input--empty"]').should('be.hidden').type('4242424242424242424242424242', { force: true })
        // client_list.get_save_btn().click()




    })










})