class Client_List_Page
{
get_client_list_menu()
{
    return cy.xpath('(//span[@class="link-text d-flex align-items-center flex-1"])[2]')
}
get_search_client()
{
    return cy.xpath('(//input[@type="text"])[2]')
}

get_view_client_details_btn()
{
    return cy.get(":nth-child(6) > .btn-wrap > .me-2")
}

get_funds_btn()
{
    return cy.xpath("(//button[@type='button'])[2]")
}

get_amts_field()
{
    return cy.xpath("(//input[@type='text'])[2]")
}

get_select_blockchains()
{
    return cy.get('.custom-select')
}

get_credit_card_number()
{
    return cy.get('#card-element')
}


get_save_btn()
{
    return cy.xpath('(//button[@type="button"])[8]')
}


get_cc()
{
    return cy.xpath("//select[@class='custom-select ng-dirty ng-valid ng-touched']")
}


get_()
{
    return cy.xpath("")
}


get_()
{
    return cy.xpath("")
}


get_()
{
    return cy.xpath("")
}



}
export default Client_List_Page