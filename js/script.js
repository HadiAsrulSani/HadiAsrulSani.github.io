// ===========================
// HAMBURGER MENU FUNCTIONALITY
// ===========================

const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");

hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// Close menu when a link is clicked
const navLinks = navbarMenu.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideNav =
    hamburger.contains(event.target) || navbarMenu.contains(event.target);
  if (!isClickInsideNav && navbarMenu.classList.contains("active")) {
    navbarMenu.classList.remove("active");
  }
});

// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===========================
// SCROLL ANIMATION
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and skill items
document
  .querySelectorAll(".skill-item, .project-card, .certificate-card")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.boxShadow = "0 5px 20px rgba(99, 102, 241, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===========================
// ACTIVE NAVBAR LINK HIGHLIGHT
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.style.color = "var(--primary-color)";
    } else {
      item.style.color = "";
    }
  });
});

// ===========================
// FORM SUBMISSION (Optional - untuk contact)
// ===========================

// Jika Anda menambahkan form di masa depan, tambahkan handler di sini
// Contoh:
/*
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted');
    });
}
*/

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Function untuk copy email/link
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Disalin ke clipboard!");
  });
}

// Function untuk membuka modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Function untuk menutup modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Set initial body opacity
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease";

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(
  "%cSelamat datang di Portofolio Hadi! 🎉",
  "font-size: 20px; color: #6366f1; font-weight: bold;",
);
console.log(
  "%cTerima kasih telah mengunjungi",
  "font-size: 14px; color: #ec4899;",
);
