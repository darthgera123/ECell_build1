// START: Animating the text

// END: Animating the text

// START: Animating the "Reach and stats" section

var element_position = $('#portfolio').offset().top;
var screen_height = $(window).height();
var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
var activation_point = element_position - (screen_height * activation_offset);
var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    if(element_in_view || has_reached_bottom_of_page) {
			$('.numeric').each(function() {
				var $this = $(this),
						countTo = $this.attr('count');

				$({ countNum: $this.text()}).animate({
					countNum: countTo
				},
				{
					duration: 1000,
					easing:'linear',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
						//alert('finished');
					}
				});
			});
    }
});

// END: Animating the "Reach and stats" section
