// Get modal elements
const modal = document.getElementById("video-modal");
const modalVideo = document.getElementById("project-video");
const videoTrigger = document.getElementById("video-trigger");
const closeModal = document.getElementById("close-modal");

// Show modal on click
videoTrigger.addEventListener("click", () => {
  modal.style.display = "flex";
  modalVideo.play();
});

// Close modal on click of close button
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0; // Reset video to start
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
});
