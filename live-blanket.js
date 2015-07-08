/*global blanket*/

(function() {
	"use strict";

	var elemDiv = document.createElement('div');
	elemDiv.id = 'live-blanket';
	elemDiv.style.cssText = 'position:absolute;z-index:100;background:white; top: 0px; border: 1px solid red;';
	elemDiv.innerHTML = 'Live Blanket waiting for code instrumentation by blanket. You should probably do nothing in the meantime.';
	document.body.appendChild(elemDiv);

	window.liveBlanket = function() {
		blanket.onTestDone(1, true);
		blanket.onTestsDone();
	};

	blanket.beforeStartTestRunner({
		callback: function() {
			blanket.setupCoverage();
			blanket.onTestStart();
			elemDiv.innerHTML = 'Live Blanket OK. You should interact with the page, then ask for coverage results.';
			var elemButton = document.createElement('button');
			elemButton.innerHTML = 'click for results';
			elemButton.onclick = window.liveBlanket;
			elemDiv.appendChild(elemButton);
		}
	});
})();
