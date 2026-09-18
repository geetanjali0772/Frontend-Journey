// ===============================
// ZOMATO FRONTEND JAVASCRIPT
// ===============================


// Get elements

const searchBox = document.querySelector("main input");
const logo = document.querySelector(".logo img");
const navLinks = document.querySelectorAll("ul li a");


// ===============================
// SEARCH BOX
// ===============================

const suggestions = [
    "Search for pizza",
    "Search for burgers",
    "Search for Chinese food",
    "Search for restaurants",
    "Search for cafes",
    "Search for biryani"
];

let suggestionIndex = 0;


// Change placeholder automatically

setInterval(() => {

    if (document.activeElement !== searchBox) {

        suggestionIndex =
            (suggestionIndex + 1) % suggestions.length;

        searchBox.placeholder =
            suggestions[suggestionIndex];
    }

}, 2500);


// ===============================
// SEARCH FUNCTION
// ===============================

searchBox.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const searchValue = searchBox.value.trim();

        if (searchValue === "") {

            searchBox.style.border = "3px solid white";

            searchBox.placeholder =
                "Please enter something to search!";

            setTimeout(() => {
                searchBox.style.border = "none";
            }, 1000);

        } else {

            alert(
                `Searching for "${searchValue}"...`
            );

        }
    }

});


// ===============================
// LOGO CLICK ANIMATION
// ===============================

logo.addEventListener("click", function () {

    logo.style.transform = "scale(0.8)";

    setTimeout(() => {

        logo.style.transform = "scale(1.1)";

    }, 150);

    setTimeout(() => {

        logo.style.transform = "scale(1)";

    }, 300);

});


// ===============================
// NAVIGATION LINK EFFECT
// ===============================

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        // Remove active class from all links

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class

        this.classList.add("active");

        console.log(
            `Clicked: ${this.textContent}`
        );

    });

});


// ===============================
// SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(139, 0, 0, 0.95)";

        header.style.backdropFilter =
            "blur(10px)";

        header.style.transition =
            "all 0.3s ease";

    } else {

        header.style.background =
            "transparent";

        header.style.backdropFilter =
            "none";
    }

});