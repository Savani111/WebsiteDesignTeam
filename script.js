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

// Run functions on page load and window resize
window.onload = function () {
    adjustLayout();
    detectBrowser();
};

window.onresize = adjustLayout;

