
let cards = document.querySelectorAll(".team-card");
let dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function changeCard(direction) {

    currentIndex = (currentIndex + direction + cards.length) % cards.length;

    cards.forEach(function(card, index) {

        card.style.display =
            (index >= currentIndex && index < currentIndex + 3)
            ? "block" : "none";

    });

    dots.forEach(function(dot, index) {
        dot.classList.toggle("active", index === currentIndex);
    });

}
