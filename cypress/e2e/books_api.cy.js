
describe('Open Library API Testleri', () => {
  const baseUrl = 'https://openlibrary.org';

  // 1. Temel kitap arama testi
  it('Kitap arama - Tolkien', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/search.json?q=tolkien`,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Cypress-Test'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('docs');
      expect(response.body.docs).to.be.an('array');
      expect(response.body.docs[0]).to.have.property('title');
    });
  });

  // 2. Boş arama testi (query parametresi olmadan)
  it('Boş arama sonucu geçerli yanit dönmeli', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/search.json?q=`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // 3. Farklı bir kitap arama - Harry Potter
  it('Kitap arama - Harry Potter', () => {
    cy.request(`${baseUrl}/search.json?q=harry+potter`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.numFound).to.be.greaterThan(0);
      });
  });

  // 4. Belirli bir kelimeyle arama
  it('Belirli bir kelimeyle arama yapilmali', () => {
  const searchTerm = 'history';
  cy.request(baseUrl + '/search.json?q=' + searchTerm).then((response) => {
    expect(response.status).to.eq(200);
  });
});

  // 5. Yanıt süresi kontrolü
  it('Yanit süresi 1000ms altinda olmali', () => {
    cy.request(`${baseUrl}/search.json?q=tolkien`)
      .then((response) => {
        expect(response.duration).to.be.lessThan(1000);
      });
  });

  // 6. JSON format kontrolü
  it('Yanit JSON formatinda olmali', () => {
    cy.request(`${baseUrl}/search.json?q=tolkien`)
      .then((response) => {
        expect(response.headers['content-type']).to.include('application/json');
      });
  });

  // 7. Başlık doğrulama testi
  it('Başliklarda Accept header bulunmali', () => {
    cy.request(`${baseUrl}/search.json?q=tolkien`)
      .then((response) => {
        expect(response.headers).to.have.property('content-type');
      });
  });

  // 8. Yazar alanı kontrolü
  it('İlk sonuçta author_name alani bulunmali', () => {
    cy.request(`${baseUrl}/search.json?q=tolkien`)
      .then((response) => {
        expect(response.body.docs[0]).to.have.property('author_name');
      });
  });

  // 9. ISBN sorgusu testi
  it('ISBN ile arama yapilabilmeli', () => {
    cy.request(`${baseUrl}/search.json?isbn=9780261103573`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.docs[0]).to.have.property('title');
      });
  });

  // 10. Geçersiz endpoint testi
  it('Geçersiz endpoint 404 dönmeli', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/invalidendpoint`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
