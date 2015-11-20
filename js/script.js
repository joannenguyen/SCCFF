/* js file */

 $(document).ready(function() {

 	//bigslide plugin init
    $('.menu-link').bigSlide();

    // //selects all three cd-slider-nav buttons
    // var buttons = $( ".cd-slider-nav" ).find( "a" );

    // //selects all three  cd-slider-slides
    // var slides  = $( ".cd-hero-slider" ).find( "li" );

    // //hide all the slides
    // slides.addClass( "hidden" );

    // //show the default slide
    // $( ".s1" ).removeClass(  "hidden" );


    // //create an event:
    // //when a button is clicked execute callback function
    // buttons.on( "click", function( e ){

    // 	//save a reference to the button that was clicked
    // 	var $this     = $( this );

    // 	//grab the classname of the current slide using the 
    // 	//button's data-slide attribute
    // 	var className = $this.data( "slide" );

    // 	slides.removeAttr( "style" );
    // 	$( className ).css( { "z-index": 1000 } );

    // 	$( className ).animate(
    // 		{ "left" : 0 },
    // 		1000,
    // 		function(){

		  //   	//hide allslides again
		  //   	slides.addClass( "hidden" );

		  //   	//show the current slide
		  //   	$( className ).removeClass( "hidden" );
    // 		}
    // 	);
    // 	//don't reload the page
    // 	e.preventDefault();
    // } );
}); //end ready function


 $(document).ready(function() {

    //selects all three cd-slider-nav buttons
    var buttons = $( ".cd-slider-nav" ).find( "a" );
    var slider  = $( ".cd-hero-slider" );

    //create an event:
    //when a button is clicked execute callback function
    buttons.on( "click", function( e ){

    	//save a reference to the button that was clicked
    	var $this = $( this );

    	//grab the classname of the current slide using the 
    	//button's data-slide attribute
    	var className = $this.data( "slide" );

    	slider.removeClass( "s1 s2 s3" );
    	slider.addClass( className );

    	//don't reload the page
    	e.preventDefault();
    } );
}); //end ready function



