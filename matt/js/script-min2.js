(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.portfolio-thumb').each( function() {
		
		console.log("portfolio-thumb");
		
		var $pic = $(this);
		
		$(this).find('a').each(function() {
			
			var items = [];
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

            items.push(item);
			
			console.log(items[0]);
			
			$.each(items, function(index, value) {
				image[index]     = new Image();
				image[index].src = value['src'];
				console.log("new image");
			});

			items.on('click', 'div', function(event) {
				event.preventDefault();
				
				var $index = $(this).index();
				var options = {
					index: $index,
					bgOpacity: 0.9,
					showHideOpacity: true
				}

				var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
				lightBox.init();
			});
			
			

			
			
			
		});
		
		
		

		
			//var $href   = $(this).attr('href');
			//var $size   = $(this).data('size').split('x');
			//var $href   = $(this).attr('href');
		
			
		
		
			
		/*
			
			var $pic     = $(this), getItems = function() {

			

				var items = [];
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

                    items.push(item);
                });
                return items;
				
				}	
				
		
				
				

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'div', function(event) {
            event.preventDefault();
            
            var $index = $(this).index();
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
})(jQuery);

