const exhibitions = {
    1: {
        title: "Modern Masters",
        image: "images/exhibition1.jpg",
        date: "June 15 - August 30, 2023",
        location: "National Art Museum",
        artworks: "45 artworks",
        description: "This exhibition showcases the finest works from the Modern Masters collection, featuring pieces from renowned artists around the world. The collection includes paintings, sculptures, and mixed media works that represent the Modernist movement."
    },
    2: {
        title: "Abstract Visions",
        image: "images/exhibition2.jpg",
        date: "July 1 - September 15, 2023",
        location: "Contemporary Art Center",
        artworks: "32 artworks",
        description: "Explore the world of abstract art through this stunning collection that challenges perceptions and invites new interpretations. Featuring works from both established and emerging abstract artists."
    },
    3: {
        title: "Renaissance Revisited",
        image: "images/exhibition3.jpg",
        date: "August 10 - October 25, 2023",
        location: "City Art Gallery",
        artworks: "28 artworks",
        description: "A modern take on Renaissance art, featuring contemporary artists who draw inspiration from this pivotal period in art history. The exhibition includes both homages and critical reinterpretations."
    },
    4: {
        title: "Eastern Perspectives",
        image: "images/exhibition4.jpg",
        date: "September 5 - November 20, 2023",
        location: "Asian Art Museum",
        artworks: "38 artworks",
        description: "This exhibition presents a diverse range of artworks from across Asia, showcasing traditional techniques alongside modern interpretations of Eastern artistic traditions."
    },
    5: {
        title: "Surreal Encounters",
        image: "images/exhibition5.jpg",
        date: "October 1 - December 15, 2023",
        location: "Modern Art Institute",
        artworks: "24 artworks",
        description: "Step into the world of the surreal with this mind-bending exhibition that explores the subconscious through painting, sculpture, and digital media."
    },
    6: {
        title: "Minimalist Expressions",
        image: "images/exhibition6.jpg",
        date: "November 10, 2023 - January 25, 2024",
        location: "Design Art Space",
        artworks: "18 artworks",
        description: "Less is more in this carefully curated exhibition that explores the power of minimalism in contemporary art. Featuring works that use simplicity to convey complex ideas."
    },
    7: {
        title: "Impressionist Light",
        image: "images/exhibition7.jpeg",
        date: "December 5, 2023 - February 20, 2024",
        location: "Luminance Gallery",
        artworks: "30 artworks",
        description: "Celebrating the play of light in impressionist works, this exhibition brings together masterpieces that capture fleeting moments and atmospheric effects."
    },
    8: {
        title: "Digital Frontiers",
        image: "images/exhibition8.jpeg",
        date: "January 15 - March 30, 2024",
        location: "New Media Center",
        artworks: "22 interactive installations",
        description: "Exploring the intersection of art and technology, this exhibition features cutting-edge digital works that respond to viewer interaction."
    }
};

function showExhibitionModal(exhibitionId) {
    const exhibition = exhibitions[exhibitionId];
    
    if (!exhibition) return;
    
    document.getElementById('modalImage').src = exhibition.image;
    document.getElementById('modalImage').alt = exhibition.title;
    document.getElementById('modalTitle').textContent = exhibition.title;
    document.getElementById('modalDate').textContent = exhibition.date;
    document.getElementById('modalLocation').textContent = exhibition.location;
    document.getElementById('modalArtworks').textContent = exhibition.artworks;
    document.getElementById('modalDescription').textContent = exhibition.description;
    
    document.getElementById('exhibitionModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('exhibitionModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    // 3d slider
    const sliderItems = document.querySelectorAll('.slider .item');
    sliderItems.forEach(item => {
        item.addEventListener('click', function() {
            const exhibitionId = this.getAttribute('data-exhibition');
            showExhibitionModal(exhibitionId);
        });
    });

    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    const backButton = document.querySelector('.back-to-main');
    if (backButton) {
        backButton.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == document.getElementById('exhibitionModal')) {
            closeModal();
        }
    };

    // Pause animation on hover
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        slider.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
});