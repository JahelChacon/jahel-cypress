class TVSeriesPage {
    constructor(){
        this.reasonsWhy = 'a[href="/location/13-reasons-why-locations-235"]'
    }

    clickLocation(){
        cy.get(this.reasonsWhy).click()
    }
}
export default TVSeriesPage