
import Login_Page from "../../pageobjects/Login_Page";
import Forgot_Password_Page from "../../pageobjects/Forgot_Password_Page";
import NFT_page from "../../pageobjects/NFT_page";
import Client_List_Page from "../../pageobjects/Client_List_Page";
import Common_Utils from "../../pageobjects/Common_Utils";
import Create_Client_Page from "../../pageobjects/Create_Client_Page";
import Homepage from "../../pageobjects/Homepage";
const nft = new NFT_page
const login = new Login_Page
const forgot_pwd = new Forgot_Password_Page
const user = require("../../fixtures/data")
const home = new Homepage
const image = "cypress/fixtures/Picture.png"
const create_client = new Create_Client_Page
const utils = new Common_Utils
const client_list = new Client_List_Page
describe('', () => {
   

    beforeEach(() => {
        cy.viewport(1536, 960);
        cy.visit(Cypress.env("qa"));
        cy.reload();
        cy.reload();
        cy.wait(3000)

        login.get_email_field().type(user.name);
        login.get_password_field().type(user.password);
        login.get_login_btn().click({ force: true });
        cy.wait(4000)
      });
      
      afterEach('', () => {
        home.get_profile_button().click({ force: true })
        cy.wait(2000)
        home.get_signout_button().click({ force: true })
        cy.wait(3000)
      });
      
      for (let i = 0; i < 999; i++) {
        it(`Testcase ${i + 1}----> check the transactions fees after deploying 999 contracts using volary`, () => {
          home.get_total_nft().click();
          cy.log(
            cy.url().should('include', 'nft-list')
              ? 'user is successfully navigated to nft list page,testcase passed'
              : 'user is not able to land on nft list page,testcase failed'
          );
          nft.get_nft_drpdwn().click();
          nft.get_create_nft_btn().click();
          nft.get_searchbar().type(user.client_name);
          nft.get_select_client().click();
          nft.get_save_client_and_cntinu().click();
          nft.get_upload_file_btn().selectFile(image);
          cy.generateRandomName().then((randomName) => {
            nft.get_title().type(randomName);
            nft.get_description().type(randomName);
          });
          nft.get_list_price().type('11');
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
      
         
        });
      }



})