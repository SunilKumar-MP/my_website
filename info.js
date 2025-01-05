const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Variables to track the current image and all gallery images
let currentIndex = 0;
const images = Array.from(document.querySelectorAll('.gallery .card img'));

// Function to open the modal and display the clicked image
function popOut(card) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  
  // Set the modal image source to the clicked image
  currentIndex = images.indexOf(card.querySelector('img'));
  modalImage.src = images[currentIndex].src;
  
  // Show the modal
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Function to show the previous image
function prevImage(event) {
  event.stopPropagation(); // Prevent closing the modal when clicking the button
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  const modalImage = document.getElementById('modalImage');
  modalImage.src = images[currentIndex].src;
}

// Function to show the next image
function nextImage(event) {
  event.stopPropagation(); // Prevent closing the modal when clicking the button
  currentIndex = (currentIndex + 1) % images.length;
  const modalImage = document.getElementById('modalImage');
  modalImage.src = images[currentIndex].src;
}