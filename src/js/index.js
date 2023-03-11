const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
.forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
  }
});

document.querySelector('#learn').addEventListener('click', function(e) {
  window.location.href = 'sustainability.html';
}, false);

document.querySelector('#about').addEventListener('click', function(e) {
  window.location.href = 'about.html';
}, false);

document.querySelector('#play').addEventListener('click', function(e) {
  window.location.href = 'play.html';
}, false);