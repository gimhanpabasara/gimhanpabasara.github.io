document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body
    // Cursor Animation
    const cursor = document.querySelector('.cursor');


    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Save preference to localStorage
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Add animation class for a nice effect
        body.classList.add('theme-transition');
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 500);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    // Click Effect
    const clickElements = document.querySelectorAll('.click-effect');
    clickElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // The effect is handled by CSS
        });
    });
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate');
    
    const animateOnScroll = () => {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Add to your existing script.js

// CV Download Animation
const cvDownloadBtn = document.getElementById('cv-download-btn');
const cvPreviewImg = document.querySelector('.cv-preview-img');
const previewMagnifier = document.querySelector('.preview-magnifier');

if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', function(e) {
        // Only animate if it's a real download link
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            
            // Start downloading animation
            this.classList.add('downloading');
            
            // Simulate download delay
            setTimeout(() => {
                // Actually download the file
                const link = document.createElement('a');
                link.href = this.getAttribute('href');
                link.download = 'YourName_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Reset button after download
                setTimeout(() => {
                    this.classList.remove('downloading');
                }, 2000);
            }, 1500);
        }
    });
}

// CV Preview Magnifier Effect
if (cvPreviewImg && previewMagnifier) {
    cvPreviewImg.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Position magnifier
        previewMagnifier.style.left = `${x - 75}px`;
        previewMagnifier.style.top = `${y - 75}px`;
        
        // Set background position for magnified effect
        const bgPosX = (x / this.offsetWidth) * 100;
        const bgPosY = (y / this.offsetHeight) * 100;
        previewMagnifier.style.backgroundImage = `url(${this.src})`;
        previewMagnifier.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    });
    
    cvPreviewImg.addEventListener('mouseleave', function() {
        previewMagnifier.style.opacity = '0';
    });
}
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Add animation delay to elements for staggered effect
    animateElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.1}s`;
    });
});