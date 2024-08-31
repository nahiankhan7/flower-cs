const aboutPage = document.getElementById("about-page");
const openAbout = document.getElementById("open-about");
const closeAbout = document.getElementById("close-about");

const contactPage = document.getElementById("contact-page");
const openContact = document.getElementById("open-contact");
const closeContact = document.getElementById("close-contact");

// contact event handler
openContact?.addEventListener("click", () => {
  contactPage?.classList.remove("hidden");
  setTimeout(() => {
    contactPage?.classList.remove("left-full");
  }, 100);
});

closeContact?.addEventListener("click", () => {
  contactPage?.classList.add("left-full");
  setTimeout(() => {
    contactPage?.classList.add("hidden");
  }, 100);
});

// about event handler
openAbout?.addEventListener("click", () => {
  aboutPage?.classList.remove("hidden");
  setTimeout(() => {
    aboutPage?.classList.remove("left-full");
  }, 100);
});

closeAbout?.addEventListener("click", () => {
  aboutPage?.classList.add("left-full");
  setTimeout(() => {
    aboutPage?.classList.add("hidden");
  }, 100);
});

const starfield = document.querySelector(".starfield");
// Function to create a star element
function createStar() {
  const star = document.createElement("div");
  star.className = "star";

  // Random size for the star
  const size = Math.random() * 3 + 1; // Size between 1 and 4 pixels
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random position within the viewport width
  star.style.left = `${Math.random() * 100}vw`;

  // Random duration for animation
  const duration = Math.random() * 5 + 5; // Duration between 5 and 10 seconds
  star.style.animationDuration = `${duration}s`;

  return star;
}
// Generate a number of stars and append them to starfield
function generateStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    starfield.appendChild(createStar());
  }
}
// Generate 100 stars
generateStars(100);

// Reverse countdown timer
const startDate = new Date("Aug 21, 2025 00:00:00").getTime();
const x = setInterval(() => {
  // Countdown DOM elements
  const showDays = document.getElementById("days");
  const showHours = document.getElementById("hours");
  const showMinutes = document.getElementById("minute");
  const showSeconds = document.getElementById("second");

  // get new date
  const currentTime = new Date().getTime();
  const distance = startDate - currentTime;

  // calculate time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // add DOM
  showDays.innerHTML = days;
  showHours.innerHTML = hours < 10 ? "0" + hours : hours;
  showMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  showSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(x);
    showDays.innerHTML = "00";
    showHours.innerHTML = "00";
    showMinutes.innerHTML = "00";
    showSeconds.innerHTML = "00";
  }
}, 1000);
