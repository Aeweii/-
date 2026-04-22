// ==================== КОНСТАНТЫ И ДАННЫЕ ====================
const DELIVERY_PRICES = {
  center: 200,
  west: 300,
  east: 300,
  north: 300,
  south: 300,
  urban: 350,
  dzhalil: 500,
};
const FREE_DELIVERY_THRESHOLD = 3000;
const ITEMS_PER_PAGE = 8;

const productsData = [
  {
    id: 1,
    name: "Нежность пионов",
    price: 2900,
    description: "Изысканный букет из нежных пионов",
    composition: ["Розовые пионы"],
    category: "author",
    badge: "Хит продаж",
    image: "./media/img/pion.jpeg",
    media: [
      { type: "image", url: "./media/img/pion.jpeg" },
      { type: "image", url: "./media/img/pionnn.jpeg" },
      {
        type: "video",
        url: "./media/video/pionn.mp4",
        poster: "./media/img/pion.jpeg",
      },
    ],
  },
  {
    id: 2,
    name: "Мятный эвкалипт",
    price: 2400,
    description: "Стильная композиция с эвкалиптом",
    composition: ["Эвкалипт", "Белые розы"],
    category: "author",
    badge: "",
    image: "./media/img/mint.jpg",
    media: [
      { type: "image", url: "./media/img/mint.jpg" },
      { type: "image", url: "./media/img/mint.jpg" },
    ],
  },
  {
    id: 3,
    name: "Розовое облако",
    price: 3200,
    description: "Нежный романтичный букет",
    composition: ["Розовые розы", "Гипсофила"],
    category: "wedding",
    badge: "Свадебный",
    image: "./media/img/pink.jpg",
    media: [
      { type: "image", url: "./media/img/pink.jpg" },
      { type: "image", url: "./media/img/pinkk.jpeg" },
      {
        type: "video",
        url: "./media/video/rose.mp4",
        poster: "./media/img/pink.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Лавандовый сон",
    price: 2700,
    description: "Ароматный букет с лавандой",
    composition: ["Лаванда", "Сухоцветы"],
    category: "author",
    badge: "",
    image: "./media/img/violet.jpg",
    media: [
      { type: "image", url: "./media/img/violet.jpg" },
      { type: "image", url: "./media/img/violet.jpg" },
    ],
  },
  {
    id: 5,
    name: "Корпоративный стиль",
    price: 3500,
    description: "Элегантный букет для офиса",
    composition: ["Розы", "Гортензии"],
    category: "corporate",
    badge: "Популярный",
    image: "./media/img/business.jpg",
    media: [
      { type: "image", url: "./media/img/business.jpg" },
      { type: "image", url: "./media/img/bisiness.jpg" },
    ],
  },
  {
    id: 6,
    name: "Алые розы",
    price: 4100,
    description: "15 роз премиум-класса",
    composition: ["Алые розы"],
    category: "mono",
    badge: "Премиум",
    image: "./media/img/red.jpg",
    media: [
      { type: "image", url: "./media/img/red.jpg" },
      {
        type: "video",
        url: "./media/video/red.mp4",
        poster: "./media/img/red.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Свадебная нежность",
    price: 3800,
    description: "Букет невесты",
    composition: ["Пионовидные розы", "Эустомы"],
    category: "wedding",
    badge: "Свадебный",
    image: "./media/img/wedding.jpg",
    media: [
      { type: "image", url: "./media/img/wedding.jpg" },
      { type: "image", url: "./media/img/wedding.jpg" },
    ],
  },
  {
    id: 8,
    name: "Полевые цветы",
    price: 1900,
    description: "Букет из полевых цветов",
    composition: ["Ромашки", "Васильки"],
    category: "author",
    badge: "",
    image: "./media/img/field.jpg",
    media: [
      { type: "image", url: "./media/img/field.jpg" },
      { type: "image", url: "./media/img/field.jpg" },
    ],
  },
  {
    id: 9,
    name: "Бизнес-букет",
    price: 4200,
    description: "Строгая композиция",
    composition: ["Гвоздики", "Эустомы"],
    category: "corporate",
    badge: "",
    image: "./media/img/bisiness2.jpg",
    media: [
      { type: "image", url: "./media/img/bisiness2.jpg" },
      { type: "image", url: "./media/img/bisiness2.jpg" },
    ],
  },
  {
    id: 10,
    name: "Тюльпаны",
    price: 2100,
    description: "25 тюльпанов",
    composition: ["Тюльпаны"],
    category: "mono",
    badge: "Сезон",
    image: "./media/img/tulips.jpg",
    media: [
      { type: "image", url: "./media/img/tulips.jpg" },
      { type: "image", url: "./media/img/tulips.jpg" },
    ],
  },
  {
    id: 11,
    name: "Пионовидные розы",
    price: 3300,
    description: "Нежные пионовидные розы",
    composition: ["Пионовидные розы"],
    category: "author",
    badge: "Новинка",
    image: "./media/img/pionrose.jpg",
    media: [
      { type: "image", url: "./media/img/pionrose.jpg" },
      {
        type: "video",
        url: "./media/video/pionrose.mp4",
        poster: "./media/img/pionrose.jpg",
      },
    ],
  },
  {
    id: 12,
    name: "Хризантемы",
    price: 2500,
    description: "Кустовые хризантемы",
    composition: ["Хризантемы"],
    category: "mono",
    badge: "",
    image: "./media/img/chrysanthemums.jpg",
    media: [
      { type: "image", url: "./media/img/chrysanthemums.jpg" },
      { type: "image", url: "./media/img/chrysanthemums.jpg" },
    ],
  },
];

// ==================== СОСТОЯНИЕ ====================
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentFilter = "all";
let currentSort = "default";
let currentPage = 1;

// Переменные для слайдера и лайтбокса
let currentSlideIndex = 0;
let totalSlides = 0;
let lightboxMedia = [];
let lightboxCurrentIndex = 0;


// ==================== БУРГЕР-МЕНЮ (БЕЗ ОВЕРЛЕЯ) ====================
function initBurgerMenu() {
  const burger = document.getElementById('burgerMenu');
  const nav = document.getElementById('navMenu');
  const body = document.body;
  
  if (!burger || !nav) return;
  
  const closeMenu = () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.style.overflow = '';
  };
  
  const openMenu = () => {
    burger.classList.add('active');
    nav.classList.add('active');
    body.style.overflow = 'hidden';
  };
  
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  // Закрытие при клике на ссылку в меню
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Закрытие при изменении размера окна (если стало больше 768px)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ==================== ПРОФИЛЬ (БЕЗ ОВЕРЛЕЯ) ====================
function setupProfile() {
  const section = document.getElementById("profileSection");
  if (!section) return;

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName") || "";

  if (isLoggedIn && userName) {
    // Показываем аватарку с первой буквой имени
    section.innerHTML = `
      <div class="profile-dropdown-wrapper">
        <div class="profile-info" id="profileInfoBtn">
          <div class="profile-avatar">${userName[0].toUpperCase()}</div>
          <span class="profile-name">${escapeHtml(userName)}</span>
          <i class="fas fa-chevron-down profile-arrow"></i>
        </div>
        <div class="profile-dropdown" id="profileDropdown">
          <div class="dropdown-item">
            <i class="fas fa-user"></i>
            <span>${escapeHtml(userName)}</span>
          </div>
          <div class="dropdown-item">
            <i class="fas fa-phone"></i>
            <span>${localStorage.getItem("userPhone") || ""}</span>
          </div>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item logout-btn" id="logoutBtn">
            <i class="fas fa-sign-out-alt"></i>
            <span>Выйти</span>
          </button>
        </div>
      </div>`;
    
    // Добавляем обработчики для выпадающего меню
    const profileBtn = document.getElementById("profileInfoBtn");
    const dropdown = document.getElementById("profileDropdown");
    
    if (profileBtn && dropdown) {
      profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
      });
      
      // Закрытие при клике вне
      document.addEventListener("click", (e) => {
        if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.remove("active");
        }
      });
    }
    
    document.getElementById("logoutBtn")?.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userPhone");
      showNotification("Вы вышли из аккаунта", "info");
      setupProfile(); // Обновляем отображение профиля
    });
  } else {
    // Показываем кнопку входа
    section.innerHTML = `<button class="profile-avatar-btn" id="loginBtn"><i class="fas fa-user"></i></button>`;
    document.getElementById("loginBtn")?.addEventListener("click", () =>
      document.getElementById("loginModal")?.classList.add("active")
    );
  }
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener("DOMContentLoaded", () => {
  // Инициализация бургер-меню
  initBurgerMenu();
  
  if (document.getElementById("popularGrid")) displayPopularProducts();
  if (document.getElementById("catalogGrid")) {
    setupCatalogFilters();
    initCatalogSearch();
    displayCatalogProducts();
    setupPagination();
  }
  if (document.getElementById("productDetail")) {
    loadProductDetail();
    loadSimilarProducts();
    setupReviewForm();
  }
  setupProfile();
  setupFeedbackForm();
  setupQuickOrderForm();
  setupLoginModal();
  initCartModal();
  startPromoTimer();
  initLightbox();
  initThemeToggle();
  initTabs();
  initAccordion();
});

