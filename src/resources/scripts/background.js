const browser = require("webextension-polyfill");

browser.contextMenus.create({
  id: "screak_scrape",
  title: "Log '%s' to the console",
  contexts: ["page"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "screak_scrape") {
    browser.tabs.sendMessage(tab.id, {type: "getClickedEl"});
  }
});

browser.runtime.onMessage.addListener(message => {
  console.log('Background script got a message:', message);
  return true;
});
