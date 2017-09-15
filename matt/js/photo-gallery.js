(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];
	
    $('.image-gallery').each( function() {

		var $pic     = $(this),
            getItems = function() {
				
                var items = [];
                $pic.find('.portfolio-item').each(function() {
					
					
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1],
						$title = $(this).find('figcaption').text()
						;
						
                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height,
                        title: $title

                    }

                    items.push(item);
					
                });
                return items;
            }

        var items = getItems();
		
        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
			console.log(value['src']);
        });
		
		
        $pic.on('click', '.portfolio-thumb', function(event) {
			
            event.preventDefault();
			
			var $picindex = $(this).data('picindex');
			console.log("click"+$picindex);

			var $index = $picindex;
			
            var options = {
                index: $index,
                bgOpacity: 0.95,
                showHideOpacity: true,

				addCaptionHTMLFn: function(item, captionEl, isFake) {
					if(!item.title) {
						captionEl.children[0].innerText = '';
						return false;
					}
					//captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
					captionEl.children[0].innerHTML = item.title;
					return true;
				}
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
		
		
    });
})(jQuery);