// ==================== ПЕРЕКЛЮЧАТЕЛЬ ТЕМ ====================
function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  if (localStorage.getItem("theme") === "dark")
    document.body.classList.add("dark-theme");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
  });
}

// ==================== ОТОБРАЖЕНИЕ ПОПУЛЯРНЫХ ====================
function displayPopularProducts() {
  const grid = document.getElementById("popularGrid");
  const popularProducts = productsData.slice(0, 4);
  grid.innerHTML = popularProducts
    .map((product) => createProductCard(product))
    .join("");
  attachProductCardEvents();
}

// ==================== КАТАЛОГ ====================
function setupCatalogFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sort");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      currentPage = 1;
      displayCatalogProducts();
      setupPagination();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      currentSort = sortSelect.value;
      currentPage = 1;
      displayCatalogProducts();
      setupPagination();
    });
  }
}

function displayCatalogProducts() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  let filtered = [...productsData];
  if (currentFilter !== "all")
    filtered = filtered.filter((p) => p.category === currentFilter);

  if (currentSort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc")
    filtered.sort((a, b) => b.price - a.price);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  grid.innerHTML = filtered
    .slice(start, start + ITEMS_PER_PAGE)
    .map((product) => createProductCard(product))
    .join("");
  attachProductCardEvents();
}

