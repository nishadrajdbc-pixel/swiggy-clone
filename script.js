// Mock Data for Categories
const categories = [
    { id: 'all',         name: 'All',          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop' },
    { id: 'pizza',       name: 'Pizza',        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop' },
    { id: 'burger',      name: 'Burger',       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop' },
    { id: 'biryani',     name: 'Biryani',      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop' },
    { id: 'chinese',     name: 'Chinese',      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop' },
    { id: 'desserts',    name: 'Desserts',     image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop' },
    { id: 'healthy',     name: 'Healthy',      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop' },
    { id: 'drinks',      name: 'Drinks',       image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop' },
    { id: 'south-indian',name: 'South Indian', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop' },
    { id: 'pasta',       name: 'Pasta',        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&h=200&fit=crop' },
    { id: 'rolls',       name: 'Rolls',        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&h=200&fit=crop' },
    { id: 'noodles',     name: 'Noodles',      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop' },
    { id: 'cakes',       name: 'Cakes',        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop' }
];

// ── Expanded Restaurants Dataset (20 cards = 5 rows × 4 cols) ──
const restaurants = [
    {
        id: 1,
        name: 'KFC',
        image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=600&h=400&fit=crop',
        cuisines: ['Fried Chicken', 'Fast Food'],
        rating: 4.0,
        deliveryTime: '25 mins',
        deliveryMins: 25,
        priceForTwo: '₹450 for two',
        priceRaw: 450,
        category: 'burger'
    },
    {
        id: 2,
        name: 'Burger King',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop',
        cuisines: ['Burgers', 'American'],
        rating: 4.3,
        deliveryTime: '30 mins',
        deliveryMins: 30,
        priceForTwo: '₹350 for two',
        priceRaw: 350,
        category: 'burger'
    },
    {
        id: 3,
        name: "Domino's Pizza",
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
        cuisines: ['Pizzas', 'Fast Food'],
        rating: 4.1,
        deliveryTime: '30 mins',
        deliveryMins: 30,
        priceForTwo: '₹400 for two',
        priceRaw: 400,
        category: 'pizza'
    },
    {
        id: 4,
        name: 'Pizza Hut',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
        cuisines: ['Pizzas', 'Italian'],
        rating: 4.2,
        deliveryTime: '35 mins',
        deliveryMins: 35,
        priceForTwo: '₹600 for two',
        priceRaw: 600,
        category: 'pizza'
    },
    {
        id: 5,
        name: "McDonald's",
        image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&h=400&fit=crop',
        cuisines: ['Burgers', 'Fast Food'],
        rating: 4.2,
        deliveryTime: '20 mins',
        deliveryMins: 20,
        priceForTwo: '₹300 for two',
        priceRaw: 300,
        category: 'burger'
    },
    {
        id: 6,
        name: 'Biryani By Kilo',
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop',
        cuisines: ['Biryani', 'North Indian'],
        rating: 4.4,
        deliveryTime: '40 mins',
        deliveryMins: 40,
        priceForTwo: '₹600 for two',
        priceRaw: 600,
        category: 'biryani'
    },
    {
        id: 7,
        name: 'Behrouz Biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop',
        cuisines: ['Biryani', 'Mughlai'],
        rating: 4.3,
        deliveryTime: '35 mins',
        deliveryMins: 35,
        priceForTwo: '₹700 for two',
        priceRaw: 700,
        category: 'biryani'
    },
    {
        id: 8,
        name: "La Pino'z Pizza",
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop',
        cuisines: ['Pizzas', 'Pastas'],
        rating: 4.1,
        deliveryTime: '35 mins',
        deliveryMins: 35,
        priceForTwo: '₹450 for two',
        priceRaw: 450,
        category: 'pizza'
    },
    {
        id: 9,
        name: "Haldiram's",
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop',
        cuisines: ['North Indian', 'Snacks'],
        rating: 4.2,
        deliveryTime: '30 mins',
        deliveryMins: 30,
        priceForTwo: '₹350 for two',
        priceRaw: 350,
        category: 'healthy'
    },
    {
        id: 10,
        name: 'Starbucks',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
        cuisines: ['Coffee', 'Beverages', 'Snacks'],
        rating: 4.5,
        deliveryTime: '25 mins',
        deliveryMins: 25,
        priceForTwo: '₹700 for two',
        priceRaw: 700,
        category: 'drinks'
    },
    {
        id: 11,
        name: 'Barbeque Nation',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
        cuisines: ['Barbeque', 'North Indian'],
        rating: 4.4,
        deliveryTime: '45 mins',
        deliveryMins: 45,
        priceForTwo: '₹1200 for two',
        priceRaw: 1200,
        category: 'healthy'
    },
    {
        id: 12,
        name: 'Subway',
        image: 'https://images.unsplash.com/photo-1504093376055-b3094b674dcb?w=600&h=400&fit=crop',
        cuisines: ['Healthy', 'Salads', 'Sandwiches'],
        rating: 3.9,
        deliveryTime: '25 mins',
        deliveryMins: 25,
        priceForTwo: '₹350 for two',
        priceRaw: 350,
        category: 'healthy'
    },
    {
        id: 13,
        name: 'Wow! Momo',
        image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&h=400&fit=crop',
        cuisines: ['Chinese', 'Momos'],
        rating: 4.1,
        deliveryTime: '25 mins',
        deliveryMins: 25,
        priceForTwo: '₹300 for two',
        priceRaw: 300,
        category: 'chinese'
    },
    {
        id: 14,
        name: 'Chinese Wok',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop',
        cuisines: ['Chinese', 'Asian', 'Noodles'],
        rating: 4.0,
        deliveryTime: '30 mins',
        deliveryMins: 30,
        priceForTwo: '₹400 for two',
        priceRaw: 400,
        category: 'chinese'
    },
    {
        id: 15,
        name: 'The Belgian Waffle Co.',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop',
        cuisines: ['Waffles', 'Desserts', 'Beverages'],
        rating: 4.3,
        deliveryTime: '30 mins',
        deliveryMins: 30,
        priceForTwo: '₹400 for two',
        priceRaw: 400,
        category: 'desserts'
    },
    {
        id: 16,
        name: 'Faasos',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop',
        cuisines: ['Wraps', 'Rolls', 'Biryani'],
        rating: 4.0,
        deliveryTime: '30 mins',
        deliveryMins: 30,
        priceForTwo: '₹350 for two',
        priceRaw: 350,
        category: 'burger'
    },
    {
        id: 17,
        name: 'Oven Story',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
        cuisines: ['Pizzas', 'Pastas'],
        rating: 4.2,
        deliveryTime: '35 mins',
        deliveryMins: 35,
        priceForTwo: '₹500 for two',
        priceRaw: 500,
        category: 'pizza'
    },
    {
        id: 18,
        name: 'Natural Ice Cream',
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop',
        cuisines: ['Ice Cream', 'Desserts'],
        rating: 4.6,
        deliveryTime: '20 mins',
        deliveryMins: 20,
        priceForTwo: '₹250 for two',
        priceRaw: 250,
        category: 'desserts'
    },
    {
        id: 19,
        name: 'Cream Stone',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop',
        cuisines: ['Ice Cream', 'Desserts', 'Waffles'],
        rating: 4.4,
        deliveryTime: '25 mins',
        deliveryMins: 25,
        priceForTwo: '₹350 for two',
        priceRaw: 350,
        category: 'desserts'
    },
    {
        id: 20,
        name: 'NIC Ice Creams',
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&h=400&fit=crop',
        cuisines: ['Ice Cream', 'Desserts'],
        rating: 4.5,
        deliveryTime: '20 mins',
        deliveryMins: 20,
        priceForTwo: '₹200 for two',
        priceRaw: 200,
        category: 'desserts'
    }
];

// ── State ──
let cartCount = 0;
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'relevance';

// ── DOM Elements ──
const categoriesContainer = document.getElementById('categoriesContainer');
const restaurantsContainer = document.getElementById('restaurantsContainer');
const cartBadge = document.getElementById('cartBadge');
const searchInput = document.getElementById('searchInput');
const navbar = document.querySelector('.navbar');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const sortBtn = document.getElementById('sortBtn');
const sortPopup = document.getElementById('sortPopup');
const sortOptions = document.querySelectorAll('.sort-option');

// DOM Elements for scrolled nav
const defaultNav = document.querySelector('.default-nav');
const scrolledNav = document.querySelector('.scrolled-nav');
const restaurantsSection = document.querySelector('.restaurants-section');
const sortWrapper = document.getElementById('sortWrapper');
const origSortPlaceholder = document.getElementById('origSortPlaceholder');
const navSortPlaceholder = document.getElementById('navSortPlaceholder');
const navSearchInput = document.getElementById('navSearchInput');

// ── Init ──
function init() {
    renderCategories();
    renderRestaurants();
    setupEventListeners();
}

// ── Render Categories ──
function renderCategories() {
    categoriesContainer.innerHTML = categories.map(cat => `
        <div class="category-item ${currentCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">
            <div class="category-img-wrapper">
                <img src="${cat.image}" alt="${cat.name}" class="category-img" loading="lazy">
            </div>
            <span class="category-name">${cat.name}</span>
        </div>
    `).join('');

    // Event delegation on container
    categoriesContainer.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            currentCategory = item.dataset.id;
            renderCategories();
            renderRestaurants();
        });
    });
}

// ── Filter ──
function getFilteredRestaurants() {
    return restaurants.filter(r => {
        const matchesCategory = currentCategory === 'all' || r.category === currentCategory;
        const q = searchQuery.toLowerCase();
        const matchesSearch = r.name.toLowerCase().includes(q) ||
                              r.cuisines.some(c => c.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
    });
}

// ── Sort (operates on a copy to preserve original order) ──
function getSortedRestaurants(list) {
    const copy = [...list];
    switch (currentSort) {
        case 'deliveryTime':
            return copy.sort((a, b) => a.deliveryMins - b.deliveryMins);
        case 'rating':
            return copy.sort((a, b) => b.rating - a.rating);
        case 'costLow':
            return copy.sort((a, b) => a.priceRaw - b.priceRaw);
        case 'costHigh':
            return copy.sort((a, b) => b.priceRaw - a.priceRaw);
        default: // relevance — original order preserved by dataset index
            return copy.sort((a, b) => a.id - b.id);
    }
}

// ── Render Restaurants ──
function renderRestaurants() {
    const filtered = getFilteredRestaurants();
    const sorted = getSortedRestaurants(filtered);

    if (sorted.length === 0) {
        restaurantsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>No restaurants found</h3>
                <p style="color: var(--text-light); margin-top: 0.5rem;">Try changing your category or search term.</p>
            </div>`;
        return;
    }

    restaurantsContainer.innerHTML = sorted.map(r => `
        <div class="restaurant-card">
            <div class="restaurant-image-container">
                <img src="${r.image}" alt="${r.name}" class="restaurant-image" loading="lazy">
            </div>
            <div class="restaurant-info">
                <h3 class="restaurant-name" title="${r.name}">${r.name}</h3>
                <div class="restaurant-meta">
                    <span class="rating"><i class="fa-solid fa-star"></i>${r.rating}</span>
                    <i class="fa-solid fa-circle dot-separator"></i>
                    <span class="delivery-time">${r.deliveryTime}</span>
                </div>
                <p class="cuisines" title="${r.cuisines.join(', ')}">${r.cuisines.join(', ')}</p>
                <p class="price-for-two">${r.priceForTwo}</p>
                <div class="card-actions">
                    <button class="add-to-cart-btn" data-id="${r.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');

    // Event delegation for cart buttons
    restaurantsContainer.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart();
            const orig = btn.textContent;
            btn.textContent = 'Added!';
            btn.style.cssText = 'background-color:var(--success-color);color:white;border-color:var(--success-color)';
            setTimeout(() => {
                btn.textContent = orig;
                btn.style.cssText = '';
            }, 1000);
        });
    });
}

// ── Cart ──
function addToCart() {
    cartCount++;
    cartBadge.textContent = cartCount;
    cartBadge.style.transform = 'scale(1.3)';
    setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
}

// ── Sort Popup ──
function toggleSortPopup(forceClose = false) {
    const isOpen = sortPopup.classList.contains('open');
    if (forceClose || isOpen) {
        sortPopup.classList.remove('open');
        sortBtn.classList.remove('active');
    } else {
        sortPopup.classList.add('open');
        sortBtn.classList.add('active');
    }
}

function setSortOption(value) {
    currentSort = value;

    // Update radio UI
    sortOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.value === value);
    });

    toggleSortPopup(true);
    renderRestaurants();
}

// ── Event Listeners ──
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        navSearchInput.value = searchQuery; // Sync
        renderRestaurants();
    });

    // Sync expanded search input
    navSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        searchInput.value = searchQuery; // Sync
        renderRestaurants();
    });

    // Navbar scroll shadow & structure swap
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
        
        // Swap to expanded search and sort when scrolling past restaurants section
        const rect = restaurantsSection.getBoundingClientRect();
        if (rect.top <= 85) {
            if (!navbar.classList.contains('is-scrolled')) {
                navbar.classList.add('is-scrolled');
                defaultNav.style.display = 'none';
                scrolledNav.style.display = 'flex';
                navSortPlaceholder.appendChild(sortWrapper);
            }
        } else {
            if (navbar.classList.contains('is-scrolled')) {
                navbar.classList.remove('is-scrolled');
                scrolledNav.style.display = 'none';
                defaultNav.style.display = 'flex';
                origSortPlaceholder.appendChild(sortWrapper);
            }
        }
    });

    // Category slider scrolling
    const scrollAmount = 300;
    scrollLeftBtn.addEventListener('click', () => categoriesContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    scrollRightBtn.addEventListener('click', () => categoriesContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    categoriesContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    setTimeout(updateScrollButtons, 100);

    // Sort button toggle
    sortBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSortPopup();
    });

    // Sort option selection (event delegation)
    sortOptions.forEach(opt => {
        opt.addEventListener('click', () => setSortOption(opt.dataset.value));
    });

    // Close sort popup on outside click
    document.addEventListener('click', (e) => {
        if (!sortBtn.contains(e.target) && !sortPopup.contains(e.target)) {
            toggleSortPopup(true);
        }
    });
}

function updateScrollButtons() {
    const { scrollLeft, scrollWidth, clientWidth } = categoriesContainer;
    scrollLeftBtn.style.opacity = scrollLeft <= 0 ? '0' : '1';
    scrollLeftBtn.style.pointerEvents = scrollLeft <= 0 ? 'none' : 'auto';
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
    scrollRightBtn.style.opacity = atEnd ? '0' : '1';
    scrollRightBtn.style.pointerEvents = atEnd ? 'none' : 'auto';
}

// ── Start ──
document.addEventListener('DOMContentLoaded', init);

// Start the app
document.addEventListener('DOMContentLoaded', init);
