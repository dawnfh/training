

$(document).ready(function(){

  // ########### HOME PAGE #############

	$( "#name" ).hide().show( "slow" );

  $( "#name" ).slideUp( 800 );

  $("#name").slideDown( 1000 );

  $("#name").animate({left: '700px'});
  

  // ########### ABOUT PAGE ################


  $("#about_container").mouseenter(
  	function(){
  		$(this).animate({width: '60%'},500),
  		$("#about_image_container").animate({
  			width: '0%'
  		},500),
      $("#static_text").show();
      $("#rotated_text").hide();
      $(".images").show();
  		$(".entire_team p").show();
  	});

   $("#about_container").mouseleave(
  	function(){
  		$(this).animate({width: '3%'},500),
  		$("#about_image_container").animate({
  			width: '59%'
  		},500),
       $("#static_text").hide();
       $("#rotated_text").show();
      $(".images").hide();
  		$(".entire_team p").hide();
  	});


   //############ CONTACT PAGE ############


});
   


        
 






