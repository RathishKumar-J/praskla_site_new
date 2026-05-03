import './style.css'

// Mobile Menu Toggle Logic
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    // This is a placeholder for actual mobile menu implementation
    // In a real app, we would toggle a class to show/hide the menu
    console.log('Mobile menu toggled');
    alert('Mobile menu functionality would be expanded here.');
  });
}

// Navbar Scroll Behavior (Hide on scroll down, show on scroll up)
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.7)';
    header.style.padding = '1rem 0';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.4)';
    header.style.padding = '1.25rem 0';
  }

  if (currentScrollY > lastScrollY && currentScrollY > 500) {
    header.classList.add('navbar--hidden');
  } else {
    header.classList.remove('navbar--hidden');
  }
  
  lastScrollY = currentScrollY;
});

// Stats Counter Animation
const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-value');
  const speed = 200;

  const startCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / speed;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
};

document.addEventListener('DOMContentLoaded', animateCounters);

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.hero-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  observer.observe(el);
});

// Add a class to handle the animation when visible
const style = document.createElement('style');
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

console.log('Praskla Technology Website Initialized');
