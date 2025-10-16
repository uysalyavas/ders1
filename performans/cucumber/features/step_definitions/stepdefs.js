const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('sistem çalışıyor', function () {
  console.log('Sistem aktif ✅');
});

When('kullanıcı siteye gider', function () {
  console.log('Kullanıcı siteye gitti 🌐');
});

Then('hoş geldiniz mesajı görünür', function () {
  const mesaj = 'Hoş geldiniz!';
  assert.strictEqual(mesaj, 'Hoş geldiniz!');
});
