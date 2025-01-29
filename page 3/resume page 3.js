// Video Slider Functionality
const videoContainer = document.querySelector('.video-container');
const videos = document.querySelectorAll('.video-container video');
const prevBtn = document.getElementById('prev-video');
const nextBtn = document.getElementById('next-video');

let currentVideoIndex = 0;

function updateVideoPosition() {
  const offset = -currentVideoIndex * videoContainer.offsetWidth;
  videoContainer.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentVideoIndex > 0) {
    currentVideoIndex--;
    updateVideoPosition();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentVideoIndex < videos.length - 1) {
    currentVideoIndex++;
    updateVideoPosition();
  }
});
// Function to open the popup
function openPopup(imageSrc, description) {
  document.getElementById("popupImage").src = imageSrc;
  document.getElementById("photoTitle").innerText = "Photo Details";
  document.getElementById("photoDescription").innerText = description;
  document.getElementById("photoPopup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
  document.getElementById("photoPopup").style.display = "none";
}
