// JavaScript for expanding feature details
function showMore(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Additional interactivity can be added here in future (e.g., AJAX for loading dynamic content)