function setupPagination() {
  const container = document.getElementById("pagination");
  if (!container) return;

  let filtered = [...productsData];
  if (currentFilter !== "all")
    filtered = filtered.filter((p) => p.category === currentFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="pagination-btn ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
  }
  container.innerHTML = html;

  document.querySelectorAll(".pagination-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage = parseInt(btn.dataset.page);
      displayCatalogProducts();
      setupPagination();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// ==================== КАРТОЧКА ТОВАРА ====================
function createProductCard(product) {
  const isFavorite = favorites.includes(product.id);
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='./media/img/default.jpg'">
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ""}
      </div>
      <div class="card-title">${escapeHtml(product.name)}</div>
      <div class="card-price">${product.price.toLocaleString()} ₽</div>
      <div class="card-actions">
        <button class="favorite-btn ${isFavorite ? "active" : ""}" data-id="${product.id}">
          <i class="fas fa-heart"></i>
        </button>
        <button class="btn btn-primary add-to-cart" data-id="${product.id}">В корзину</button>
      </div>
    </div>`;
}

function attachProductCardEvents() {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".favorite-btn") || e.target.closest(".add-to-cart"))
        return;
      window.location.href = `product.html?id=${card.dataset.id}`;
    });
  });

  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.id), btn);
    });
  });

  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const product = productsData.find(
        (p) => p.id === parseInt(btn.dataset.id),
      );
      if (product) addToCart(product, btn);
    });
  });
}

// ==================== ИЗБРАННОЕ ====================
function toggleFavorite(productId, btnElement) {
  const index = favorites.indexOf(productId);
  if (index === -1) {
    favorites.push(productId);
    btnElement.classList.add("active");
    showNotification("Добавлено в избранное", "success");
  } else {
    favorites.splice(index, 1);
    btnElement.classList.remove("active");
    showNotification("Удалено из избранного", "info");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// ==================== КОРЗИНА ====================
function updateCartCount() {
  const cartCountElement = document.getElementById("cartCount");
  if (!cartCountElement) return;

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  cartCountElement.textContent = totalItems;
  cartCountElement.style.display = totalItems > 0 ? "flex" : "none";
}

function addToCart(product, btnElement) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.quantity = (existing.quantity || 1) + 1;
  else cart.push({ ...product, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification(`"${product.name}" добавлен в корзину`, "success");
  showCartNotification();

  if (btnElement) {
    const originalText = btnElement.textContent;
    btnElement.innerHTML = '<i class="fas fa-check"></i> Добавлено';
    setTimeout(() => {
      btnElement.textContent = originalText;
    }, 1500);
  }
}

function showCartNotification() {
  const notification = document.getElementById("cartNotification");
  if (notification) {
    notification.classList.add("show");
    setTimeout(() => notification.classList.remove("show"), 2000);
  }
}

function displayCart() {
  const cartItemsList = document.getElementById("cartItemsList");
  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-message">
        <i class="fas fa-shopping-basket"></i>
        <p>Ваша корзина пуста</p>
        <a href="catalog.html" class="btn">Перейти в каталог</a>
      </div>`;
    updateCartSummary();
    return;
  }

  cartItemsList.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image || "./media/img/default.jpg"}" alt="${item.name}" onerror="this.src='./media/img/default.jpg'">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${escapeHtml(item.name)}</div>
        <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
        <div class="cart-item-actions">
          <button class="cart-quantity-btn" data-action="decr" data-id="${item.id}">-</button>
          <span class="cart-item-quantity">${item.quantity || 1}</span>
          <button class="cart-quantity-btn" data-action="incr" data-id="${item.id}">+</button>
          <button class="cart-remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>`,
    )
    .join("");

  attachCartEvents();
  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const deliverySelect = document.getElementById("cartDeliveryZoneSelect");

  let deliveryPrice = deliverySelect
    ? DELIVERY_PRICES[deliverySelect.value] || 0
    : 0;
  const finalDelivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : deliveryPrice;
  const total = subtotal + finalDelivery;
  const needMore =
    subtotal >= FREE_DELIVERY_THRESHOLD
      ? 0
      : FREE_DELIVERY_THRESHOLD - subtotal;

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setText("cartSubtotal", `${subtotal.toLocaleString()} ₽`);
  setText("cartTotalItems", totalItems);
  setText("cartDelivery", `${finalDelivery.toLocaleString()} ₽`);
  setText("cartTotal", `${total.toLocaleString()} ₽`);
  setText("needMore", needMore > 0 ? `${needMore.toLocaleString()}` : "0");

  const freeDeliveryNote = document.getElementById("freeDeliveryNote");
  if (freeDeliveryNote) {
    const isFree = subtotal >= FREE_DELIVERY_THRESHOLD;
    freeDeliveryNote.style.background = isFree ? "#c8e6c9" : "#e8f5e9";
    freeDeliveryNote.innerHTML = isFree
      ? '<i class="fas fa-check-circle"></i> Бесплатная доставка!'
      : `<i class="fas fa-truck"></i> Добавьте товаров на ${needMore.toLocaleString()} ₽ для бесплатной доставки`;
  }
}

function attachCartEvents() {
  document.querySelectorAll(".cart-quantity-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const item = cart.find((i) => i.id === id);
      if (!item) return;

      if (btn.dataset.action === "incr") item.quantity++;
      else if (item.quantity > 1) item.quantity--;
      else cart = cart.filter((i) => i.id !== id);

      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
      updateCartCount();
    });
  });

  document.querySelectorAll(".cart-remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      cart = cart.filter((i) => i.id !== parseInt(btn.dataset.id));
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
      updateCartCount();
      showNotification("Товар удален из корзины", "info");
    });
  });
}

function openCartModal() {
  const modal = document.getElementById("cartModal");
  if (modal) {
    displayCart();
    modal.classList.add("active");
  }
}

function closeCartModal() {
  const modal = document.getElementById("cartModal");
  if (modal) modal.classList.remove("active");
}

