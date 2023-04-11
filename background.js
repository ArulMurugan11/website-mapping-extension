// console.log('Loaded extension');

// function blockRequest(details) {
//   return { cancel: true };
// }

// function updateFilters(urls) {
//   if (chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
//     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
//   chrome.webRequest.onBeforeRequest.addListener(
//     blockRequest,
//     { urls: ['*://*.facebook.com/*', '*://*.facebook.net/*'] },
//     ['blocking']
//   );
// }

// setTimeout(() => {
//   chrome.webRequest.onBeforeRequest.addListener(
//     function (details) {
//       return { cancel: true };
//     },
//     { urls: ['<all_urls>'] },
//     ['blocking']
//   );
// }, 5000);

// updateFilters();
// window.stop();
// setTimeout(() => {
//   window.stop();
// }, 5000);
// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.executeScript(tab.id, {
//     code: 'window.stop();',
//     runAt: 'document_start',
//   });
// });
