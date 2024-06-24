class LandingPage {

    constructor(){
        this.webPage = 'https://www.latlong.net/'
        this.searchPlace = '#place'
        this.btnFind = '#btnfind'
        this.latLong = '#latlngspan'
    }

    visit(){
        cy.visit(this.webPage)
    }

    typeLocation(location){
        cy.get(this.searchPlace).type(location)
    }

    clickFind(){
        cy.get(this.btnFind).click()
    }

    getLatlong(){
        return cy.get(this.latLong);
    }

}

export default LandingPage;