function checkout() {
  if (cart.length === 0) return showNotification("Корзина пуста", "error");
  if (localStorage.getItem("isLoggedIn") !== "true") {
    closeCartModal();
    document.getElementById("loginModal")?.classList.add("active");
    return showNotification("Войдите в аккаунт для оформления заказа", "info");
  }

  const deliverySelect = document.getElementById("cartDeliveryZoneSelect");
  const deliveryZone =
    deliverySelect?.options[deliverySelect.selectedIndex]?.text || "Не выбран";
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );
  let deliveryPrice = deliverySelect
    ? DELIVERY_PRICES[deliverySelect.value] || 0
    : 0;
  if (subtotal >= FREE_DELIVERY_THRESHOLD) deliveryPrice = 0;

  const order = {
    id: Date.now(),
    date: new Date().toISOString(),
    customer: {
      name: localStorage.getItem("userName"),
      phone: localStorage.getItem("userPhone"),
    },
    items: [...cart],
    delivery: { zone: deliveryZone, price: deliveryPrice },
    subtotal,
    total: subtotal + deliveryPrice,
    status: "новый",
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCart();
  closeCartModal();
  showNotification(
    `Заказ #${order.id} оформлен! Мы свяжемся с вами`,
    "success",
  );
}

function initCartModal() {
  const elements = {
    cartIcon: document.getElementById("cartIcon"),
    closeCart: document.getElementById("closeCartBtn"),
    continue: document.getElementById("continueShoppingBtn"),
    checkout: document.getElementById("checkoutBtn"),
    delivery: document.getElementById("cartDeliveryZoneSelect"),
    modal: document.getElementById("cartModal"),
  };

  elements.cartIcon?.addEventListener("click", openCartModal);
  elements.closeCart?.addEventListener("click", closeCartModal);
  elements.continue?.addEventListener("click", closeCartModal);
  elements.checkout?.addEventListener("click", checkout);
  elements.delivery?.addEventListener("change", updateCartSummary);
  elements.modal?.addEventListener("click", (e) => {
    if (e.target === elements.modal) closeCartModal();
  });
  updateCartCount();
}

// ==================== СТРАНИЦА ТОВАРА ====================
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

function loadProductDetail() {
  const id = getProductIdFromUrl();
  const product = productsData.find((p) => p.id === id);
  if (!product) {
    document.getElementById("productDetail").innerHTML =
      "<p>Товар не найден</p>";
    return;
  }

  const isFavorite = favorites.includes(product.id);
  const reviews = JSON.parse(localStorage.getItem(`reviews_${id}`)) || [];
  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(
        1,
      )
    : 0;

  let mediaHTML = "";
  if (product.media && product.media.length > 0) {
    mediaHTML = `
      <div class="slider-container">
        <div class="slider-track" id="sliderTrack">
          ${product.media
            .map((item, index) => {
              if (item.type === "video") {
                return `<div class="slider-slide" data-index="${index}"><video controls playsinline preload="metadata" poster="${item.poster || product.image}"><source src="${item.url}" type="video/mp4">Ваш браузер не поддерживает видео</video><div class="video-play-icon"><i class="fas fa-play"></i></div></div>`;
              }
              return `<div class="slider-slide" data-index="${index}"><img src="${item.url}" alt="${product.name} - фото ${index + 1}" loading="lazy"></div>`;
            })
            .join("")}
        </div>
        ${
          product.media.length > 1
            ? `
          <button class="slider-nav slider-prev"><i class="fas fa-chevron-left"></i></button>
          <button class="slider-nav slider-next"><i class="fas fa-chevron-right"></i></button>
          <div class="slider-dots" id="sliderDots">
            ${product.media.map((_, i) => `<button class="slider-dot ${i === 0 ? "active" : ""}" data-index="${i}"></button>`).join("")}
          </div>
        `
            : ""
        }
      </div>`;
  } else {
    mediaHTML = `<div class="product-main-image"><img src="${product.image}" alt="${product.name}"></div>`;
  }

  document.getElementById("productDetail").innerHTML = `
    <div class="product-gallery">
      ${mediaHTML}
      <div class="favorite-corner">
        <button class="favorite-btn-large ${isFavorite ? "active" : ""}" id="productFavoriteBtn">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
    <div class="product-info">
      <h1 class="product-title">${escapeHtml(product.name)}</h1>
      <div class="product-rating">
        <div class="stars">${renderStars(avgRating)}</div>
        <span class="rating-count">${reviews.length} отзывов</span>
      </div>
      <div class="product-price">${product.price.toLocaleString()} ₽</div>
      <div class="product-description">${escapeHtml(product.description)}</div>
      <div class="product-composition">
        <h4>Состав букета:</h4>
        <ul class="composition-list">${product.composition.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
      </div>
      <div class="product-actions">
        <button class="btn btn-primary" id="addToCartBtn">В корзину</button>
        <button class="btn btn-outline" id="quickOrderBtn">Купить в 1 клик</button>
      </div>
    </div>`;

  if (product.media && product.media.length > 0) {
    setTimeout(() => {
      initProductSlider(product.media);
      setupVideoHandlers();
    }, 100);
  }

  loadReviews(id);

  document
    .getElementById("productFavoriteBtn")
    ?.addEventListener("click", () =>
      toggleFavorite(product.id, document.getElementById("productFavoriteBtn")),
    );
  document
    .getElementById("addToCartBtn")
    ?.addEventListener("click", () =>
      addToCart(product, document.getElementById("addToCartBtn")),
    );
  document
    .getElementById("quickOrderBtn")
    ?.addEventListener("click", () => openQuickOrderModal(product));
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "";
  for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
  if (half) stars += '<i class="fas fa-star-half-alt"></i>';
  for (let i = stars.length; i < 5; i++) stars += '<i class="far fa-star"></i>';
  return stars;
}

