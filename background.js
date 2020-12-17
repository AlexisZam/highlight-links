chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "highlight-links",
    title: "Highlight links",
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "highlight-links")
    chrome.tabs.executeScript({
      code:
        'for (const link of document.links) link.style.backgroundColor = "#ffff00";',
    });
});
