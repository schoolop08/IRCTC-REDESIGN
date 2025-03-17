document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
      <header>
        <div class="logo"><a href="/index.html"><img src="/assets/logo.png" alt="IRCTC LOGO" /></a></div>
        <nav class="main-nav">
          <a href=""><button>IRCTC Exclusive</button></a>
          <a href=""><button>Amazon Daily Deals</button></a>
          <a href=""><button>Alerts</button></a>
          <a href=""><button>Contact Us</button></a>
          <a href=""><button>हिंदी</button></a>
          <a href="pages/login.html"><button id="login-button">Login  /  Register</button></a>
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
  };
  document.head.appendChild(gsapScript);
});
