class Forgot_Password_Page
{
get reset_email_field()
{
    return cy.xpath('//input[@type="email"]')
}
get reset_password_button()
{
    return cy.xpath('//button[@type="button"]')
}

get login_page_link()
{
    cy.xpath('//a[@href="/login"]')
}

}
export default Forgot_Password_Page