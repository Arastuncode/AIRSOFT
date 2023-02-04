const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');
const bars = document.getElementById('bars')
const section = document.querySelectorAll('section')

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let fade = document.getElementsByClassName('fade')
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
//slider

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