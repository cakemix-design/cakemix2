(function($) {
    var $pswp = $('.pswp')[0];
    var $image = [];
	var $idiots = [];

    $('.image-gallery').each( function() {
		
        var stupidcounter = 0;
		console.log("Hate Javascript");
		
		var $items = [];	
		
		$(this).find('.portfolio-thumb').each(function(){
		
			
			console.log("stupidcounter " +stupidcounter + $(this));
		
					var $pic     = $(this), 
						getItems = function() {

								$pic.find('a').each(function() {
									var $href   = $(this).attr('href'),
										$size   = $(this).data('size').split('x'),
										$width  = $size[0],
										$height = $size[1];					

										$caption = $(this).next().text();
										

									var item = {
										src : $href,
										w   : $width,
										h   : $height,
										title: $caption
									}
									
									stupidcounter++;
									
									console.log("stupidcounter " +stupidcounter);

									//$items.push(item);
									//console.log("$items.length:"+$items.length);
									
							//		$idiots[stupidcounter] = new Image();
								//	$idiots[stupidcounter].src = $href;
									
									
								});
								
								console.log("return idiot");
						//return $idiots;
							

							}
					

/*					
					var items = getItems();

					$.each(items, function(index, value) {
						$image[index]     = new Image();
						$image[index].src = value['src'];
						//console.log(index);
						console.log("image[index].src =  "+$image[index].src);
					});
				
					
					$pic.click(function(event) {
					//$pic.on('click', 'div', function(event) {
						
					
						
						
						event.preventDefault();
						
						var $index = $(this).index();
						
						console.log($index);
						
						var options = {
							index: $index,
							bgOpacity: 0.9,
							showHideOpacity: true
						}

						var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
						lightBox.init();
					});
				*/	
			});
			
		});
    
})(jQuery);

