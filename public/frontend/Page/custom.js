$("#navToggle").click(function() {
	$(this).toggleClass("active");
	$('.menu__wrap').toggleClass('active');
});

//BALANCE INFO - BEGIN
var linc2 = $('.balance__info'),
    timeoutId;
$('.account-money').hover(function(){
    clearTimeout(timeoutId);
    linc2.slideDown();
}, function(){
    timeoutId = setTimeout($.proxy(linc2,'slideUp'), 1000)
});
linc2.mouseenter(function(){
    clearTimeout(timeoutId); 
}).mouseleave(function(){
    linc2.slideUp();
}); 
//BALANCE INFO - END

$('.modal-btn').click(function () {
	$('div.'+$(this).attr("data-name")).addClass('active').fadeIn();
	$('.overlay').fadeIn();			
});	

$('.close-btn').click(function () {
	$(this).parent().fadeOut();
	$('.overlay').fadeOut();
});
$('.modal-close').click(function () {
	$('.modal').fadeOut();
	$('.overlay').fadeOut();
});

//PIN PAD - BEGIN

const numberPills = document.querySelectorAll('.PINbutton');
const loginInput = document.querySelectorAll('.loginInput');

let pillVal = '';

for (let item of loginInput) {
	item.addEventListener('click', function () {
		for (let input of loginInput) {
			input.classList.remove('active');
		}
		this.classList.add('active');
	})
}
function pillValue() {
	for (let pill of numberPills) {
		pill.addEventListener('click', function () {

			pillVal = pill.value;

			for (let inputEl of loginInput) {
				if (inputEl.classList.contains('active')) {
					inputEl.value += pillVal
				}
			}
		})
	}
}

pillValue();


function backspace() {
	let display = $('.loginInput.active');
	let a = 0;
	let b = 0;
	if ( display.val() !== '') {
	  display.val( display.val().substring(0, display.val().length - 1) );
	  if ( is_a === true ) {
		  a = parseFloat(a.toString().substring(0, a.toString().length - 1 ));
	  } else {
		  b = parseFloat(b.toString().substring(0, b.toString().length - 1 ));
	  }
	} else {
	  write('Nothing Left to Backspace');
	}
  }

  function clearForm(e){
	$( ".loginInput.active" ).val( "" );
}
// $(function() {
// 	$( "#PINform" ).draggable();
// });

//PIN PAD - END

//SLIDER - BEGIN
$('.game__slider').slick({
    infinite:      false,
    dots:          true,
	pauseOnHover:  false,
    draggable:     true,
    autoplaySpeed: 3000,
	speed:          1000,
	nextArrow: $('.game__slider-next'),
  	prevArrow: $('.game__slider-prev'),
    autoplay:       false,
    slidesToShow:      1,
    slidesToScroll:    1,
});
//SLIDER - END

// GRID - BEGIN

// $('.grid').masonry({
// 	itemSelector: '.grid-item',
// 	columnWidth: 160,
// 	gutter: 20
// });
// GRID - END