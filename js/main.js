var t;
var d = document;
cwd = this.cwd ? this.cwd : '';

// load('images/index/0605_Bella_2496web.jpg','images/index/DSC_5072web.jpg','images/index/DSC_7657new.jpg','images/index/Img0285web.jpg','images/line.gif');

window.onload = function() {

	onLoadCustomEvents();
	$(window).resize();

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

	(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.0";
				fjs.parentNode.insertBefore(js, fjs);
			}
			(document, 'script', 'facebook-jssdk'));

	if (window.jQuery !== undefined) {
		loadGallery();	
	}
};

$(window).resize(function() {
	clearTimeout(t)
	t = setTimeout(function() {	
    	dispatch_event(window, new CustomEvent("custom::resize", { bubbles:true, cancelable:true }));
	}, 1000);
});

function loadGallery() {
	var galleryHeight = $(window).height() - $('#header').height();

	if (galleryHeight > 800) {
		galleryHeight = 800;
	}

	$('#galleria').height(galleryHeight);

	// Load the classic theme
	Galleria.loadTheme(cwd + 'galleria/themes/classic/galleria.classic.js');
	// Initialize Galleria
	$('#galleria').galleria();
}


function onLoadCustomEvents() {
	add_event(window, 'custom::resize', custom_resize);
}

function custom_resize() {
	equalHeights();
}

// Set equal height
function equalHeights() {
	
	var links = document.querySelectorAll('.storyLinks a span');
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