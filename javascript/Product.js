document.getElementById("addToCart").addEventListener("click", function() {
    alert("Сагсанд нэмэгдлээ!");
});

document.getElementById("addToFavorites").addEventListener("click", function() {
    alert("Added to favorites!");
});

function changeImage(element) {
    document.getElementById("mainImage").src = element.src;
}