function setupVideoHandlers() {
  document.querySelectorAll(".slider-slide video").forEach((video) => {
    const playIcon = video.parentElement.querySelector(".video-play-icon");
    const togglePlay = () => {
      if (video.paused) {
        video.play();
        playIcon.style.opacity = "0";
      } else {
        video.pause();
        playIcon.style.opacity = "1";
      }
    };
    playIcon?.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePlay();
    });
    video.addEventListener("click", togglePlay);
    video.addEventListener("play", () => {
      if (playIcon) playIcon.style.opacity = "0";
    });
    video.addEventListener("pause", () => {
      if (playIcon) playIcon.style.opacity = "1";
    });
  });
}

function initProductSlider(media) {
  totalSlides = media.length;
  currentSlideIndex = 0;
  const track = document.getElementById("sliderTrack");
  const dots = document.querySelectorAll(".slider-dot");

  function updateSlider() {
    if (track)
      track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentSlideIndex),
    );

    document.querySelectorAll(".slider-slide").forEach((slide, i) => {
      const video = slide.querySelector("video");
      if (video && i !== currentSlideIndex) {
        video.pause();
        const playIcon = slide.querySelector(".video-play-icon");
        if (playIcon) playIcon.style.opacity = "1";
      }
    });
  }

  const goToSlide = (index) => {
    currentSlideIndex = Math.max(0, Math.min(index, totalSlides - 1));
    updateSlider();
  };

  document
    .querySelector(".slider-prev")
    ?.addEventListener("click", () => goToSlide(currentSlideIndex - 1));
  document
    .querySelector(".slider-next")
    ?.addEventListener("click", () => goToSlide(currentSlideIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goToSlide(i)));

  // Click to open lightbox
  document.querySelectorAll(".slider-slide").forEach((slide, i) => {
    if (slide.querySelector("img")) {
      slide.addEventListener("click", (e) => {
        if (e.target.tagName !== "VIDEO" && e.target.tagName !== "BUTTON")
          openLightbox(i, media);
      });
    }
  });

  // Swipe
  let touchStartX = 0;
  if (track) {
    track.addEventListener(
      "touchstart",
      (e) => (touchStartX = e.changedTouches[0].screenX),
    );
    track.addEventListener("touchend", (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (diff < -50) goToSlide(currentSlideIndex + 1);
      if (diff > 50) goToSlide(currentSlideIndex - 1);
    });
  }
}

// ==================== ЛАЙТБОКС ====================
function openLightbox(startIndex, media) {
  lightboxMedia = media;
  lightboxCurrentIndex = startIndex;
  const modal = document.getElementById("lightboxModal");
  const track = document.querySelector(".lightbox-track");
  const counter = document.querySelector(".lightbox-counter");
  if (!modal || !track) return;

  track.innerHTML = lightboxMedia
    .map(
      (item, i) => `
    <div class="lightbox-slide" data-index="${i}">
      ${
        item.type === "video"
          ? `<video src="${item.url}" poster="${item.poster || ""}" controls></video>`
          : `<img src="${item.url}" alt="Фото ${i + 1}">`
      }
    </div>`,
    )
    .join("");

  updateLightbox();
  if (counter)
    counter.textContent = `${startIndex + 1} / ${lightboxMedia.length}`;
  modal.classList.add("active");
  document.querySelectorAll(".slider-slide video").forEach((v) => {
    if (!v.paused) v.pause();
  });
}

function updateLightbox() {
  const track = document.querySelector(".lightbox-track");
  const counter = document.querySelector(".lightbox-counter");
  if (track)
    track.style.transform = `translateX(-${lightboxCurrentIndex * 100}%)`;
  if (counter)
    counter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxMedia.length}`;
}

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  const stopVideos = () =>
    document
      .querySelectorAll(".lightbox-slide video")
      .forEach((v) => v.pause());

  modal.querySelector(".lightbox-close")?.addEventListener("click", () => {
    modal.classList.remove("active");
    stopVideos();
  });
  modal.querySelector(".lightbox-prev")?.addEventListener("click", () => {
    if (lightboxCurrentIndex > 0) {
      lightboxCurrentIndex--;
      updateLightbox();
    }
  });
  modal.querySelector(".lightbox-next")?.addEventListener("click", () => {
    if (lightboxCurrentIndex < lightboxMedia.length - 1) {
      lightboxCurrentIndex++;
      updateLightbox();
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      stopVideos();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "ArrowLeft" && lightboxCurrentIndex > 0) {
      lightboxCurrentIndex--;
      updateLightbox();
    } else if (
      e.key === "ArrowRight" &&
      lightboxCurrentIndex < lightboxMedia.length - 1
    ) {
      lightboxCurrentIndex++;
      updateLightbox();
    } else if (e.key === "Escape") {
      modal.classList.remove("active");
      stopVideos();
    }
  });
}

// ==================== ОТЗЫВЫ ====================
function loadReviews(productId) {
  const reviews =
    JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
  const container = document.getElementById("reviewsList");
  if (!container) return;

  container.innerHTML =
    reviews.length === 0
      ? "<p>Пока нет отзывов. Будьте первым!</p>"
      : reviews
          .map(
            (review) => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-author">${escapeHtml(review.name)}</span>
          <span class="review-rating">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
          <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
        </div>
        <div class="review-text">${escapeHtml(review.text)}</div>
      </div>`,
          )
          .join("");
}

