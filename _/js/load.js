 var load = window.LOAD || {};//namespace
LOAD = function () {//harness
	var boot = function () {
		yepnope([{
			load: ['http://static.treehugger.com/scripts/jquery/jquery-1.6.4.min.js','http://static.treehugger.com/ads/oas/unification.js','http://static.treehugger.com/ads/oas/renderer.js']
		},{
			load: '_/js/th.js',
			complete: function () {TH.boot();}
		},{
			load: 'http://www.google-analytics.com/ga.js',
			complete: function () {var tracker = _gat._getTracker("UA-142589-8");tracker._trackPageview();}
		}]);
	}
	return {boot:boot}
}();