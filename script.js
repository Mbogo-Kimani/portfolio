// Get the header element
const header = document.querySelector('.header');

// Get the scroll position on the page
let scrollPos = window.scrollY;

// Add scroll event listener
window.addEventListener('scroll', () => {
  // Get new scroll position
  const newScrollPos = window.scrollY;

  // Check if scrolling down and not at the top of the page
  if (newScrollPos > scrollPos && newScrollPos > 50) {
    // Hide the header
    header.style.top = '-80px';
  } else {
    // Show the header
    header.style.top = '0';
  }

  // Update scroll position
  scrollPos = newScrollPos;
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.logo');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.style.left = '0';
    mobileMenuOverlay.style.display = 'block';
  });

  mobileMenuOverlay.addEventListener('click', function () {
    mobileMenu.style.left = '-300px';
    mobileMenuOverlay.style.display = 'none';
  });
});


// Function to animate progress bars on scroll
function animateProgressBars() {
  // Get all progress bars
  const bars = document.querySelectorAll('.progress-bar');

  // Loop through each progress bar
  bars.forEach(bar => {
    // Get the position of the progress bar relative to the viewport
    const barPosition = bar.getBoundingClientRect().top;
    // Get the height of the viewport
    const windowHeight = window.innerHeight;

    // Check if the progress bar is within the viewport
    if (barPosition < windowHeight) {
      // Get the width (percentage) of the progress bar
      const width = bar.getAttribute('data-width');
      // Set the width of the progress bar to the specified percentage with animation
      bar.style.width = `${width}%`;
      // Add animation class to smoothly transition the width change
      bar.classList.add('animate-width');
    }
  });
}

// Attach scroll event listener to animate progress bars on scroll
window.addEventListener('scroll', animateProgressBars);

// Initial animation on page load
animateProgressBars();

document.addEventListener("DOMContentLoaded", function() {
  const message = document.getElementById("message");
  const icons = document.querySelectorAll(".skill-icon img");

  // Show message when page loads
  message.style.display = "block";

  // Hide message after a few seconds
  setTimeout(function() {
    message.style.display = "none";
  }, 5000);

  // Show message when hovering over icons
  icons.forEach(icon => {
    icon.addEventListener("mouseenter", function() {
      message.style.display = "block";
    });
    icon.addEventListener("mouseleave", function() {
      // Hide message after a short delay
      setTimeout(function() {
        message.style.display = "none";
      }, 2000);
    });
  });
});

// JavaScript
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate sections when they enter the viewport
function animateSections() {
  const sections = document.querySelectorAll('.project-section');
  
  sections.forEach(section => {
    if (isInViewport(section) && !section.classList.contains('animate')) {
      section.classList.add('animate');
    }
  });
}

// Add event listener for scrolling to trigger the animations
window.addEventListener('scroll', animateSections);

document.addEventListener("DOMContentLoaded", function() {
    // Autoplay and pause videos on mouseover and mouseout
    const videos = document.querySelectorAll(".item.video video");
    videos.forEach(video => {
        video.addEventListener("mouseover", function() {
            this.play();
        });
        video.addEventListener("mouseout", function() {
            this.pause();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
