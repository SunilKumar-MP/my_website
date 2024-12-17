const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



  AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once while scrolling
  });
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
