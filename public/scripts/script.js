$(document).ready(function(){

	$( "#name" ).hide().show( "slow" );

  $( "#name" ).slideUp( 800 );

  $("#name").slideDown( 1000 );

  $("#name").animate({left: '700px'});
  
  $("#about_container").mouseenter(
  	function(){
  		$(this).animate({width: '60%'},1000),
  		$("#about_image_container").animate({
  			width: '39%'
  		},1000),
  		$(".entire_team p").show();
  	});

   $("#about_container").mouseleave(
  	function(){
  		$(this).animate({width: '20%'},1000),
  		$("#about_image_container").animate({
  			width: '59%'
  		},1000),
  		$(".entire_team p").hide();
  	});


});
   


        
 






