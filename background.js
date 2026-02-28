
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url?.includes("youtube.com/watch")) {
    chrome.storage.local.get("mySyllabus", (data) => {
      if (!data.mySyllabus) return;
      const syllabus = data.mySyllabus.toLowerCase();
      const videoTitle = (tab.title || "").toLowerCase();
      const keywords = syllabus.split(',').map(k => k.trim()).filter(k => k.length > 0);
      const isRelated = keywords.some(word => videoTitle.includes(word));
      if (!isRelated && keywords.length > 0) {
        chrome.tabs.update(tabId, { url: "https://www.google.com/search?q=Focus+on+Studies" });
      }
    });
  }
});
