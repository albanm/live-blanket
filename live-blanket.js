(function() {

	window.liveBlanket = function() {
		blanket.onTestDone(1, true);
		blanket.onTestsDone();
	};

	blanket.beforeStartTestRunner({
		callback: function() {
			blanket.setupCoverage();
			blanket.onTestStart();
		}
	});
})();