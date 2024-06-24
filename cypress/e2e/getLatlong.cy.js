import LandingPage from "../pages/LandingPage"
import TVSeriesPage from '../pages/tvSeriesPage'
import LocationsPage from '../pages/locationsPage'

describe('LatLong Test', ()=>{
    const landingPage = new LandingPage()
    const tvSeries = new TVSeriesPage()
    const locationsPage = new LocationsPage()


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

    it.only('Should get the place latitude and longitude of a tv serie', () => {
        landingPage.clickTVSeries()
        tvSeries.clickLocation()
        locationsPage.getTitle().contains('13 Reasons Why Locations').should('have.text', '13 Reasons Why Locations')

    })
})