function setupReviewForm() {
  const form = document.getElementById("reviewForm");
  if (!form) return;

  const stars = document.querySelectorAll("#ratingStars i");
  const ratingInput = document.getElementById("reviewRating");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.dataset.rating);
      ratingInput.value = rating;
      stars.forEach(
        (s, i) => (s.className = i < rating ? "fas fa-star" : "far fa-star"),
      );
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const productId = getProductIdFromUrl();
    const name = document.getElementById("reviewName").value.trim();
    const rating = parseInt(ratingInput.value);
    const text = document.getElementById("reviewText").value.trim();

    if (!name || !text)
      return showNotification("Заполните имя и отзыв", "error");

    const reviews =
      JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
    reviews.unshift({
      id: Date.now(),
      name,
      rating,
      text,
      date: new Date().toISOString(),
    });
    localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));

    showNotification("Спасибо за отзыв!", "success");
    form.reset();
    ratingInput.value = 5;
    stars.forEach((s, i) => (s.className = "fas fa-star"));
    loadReviews(productId);
    loadProductDetail();
  });
}

function loadSimilarProducts() {
  const id = getProductIdFromUrl();
  const product = productsData.find((p) => p.id === id);
  if (!product) return;

  const similar = productsData
    .filter((p) => p.category === product.category && p.id !== id)
    .slice(0, 4);
  const grid = document.getElementById("similarGrid");
  if (grid) {
    grid.innerHTML = similar.map((p) => createProductCard(p)).join("");
    attachProductCardEvents();
  }
}

// ==================== МОДАЛЬНЫЕ ОКНА ====================
function openQuickOrderModal(product) {
  const modal = document.getElementById("quickOrderModal");
  if (!modal) return;
  modal.classList.add("active");

  const form = document.getElementById("quickOrderForm");
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("quickName").value.trim();
    const phone = document.getElementById("quickPhone").value.trim();
    if (!name || !phone)
      return showNotification("Заполните имя и телефон", "error");

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
      id: Date.now(),
      product: product.name,
      price: product.price,
      name,
      phone,
      address: document.getElementById("quickAddress").value.trim(),
      date: new Date().toISOString(),
    });
    localStorage.setItem("orders", JSON.stringify(orders));

    showNotification(`Спасибо, ${name}! Мы свяжемся с вами`, "success");
    modal.classList.remove("active");
    form.reset();
  };
}

function setupQuickOrderForm() {
  const modal = document.getElementById("quickOrderModal");
  if (!modal) return;
  modal
    .querySelector(".modal-close")
    ?.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

function setupLoginModal() {
  const modal = document.getElementById("loginModal");
  if (!modal) return;

  document
    .getElementById("loginBtn")
    ?.addEventListener("click", () => modal.classList.add("active"));
  modal
    .querySelector(".modal-close")
    ?.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  document.getElementById("loginFormModal")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("loginName").value.trim();
    const phone = document.getElementById("loginPhone").value.trim();
    if (name && phone) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", name);
      localStorage.setItem("userPhone", phone);
      showNotification(`Добро пожаловать, ${name}!`, "success");
      modal.classList.remove("active");
      setupProfile();
    } else showNotification("Заполните все поля", "error");
  });
}

// ==================== ПРОФИЛЬ С ВЫПАДАЮЩИМ МЕНЮ ====================
function setupProfile() {
  const section = document.getElementById("profileSection");
  if (!section) return;

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName") || "";
  const userPhone = localStorage.getItem("userPhone") || "";

  if (isLoggedIn && userName) {
    // Создаем структуру с выпадающим меню
    section.innerHTML = `
      <div class="profile-dropdown-wrapper">
        <div class="profile-info" id="profileInfoBtn">
          <div class="profile-avatar">${escapeHtml(userName[0].toUpperCase())}</div>
          <span class="profile-name">${escapeHtml(userName)}</span>
          <i class="fas fa-chevron-down profile-arrow"></i>
        </div>
        <div class="profile-dropdown" id="profileDropdown">
          <div class="dropdown-item">
            <i class="fas fa-user"></i>
            <span>${escapeHtml(userName)}</span>
          </div>
          <div class="dropdown-item">
            <i class="fas fa-phone"></i>
            <span>${escapeHtml(userPhone) || "Не указан"}</span>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item orders-link" id="ordersLink">
            <i class="fas fa-shopping-bag"></i>
            <span>Мои заказы</span>
          </div>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item logout-btn" id="logoutBtn">
            <i class="fas fa-sign-out-alt"></i>
            <span>Выйти</span>
          </button>
        </div>
      </div>`;
    
    // Добавляем обработчики для выпадающего меню
    const profileBtn = document.getElementById("profileInfoBtn");
    const dropdown = document.getElementById("profileDropdown");
    
    if (profileBtn && dropdown) {
      // Открытие/закрытие при клике на кнопку профиля
      profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
      });
      
      // Закрытие при клике вне меню
      document.addEventListener("click", (e) => {
        if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.remove("active");
        }
      });
      
      // Закрытие при нажатии Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && dropdown.classList.contains("active")) {
          dropdown.classList.remove("active");
        }
      });
    }
    
    // Кнопка выхода
    document.getElementById("logoutBtn")?.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userPhone");
      showNotification("Вы вышли из аккаунта", "info");
      setupProfile(); // Обновляем отображение профиля
    });
    
    // Ссылка на заказы (можно добавить функционал позже)
    document.getElementById("ordersLink")?.addEventListener("click", () => {
      showNotification("Функция в разработке", "info");
      document.getElementById("profileDropdown")?.classList.remove("active");
    });
    
  } else {
    // Показываем кнопку входа
    section.innerHTML = `
      <button class="profile-avatar-btn" id="loginBtn" title="Войти">
        <i class="fas fa-user"></i>
      </button>`;
    
    document.getElementById("loginBtn")?.addEventListener("click", () => {
      const loginModal = document.getElementById("loginModal");
      if (loginModal) loginModal.classList.add("active");
      else showNotification("Ошибка: модальное окно не найдено", "error");
    });
  }
}
function setupLoginModal() {
  // Создаем модальное окно входа, если его нет в DOM
  let modal = document.getElementById("loginModal");
  
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "loginModal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Вход в аккаунт</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <form id="loginFormModal">
            <div class="form-group">
              <input type="text" id="loginName" placeholder="Ваше имя" required>
            </div>
            <div class="form-group">
              <input type="tel" id="loginPhone" placeholder="Телефон" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Войти</button>
          </form>
          <p class="modal-hint">Введите имя и телефон для входа</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  const closeBtn = modal.querySelector(".modal-close");
  const form = document.getElementById("loginFormModal");
  
  closeBtn?.addEventListener("click", () => modal.classList.remove("active"));
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
  
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("loginName")?.value.trim();
    const phone = document.getElementById("loginPhone")?.value.trim();
    
    if (name && phone) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", name);
      localStorage.setItem("userPhone", phone);
      showNotification(`Добро пожаловать, ${name}!`, "success");
      modal.classList.remove("active");
      setupProfile();
    } else {
      showNotification("Заполните все поля", "error");
    }
  });
}

