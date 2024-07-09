
// In the code below, adjust the color of the big ball to white:


const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
window.addEventListener('scroll', onScroll);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Track mouse position
let mouseX = 0;
let mouseY = 0;

function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  updateCursorPositions();
}

function onScroll() {
  updateCursorPositions();
}

function updateCursorPositions() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  TweenMax.to($bigBall, .2, {
    x: mouseX + scrollX - 10,
    y: mouseY + scrollY - 10
  });
  TweenMax.to($smallBall, .4, {
    x: mouseX + scrollX - 10,
    y: mouseY + scrollY - 10
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2
  });
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  });
}

