document.getElementById('saveBtn').onclick = () => {
  const text = document.getElementById('syllabusInput').value;
  chrome.storage.local.set({ mySyllabus: text }, () => {
    alert("Saved! Ab padhai shuru karein.");
  });
};
