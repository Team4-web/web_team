document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cartItemsList');
    const subtotalElement = document.getElementById('subtotal');
    const deliveryElement = document.getElementById('delivery');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartCount = document.querySelector('.cart-count');
    
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    // Update cart count
    function updateCartCount() {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'block' : 'none';
    }

    // Rendering
    function renderCartItems() {
        if (cartItems.length === 0) {
            cartItemsList.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                    <a href="new.html" class="shop-btn">SHOP NOW</a>
                </div>
            `;
            return;
        }

        cartItemsList.innerHTML = cartItems.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="item-info">
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-name">${item.name}</div>
                </div>
                <div class="item-price">$${item.price.toFixed(2)}</div>
                <div class="item-quantity">
                    <div class="quantity-control">
                        <button class="quantity-btn minus-btn">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus-btn">+</button>
                    </div>
                </div>
                <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-btn"><i class="fas fa-times"></i></button>
            </div>
        `).join('');

        updateTotals();
    }

    function updateTotals() {
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const delivery = 10.00; 
        const total = subtotal + delivery;
        
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        deliveryElement.textContent = `$${delivery.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    function updateQuantity(id, change) {
        const item = cartItems.find(item => item.id == id);
        if (!item) return;
        
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cartItems = cartItems.filter(item => item.id != id);
        }
        
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems();
        updateCartCount();
    }

    function removeItem(id) {
        cartItems = cartItems.filter(item => item.id != id);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems();
        updateCartCount();
    }

    cartItemsList.addEventListener('click', function(e) {
        const itemElement = e.target.closest('.cart-item');
        if (!itemElement) return;
        
        const id = itemElement.getAttribute('data-id');
        
        if (e.target.classList.contains('minus-btn') || e.target.closest('.minus-btn')) {
            updateQuantity(id, -1);
        } else if (e.target.classList.contains('plus-btn') || e.target.closest('.plus-btn')) {
            updateQuantity(id, 1);
        } else if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
            removeItem(id);
        }
    });

    checkoutBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Proceeding to checkout!');
    });

    renderCartItems();
});