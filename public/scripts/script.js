

$(document).ready(function(){

  // ########### HOME PAGE #############

	$( "#name" ).hide().show( "slow" );

  $( "#name" ).slideUp( 800 );

  $("#name").slideDown( 1000 );

  $("#name").animate({left: '700px'});
  

  // ########### ABOUT PAGE ################


  $("#about_container").mouseenter( // on mouse enter
  	function(){
  		$(this).animate({width: '60%'},500), // of the about container
  		$("#about_image_container").animate({ // shrinks image right to 0
  			width: '0%'
  		},500),
      $("#static_text").show(); // adds text to top of about container
      $("#rotated_text").hide(); // removes verticle text
      $(".images").show();       // shows trainer images
  		$(".entire_team p").show(); // shows trainer profile info
  	});

  $("#about_container").mouseleave( // does exact opposite of mouse enter
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
   function ok_button(){ // function for ok button click
      $("#lb_ok").on('click',
        function(){
      $("#outer_lightbox").fadeOut(200);
      });
    }

   $("#submit").on('click',
      function(e){
        e.preventDefault();
        var inputName = $("#input_name").val();
        if ($("#input_name").val() === ""){
            $("#inner_lightbox p").text("Please enter a name");
            $("#outer_lightbox").fadeIn(200);
            ok_button();
            return false;
        }
        else if ($("#email").val() ===""){
            $("#inner_lightbox p").text("Please enter an email");
            $("#outer_lightbox").fadeIn(200);
            ok_button();
            return false;
        }
        else if ($("#message").val() ===""){
            $("#inner_lightbox p").text("Please enter a message");
            $("#outer_lightbox").fadeIn(200);
            ok_button();
            return false;
        }
        else {
            $("#inner_lightbox p").text("Thanks for contacting us " +inputName+ "!");
            $("#outer_lightbox").fadeIn(200);
            ok_button();
        }
      });
});
   
   //Services

   $( "#cross_fit" ).hide().show( 4000 );

   $("#body_build").hide().show(4000);

  
 






