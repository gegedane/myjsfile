document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and guidelines
    var toggleButton = document.getElementById("toggleButton");
    var googleDocsFrame = document.getElementById("googleDocsFrame");

    // Add a click event listener to the button
    toggleButton.addEventListener("click", function() {
        // Toggle the visibility of the guidelines
        if (googleDocsFrame.style.display === "none" || googleDocsFrame.style.display === "") {
            googleDocsFrame.style.display = "block";
        } else {
            googleDocsFrame.style.display = "none";
        }
    });
});