// ==================== ФОРМА ОБРАТНОЙ СВЯЗИ ====================
function setupFeedbackForm() {
  const form = document.getElementById("feedbackForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("feedbackName")?.value.trim();
    const phone = document.getElementById("feedbackPhone")?.value.trim();
    const message = document.getElementById("feedbackMessage")?.value.trim();

    if (name && phone) {
      const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      feedbacks.push({
        id: Date.now(),
        name,
        phone,
        message,
        date: new Date().toISOString(),
      });
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
      showNotification(`Спасибо, ${name}! Мы свяжемся с вами`, "success");
      form.reset();
    } else showNotification("Заполните имя и телефон", "error");
  });
}

// ==================== УВЕДОМЛЕНИЯ ====================
function showNotification(message, type = "info") {
  let container = document.querySelector(".notifications-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "notifications-container";
    document.body.appendChild(container);
  }

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  const icons = { success: "✓", error: "✗", info: "ℹ" };

  notification.innerHTML = `
    <span class="notification-icon">${icons[type] || "ℹ"}</span>
    <span class="notification-message">${escapeHtml(message)}</span>
    <button class="notification-close">✕</button>`;
  container.appendChild(notification);

  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => notification.remove());
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease forwards";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ==================== ТАЙМЕР АКЦИИ ====================
function startPromoTimer() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  const updateTimer = () => {
    const now = new Date();
    const diff = endDate - now;

    document.querySelectorAll(".promo-timer").forEach((timer) => {
      if (diff <= 0) {
        timer.innerHTML = '<span class="timer-ended">Акция завершена</span>';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      const set = (cls, val) => {
        const el = timer.querySelector(cls);
        if (el) el.textContent = String(val).padStart(2, "0");
      };
      set(".timer-days", days);
      set(".timer-hours", hours);
      set(".timer-minutes", minutes);
      set(".timer-seconds", seconds);
    });
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==================== ТАБЫ (исправленная версия) ====================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  if (tabBtns.length === 0) return;
  
  tabBtns.forEach(btn => {
    // Удаляем старые обработчики, чтобы избежать дублирования
    btn.removeEventListener('click', handleTabClick);
    btn.addEventListener('click', handleTabClick);
  });
  
  function handleTabClick(e) {
    const btn = e.currentTarget;
    const tabId = btn.dataset.tab;
    
    // Деактивируем все кнопки
    tabBtns.forEach(b => b.classList.remove('active'));
    // Активируем текущую кнопку
    btn.classList.add('active');
    
    // Деактивируем все панели
    tabPanes.forEach(pane => pane.classList.remove('active'));
    // Активируем нужную панель
    const activePane = document.getElementById(tabId);
    if (activePane) {
      activePane.classList.add('active');
    }
  }
}
// ==================== АККОРДЕОН (РАБОЧАЯ ВЕРСИЯ) ====================
function initAccordion() {
  console.log('Инициализация аккордеона...');
  
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  if (accordionItems.length === 0) {
    console.log('Аккордеон не найден на странице');
    return;
  }
  
  console.log('Найдено элементов аккордеона:', accordionItems.length);
  
  // Функция для закрытия всех элементов
  function closeAllItems() {
    accordionItems.forEach(item => {
      item.classList.remove('active');
    });
  }
  
  // Добавляем обработчики на каждый заголовок
  accordionItems.forEach((item, index) => {
    const header = item.querySelector('.accordion-header');
    
    if (!header) {
      console.log('Заголовок не найден для элемента', index);
      return;
    }
    
    // Удаляем старый обработчик, если был
    const newHeader = header.cloneNode(true);
    header.parentNode.replaceChild(newHeader, header);
    
    // Добавляем новый обработчик
    newHeader.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Клик по аккордеону', index);
      
      // Если текущий элемент открыт - закрываем его
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        console.log('Закрываем элемент', index);
      } else {
        // Иначе закрываем все и открываем текущий
        closeAllItems();
        item.classList.add('active');
        console.log('Открываем элемент', index);
      }
    });
  });
  
  console.log('Аккордеон успешно инициализирован');
}

// Также добавим вызов после загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initAccordion();
  });
} else {
  initAccordion();
}

// Явный вызов после загрузки всех данных
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  initAccordion();
});


