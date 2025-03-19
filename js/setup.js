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
        <div class="logo"><a href="/index.html"><img src="/assets/logo.png" alt="IRCTC LOGO" /></a></div>
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
  <p>Copyright Â© 2025 - www.irctc.co.in. All Rights Reserved</p>
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
});
