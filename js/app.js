document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('dark-mode-toggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      // 1. Cambia la clase en el HTML y en el BODY para asegurar
      document.documentElement.classList.toggle('dark');
      document.body.classList.toggle('dark');

      // 2. Cambia el icono del botón
      if (document.body.classList.contains('dark') || document.documentElement.classList.contains('dark')) {
        toggleBtn.textContent = '🌙';
      } else {
        toggleBtn.textContent = '☀️';
      }
    });
  } else {
    console.error('No se encontró el botón con id="dark-mode-toggle"');
  }
});