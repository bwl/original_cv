$(document).ready(function() {
	
	flowplayer("player", "swf/flowplayer-3.1.3.swf",  { 

	    clip: conf.defaults, 

	    plugins: {         
	        controls: conf.skins.bwl         
	    	}
	});


	$("h1").click(function() {
	
		alert("benjaminlundquist.com");
	});


	
});