// Для мобильных устройств - открытие по клику
function initMobileProfile() {
  const profileSection = document.getElementById('profileSection');
  const profileDropdown = document.getElementById('profileDropdown');
  
  if (!profileSection || !profileDropdown) return;
  
  let isMobile = window.innerWidth <= 768;
  let isOpen = false;
  
  function checkMobile() {
    isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      profileDropdown.style.display = '';
      isOpen = false;
    }
  }
  
  window.addEventListener('resize', checkMobile);
  
  if (isMobile) {
    profileSection.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!isOpen) {
        profileDropdown.style.display = 'block';
        isOpen = true;
      } else {
        profileDropdown.style.display = 'none';
        isOpen = false;
      }
    });
    
    document.addEventListener('click', (e) => {
      if (isOpen && !profileSection.contains(e.target)) {
        profileDropdown.style.display = 'none';
        isOpen = false;
      }
    });
  }
}

// Запуск
document.addEventListener('DOMContentLoaded', () => {
  initProfileDropdown();
  initMobileProfile();
});



let currentSearchQuery = "";

// Добавить функцию поиска в каталоге:
function initCatalogSearch() {
  const searchInput = document.getElementById("catalogSearchInput");
  const searchClear = document.getElementById("catalogSearchClear");
  const searchStats = document.getElementById("searchStats");
  const searchFoundCount = document.getElementById("searchFoundCount");
  
  if (!searchInput) return;
  
  // Функция поиска
  const performSearch = () => {
    currentSearchQuery = searchInput.value.trim().toLowerCase();
    
    if (currentSearchQuery.length > 0) {
      searchClear.style.display = "flex";
      searchStats.style.display = "flex";
    } else {
      searchClear.style.display = "none";
      searchStats.style.display = "none";
    }
    
    // Сброс на первую страницу
    currentPage = 1;
    displayCatalogProducts();
    setupPagination();
  };
  
  // Поиск при вводе (debounce для оптимизации)
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(performSearch, 300);
  });
  
  // Поиск при нажатии Enter
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      clearTimeout(debounceTimer);
      performSearch();
    }
  });
  
  // Очистка поиска
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchQuery = "";
    searchClear.style.display = "none";
    searchStats.style.display = "none";
    currentPage = 1;
    displayCatalogProducts();
    setupPagination();
    searchInput.focus();
  });
  
  // Обновление счетчика найденных товаров
  window.updateSearchStats = (count) => {
    if (searchFoundCount) searchFoundCount.textContent = count;
  };
}

// Модифицировать функцию displayCatalogProducts для поддержки поиска:
function displayCatalogProducts() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  let filtered = [...productsData];
  
  // Фильтр по категории
  if (currentFilter !== "all")
    filtered = filtered.filter((p) => p.category === currentFilter);
  
  // Поиск по названию, описанию и составу
  if (currentSearchQuery && currentSearchQuery.length > 0) {
    filtered = filtered.filter((product) => {
      // Поиск в названии
      if (product.name.toLowerCase().includes(currentSearchQuery)) return true;
      // Поиск в описании
      if (product.description && product.description.toLowerCase().includes(currentSearchQuery)) return true;
      // Поиск в составе букета
      if (product.composition && product.composition.some(comp => 
        comp.toLowerCase().includes(currentSearchQuery)
      )) return true;
      return false;
    });
  }
  
  // Обновляем статистику поиска
  if (typeof updateSearchStats === "function") {
    updateSearchStats(filtered.length);
  }

  // Сортировка
  if (currentSort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc")
    filtered.sort((a, b) => b.price - a.price);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(start, start + ITEMS_PER_PAGE);
  
  if (paginatedProducts.length === 0 && filtered.length > 0) {
    currentPage = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const newStart = (currentPage - 1) * ITEMS_PER_PAGE;
    const newPaginated = filtered.slice(newStart, newStart + ITEMS_PER_PAGE);
    grid.innerHTML = newPaginated.map((product) => createProductCard(product)).join("");
  } else if (paginatedProducts.length === 0 && filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-message" style="grid-column: 1/-1;">
        <i class="fas fa-search"></i>
        <h3>Ничего не найдено</h3>
        <p>По запросу "${escapeHtml(currentSearchQuery)}" ничего не найдено.<br>Попробуйте изменить поисковый запрос.</p>
        <button class="btn" onclick="document.getElementById('catalogSearchInput').value=''; document.getElementById('catalogSearchClear').click();">Сбросить поиск</button>
      </div>
    `;
  } else {
    grid.innerHTML = paginatedProducts.map((product) => createProductCard(product)).join("");
  }
  
  attachProductCardEvents();
}

// Модифицировать setupCatalogFilters для сброса поиска при смене фильтра:
function setupCatalogFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sort");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      currentPage = 1;

      displayCatalogProducts();
      setupPagination();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      currentSort = sortSelect.value;
      currentPage = 1;
      displayCatalogProducts();
      setupPagination();
    });
  }
}

// Обновить setupPagination для учета поиска:
function setupPagination() {
  const container = document.getElementById("pagination");
  if (!container) return;

  let filtered = [...productsData];
  if (currentFilter !== "all")
    filtered = filtered.filter((p) => p.category === currentFilter);
  
  // Учитываем поиск
  if (currentSearchQuery && currentSearchQuery.length > 0) {
    filtered = filtered.filter((product) => {
      if (product.name.toLowerCase().includes(currentSearchQuery)) return true;
      if (product.description && product.description.toLowerCase().includes(currentSearchQuery)) return true;
      if (product.composition && product.composition.some(comp => 
        comp.toLowerCase().includes(currentSearchQuery)
      )) return true;
      return false;
    });
  }

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="pagination-btn ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
  }
  container.innerHTML = html;

  document.querySelectorAll(".pagination-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage = parseInt(btn.dataset.page);
      displayCatalogProducts();
      setupPagination();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}



