// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
    // Toggle the mobile menu
    var menuToggle = document.querySelector('button[aria-label="Toggle Menu"]');
    var mobileMenu = document.querySelector('.md\\:hidden');
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scroll to section when clicking on navbar links
    var navbarLinks = document.querySelectorAll('nav a[href^="#"]');
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Show and hide the "back to top" button
    var backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });
    
  });
  
  // tailwind.config.js

module.exports = {
    theme: {
      extend: {
        colors: {
          lilac: {
            50: '#f6f5ff',
            100: '#e8e5ff',
            200: '#c8bfff',
            300: '#a892ff',
            400: '#8762ff',
            500: '#7241d6',
            600: '#5b32a9',
            700: '#482a84',
            800: '#361f60',
            900: '#24143c',
          },
        },
      },
    },
    variants: {},
    plugins: [],
  }

