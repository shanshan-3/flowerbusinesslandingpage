document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navLinksItems = document.querySelectorAll(".nav-links a");

    const closeMenu = () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    };

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            hamburger.classList.toggle("active", isOpen);
            hamburger.setAttribute("aria-expanded", String(isOpen));
        });
    }

    navLinksItems.forEach((item) => {
        item.addEventListener("click", () => {
            if (hamburger && navLinks && navLinks.classList.contains("active")) {
                closeMenu();
            }
        });
    });
});
