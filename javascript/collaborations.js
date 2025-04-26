document.addEventListener('DOMContentLoaded', function() {
    const collaborationsGrid = document.querySelector('.collaborations-grid');
    const artistModal = document.getElementById('artistModal');
    const artistModalBody = document.getElementById('artistModalBody');
    const closeBtn = document.querySelector('.close-btn');
    const cartCount = document.querySelector('.cart-count');
    
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    const collaborations = [
        
     ];

    // Update cart count display
    function updateCartCount() {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'block' : 'none';
    }
    function renderArtistModal(artistId) {
        const collaboration = collaborations.find(c => c.id === artistId);
        if (!collaboration) return;
        
        artistModalBody.innerHTML = `
            <h2 class="modal-title">${collaboration.artist}'s Works</h2>
            <div class="products-grid">
                ${collaboration.products.map(product => `
                    <div class="product-card" data-id="${product.id}">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    </div>
                `).join('')}
            </div>
        `;
        
        artistModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Adding
    function addToCart(productId) {
        const product = getAllProducts().find(p => p.id == productId);
        if (!product) return;

        const existingItem = cartItems.find(item => item.id == productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartCount();
    }

    // Get all products from all collaborations
    function getAllProducts() {
        return collaborations.flatMap(collab => 
            collab.products.map(product => ({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price
            }))
        );
    }

    function closeModal() {
        artistModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('artist-btn')) {
            const artistId = parseInt(e.target.getAttribute('data-artist'));
            renderArtistModal(artistId);
        }
        
        // Collaboration image click
        if (e.target.classList.contains('collab-main-img')) {
            const artistId = parseInt(e.target.closest('.collaboration-item').getAttribute('data-id'));
            renderArtistModal(artistId);
        }

        if (e.target.classList.contains('product-img') || e.target.closest('.product-card')) {
            const productId = e.target.closest('.product-card').getAttribute('data-id');
            window.location.href = `painting.html?id=${productId}`;
        }

        // Add to cart
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
            alert('Item added to cart!');
        }
    });

    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === artistModal) {
            closeModal();
        }
    });

    document.querySelectorAll('.collaboration-item').forEach((item, index) => {
        item.setAttribute('data-id', index + 1);
    });
});