$().ready(function() {

	$('.tabcontrol li a').click(function(){
		var eq = $(this).parent('li').index();
		$('.tile').hide().eq(eq).fadeIn(300);
	});

	$('.tabcontrol li a').eq(0).click();

	$('.tile').click(function() {
			var the = $(this);
			var origTitle = the.text();
			var altTitle  = the.data('alttitle');

			the.data('alttitle', origTitle);
			the.find('h1').text(altTitle);
	});

});
