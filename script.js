// Function to make the website responsive
function adjustLayout() {
    let screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        document.querySelector(".tour-banner").style.height = "auto";
        document.querySelector(".tour-banner img").style.width = "100%";
        document.querySelector(".tour-banner img").style.objectFit = "cover";
    } else {
        document.querySelector(".tour-banner").style.height = "100vh";
    }
}

// Function to detect browser
function detectBrowser() {
    let userAgent = navigator.userAgent;

    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        document.querySelector(".tour-banner img").style.objectFit = "contain";
    } else if (userAgent.includes("Firefox")) {
        document.querySelector("body").style.fontSize = "1.1rem";
    }
}

function fixHeader() {
    let header = document.querySelector("nav");
    header.style.width = "100%"; // Ensure the header spans the full width
    header.style.overflowX = "hidden"; // Prevent it from overflowing
}

function fixSpacing() {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.margin = "0 auto"; // Centers sections
        section.style.width = "90%"; // Prevents them from being too wide
    });
}

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded'); // Debug line
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;

    console.log('Mobile Nav Toggle:', mobileNavToggle); // Debug line
    console.log('Nav:', nav); // Debug line

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    body.appendChild(overlay);

    // Toggle mobile menu
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function(e) {
            console.log('Toggle clicked'); // Debug line
            e.preventDefault();
            this.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
        });
    }

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        mobileNavToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNavToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });
    });
});

// Run all initialization functions
window.onload = function() {
    adjustLayout();
    detectBrowser();
    fixHeader();
    fixSpacing();
};

// Run layout adjustments on window resize
window.onresize = function() {
    adjustLayout();
    fixHeader();
    fixSpacing();
};


