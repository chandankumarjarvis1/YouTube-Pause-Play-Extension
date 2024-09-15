// This is the background script for handling tab switch events

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url.includes("youtube.com")) {
      // When switching to a YouTube tab, send a message to play the video
      chrome.tabs.sendMessage(tab.id, { action: "play" });
    } else {
      // When switching to any other tab, send a message to pause the video
      chrome.tabs.sendMessage(activeInfo.previousTabId, { action: "pause" });
    }
  });
});

// Handle tab updates (for when URL changes in the active tab)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.includes("youtube.com")) {
    // If the YouTube tab gets updated, ensure it resumes
    chrome.tabs.sendMessage(tabId, { action: "play" });
  }
});
