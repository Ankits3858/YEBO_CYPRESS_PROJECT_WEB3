class Login_Page
{
get_email_field()
{
    return cy.xpath('//input[@type="email"]')
}

get_password_field()
{
    return cy.xpath('(//input[@type="password"])[1]')
}

get_login_btn()
{
    return cy.xpath('//button[@type="submit"]')
}

get_zkp_login_btn()
{
return cy.xpath('//button[@type="button"]')
}

get_forgot_pwd()
{
    return cy.xpath('//a[@href="/forgot-password"]')
}

get_email_alert_toast()
{
    return cy.xpath("//span[contains(text(),'Please enter valid email')]")
}

get_password_alert_toast()
{
    return cy.xpath("//span[contains(text(),'Please enter valid password')]")
}


}
export default Login_Page