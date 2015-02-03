
$(function(){
    var nav = $('#nav-header'),
        pos = nav.offset();

        $(window).scroll(function(){
            if($(this).scrollTop() > pos.top+nav.height() && nav.hasClass('title')){
                nav.fadeOut('fast', function(){
                    $(this).removeClass('title').addClass('fixed').fadeIn();
					//$(this).addClass('block_top_nav');
                });
            } else if($(this).scrollTop() <= pos.top && nav.hasClass('fixed')){
                nav.fadeOut('fast', function(){
					//$(this).removeClass('block_top_nav');
                    $(this).removeClass('fixed').addClass('title').fadeIn();
                });
				
            }
        });

});

$(function() {
    $( "#slider" ).slider({
			value: 100,
            animate:"fast",
            orientation: "horizontal"
	});
  });
  
$("input[type=checkbox]").switchButton({
  	on_label: 'Tomorrow',
  	off_label: 'Today',
  	checked: false,
	width:50,
	height:15,
	button_width: 25,
});

$("#tabstrip").switchButton({
  	on_label: 'TAB',
  	off_label: 'STRIP',
  	checked: false,
	width:50,
	height:15,
	button_width: 25,
});
