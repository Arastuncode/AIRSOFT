const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');
const bars = document.getElementById('bars')
const section = document.querySelectorAll('section')

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});

//slider


$( () => {
  const slider = $("#slider");
  const image = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  let x = 0;
  let path = './/assets/img/'
  let n = image.length - 1;
  slider.css({
    width: '90%',
    height: '80vh',
    margin: '50px auto',
    position: 'relative',
    overflow: 'hidden',
  })
  .append('<div id="slide"></div><div id="thumbs"></div>')
  .click( function (e) {change(e.pageX > $("body").width()/ 2 ? 1 : -1 );})
  const slide = $("#slide");
  const thumbs = $("#thumbs");
  slide.css({
    width: '100%',
    height: '100%',
    position : 'absolute',
    top : 0,
  })
  thumbs.css({
    position : 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center'
  })
  image.forEach(img => {
    thumbs.append(`<div></div>`)
  })
  $("#thumbs > div")
    .css({
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      margin: '5px',
    })
    .click(function(e){
      e.stopPropagation();
      x = $(this).index() - 1
      change()
    })
  let timer = setTimeout(change, 0, 0);
  function change(dir = 1) {
    clearTimeout(timer);
    x += dir
    $('span').html( x + '/10')
    if(x < 0) x = n
    if(x > n) x = 0
    slide
      .css({
        left : `${dir * 100}%`,
        background: `url("${path}${image[x]}") center/cover` }) 
      .animate({left: 0}, 500, function(){
        slider.css({ background: `url("${path}${image[x]}") center/cover` })
        $(this).css({left: '100%'})
      })
    timer = setTimeout(change, 3000);
  }
})

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