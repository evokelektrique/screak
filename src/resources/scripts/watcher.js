const browser = require("webextension-polyfill");
let clicked_element = null;

document.addEventListener("contextmenu", function(event) {
  // Get text of clicked element
  clicked_element = event.target.innerText;
}, true);

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const data = { clicked_element: clicked_element }
    browser.runtime.sendMessage(data);
    return true;
});
