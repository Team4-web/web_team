document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const paintingId = parseInt(urlParams.get('id'));
    const cartCount = document.querySelector('.cart-count');
    
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    function updateCartCount() {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'block' : 'none';
    }

    // Get painting details
    function getPaintingDetails(id) {
        const paintings = [
            { 
                id: 1, 
                title: "Decomposition VI", 
                artist: "GAVROCHE", 
                image: "images/new1.jpeg", 
                price: 120.00,
                description: "A striking exploration of urban decay and renewal, this piece combines acrylics with found materials from city streets to create a textured, multi-layered composition.",
                details: [
                    "Year: 2023",
                    "Medium: Mixed media on canvas",
                    "Dimensions: 120 × 90 cm",
                    "Style: Urban contemporary"
                ]
            },
        ];

        return paintings.find(p => p.id == id) || {
            id: id,
            title: "Artwork " + id,
            artist: "Unknown Artist",
            image: "images/default.jpg",
            price: 99.99,
            description: "This is a beautiful artwork that showcases the artist's unique style and vision.",
            details: [
                "Year: 2023",
                "Medium: Oil on canvas",
                "Dimensions: 80 × 60 cm",
                "Style: Contemporary"
            ]
        };
    }

    function renderPaintingDetails() {
        const painting = getPaintingDetails(paintingId);
        
        document.getElementById('paintingImage').src = painting.image;
        document.getElementById('paintingTitle').textContent = painting.title;
        document.getElementById('paintingArtist').textContent = "By " + painting.artist;
        document.getElementById('paintingPrice').textContent = "$" + painting.price.toFixed(2);
        document.getElementById('paintingDescription').textContent = painting.description;
        
        const detailsList = document.getElementById('paintingDetails');
        detailsList.innerHTML = painting.details.map(detail => `<li>${detail}</li>`).join('');
        
        document.title = `${painting.title} by ${painting.artist} | Art Gallery`;
    }

    // Add to cart
    function addToCart() {
        const painting = getPaintingDetails(paintingId);
        
        const existingItem = cartItems.find(item => item.id == paintingId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                id: painting.id,
                name: painting.title,
                image: painting.image,
                price: painting.price,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartCount();
        alert('Added to cart!');
    }

    // Event listener
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);

    renderPaintingDetails();
});