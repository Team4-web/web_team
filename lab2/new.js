document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    // Update cart count display
    function updateCartCount() {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'block' : 'none';
    }

    // Add to cart
    function addToCart(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const existingItem = cartItems.find(item => item.id == productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price || 81.99,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartCount();
    }

    function getProductById(id) {
        const products = [
            { id: 1, name: "Decomposition VI", image: "images/new1.jpeg", price: 120.00 },
            { id: 2, name: "Urban Echo", image: "images/new2.jpeg", price: 95.00 },
            { id: 3, name: "Silent Waves", image: "images/new3.jpeg", price: 110.00 },
            { id: 4, name: "Golden Ratio", image: "images/new4.jpeg", price: 85.00 },
            { id: 5, name: "Abstract Thoughts", image: "images/new5.jpg", price: 75.00 },
            { id: 6, name: "Color Symphony", image: "images/new6.jpg", price: 130.00 },
            { id: 7, name: "Metropolis", image: "images/new7.jpg", price: 105.00 },
            { id: 8, name: "Organic Forms", image: "images/new8.jpg", price: 90.00 },
            { id: 9, name: "Light Play", image: "images/new9.jpg", price: 115.00 },
            { id: 10, name: "Deep Space", image: "images/new10.jpg", price: 125.00 },
            { id: 11, name: "Cultural Tapestry", image: "images/new11.jpg", price: 140.00 },
            { id: 12, name: "Minimalist", image: "images/new12.jpg", price: 80.00 }
        ];
        return products.find(p => p.id == id);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const artworks = document.querySelectorAll('.artwork');
    
    artworks.forEach(artwork => {
        artwork.addEventListener('click', function() {
            const artworkId = this.getAttribute('data-artwork');
            window.location.href = `painting.html?id=${artworkId}`;
        });
    });
});