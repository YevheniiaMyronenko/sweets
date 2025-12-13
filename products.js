// products.js - демонстраційний файл з товарами.
// Замініть вміст productsData на свої товари або підвантажуйте JSON із сервера.
const productsData = [
  {
    "id": "c1",
    "name": "Желейні цукерки — Фруктова суміш",
    "category": "желейні цукерки",
    "image": "https://via.placeholder.com/600x400.png?text=%D0%96%D0%B5%D0%BB%D0%B5%D0%B9%D0%BD%D1%96",
    "note": ""
  },
  {
    "id": "c2",
    "name": "Шоколадні цукерки — Преміум",
    "category": "шоколадні цукерки",
    "image": "https://via.placeholder.com/600x400.png?text=%D0%A8%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4",
    "note": ""
  },
  {
    "id": "p1",
    "name": "Ванільне печиво — Ручна випічка",
    "category": "печиво",
    "image": "https://via.placeholder.com/600x400.png?text=%D0%9F%D0%B5%D1%87%D0%B8%D0%B2%D0%BE",
    "note": ""
  },
  {
    "id": "z1",
    "name": "Зефір — М'який зефір",
    "category": "зефір",
    "image": "https://via.placeholder.com/600x400.png?text=%D0%97%D0%B5%D1%84%D1%96%D1%80",
    "note": ""
  },
  {
    "id": "imp1",
    "name": "Імпортні солодощі — Сет",
    "category": "солодощі з закордонy",
    "image": "https://via.placeholder.com/600x400.png?text=%D0%86%D0%BC%D0%BF%D0%BE%D1%80%D1%82",
    "note": ""
  },
  {
    "id": "c3",
    "name": "Карамельні цукерки — Асорті",
    "category": "карамель",
    "image": "https://via.placeholder.com/600x400.png?text=%D0%9A%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D0%BB%D1%8C",
    "note": ""
  }
];

// Populate category filter and product grid
function populateCatalog() {
  const categories = Array.from(new Set(productsData.map(p => p.category)));
  const select = document.getElementById('categoryFilter');
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    select.appendChild(opt);
  });

  const grid = document.getElementById('productsGrid');
  function render(filter = 'all', query = '') {
    grid.innerHTML = '';
    const items = productsData.filter(p => (filter === 'all' || p.category === filter) &&
      p.name.toLowerCase().includes(query.toLowerCase()));
    if(items.length === 0) {
      grid.innerHTML = '<p class="muted">Товари не знайдені.</p>';
      return;
    }
    items.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="product-title">${p.name}</div>
        <div class="product-category">${p.category}</div>
        <div class="product-note">${p.note || ''}</div>
        <div class="product-actions"><a class="btn" href="contacts.html">Запитати про наявність</a></div>
      `;
      grid.appendChild(card);
    });
  }

  select.addEventListener('change', () => render(select.value, document.getElementById('searchInput').value));
  document.getElementById('searchInput').addEventListener('input', () => render(select.value, document.getElementById('searchInput').value));
  render('all', '');
}

document.addEventListener('DOMContentLoaded', populateCatalog);
