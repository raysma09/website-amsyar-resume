  // Function to open the popup
  window.openPopup = function (imageSrc, description) {
    const popup = document.getElementById("photoPopup");
    if (popup) {
      document.getElementById("popupImage").src = imageSrc;
      document.getElementById("photoTitle").innerText = "Photo Details";
      document.getElementById("photoDescription").innerText = description;
      popup.style.display = "flex";
    }
  };

  // Function to close the popup
  window.closePopup = function () {
    const popup = document.getElementById("photoPopup");
    if (popup) {
      popup.style.display = "none";
    }
  };
});