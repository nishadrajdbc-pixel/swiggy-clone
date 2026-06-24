// Mock Data for Categories
const categories = [
    { id: 'all', name: 'All', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop' },
    { id: 'pizza', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop' },
    { id: 'burger', name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop' },
    { id: 'biryani', name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop' },
    { id: 'chinese', name: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop' },
    { id: 'desserts', name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop' },
    { id: 'healthy', name: 'Healthy', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop' },
    { id: 'drinks', name: 'Drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop' },
    { id: 'south-indian', name: 'South Indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?w=200&h=200&fit=crop' },
    { id: 'pasta', name: 'Pasta', image: 'https://images.unsplash.com/photo-1621996311239-5fc3f6312a02?w=200&h=200&fit=crop' }
];

// Mock Data for Restaurants
const restaurants = [
    {
        id: 1,
        name: 'Burger King',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop',
        cuisines: ['Burgers', 'American'],
        rating: 4.3,
        deliveryTime: '30 mins',
        priceForTwo: '₹350 for two',
        category: 'burger'
    },
    {
        id: 2,
        name: 'Pizza Hut',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
        cuisines: ['Pizzas', 'Italian'],
        rating: 4.2,
        deliveryTime: '35 mins',
        priceForTwo: '₹600 for two',
        category: 'pizza'
    },
    {
        id: 3,
        name: 'Domino\'s Pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
        cuisines: ['Pizzas', 'Fast Food'],
        rating: 4.1,
        deliveryTime: '30 mins',
        priceForTwo: '₹400 for two',
        category: 'pizza'
    },
    {
        id: 4,
        name: 'KFC',
        image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=600&h=400&fit=crop',
        cuisines: ['Fried Chicken', 'Fast Food'],
        rating: 4.0,
        deliveryTime: '25 mins',
        priceForTwo: '₹450 for two',
        category: 'burger' // using burger as proxy for fast food here to match categories
    },
    {
        id: 5,
        name: 'Biryani Blues',
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&h=400&fit=crop',
        cuisines: ['Biryani', 'North Indian'],
        rating: 4.2,
        deliveryTime: '30 mins',
        priceForTwo: '₹500 for two',
        category: 'biryani'
    },
    {
        id: 6,
        name: 'Behrouz Biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop',
        cuisines: ['Biryani', 'Mughlai'],
        rating: 4.3,
        deliveryTime: '35 mins',
        priceForTwo: '₹700 for two',
        category: 'biryani'
    },
    {
        id: 7,
        name: 'Wow! Momo',
        image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&h=400&fit=crop',
        cuisines: ['Chinese', 'Momos'],
        rating: 4.1,
        deliveryTime: '25 mins',
        priceForTwo: '₹300 for two',
        category: 'chinese'
    },
    {
        id: 8,
        name: 'Haldiram\'s',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop',
        cuisines: ['North Indian', 'Snacks'],
        rating: 4.2,
        deliveryTime: '30 mins',
        priceForTwo: '₹350 for two',
        category: 'healthy'
    }
];

// State Management
let cartCount = 0;
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const restaurantsContainer = document.getElementById('restaurantsContainer');
const cartBadge = document.getElementById('cartBadge');
const searchInput = document.getElementById('searchInput');
const navbar = document.querySelector('.navbar');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Initialize the app
function init() {
    renderCategories();
    renderRestaurants();
    setupEventListeners();
}

// Render Categories
function renderCategories() {
    categoriesContainer.innerHTML = categories.map(category => `
        <div class="category-item ${currentCategory === category.id ? 'active' : ''}" data-id="${category.id}">
            <div class="category-img-wrapper">
                <img src="${category.image}" alt="${category.name}" class="category-img" loading="lazy">
            </div>
            <span class="category-name">${category.name}</span>
        </div>
    `).join('');

    // Add click listeners to newly created category items
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            currentCategory = item.dataset.id;
            renderCategories(); // Re-render to update active state
            renderRestaurants(); // Re-render restaurants based on new category
        });
    });
}

// Render Restaurants
function renderRestaurants() {
    // Filter logic
    let filteredRestaurants = restaurants.filter(restaurant => {
        const matchesCategory = currentCategory === 'all' || restaurant.category === currentCategory;
        const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              restaurant.cuisines.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    if (filteredRestaurants.length === 0) {
        restaurantsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>No restaurants found</h3>
                <p style="color: var(--text-light); margin-top: 0.5rem;">Try changing your category or search term.</p>
            </div>
        `;
        return;
    }

    restaurantsContainer.innerHTML = filteredRestaurants.map(restaurant => `
        <div class="restaurant-card">
            <div class="restaurant-image-container">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image" loading="lazy">
            </div>
            <div class="restaurant-info">
                <h3 class="restaurant-name" title="${restaurant.name}">${restaurant.name}</h3>
                
                <div class="restaurant-meta">
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        ${restaurant.rating}
                    </span>
                    <i class="fa-solid fa-circle dot-separator"></i>
                    <span class="delivery-time">${restaurant.deliveryTime}</span>
                </div>
                
                <p class="cuisines" title="${restaurant.cuisines.join(', ')}">${restaurant.cuisines.join(', ')}</p>
                <p class="price-for-two">${restaurant.priceForTwo}</p>
                
                <div class="card-actions">
                    <button class="add-to-cart-btn" data-id="${restaurant.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click if added later
            addToCart();
            
            // Visual feedback
            const originalText = btn.textContent;
            btn.textContent = 'Added!';
            btn.style.backgroundColor = 'var(--success-color)';
            btn.style.color = 'white';
            btn.style.borderColor = 'var(--success-color)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 1000);
        });
    });
}

// Add to Cart function
function addToCart() {
    cartCount++;
    cartBadge.textContent = cartCount;
    
    // Add a little pop animation to the badge
    cartBadge.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 200);
}

// Setup all event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderRestaurants();
    });

    // Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Categories slider scrolling
    const scrollAmount = 300;
    
    scrollLeftBtn.addEventListener('click', () => {
        categoriesContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    scrollRightBtn.addEventListener('click', () => {
        categoriesContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Handle scroll button visibility (optional enhancement)
    categoriesContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    
    // Initial check
    setTimeout(updateScrollButtons, 100);
}

function updateScrollButtons() {
    const { scrollLeft, scrollWidth, clientWidth } = categoriesContainer;
    
    // Hide left button if at start
    scrollLeftBtn.style.opacity = scrollLeft <= 0 ? '0' : '1';
    scrollLeftBtn.style.pointerEvents = scrollLeft <= 0 ? 'none' : 'auto';
    
    // Hide right button if at end (allow 1px rounding error)
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
    scrollRightBtn.style.opacity = isAtEnd ? '0' : '1';
    scrollRightBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
