import SearchPage from '../pageObjects/searchPage';

Given('mengunjungi website', () => {
  cy.visit('http://zero.webappsecurity.com/index.html');
});

When('melakukan penelusuran saya klik tombol cari', (searchTerm) => {
  SearchPage.enterSearchTerm(searchTerm);
  SearchPage.clickSearchButton();
});

Then('saya akan diarahkan ke hasil pencarian', (searchTerm) => {
  SearchPage.verifySearchResultsContain(searchTerm);
});

Then('pencarian berhasil', (searchTerm) => {
  SearchPage.verifySearchResultsContain(searchTerm);
});

When('menu pencarian kosong', () => {
  SearchPage.clickSearchButton();
});

Then('terdapat pesan error', () => {
  SearchPage.verifySearchTermRequiredError();
});

When('melakukan pencarian dengan keyword salah', (searchTerm) => {
  SearchPage.enterSearchTerm(searchTerm);
  SearchPage.clickSearchButton();
});

Then(' tidak menemukan hasil pencarian pencarian', (searchTerm) => {
  SearchPage.verifyNoSearchResultsFound(searchTerm);
});
