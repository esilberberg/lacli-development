document.addEventListener('DOMContentLoaded', function () {
    const languageNavbar = document.getElementById('language-navbar');
    const librarySearch = document.getElementById('library-search');
    const refreshBtn = document.getElementById('refresh-btn-text');
    const randomBtn = document.getElementById('random-btn-text');
    const exportBtn = document.getElementById('export-btn-text');
    const filtersBtn = document.getElementById('filters-btn-text');



  
    const storedLanguage = localStorage.getItem('lacliLanguagePreference');
  
    if (storedLanguage) {
      updateLanguageSelection(storedLanguage);
      updateContentLanguage(storedLanguage);
    }
  
    function updateLanguageSelection(language) {
      const languageLinks = languageNavbar.getElementsByTagName('a');
  
      // Remove active class from navbar language links
      for (let i = 0; i < languageLinks.length; i++) {
        if (languageLinks[i].getAttribute('data-lang') === language) {
          languageLinks[i].classList.add('lang-link-active');
        } else {
          languageLinks[i].classList.remove('lang-link-active');
        }
      }
    }
    
    function updateContentLanguage(language) {
      const translations = {
        en: {
          placeholder: 'Search terms',
          refresh: 'New Search',
          random: 'Random',
          export: 'Download',
          filters: 'Filters',
        },
        es: {
          placeholder: 'Términos de búsqueda',
          refresh: 'Actualizar',
          random: 'Aleatorio',
          export: 'Descargar',
          filters: 'Filtros',

        },
        pt: {
          placeholder: 'Termos pesquisados',
          refresh: 'Atualizar',
          random: 'Aleatório',
          export: 'Exportar',
          filters: 'Filtros',
        },
      };
  
      librarySearch.placeholder = translations[language].placeholder;
      refreshBtn.textContent = translations[language].refresh;
      randomBtn.textContent = translations[language].random;
      exportBtn.textContent = translations[language].export;
      filtersBtn.textContent = translations[language].filters;

    }
  
    languageNavbar.addEventListener('click', function (event) {
      event.preventDefault();
      const selectedLanguage = event.target.getAttribute('data-lang');
      localStorage.setItem('lacliLanguagePreference', selectedLanguage);
      updateLanguageSelection(selectedLanguage);
      updateContentLanguage(selectedLanguage);
    });
  });
  