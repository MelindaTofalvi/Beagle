/*jshint esversion: 6 */

// smototh scroll & jump menu with active class//

$(document).ready(function() {
  $("#home-button").addClass("active-home");
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
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
  });

	$('a[href*=#]').bind('click', function(e) {
    				e.preventDefault(); // prevent hard jump, the default behavior

    				var target = $(this).attr("href"); // Set the target as variable

    				// perform animated scrolling by getting top-position of target-element and set it as scroll target
    				$('html, body').stop().animate({
    						scrollTop: $(target).offset().top
    				}, 600, function() {
    						location.hash = target; //attach the hash (#jumptarget) to the pageurl
    				});

    				return false;
    		});
});

$(window).scroll(function() {
    		var scrollDistance = $(window).scrollTop();
    		// Assign active class to nav links while scolling
    		$('.anchor').each(function(i) {
    				if ($(this).position().top <= scrollDistance) {
    						$('.nav-links a.active-nav').removeClass('active-nav');
    						$('.nav-links a').eq(i).addClass('active-nav');
    				}
    		});
}).scroll();


//SLIDE SHOW//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  // var slides = $(".mySlides");
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
