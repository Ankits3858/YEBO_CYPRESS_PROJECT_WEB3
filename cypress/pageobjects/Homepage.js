class Homepage {
    get_create_client_id_btn() {
        return cy.xpath("//button[contains(text(),'Create Client ID')]")
    }
    get_total_nft() {
        return cy.xpath('(//i[@class="bi bi-arrow-up-right-square d-inline-flex"])[1]')
    }

    get_total_client() {
        return cy.xpath('(//i[@class="bi bi-arrow-up-right-square d-inline-flex"])[2]')
    }

    get_profile_button() {
        return cy.xpath('(//button[@data-bs-toggle="dropdown"])[2]')
    }
    get_signout_button() {
        return cy.get(':nth-child(4) > .dropdown-menu > :nth-child(2) > .dropdown-item')
    }
    get_yebo_icon() {
        return cy.xpath('//a[@routerlink="/home"]')
    }
    get_() {
        return cy.xpath('')
    }

}
export default Homepage