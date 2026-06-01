/* ===== DARK MODE TOGGLE ===== */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
});

/* ===== MOBILE MENU TOGGLE ===== */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* ===== TYPING EFFECT ===== */
const text = "Aspiring Data Scientist | ML Engineer | Full Stack Developer";
let index = 0;
const typingElement = document.getElementById("typingText");

function typingEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', typingEffect);

/* ===== PROJECT DETAILS ===== */
const projectDetails = {
    pharma: {
        title: "AI Pharmacovigilance Web App",
        details: `
Tech Stack:
• Python, NLP, BioBERT, AWS
• JavaScript, HTML, CSS

Features:
• Automated PDF ingestion and processing
• Named Entity Recognition (NER) using BioBERT
• Extraction of drug names, adverse events, and patient info
• JSON-structured output for downstream analysis
• Web dashboard for report visualization

Key Achievements:
• Achieved 92% accuracy in entity recognition
• Processed 1000+ medical documents
• Deployed on AWS infrastructure
        `
    },
    ml: {
        title: "Machine Learning Pipeline",
        details: `
Tech Stack:
• Python, Scikit-learn, Pandas, NumPy
• SQL, Jupyter Notebook

Features:
• End-to-end data preprocessing pipeline
• Feature engineering and selection
• Multiple model training (Random Forest, XGBoost, SVM)
• Automated evaluation and cross-validation
• Hyperparameter tuning with GridSearchCV

Key Achievements:
• Improved model accuracy by 15%
• Reduced training time by 40%
• Automated model selection based on performance metrics
        `
    },
    fullstack: {
        title: "Full Stack Web Application",
        details: `
Tech Stack:
• Frontend: HTML, CSS, JavaScript
• Backend: REST APIs
• Database: SQL

Features:
• Responsive design (Mobile, Tablet, Desktop)
• Modern UI/UX with smooth animations
• User authentication and authorization
• Real-time data updates
• Performance optimized (< 2s load time)

Key Achievements:
• 100% mobile responsive
• Lighthouse score: 95+
• Integrated with external APIs
• Deployed on production servers
        `
    }
};

function showProjectDetails(projectId) {
    const project = projectDetails[projectId];
    if (project) {
        alert(`${project.title}\n\n${project.details}`);
    }
}

/* ===== CONTACT FORM VALIDATION & SUBMISSION ===== */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert("⚠️ Please fill all fields.");
        return;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    // Check minimum message length
    if (message.length < 10) {
        alert("⚠️ Please write a message with at least 10 characters.");
        return;
    }

    // If validation passes, show success message
    alert(`✅ Thank you for reaching out, ${name}!\n\nYour message has been received. I'll get back to you soon at ${email}.`);
    
    // Reset form
    this.reset();

    // Optional: Send to backend service (commented out)
    // You can uncomment and modify this to send actual emails
    // Example using FormSpree or EmailJS:
    /*
    const formData = new FormData(this);
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully:', data);
        alert('✅ Thank you! Your message has been sent.');
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('❌ There was an error sending your message. Please try again.');
    });
    */
});

/* ===== SMOOTH SCROLL BEHAVIOR ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== NAVBAR SCROLL EFFECT ===== */
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/* ===== LAZY LOADING IMAGES (if you add images later) ===== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    // Uncomment this when you add images with data-src attribute
    // document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ===== CONSOLE MESSAGE ===== */
console.log('%c👋 Welcome to Mukesh\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #007bff;');
console.log('%cFeel free to explore and connect with me!', 'font-size: 14px; color: #00d4ff;');
console.log('%cGitHub: https://github.com/iam-mukeshvenkatesh', 'font-size: 12px; color: #666;');

/* ===== PERFORMANCE MONITORING ===== */
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});
