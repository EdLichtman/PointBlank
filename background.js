// LISTEN FOR OUR BROWERACTION TO BE CLICKED
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		file: 'blankYourAnchors.js'
	});
});
