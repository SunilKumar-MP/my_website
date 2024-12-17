const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
// Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 6 seconds
setInterval(nextSlide, 6000);

// Placeholder for language translation functionality
document.getElementById('translate-button').addEventListener('click', () => {
    alert('Language translation coming soon!');
});
function playVideo(videoId) {
    // Get the modal and iframe
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('youtubePlayer');

    // Set the YouTube video URL
    player.src = `https://www.youtube.com/embed/nZpwEhBxFJA?si=4aqtfyVPl9FGhFaL" `;

    // Show the modal
    modal.style.display = 'flex';
}

function closeVideo() {
    // Hide the modal
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';

    // Stop the video
    const player = document.getElementById('youtubePlayer');
    player.src = '';
}


const crypto = require('crypto');

// Function to encrypt data
function encrypt(text, secretKey) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

// Function to decrypt data
function decrypt(text, secretKey) {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

// Example usage
const secretKey = crypto.randomBytes(32); // Use a secure key
const data = 'Sensitive data that needs to be encrypted';

const encryptedData = encrypt(data, secretKey);
console.log('Encrypted Data:', encryptedData);

const decryptedData = decrypt(encryptedData, secretKey);
console.log('Decrypted Data:', decryptedData);









