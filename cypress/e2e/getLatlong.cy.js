import LandingPage from "../pages/LandingPage"

describe('LatLong Test', ()=>{
    const landingPage = new LandingPage()


    beforeEach(() => {
        landingPage.visit()
    })

    it('Should find the latitude and longitude of a place', () => {
        cy.fixture('locations').then((data) => {
            data.locations.forEach((locationData) => {
                landingPage.typeLocation(locationData.location)
                landingPage.clickFind()
                landingPage.getLatlong().should('not.be.empty')
            })
        })
    })
})