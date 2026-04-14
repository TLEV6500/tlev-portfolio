document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem("theme") === "light") {
        htmlElement.classList.remove("dark");
        themeToggleBtn.textContent = "light_mode";
    }

    themeToggleBtn.addEventListener("click", () => {
        htmlElement.classList.toggle("dark");
        const isDark = htmlElement.classList.contains("dark");

        // Swap icon and save state
        themeToggleBtn.textContent = isDark ? "dark_mode" : "light_mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // --- 2. ScrollSpy Logic & Click Handling ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let isClickScrolling = false; // Flag to prevent observer from firing during click scrolls

    // A. Instant Click Feedback
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            // Lock the scroll spy observer temporarily
            isClickScrolling = true;

            // Instantly remove active states from all links
            navLinks.forEach((l) => {
                l.classList.remove("text-accent", "border-accent");
                l.classList.add("text-on-surface/70", "border-transparent");
            });

            // Instantly apply active state to the clicked link
            e.currentTarget.classList.remove(
                "text-on-surface/70",
                "border-transparent",
            );
            e.currentTarget.classList.add("text-accent", "border-accent");

            // Unlock the observer after the smooth scroll finishes (approx 800ms)
            setTimeout(() => {
                isClickScrolling = false;
            }, 800);
        });
    });

    // B. Observer for Manual Scrolling
    const observerOptions = {
        root: null,
        // Triggers when the section crosses the upper 20% to 40% of the viewport
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        // If the user just clicked a link, ignore the scroll events until it settles
        if (isClickScrolling) return;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                    link.classList.remove("text-accent", "border-accent");
                    link.classList.add(
                        "text-on-surface/70",
                        "border-transparent",
                    );

                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.remove(
                            "text-on-surface/70",
                            "border-transparent",
                        );
                        link.classList.add("text-accent", "border-accent");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // --- 3. Form Submission Prevent Default & UI Feedback ---
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevents the page from reloading
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            // Visual feedback: Change button state
            btn.innerHTML = `Transmission Sent <span class="material-symbols-outlined ml-2">check_circle</span>`;
            btn.classList.add("bg-secondary", "text-on-secondary");

            // Reset the form and button after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove("bg-secondary", "text-on-secondary");
                contactForm.reset();
            }, 3000);
        });
    }
});
