$( ".js-toggle-top-menu" ).click(function() {
  $( ".mobile-menu-drop-down" ).slideToggle( 250 );
});

$(window).resize(function() {
		
	if ($(".mobile-menu").css("display") != "block" ){
		
		$( ".mobile-menu-drop-down" ).hide();
	}

});
