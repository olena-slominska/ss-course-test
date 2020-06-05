$(function() {
	$('.slider').slick({
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/leftArrow.jpg" alt="prev arrow" /> </button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/rightArrow.jpg" alt="next arrow" /> </button>',
		fade: true
	});
})


// top button behaviour
$(document).ready(() => {
	$(window).scroll(() => {
	  if ($(document).scrollTop() > 100) {
		$("#topBtn").removeClass("hidden").addClass("shown");
	  } else {
		$("#topBtn").removeClass("shown").addClass("hidden");
	  }
	});
  });
// top button leads to the top
  $("#topBtn").on("click",() => {
	$("html, body").animate({scrollTop: 0}, 1000);
 });

 function resolveAfter2Seconds(x) {
	     return new Promise(resolve => {
			  setTimeout(() => { 
				  resolve(x);
			}, 2000);
		   });
		}
		async function add1(x) {
			 let a = resolveAfter2Seconds(20);
			 let b = resolveAfter2Seconds(30);
			 return x + await a + await b;
			}
			add1(10).then(v => {
				  console.log(v);  
				// prints 60 after 2 seconds.
			})