const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 8px 20px rgba(255,102,0,0.4)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});