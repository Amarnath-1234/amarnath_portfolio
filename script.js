console.log("---");

const bar = document.querySelector('.bar');
        const popupBox = document.querySelector('.popup-box');
        const closeBtn = document.querySelector('.close-btn');

        bar.addEventListener('click', () => {
            popupBox.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            popupBox.style.display = 'none';
        });


// Select the theme toggle button
const themeToggle = document.getElementById("themeToggle");

// Function to toggle theme
themeToggle.addEventListener("click", () => {
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
