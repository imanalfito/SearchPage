const {type} = require ("cypress/types/jquery")

const url = ('http://zero.webappsecurity.com/login.html')
const searchTermInput = '#searchTerm';
const searchButton = '#searchButton';
const searchResults = '.search-results';

class SearchPage {
    constructor() {
      this.searchTermInput = '#searchTerm';
      this.searchButton = '#searchButton';
      this.searchResults = '.search-results';
    }
  
    enterSearchTerm(searchTerm) {
      cy.get(this.searchTermInput).type(searchTerm);
    }
  
    static clickSearchButton() {
      cy.get(this.searchButton).click();
    }
  
    verifySearchResultsContain(searchTerm) {
      cy.url().should('include', '/search.html');
      cy.get(this.searchResults).should('contain', searchTerm);
    }
  
    verifySearchTermRequiredError() {
      cy.get(this.searchButton).click();
      cy.get(this.searchResults).should('contain', 'Istilah pencarian diperlukan');
    }
  
    verifyNoSearchResultsFound(searchTerm) {
      cy.get(this.searchTermInput).type(searchTerm);
      cy.get(this.searchButton).click();
      cy.url().should('include', '/search.html');
      cy.get(this.searchResults).should('contain', `Tidak ada hasil pencarian yang ditemukan untuk "${searchTerm}"`);
    }
  }
  
  export default new SearchPage();


