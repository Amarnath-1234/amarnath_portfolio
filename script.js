console.log("---");

const barBtn = document.querySelector('.bar');
const popupBox = document.querySelector('.popup-box');
const closeBtn = document.querySelector('.close-btn');

// Initially hide close button
closeBtn.style.display = 'none';

// Add click event listener for the bar button
barBtn.addEventListener('click', () => {
  popupBox.style.display = 'block'; // Show the popup
  closeBtn.style.display = 'block'; // Show the close button
  barBtn.style.display = 'none'; // Hide the bar button
});

// Add click event listener for the close button
closeBtn.addEventListener('click', () => {
  popupBox.style.display = 'none'; // Hide the popup
  closeBtn.style.display = 'none'; // Hide the close button
  barBtn.style.display = 'block'; // Show the bar button
});


// Select relevant elements
const appearanceBtn = document.querySelector('#appearance-btn');
// Select the theme toggle button
const themeToggle = document.querySelector('.theme-toggle');
const popupThemeButton = document.querySelector('#themeToggle');

appearanceBtn.addEventListener('click', () => {
    if (themeToggle.style.display === 'none') {
        themeToggle.style.display = 'block';
    } else {
        themeToggle.style.display = 'none';
    }
});

// Event listener for the popup theme toggle button
popupThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Example of theme toggling
    const icon = popupThemeButton.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});


// Function to toggle theme
themeToggle.addEventListener("click", () => {
    themeToggle.style.display='none'
    // Toggle the data-theme attribute on the <html> tag
    if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon for light mode
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon for dark mode
    }
});

// Set the initial theme based on user preference or default to light
const userPreferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", userPreferredTheme);
    if (userPreferredTheme === "dark") {    
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
// -------------------
const themeToggle2 = document.querySelector('.theme-toggle2');
const popupThemeButton2 = document.querySelector('#themeToggle2');

    popupThemeButton2.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // Example of theme toggling
        const icon = popupThemeButton2.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
    
    
    // Function to toggle theme
    themeToggle2.addEventListener("click", () => {
        // Toggle the data-theme attribute on the <html> tag
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggle2.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon for light mode
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggle2.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon for dark mode
        }
    });
    
    const userPreferredTheme2 = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", userPreferredTheme2);
    if (userPreferredTheme2 === "dark") {    
        themeToggle2.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        themeToggle2.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
// --------------------

document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("btnsend");

    sendButton.addEventListener("click", async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Prepare data in JSON format
        const jsonData = [{
            name: name,
            email: email,
            message: message,
        },];

        try {
            // Send data to the server
            const response = await fetch("http://localhost:5000/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            });

            if (response.ok) {
                const result = await response.json();
                alert("Message sent successfully: " + JSON.stringify(result));
            } else {
                alert("Failed to send the message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending data:", error);
            alert("An error occurred. Please check your server or internet connection.");
        }
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
