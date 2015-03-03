$(document).ready(function() {
			
		var titleoriginalTitleText = $("#title").html();
		var baconoriginalTitleText = $("#bacon-title").html();
		var nutsBoltsoriginalTitleText = $("#nuts-title").html();
		
		
        $("#no-apples").toggle(function() {
			
			$("#title").html("∴ NO FAIRS!!!");
			pageTracker._trackPageview("apple-nofair");



        	}, function() {

			$("#title").html(titleoriginalTitleText);
			pageTracker._trackPageview("apple-noapples");
			
        });


        $("#bacon-date").toggle(function() {
			
			$("#bacon-title").html("Don't HATE!!");
			pageTracker._trackPageview("bacon-dont-hate");

        	}, function() {

			$("#bacon-title").html(baconoriginalTitleText);
			pageTracker._trackPageview("bacon-dates");
			
        });


        $("#nuts-bolts").toggle(function() {
			
			$("#nuts-title").html("Some are about fasteners!!!");
			pageTracker._trackPageview("fasteners");

        	}, function() {

			$("#nuts-title").html(nutsBoltsoriginalTitleText);
			pageTracker._trackPageview("jokesaboutfood");
			
        });



});	