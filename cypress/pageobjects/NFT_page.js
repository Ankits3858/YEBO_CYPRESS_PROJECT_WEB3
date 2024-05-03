class NFT_page
{
    get_nft_drpdwn()
    {
        return cy.get(':nth-child(3) > .menu-link > .link-text')
    }

    get_create_nft_btn()
    {
        return cy.xpath('(//a[@class="inner-menu-link d-flex ps-5"])[2]')
    }

    get_searchbar()
    {
        return cy.xpath('(//input[@type="text"])[2]')
    }
    get_save_client_and_cntinu()
    {
        return cy.xpath("(//button[contains(text(),'Save & Continue')])[1]")
    }
    get_upload_file_btn()
    {
        return cy.xpath("//input[@type='file']")
    }
    
    get_title()
    {
        return cy.get('.custom-form > :nth-child(2) > .custom-input')
    }
    
    get_description()
    {
        return cy.xpath('//textarea[@placeholder="write the description"]')
    }
    
    get_list_price()
    {
        return cy.xpath('(//input[@type="text"])[4]')
    }
    
    get_tags()
    {
        return cy.xpath("(//input[@type='text'])[5]")
    }
    
    get_attri_name()
    {
        return cy.xpath('//input[@type="text" and @formcontrolname="key"]')
    }
    
    get_attri_value()
    {
        return cy.xpath('//input[@type="text" and @formcontrolname="value"]')
    }
    
    get_nft_info_save_and_continue()
    {
        return cy.xpath('(//button[@class="common-btn primary-btn small"])[2]')
    }
    
    get_volary()
    {
        return cy.xpath('(//button[@class="modal-btn font14 lh-sm font-semi-bold text-black w-100 d-flex align-items-center m-0"])[3]')
    }
    
    get_ethereum()
    {
        return cy.xpath('(//button[@class="modal-btn font14 lh-sm font-semi-bold text-black w-100 d-flex align-items-center m-0"])[1]')
    }
    
    get_polygon()
    {
        return cy.xpath('(//button[@class="modal-btn font14 lh-sm font-semi-bold text-black w-100 d-flex align-items-center m-0"])[2]')
    }
    
    get_solana()
    {
        return cy.xpath('(//button[@class="modal-btn font14 lh-sm font-semi-bold text-black w-100 d-flex align-items-center m-0"])[4]')
    }
    
    get_save_network()
    {
        return cy.xpath('//button[@class="common-btn primary-btn"]')
    }
    
    get_nft_summary()
    {
        return cy.xpath('//button[@class="common-btn primary-btn"]')
    }
    
    get_finalize_mint()
    {
        return cy.get('.preview-block > .btn-wrap > .primary-btn')
    }
    
    get_wallet_pin_field()
    {
        return cy.get('.modal-body > .custom-form > .form-group > .input-wrapper > .custom-input')
    }
    
    get_unlock_btn()
    {
        return cy.xpath('//button[@class="common-btn primary-btn w-100"]')
    }

    get_select_client()
    {
        return cy.get('tbody > tr > :nth-child(1)')
    }
    
    get_()
    {
        return cy.xpath('')
    }
    
    get_()
    {
        return cy.xpath('')
    }
    
    get_()
    {
        return cy.xpath('')
    }
    
    get_()
    {
        return cy.xpath('')
    }
    
    get_()
    {
        return cy.xpath('')
    }
    
    get_()
    {
        return cy.xpath('')
    }
    
    
    
    





}
export default NFT_page