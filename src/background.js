import browser from "webextension-polyfill";

console.log("Hello from the background!");

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("onMessage", request, sender, sendResponse);

  if (request.type === "openCustomTab") {
    chrome.tabs.query({
      active: true, 
      // currentWindow: true // in a serviceWorker, this is not working
    }, 
    (tabs) => {
      const currentTab = tabs[0];
      console.log('tabs',tabs)
      
      const newTabUrl = chrome.runtime.getURL('src/form-Tab.html') + 
                        '?originalUrl=' + encodeURIComponent(currentTab.url);
      chrome.tabs.create({url: newTabUrl});
    });
  }

  sendResponse({success: true});
});
