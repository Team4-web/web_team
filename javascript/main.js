document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    const header = document.querySelector('.header');
    if (header) header.prepend(mobileMenuBtn);
    
    const categoryTabs = document.querySelector('.category-tabs');
    if (categoryTabs) {
        mobileMenuBtn.addEventListener('click', function() {
            categoryTabs.classList.toggle('active');
        });
    }

    // Shopping cart
    let cartCount = 0;
    const cartButtons = document.querySelectorAll('.cart-btn');
    
    cartButtons.forEach(button => {
        const countEl = document.createElement('span');
        countEl.className = 'cart-count';
        countEl.textContent = cartCount;
        button.appendChild(countEl);
        
        button.addEventListener('click', function() {
            cartCount++;
            this.querySelector('.cart-count').textContent = cartCount;
            this.querySelector('.cart-count').style.display = 'flex';

            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });

    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('far');
            this.classList.toggle('fas');
            
            if (this.classList.contains('fas')) {
                this.style.color = '#ff0000';
                this.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            } else {
                this.style.color = '';
            }
        });
    });

    const languageBtn = document.querySelector('.language-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            const languages = ['EN', 'MN', 'JP'];
            const currentIndex = languages.indexOf(this.textContent);
            const nextIndex = (currentIndex + 1) % languages.length;
            this.textContent = languages[nextIndex];
        });
    }

    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Search artworks...';
            searchInput.className = 'search-input';
            
            this.parentNode.insertBefore(searchInput, this);
            this.style.display = 'none';
            
            searchInput.focus();
            
            searchInput.addEventListener('blur', function() {
                this.remove();
                searchBtn.style.display = 'block';
            });
            
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    alert('Searching for: ' + this.value);
                    this.blur();
                }
            });
        });
    }

    // choosing active page
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.category-btn');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});