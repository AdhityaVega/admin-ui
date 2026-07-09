describe('Dashboard E2E Test', () => {
  it('User successfully logs in and accesses the dashboard (overview) page', () => {
    // 1. Kunjungi halaman utama (atau halaman login)
    cy.visit('http://localhost:5173/login'); // Sesuaikan port dengan yang digunakan Vite/React

    // 2. Masukkan email
    cy.get('input#email')
      .should('be.visible')
      .type('hello@example.com'); // Gunakan kredensial yang valid dari backend

    // 3. Masukkan password
    cy.get('input#password')
      .should('be.visible')
      .type('123456'); // Gunakan password yang valid dari backend

    // 4. Klik tombol Login
    cy.get('button').contains('Login').click();

    // 5. Pastikan URL berubah menjadi halaman dashboard '/'
    cy.url().should('eq', 'http://localhost:5173/');

    // 6. Verifikasi elemen sidebar logo FINEbank tampil
    cy.contains('FINEbank.io').should('be.visible');

    // 7. Verifikasi bahwa menu Overview aktif atau teks pengguna (John Doe) tampil
    cy.contains('Overview').should('be.visible');
    
    // 8. Verifikasi teks konten Dashboard utama tampil (contoh: Total Balance atau Account Type)
    cy.contains('Account Type').should('be.visible');
    cy.contains('Credit Card').should('be.visible');
  });
});
