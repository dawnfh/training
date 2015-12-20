$(document).ready(function(){

	$( "#name" ).hide().show( "slow" );

  $( "#name" ).slideUp( 800 );

  $("#name").slideDown( 1000 );

  $("#name").animate({left: '700px'});
    
});
   


        
 






// click on the ".open" link (the right arrow in the nav)

// $(".left a.open").on("click", function(e) {
// // stop default browser behavior
// e.preventDefault();
// // get the <body>. Does it currently have a class of "open-nav"? If it does, remove the class, which will collapse the left column.' If it does not have a class of "open-nav", add it, which will expand the left column.
// $("body").toggleClass("open-nav");
// });
