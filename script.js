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
