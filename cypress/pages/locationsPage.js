class LocationsPage {
    constructor(){
        this.h1 = 'h1'
    }

    getTitle(){
        return cy.get(this.h1)
    }
}
export default LocationsPage