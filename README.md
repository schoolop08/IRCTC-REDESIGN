# 🚀 IRCTC Rethought 
##### Frontend Only
IRCTC Rethought is a frontend-only redesign of the Indian Railway Catering and Tourism Corporation (IRCTC) website, built for the Front End Frontier hackathon hosted by IIT Patna. This project reimagines the landing page, train booking process, train listings, and more, focusing on modern design, usability, and interactivity - all without a backend, as per the hackathon rules. The aim is to make booking train tickets and exploring services like holiday packages or luxury trains a smoother, more enjoyable experience.

**Live Demo**: [IRCTC - Rethought || The App](https://irctc-rethought.netlify.app/)
**Source Code**: [Github Code File](https://github.com/schoolop08/IRCTC-RETHOUGHT)

---

## Features

- **Dual Theme Support**: Toggle between dark and light modes for user preference and accessibility.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop screens.
- **Clean UI**: A modern, uncluttered interface with a calming color scheme, clear fonts, and a consistent card-based layout.
- **Train Search & Booking**: Easy-to-use search form with fields for source, destination, dates, and quotas.
- **Train Listings**: Color-coded trains (e.g., green for available, red for waitlist) to help users decide quickly.
- **Accessibility**: Includes alt text for images and keyboard navigation for inclusivity.
- **Micro-Animations**: Smooth GSAP-powered animations to boost interactivity without slowing things down.

These features hit the focus on **visual appeal**, **user experience**, and **interactivity**.

---

## Technologies Used

- **Frontend**: Plain HTML, CSS no frameworks, keeping it simple and fast.
- **Animations**:  JavaScript - GSAP for lightweight, smooth micro-animations.
- **Deployment**: Hosted on Netlify for quick access.
- **Version Control**: Git and GitHub for organized, clean code management.

This setup highlights **code quality** (readable, straightforward code) and **optimization** (minimal dependencies).

---

## User Workflow

Here’s how a user would navigate the "IRCTC Rethought" app, step by step:

1. **Landing Page (Index)**
    - The user arrives on the homepage and types in their travel details - like source, destination, and dates - into the search bar.
    - They hit "Book Train" to move forward.
2. **Train Listings Page**
    - A list of trains pops up, color-coded by type for easy recognition:
        - **Purple-ish**: Normal trains
        - **Pink-ish**: Rajdhani trains
        - **Blue**: Other special trains (you can add more colors for variety and depth!)
    - Each train shows its price per person and availability (e.g., green for available, red for waitlist).
    - The user picks a train and clicks "Proceed to Book."
3. **Passenger Details Page**
    - The user fills in passenger info - like name and age - and can tweak details like:
        - Changing the boarding station.
        - Adding extras (e.g., meal preferences or berth choices, just like the real IRCTC site).
    - When done, they click "Go to Payment."
4. **Payment Gateway (Mock)**
    - Since this is a frontend-only project, the payment gateway isn’t shown - it’d be handled by a payment provider in a real app.
    - After this step, the user lands on a success page.
5. **Success Page**
    - The user gets a booking confirmation and can click "Home" to return to the landing page or stay to explore more.
6. **Track Your Train Page**
    - The user enters a train number or station names to check the train’s status.
    - Visual cues - like a blinking station - show where the train is right now, making it engaging and clear.

This flow keeps things simple and user-friendly, tying into the **UX** and **visual design** goals.

---

## Challenges Faced

1. **Starting Point**: Figuring out where to begin was tricky. I sketched the layout first, and that got things rolling.
2. **Design Consistency**: Keeping everything uniform was hard. I used a card system (white background, dark gray borders) and CSS root variables for colors/fonts to fix this.
3. **Animations**: Adding GSAP was a challenge but worth it. I kept animations subtle (e.g., fades, slides) for performance.
4. **Navigation**: Two-level nav bars felt complex. I simplified them with a clear structure and tested across devices.
	
These fixes show **creativity**, **visual design**, and **optimization** in action.

---

## Credits

- **Fonts**: Poppins from [Google Fonts](https://fonts.google.com/specimen/Poppins) for a clean, modern look.
- **Icons**: Booking form icons from [Disha](https://askdisha.irctc.co.in/).
- **Images**: A few design-purpose images from Google.

---

## Why This Project Stands Out

- **Code Quality**:
    - Built with plain HTML, CSS, and JS - easy to read and maintain.
    - No heavy frameworks, just clean, simple code.
- **Visual Design**:
    - A sleek, modern UI with a consistent card layout and unique color-coding (purple for normal, pink for Rajdhani, blue for others).
    - Dual themes (dark/light) give it extra polish and flexibility.
- **User Experience (UX)**:
    - Navigation is straightforward, with two-level menus made simple.
    - Responsive design and accessibility (alt text, keyboard support) make it usable for everyone.
- **Optimization & Performance**:
    - Super lightweight - fast to load with no bloat.
    - GSAP animations are smooth but don’t drag down speed.
- **Creativity & Innovation**:
    - Theme switching and color-coded trains add a fresh twist.
    - Blinking station indicators on the tracking page bring some cool interactivity.

#IRCTC_Rethought: A redesign that prioritizes user experience, accessibility, and innovation, with the potential to inspire better digital services for all.