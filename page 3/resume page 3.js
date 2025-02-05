document.addEventListener("DOMContentLoaded", function () {
    // Select all images in the photo gallery
    const images = document.querySelectorAll(".photo-gallery img");
    const popup = document.getElementById("photoPopup");
    const popupImage = document.getElementById("popupImage");
    const photoTitle = document.getElementById("photoTitle");
    const photoDescription = document.getElementById("photoDescription");
    const closeButton = document.querySelector(".close-btn");

    // Function to open the popup
    function openPopup(imageSrc, description) {
        popupImage.src = imageSrc;
        photoTitle.innerText = "Photo Details";
        photoDescription.innerText = description;
        popup.style.display = "flex";
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = "none";
    }

    // Add click event listeners to all images
    images.forEach(image => {
        image.addEventListener("click", function () {
            openPopup(image.src, this.getAttribute("alt"));
        });
    });

    // Close the popup when clicking the close button
    closeButton.addEventListener("click", closePopup);

    // Close the popup when clicking outside of the popup content
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select popup elements
    const popup = document.getElementById("photoPopup");
    const popupImage = document.getElementById("popupImage");
    const photoTitle = document.getElementById("photoTitle");
    const photoDescription = document.getElementById("photoDescription");
    const closeButton = document.querySelector(".close-btn");

    // Open Popup Function - Set as a global function
    window.openPopup = function (imageSrc, description) {
        popupImage.src = imageSrc;
        photoTitle.innerText = "Photo Details";
        photoDescription.innerText = description;
        popup.style.display = "flex";
    };

    // Close Popup Function
    window.closePopup = function () {
        popup.style.display = "none";
    };

    // Close popup when clicking the close button
    closeButton.addEventListener("click", closePopup);

    // Close popup when clicking outside the content
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });
});
