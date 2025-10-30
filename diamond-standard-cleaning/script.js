// Main JavaScript for Diamond Standard Cleaning
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonial carousel functionality
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('hidden', i !== index);
        });
    }

    // Initialize first testimonial
    showTestimonial(currentTestimonial);

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Validate form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Form submission logic would go here
            alert('Thank you for your message! We will contact you shortly.');
            contactForm.reset();
        });
    }
});