// Get the checkbox element
const toggle = document.getElementById("toggle");

// Load the saved toggle state from storage
chrome.storage.sync.get(["autoPauseEnabled"], (result) => {
  toggle.checked = result.autoPauseEnabled || false;
});

// Add event listener to save the state when toggled
toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ autoPauseEnabled: toggle.checked }, () => {
    console.log("Auto Pause is " + (toggle.checked ? "enabled" : "disabled"));
  });
});
