const workshops = [
    { id: 1, name: "Painting Basics", category: "Painting", artist: "Artist A", price: 50, img: "partner1.jpg" },
    { id: 2, name: "Advanced Sculpting", category: "Sculpting", artist: "Artist B", price: 75, img: "partner1.jpg" },
    { id: 3, name: "Calligraphy Art", category: "Calligraphy", artist: "Artist C", price: 40, img: "partner1.jpg" },
    { id: 4, name: "Photography Masterclass", category: "Photography", artist: "Artist A", price: 90, img: "partner1.jpg" },
    { id: 5, name: "Oil Painting Techniques", category: "Painting", artist: "Artist B", price: 65, img: "partner1.jpg" },
    { id: 6, name: "Painting Basics", category: "Painting", artist: "Artist A", price: 50, img: "partner1.jpg" },
    { id: 7, name: "Advanced Sculpting", category: "Sculpting", artist: "Artist B", price: 75, img: "partner1.jpg" },
    { id: 8, name: "Calligraphy Art", category: "Calligraphy", artist: "Artist C", price: 40, img: "partner1.jpg" },
    { id: 9, name: "Photography Masterclass", category: "Photography", artist: "Artist A", price: 90, img: "partner1.jpg" },
    { id: 10, name: "Oil Painting Techniques", category: "Painting", artist: "Artist B", price: 65, img: "partner1.jpg" },
];

const workshopsGrid = document.getElementById("workshopsGrid");
const categoryFilter = document.getElementById("categoryFilter");
const artistFilter = document.getElementById("artistFilter");
const priceFilter = document.getElementById("priceFilter");

function displayWorkshops() {
    workshopsGrid.innerHTML = "";

    const category = categoryFilter.value;
    const artist = artistFilter.value;
    const priceRange = priceFilter.value;

    const filteredWorkshops = workshops.filter(workshop => {
        const categoryMatch = category === "All" || workshop.category === category;
        const artistMatch = artist === "All" || workshop.artist === artist;
        const priceMatch =
            priceRange === "All" ||
            (priceRange === "0-50" && workshop.price <= 50) ||
            (priceRange === "51-75" && workshop.price > 50 && workshop.price <= 75) ||
            (priceRange === "76-100" && workshop.price > 75);

        return categoryMatch && artistMatch && priceMatch;
    });

    if (filteredWorkshops.length === 0) {
        workshopsGrid.innerHTML = "<p>No workshops match your filters.</p>";
        return;
    }

    filteredWorkshops.forEach(workshop => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${workshop.img}" alt="${workshop.name}">
            <h2>${workshop.name}</h2>
            <p><strong>Artist:</strong> ${workshop.artist}</p>
            <p class="price">$${workshop.price}</p>
            <button>Add to Cart</button>
        `;
        workshopsGrid.appendChild(card);
    });
}

categoryFilter.addEventListener("change", displayWorkshops);
artistFilter.addEventListener("change", displayWorkshops);
priceFilter.addEventListener("change", displayWorkshops);

window.onload = displayWorkshops;
