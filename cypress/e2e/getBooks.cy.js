import APIPage from '../pages/api'

describe('API Test', () => {
    const API = new APIPage()

    it('Should get books from API', () => {
        API.getBooks().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.books).to.have.length.greaterThan(0)
        })
    })
    
})