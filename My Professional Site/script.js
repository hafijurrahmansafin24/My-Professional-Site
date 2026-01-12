document.addEventListener("DOMContentLoaded", () => {
    navbarEffect();
    darkMode();
    counterAnimation();
    scrollReveal();
});

/* NAVBAR SCROLL */
function navbarEffect() {
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        nav.style.background = window.scrollY > 50 ? "#000" : "#111";
    });
}

/* DARK MODE */
function darkMode() {
    const btn = document.getElementById("themeToggle");
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

/* COUNTER */
function counterAnimation() {
    document.querySelectorAll("[data-count]").forEach(el => {
        let target = +el.dataset.count;
        let count = 0;
        let speed = target / 100;

        let interval = setInterval(() => {
        count += speed;
        el.textContent = Math.floor(count);
        if (count >= target) {
            el.textContent = target;
            clearInterval(interval);
        }
        }, 20);
    });
}

/* SCROLL REVEAL */
function scrollReveal() {
    const items = document.querySelectorAll("section, .service-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = "translateY(0)";
        }
        });
    }, { threshold: 0.15 });

    items.forEach(i => {
        i.style.opacity = 0;
        i.style.transform = "translateY(40px)";
        i.style.transition = "0.6s";
        observer.observe(i);
    });
}

/* FOOTER */
document.getElementById("year").textContent = new Date().getFullYear();
