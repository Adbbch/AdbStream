/* ============================================
   ADB — Bouton de recherche : comportement
   À inclure juste avant </body>, après le bloc HTML du bouton.
   ============================================ */

(function () {
  const wrap   = document.getElementById('adbSearch');
  const toggle = document.getElementById('adbToggle');
  const input  = document.getElementById('adbInput');

  if (!wrap || !toggle || !input) return;

  function openSearch() {
    wrap.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    setTimeout(() => input.focus(), 200);
  }

  function closeSearch() {
    wrap.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    input.value = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = wrap.classList.contains('is-open');
    (isOpen && document.activeElement !== input) ? closeSearch() : openSearch();
  });

  input.addEventListener('blur', () => {
    if (!input.value) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });

  // Optionnel : branche ici ta logique de recherche réelle
  wrap.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    // ex: window.location.href = `/recherche?q=${encodeURIComponent(query)}`;
    console.log('Recherche ADB :', query);
  });
})();
