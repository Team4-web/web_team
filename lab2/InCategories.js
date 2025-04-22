const workshops = [
    { id: 1, name: "Хатан", category: "Монгол зураг", artist: "О.Доржготов", price: 50, img: "tenger_shuteen.jpg" },
    { id: 2, name: "Крокус", category: "Чимэглэлийн", artist: "Б.Энхтуяа", price: 75, img: "crocus.jpg" },
    { id: 3, name: "Зохиомж 5", category: "Абстракт", artist: "Д.Дуулал", price: 40, img: "duulal.jpg" },
    { id: 4, name: "Амьдрахуйн зүйд", category: "Цуврал", artist: "Ш.Тамир", price: 90, img: "zuid.jpg" },
    { id: 5, name: "Шонхорын Анчин", category: "Монгол зураг", artist: "О.Доржготов", price: 65, img: "anchin2.jpg" },
    { id: 6, name: "Хөх Тасархай", category: "Монгол зураг", artist: "О.Доржготов", price: 200, img: "huh_tasarhai.jpg" },
    { id: 7, name: "Гүвэл", category: "Чимэглэлийн", artist: "Б.Энхтуяа", price: 75, img: "gurvel.jpg" },
    { id: 8, name: "Зохиомж 18", category: "Абстракт", artist: "Д.Дуулал", price: 40, img: "18.jpg" },
    { id: 9, name: "Сэтгэгдэл", category: "Цуврал", artist: "Г.Лхагвасүрэн", price: 90, img: "setgegdel.jpg" },
    { id: 10, name: "Оршихуй", category: "Монгол зураг", artist: "Г.Лхагвасүрэн", price: 65, img: "dmumv.jpg" },
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
            (priceRange === "51-150" && workshop.price > 50 && workshop.price <= 75) ||
            (priceRange === "150-2000" && workshop.price > 75);

        return categoryMatch && artistMatch && priceMatch;
    });

    if (filteredWorkshops.length === 0) {
        workshopsGrid.innerHTML = "<p>Илэрц олдсонгүй</p>";
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
        `;
        workshopsGrid.appendChild(card);
    });
}

categoryFilter.addEventListener("change", displayWorkshops);
artistFilter.addEventListener("change", displayWorkshops);
priceFilter.addEventListener("change", displayWorkshops);

window.onload = displayWorkshops;
