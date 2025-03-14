document.querySelector('.search-btn').addEventListener('click', function() {
    let searchQuery = prompt("What are you searching for?");
    if (searchQuery) {
        alert("You searched for: " + searchQuery);
    }
});

const categoryBtns = document.querySelectorAll('.category-btn');
const categorySections = document.querySelectorAll('.category-section');

categoryBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        categorySections.forEach((section) => {
            section.style.display = 'none';
        });
        categorySections[index].style.display = 'block';

        categoryBtns.forEach((btn) => {
            btn.style.backgroundColor = '#333';
        });
        btn.style.backgroundColor = '#555';
    });
});

document.querySelector('.events-btn').addEventListener('click', function() {
    alert("Upcoming events will be displayed here.");
});

document.querySelector('.social-btn').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com';
});

document.querySelector('.social-btn:nth-child(2)').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com';
});

document.querySelector('.social-btn:nth-child(3)').addEventListener('click', function() {
    window.location.href = 'https://www.twitter.com';
});

document.querySelector('.human-btn').addEventListener('click', function() {
    window.location.href = '#'; 
});

document.querySelector('.love-btn').addEventListener('click', function() {
    window.location.href = '#';
});

document.querySelector('.purchase-btn').addEventListener('click', function() {
    window.location.href = '#';
});
