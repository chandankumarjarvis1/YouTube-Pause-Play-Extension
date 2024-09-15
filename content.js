// Function to pause the video
function pauseVideo() {
  let video = document.querySelector("video");
  if (video && !video.paused) {
    video.pause();
    console.log("Video paused due to tab switch.");
  }
}

// Function to play the video
function playVideo() {
  let video = document.querySelector("video");
  if (video && video.paused) {
    video.play();
    console.log("Video played as tab is active.");
  }
}

// Listen for tab visibility changes
document.addEventListener("visibilitychange", function () {
  // Check if the auto pause feature is enabled
  chrome.storage.sync.get(["autoPauseEnabled"], (result) => {
    if (result.autoPauseEnabled) {
      if (document.visibilityState === "hidden") {
        // Tab is hidden, pause the video
        pauseVideo();
      } else if (document.visibilityState === "visible") {
        // Tab is visible, play the video
        playVideo();
      }
    }
  });
});
