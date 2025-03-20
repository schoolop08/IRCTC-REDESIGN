document.addEventListener("DOMContentLoaded", () => {
  function setFavicon(url) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  }

  // Example: favicon ko set karna
  setFavicon("/assets/crsr.png");

  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1000);
  const headerHTML = `
  <div class="flair"> <img src="/assets/crsr.png"></div>
  
    <!-- loading animation only for landing page -->
    <div class="overlay"></div>
    <div class="logo-wrapper">
      <img src="/assets/logo.png" alt="Logo" class="logo" />
    </div>
      <header>
        <div class="logo" style="display:flex; align-items:center; gap:20px "><a href="/index.html"><img src="/assets/logo.png" alt="IRCTC LOGO" /></a><div class="theme">
          <input id="checkbox" type="checkbox" />
          <label class="switch" for="checkbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="slider"
            >
              <path
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
              ></path>
            </svg>
          </label>
        </div>
        </div>
        <nav class="main-nav">
          <a href="#"><button>IRCTC Exclusive</button></a>
          <a href="#"><button>Amazon Daily Deals</button></a>
          <a href="#"><button>Alerts</button></a>
          <a href="#"><button>Contact Us</button></a>
          <a href="#"><button>हिंदी</button></a>
          <a href="/pages/login.html"><button id="login-button">Login  /  Register</button></a>
        </nav>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

      </header>
    `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  const footerHTML = `
      <footer>
  <div class="footer-links">
    <div>
      <button>IRCTC Trains</button>
      <button>General Information</button>
      <button>Important Information</button>
    </div>
    <div>
      <button>Agents</button>
      <button>Enquiries</button>
      <button>How To</button>
    </div>
    <div>
      <button>IRCTC Official App</button>
      <button>Advertise with us</button>
      <button>Refund Rules</button>
    </div>
    <div>
      <button>Person With Disability Facilities</button>
      <button>IRCTC eWallet</button>
      <button>Avail Loyalty Benefits</button>
    </div>
    <div>
      <button>IRCTC-iPAY Payment Gateway</button>
      <button>IRCTC Zone</button>
      <button>DMRC Ticket Booking at IRCTC</button>
    </div>
    <div>
      <button>For Newly Migrated Agents</button>
      <button>Mobile Zone</button>
      <button>Policies</button>
    </div>
    <div>
      <button>Ask Disha ChatBot</button>
      <button>About us</button>
      <a href="https://equery.irctc.co.in/" target="_blank">
        <button>Help & Support</button>
      </a>
    </div>
  </div>
  <hr/>
  <center>
  <p>Designed with 💝 by <a href="https://opsahoo.netlify.app/" style="color: var(--White); text-decoration: none">Om Prakash  Sahoo</a></p>
  </center>
</footer>

    `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav button");

  hamburger.addEventListener("click", mobileMenu);
  navLinks.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  const gsapScript = document.createElement("script");
  gsapScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
  gsapScript.onload = () => {
    console.log("GSAP Loaded Successfully! 😎");
    // GSAP Load Animation for Whole Page
    gsap.from("header", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1, // Logo ke animation ke baad delay
    });

    gsap.from(".main-nav a", {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
      delay: 1.5, // Header ke baad thoda delay
    });

    gsap.from("footer", {
      y: 50, // Bottom se slide hoke aayega
      opacity: 0,
      duration: 2,
      delay: 0.6,
      ease: "power2.out",
    });

    // Initial Setup
    gsap.set(".flair", { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

    // Load Animation
    gsap.to(".flair", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)", // Smooth pop-in effect
    });

    // Mouse Trail Animation
    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  };

  document.head.appendChild(gsapScript);

  console.log("DOM loaded");

  const checkbox = document.getElementById("checkbox");

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-theme");
    if (checkbox) checkbox.checked = true;
  } else {
    document.documentElement.classList.remove("dark-theme");
    if (checkbox) checkbox.checked = false;
  }

  if (checkbox) {
    console.log("Checkbox found");
    checkbox.addEventListener("change", () => {
      console.log("Checkbox toggled");
      if (checkbox.checked) {
        document.documentElement.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
    });
  } else {
    console.log("Checkbox not found");
  }
});
