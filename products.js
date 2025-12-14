// products.js - демонстраційний файл з товарами.
// Замініть вміст productsData на свої товари або підвантажуйте JSON із сервера.
const productsData = [
  {
    id: 1,
    name: "Фруктові цукерки",
    category: "Цукерки",
    image: "images/candies/fruit-candy.jpg",
    description: "Асорті: апельсин, чорниця, полуниця, лимон, кола, виноград, персик"
  },
  {
    id: 2,
    name: "Flower candy",
    category: "Цукерки",
    image: "images/candies/flower-candy",
    description: "Асорті: персик, полуниця, диня, кавун, ананас"
  },
  {
    id: 3,
    name: "Неон карамель",
    category: "Цукерки",
    image: "images/candies/neon-caramel",
    description: "Асорті: чорниця, виноград, полуниця, лимон, апельсин, яблуко"
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
