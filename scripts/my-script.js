(function () {
    'use strict';
    // this function is strict...

    var nav = $('#nav-header'),
        pos = nav.offset();
    
//    $(document).ready(function () {
//        $(document).scroll(function () {
//            if($(this).scrollTop() > pos.top+nav.height() && nav.hasClass('title')){
//                console.log("adding fixed");
//                $('#nav-header').removeClass('title').addClass('fixed');
//            }
//            else{
//                
//                $('#nav-header').removeClass('fixed').addClass('title');
//            }
//        });
//    });



//    $(function () {
//        $('#slider').slider({
//			value: 100,
//            animate : 'fast',
//            orientation: 'horizontal'
//	    });
//    });
    
}());



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
