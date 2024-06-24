class LandingPage {

    constructor(){
        this.webPage = 'https://www.latlong.net/'
        this.searchPlace = '#place'
        this.btnFind = '#btnfind'
        this.latLong = '#latlngspan'
        this.tvSeries = 'a[href="/tv-series-locations"]'
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

    clickTVSeries(){
        cy.contains('a', 'TV Series Locations').click()
    }

    getLatlong(){
        return cy.get(this.latLong);
    }

}

export default LandingPage;