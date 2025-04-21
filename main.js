import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Make all sections visible initially
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('visible');
  });

  // Initialize skill bars
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });

  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Testimonial carousel
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  const testimonials = document.querySelectorAll('.testimonial-item');
  
  testimonials.forEach((testimonial, index) => {
    if (index > 0) {
      testimonial.style.display = 'none';
    }
  });
  
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      testimonialDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.style.display = 'block';
          testimonial.style.opacity = '0';
          setTimeout(() => {
            testimonial.style.opacity = '1';
          }, 10);
        } else {
          testimonial.style.display = 'none';
        }
      });
    });
  });

  // Form submission handling
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
});