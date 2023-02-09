const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');
const bars = document.getElementById('bars')
const section = document.querySelectorAll('section')

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});
//bar
let ScrollPosition = 0;
let scroll = false;
let kod = ''

for (let i = 0; i < section.length; i++) { kod += `<div class="bar"></div>` }
bars.innerHTML = kod

function doSomething(position) {  
  const bar = document.querySelectorAll('.bar')
  bar.forEach(item1=>{
    item1.style.height = '40px'
  })
  Array.from(section).forEach( function (item,index,arr) {
    let t = item.offsetTop
    let h = item.clientHeight
    let x = (t + h) 
    if(position <= t && position <= x  ){
      bar[arr.indexOf(item)].style.height = '70px'
    }
  })
}

document.addEventListener("scroll", (event) => {
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