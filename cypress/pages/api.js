class APIPage {
    getBooks() {
        return cy.request('GET', 'https://demoqa.com/BookStore/v1/Books');
    }
}
export default APIPage;