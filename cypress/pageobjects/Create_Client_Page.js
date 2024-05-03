class Create_Client_Page
{
    get_client_profile_upload_btn()
    {
        return cy.xpath('//input[@class="file-input"]')
    }
    get_full_legal_name()
    {
        return cy.xpath('(//input[@type="text"])[2]')
    }
    get_documentation_id_number()
    {
        return cy.xpath('(//input[@type="text"])[3]')
    }
    get_email_address()
    {
        return cy.xpath('//input[@type="email"]')
    }
    get_gender()
    {
        return cy.get('.custom-select')
    }
    get_dob()
    {
        return cy.xpath('//input[@type="date"]')
    }
    get_address_field()
    {
        return cy.xpath('(//input[@type="text"])[4]')
    }
    get_save_and_next_btn()
    {
        return cy.xpath('//button[@type="submit"]')
    }
    get_create_wallet_button()
    {
        return cy.xpath('(//button[@class="modal-btn font14 lh-sm font-semi-bold text-black w-100 d-flex align-items-center"])[1]')
    }

    get_wallet_name()
    {
        return cy.xpath('(//input[@type="text"])[2]')
    }


    get_save_wallet_button()
    {
        return cy.xpath('//button[@type="submit"]')
    }

    get_wallet_pin()
    {
        return cy.xpath('//input[@type="password"]')
    }

    get_complete_wallet_creation_btn()
    {
        return cy.xpath('(//button[@type="button"])[2]')
    }

    

    


    
    
    
    
    
    
    


}
export default Create_Client_Page