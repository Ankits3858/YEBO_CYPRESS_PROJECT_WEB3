import Login_Page from "../../pageobjects/Login_Page";
import Forgot_Password_Page from "../../pageobjects/Forgot_Password_Page";
import NFT_page from "../../pageobjects/NFT_page";
const nft = new NFT_page
const login = new Login_Page
const forgot_pwd = new Forgot_Password_Page
const user = require("../../fixtures/data")
import Homepage from "../../pageobjects/Homepage";
const home = new Homepage
const image = "cypress/fixtures/Picture.png"
import Create_Client_Page from "../../pageobjects/Create_Client_Page";
const create_client = new Create_Client_Page
import Common_Utils from "../../pageobjects/Common_Utils";
const utils = new Common_Utils
import Client_List_Page from "../../pageobjects/Client_List_Page";
const client_list = new Client_List_Page
describe('', () => {
    beforeEach(() => {
        cy.viewport(1536, 960)
        cy.visit(Cypress.env("qa"))
        cy.reload()
        login.get_email_field().type(user.name)
        login.get_password_field().type(user.password)
        login.get_login_btn().click({ force: true })
        cy.wait(5000)
    })
    afterEach('', () => {
        cy.wait(3000)
    })

    it('Testcase 1----> check the transactions fees after deploying 999 contracts', () => {
        function uploadNFT() {
          nft.get_nft_drpdwn().click();
          nft.get_create_nft_btn().click();
          nft.get_searchbar().type(user.client_name);
          cy.wait(2000)
          nft.get_select_client().click();
          nft.get_save_client_and_cntinu().click();
          cy.wait(4000)
          nft.get_upload_file_btn().selectFile(image);
          cy.generateRandomName().then((randomName) => {
            nft.get_title().type(randomName);
            nft.get_description().type(randomName);
          });
          //nft.get_list_price().type('11');
          nft.get_tags().type('super hero', "{enter}");
          nft.get_attri_name().type('super');
          nft.get_attri_value().type('cars');
          nft.get_nft_info_save_and_continue().click();
          
          cy.wait(5000);
          nft.get_volary().click();
          nft.get_save_network().click();
          cy.wait(4000);
          nft.get_nft_summary().click();
          nft.get_finalize_mint().click({ force: true });
          nft.get_wallet_pin_field().type('1234', { force: true });
          nft.get_unlock_btn().click();
          cy.wait(30000);
            home.get_yebo_icon().click();
            nft.get_nft_drpdwn().click();
          }
          
          // Run the code in a loop 999 times
          for (let i = 0; i < 999; i++) {
            uploadNFT();
          }
         // This code defines the uploadNFT function, which contains your existing code. Then, it runs the uploadNFT function inside a for loop 999 times, repeating the code block. Please make sure to adjust the loop count and any other details as needed for your specific testing requirements.
          
          
          
          
          
          

        














    })



})