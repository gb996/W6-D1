document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-tema');
    const htmlElement = document.documentElement;
  
    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-bs-theme');
      
      if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        toggleBtn.textContent = 'Tema scuro';
        toggleBtn.classList.replace('btn-outline-dark', 'btn-outline-light');
      } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        toggleBtn.textContent = 'Tema chiaro';
        toggleBtn.classList.replace('btn-outline-light', 'btn-outline-dark');
      }
    });
  });