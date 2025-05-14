// Main JavaScript for the Parapluie Coming Soon Page

document.addEventListener('DOMContentLoaded', () => {
  // Ensure images are loaded before animation starts
  const logo = document.querySelector('.logo');
  
  if (logo.complete) {
    document.querySelector('.content').style.animation = 'fadeIn 1.2s ease-out forwards';
  } else {
    logo.addEventListener('load', () => {
      document.querySelector('.content').style.animation = 'fadeIn 1.2s ease-out forwards';
    });
  }

  // Handle any additional functionality here
  console.log('Parapluie Coming Soon page loaded');
});