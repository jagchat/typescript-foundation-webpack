webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $ = __webpack_require__(1);
	var _ = __webpack_require__(2);
	(function () {
	    $('body').append("<p>" + _.now() + "</p>");
	    console.log("hallo");
	})();
	function testFunction(num) {
	    if (num > 0) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.testFunction = testFunction;


/***/ }
]);