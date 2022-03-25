/* counter.js | https://github.com/DarioCorno/counterUp | DarioCorno | MIT License */
function counterUp(_props) {
	"use strict";

	this.defaults = {
		duration: 2000,				// duration in seconds
		prepend: '',				// string to prepend to the value
		append: '', 				// string to apend to the value
		selector: '.in-counter',    // selector used to find elements on wich applycountUp
		start: 0,					// default start
		end: 100,					//default end
		intvalues: false,			//should we display integer values only
		interval: 100				//default counting interval
	}

	var self = this;

	this.upating = false;
	this.intervalID = null;
	this.props = {};
	for(var pna in this.defaults) {
		if( typeof(pna) !== 'undefined') {
			self.props[pna] = self.defaults[pna];
			if( _props.hasOwnProperty( pna ) && self.props.hasOwnProperty( pna ))
				self.props[pna] = _props[pna];
		}
	}

	this.domelems = document.querySelectorAll(this.props.selector);
	this.elems = [];

	var cur = {};

	this.domelems.forEach( function(el) {
		cur.obj = el;


		var start = parseInt( el.getAttribute('data-counter-start') );
		isNaN( start ) ? cur.start = self.props.start :	cur.start = start;

		var end = parseInt( el.getAttribute('data-counter-end') );
		isNaN( end ) ? cur.end = self.props.end : cur.end = end;

		var dur = parseInt( el.getAttribute('data-counter-duration') );
		isNaN( dur ) ? cur.duration = self.props.duration : cur.duration = dur;

		var prep = el.getAttribute('data-counter-prepend');
		( prep == null) ? cur.prepend = self.props.prepend : cur.prepend = prep;

		var app = el.getAttribute('data-counter-append');
		( app == null) ? cur.append = self.props.append : cur.append = app;

		var intval = el.getAttribute('data-counter-intval');
		( intval == null) ? cur.intvalues = self.props.intvalues : cur.intvalues = intval;

		//step to increments at every tic
		cur.step = ( cur.end  - cur.start ) / ( cur.duration / self.props.interval );
		cur.val = cur.start;

		self.elems.push( cur );
		cur = {};
	});
};

counterUp.prototype.start = function() {
	"use strict";
	var self = this;
	if (document.querySelector(self.props.selector) != null) {
		const observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
				this.intervalID = setInterval( function() {
					if(!self.updating)
						self.update();
				}, self.props.interval);
			}
        }, { threshold: [0] });
		observer.observe(document.querySelector(self.props.selector));
	}
};

counterUp.prototype.update = function() {
	"use strict";
	this.updating = true;
	var alldone = true;
	var self = this;
	this.elems.forEach( function(el) {
		el.val += el.step;		
		if(el.val < el.end) {

			if(el.intvalues == true)
				el.obj.innerHTML = el.prepend + Math.floor( el.val ).toString() + el.append;
			else
				el.obj.innerHTML = el.prepend + (Math.round( el.val * 100 ) / 100).toString() + el.append;

			alldone = false;
		} else {
			el.obj.innerHTML = el.prepend + el.end.toString() + el.append;
		}
	});

	if (alldone == true)
		clearInterval ( this.intervalID );
	this.updating = false;
};