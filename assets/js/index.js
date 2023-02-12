const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');
const bars = document.getElementById('bars')
const section = document.querySelectorAll('section')

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});

document.addEventListener("scroll", () => {
  ScrollPosition = window.scrollY;
  if (!scroll) {
    window.requestAnimationFrame(() => {
      doSomething(ScrollPosition);
      scroll = false;
    });
    scroll = true;
  }
});

// cursor
var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

// $(document).mousemove(function (e) {
//   o = $('.cursor').offset();
//   $(".dot").css({
//     "top": e.pageY - o.top,
//     "left": e.pageX - o.left
//   });
// }); 
document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
});

// back to top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//acardion

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// canvas
function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY
  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

//
 
jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });
	};
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});