var t;

window.onload = function() {
	load('images/index/0605_Bella_2496web.jpg','images/index/DSC_5072web.jpg','images/index/DSC_7657new.jpg','images/index/Img0285web.jpg','images/line.gif');
	onLoadCustomEvents();
	window.onresize();
};

window.onresize = function() {
	window.clearTimeout(t)
	t = window.setTimeout(function() {	
    dispatch_event(window, new CustomEvent("custom::resize", { bubbles:true, cancelable:true }));
	}, 500);
};

function onLoadCustomEvents() {
	add_event(window, 'custom::resize', custom_resize);
}

function custom_resize() {
	equalHeights();
}

// Set equal height
function equalHeights() {
	
	var links = document.querySelectorAll('.storyLinks a');
	var height = 0;

	for (var i = 0; i < links.length; i++) {
		links[i].style.height = '';
		if (links[i].offsetHeight > height) {
			height = links[i].offsetHeight;		
		}
	};

	// convert to pixels
	height += 'px';

	// Set height of each
	for (var i = 0; i < links.length; i++) {
		links[i].style.height = height;
	};
}

function dispatch_event(eventTarget, event) {
	if (eventTarget.dispatchEvent) {
		eventTarget.dispatchEvent(event);
	} else {
		eventTarget.fireEvent(event);
	}
}

function add_event(eventTarget, event, eventHandler) {
	if (eventTarget.addEventListener) {
		eventTarget.addEventListener(event, eventHandler, false);		
	} else {
		eventTarget.attachEvent(event, eventHandler);				
	}
}