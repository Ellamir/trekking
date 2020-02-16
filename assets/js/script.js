/// animated burguer
//$('.burger').click(function () {
//  $(this).toggleClass('open');
//});

/* Smooth scroll*/
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top -100
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash -100;
        });
      } // End if
    });
  });

  
  /// card shadow drop on hover
  $(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
   
     $( ".card" ).hover(
     function() {
       $(this).addClass('shadow bg-white').css('cursor', 'pointer'); 
     }, function() {
       $(this).removeClass('shadow bg-white');
     }
   );
     
   // document ready  
   });
  