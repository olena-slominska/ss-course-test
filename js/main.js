$(function() {
	$('.slider').slick({
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/leftArrow.jpg" alt="prev arrow" /> </button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/rightArrow.jpg" alt="next arrow" /> </button>',
		fade: true
	});
})


// top button behaviour
$(document).ready(function() {
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 100) {
		$("#topBtn").removeClass("hidden").addClass("shown");
	  } else {
		$("#topBtn").removeClass("shown").addClass("hidden");
	  }
	});
  });
// top button leads to the top
  $("#topBtn").on("click",function() {
	$("html, body").animate({scrollTop: 0}, 1000);
 });