(function(factory){
	'use strict';
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){
	'use strict';
	var datepickerPlugin = function(option){};
	$.fn.datepicker = datepickerPlugin;})
)


(function($, window, document, undefined) {
	$.fn.owlCarousel = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');
			});
	};
})(window.Zepto || window.jQuery, window, document);