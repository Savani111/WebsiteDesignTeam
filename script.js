// Function to adjust layout based on screen width
function adjustLayout() {
    const width = window.innerWidth;
    const nav = document.querySelector('nav');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    
    if (width < 768) {
        // Mobile view
        if (nav && mobileToggle) {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }
}

// Function to detect browser and apply specific styles
function detectBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Safari") > -1) {
        document.body.classList.add('safari');
    }
}

// Function to fix header
function fixHeader() {
    const header = document.querySelector('header');
    if (header) {
        header.style.width = '100%';
        header.style.overflow = 'hidden';
    }
}

// Function to fix spacing
function fixSpacing() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.maxWidth = '100%';
        section.style.margin = '0 auto';
    });
}

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                nav.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});

// Ticket Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('ticketPopup');
    const closeButton = document.getElementById('closePopup');
    let hasShown = false;

    // Show popup after scrolling down 20% of the page
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        console.log('Scroll percentage:', scrollPercent); // Debug log

        if (!hasShown && scrollPercent > 20) {
            console.log('Showing popup'); // Debug log
            popup.classList.add('show');
            hasShown = true;
        }
    });

    // Close popup when clicking the close button
    closeButton.addEventListener('click', function() {
        console.log('Closing popup via button'); // Debug log
        popup.classList.remove('show');
    });

    // Close popup when clicking outside
    document.addEventListener('click', function(event) {
        if (event.target === popup) {
            console.log('Closing popup via outside click'); // Debug log
            popup.classList.remove('show');
        }
    });

    // Show popup after 3 seconds if not shown by scrolling
    setTimeout(function() {
        if (!hasShown) {
            console.log('Showing popup via timeout'); // Debug log
            popup.classList.add('show');
            hasShown = true;
        }
    }, 3000);
});

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const bookingForm = document.getElementById('bookingForm');

    if (emailForm) {
        emailForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(emailForm);
            
            try {
                const response = await fetch(emailForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Thank you for joining our email list!');
                    emailForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was a problem submitting the form. Please try again later.');
            }
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(bookingForm);
            
            try {
                const response = await fetch(bookingForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Thank you for your booking request! We will get back to you soon.');
                    bookingForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was a problem submitting the form. Please try again later.');
            }
        });
    }
});

// Initialize all functions when the window loads
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


