// Marca no menu a página aberta para ajudar na navegação.
document.querySelectorAll('.site-nav a').forEach((link) => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (link.getAttribute('href') === currentPage) {
        link.setAttribute('aria-current', 'page');
    }
});
