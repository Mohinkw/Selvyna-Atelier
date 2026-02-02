// Duplicate the logo set for infinite scrolling
const tracks = document.querySelectorAll(".scroller-track");

tracks.forEach((track) => {
  const originalContent = track.innerHTML;
  // Duplicate 3 times for better seamless looping on all screen sizes
  track.innerHTML = originalContent + originalContent + originalContent;
});

// Click to navigate for tickers
document.querySelectorAll(".ticker-section").forEach((section) => {
  section.addEventListener("click", () => {
    const destination = section.getAttribute("data-url");
    if (destination) {
      window.location.href = destination;
    }
  });
});

// Testimonial Carousel
const slides = document.querySelectorAll(".testimonial-slide");
let currentSlide = 0;

function showNextTestimonial() {
  if (slides.length > 0) {
    // Remove active class from current slide
    slides[currentSlide].classList.remove("active");

    // Move to next slide, loop back to 0 if at the end
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to new slide
    slides[currentSlide].classList.add("active");
  }
}

// Run the function every 3000ms (3 seconds)
setInterval(showNextTestimonial, 3000);

// HAMBURGER MENU TOGGLE
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    // Toggle the 'active' class on the menu
    navMenu.classList.toggle("active");

    // Toggle icon between ☰ and ✕
    if (navMenu.classList.contains("active")) {
      hamburgerBtn.innerHTML = "✕"; // Close icon
    } else {
      hamburgerBtn.innerHTML = "☰"; // Menu icon
    }
  });
}

// Lightweight YouTube embed (loads iframe on click)
document.querySelectorAll(".lite-yt").forEach((container) => {
  const videoId = container.getAttribute("data-embed");
  const playBtn = container.querySelector(".lite-yt-play");

  const loadIframe = () => {
    if (!videoId || container.querySelector("iframe")) return;
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
    container.innerHTML = "";
    container.appendChild(iframe);
  };

  if (playBtn) {
    playBtn.addEventListener("click", loadIframe);
  } else {
    container.addEventListener("click", loadIframe);
  }
});