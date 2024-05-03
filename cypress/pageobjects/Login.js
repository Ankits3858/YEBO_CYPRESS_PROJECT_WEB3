import Login_Page from "../../pageobjects/Login_Page";
import Forgot_Password_Page from "../../pageobjects/Forgot_Password_Page";
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
describe('Login module', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("sandbox"))
    })
    afterEach('', () => {
        cy.wait(3000)
    })
    it("TC_email_01,Check whether email field is accepting alpha numeric characters", () => {
        cy.log(login.get_email_field().type('testing123').should('have.value', 'testing123') ? "email field is accepting alpha numeric characters,testcase got passed" : "email field is not accepting alpha numeric characters,testcase failed")
    })
    it("TC_email_02,Check whether email field is accepting characters", () => {
        cy.log(login.get_email_field().type('testing').should('have.value', 'testing') ? "email field is accepting characters,testcase got passed" : "email field is not accepting characters,testcase failed")
    })
    it("TC_email_03,Check whether email field is accepting numbers", () => {
        cy.log(login.get_email_field().type('testing').should('have.value', 'testing') ? "email field is accepting numbers,testcase got passed" : "email field is not accepting numbers,testcase failed")
    })
    it("TC_email_04,Check whether email is accepting special characters", () => {
        cy.log(login.get_email_field().type('!@#').should('have.value', '!@#') ? "email field is accepting special characters,testcase got passed" : "email field is not accepting special characters,testcase failed")
    })


    it("TC_email_05,Check whether email is accepting only @domain.com", () => {
        login.get_email_field().type('@domain.com')
        login.get_login_btn().click()
        cy.log(login.get_email_alert_toast().should('have.text', 'Please enter valid email') ? "email field is not accepting invalid mail-invalid email message displayed,testcase got passed" : "email field is accepting invalid mail-invalid email message not displayed,testcase failed")

    })

    /////////////////////////////////////
    it("TC_password_06,Check whether password field is accepting alpha numeric characters", () => {
        cy.log(login.get_password_field().type('testing123').should('have.value', 'testing123') ? "password field is accepting alpha numeric characters,testcase got passed" : "password field is not accepting alpha numeric characters,testcase failed")
    })
    it("TC_password_07,Check whether password field is accepting characters", () => {
        cy.log(login.get_password_field().type('testing').should('have.value', 'testing') ? "password field is accepting characters,testcase got passed" : "password field is not accepting characters,testcase failed")
    })
    it("TC_password_08,Check whether password field is accepting numbers", () => {
        cy.log(login.get_password_field().type('testing').should('have.value', 'testing') ? "password field is accepting numbers,testcase got passed" : "password field is not accepting numbers,testcase failed")
    })
    it("TC_password_09,Check whether password is accepting special characters", () => {
        cy.log(login.get_password_field().type('!@#').should('have.value', '!@#') ? "password field is accepting special characters,testcase got passed" : "password field is not accepting special characters,testcase failed")
    })


    it("TC_password_10,Check whether password is accepting incorrect", () => {
        login.get_password_field().type('@domain.com')
        login.get_password_field().clear()
        login.get_login_btn().click({ force: true })
        cy.log(login.get_password_alert_toast().should('have.text', 'Please enter valid password') ? "password field is not accepting invalid mail-invalid password message displayed,testcase got passed" : "password field is accepting invalid mail-invalid password message not displayed,testcase failed")

    })










})