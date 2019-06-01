var $cont = document.querySelector('.cont');
var $sectionArr = [].slice.call(document.querySelectorAll('.section'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.section__close-btn'));
var $body = document.querySelector("body");

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$sectionArr.forEach(function($section) {
  $section.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--section-active');
    this.classList.add('s--active');
    $body.classList.add('body__no-scroll');

  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--section-active');
    $body.classList.remove('body__no-scroll');
    document.querySelector('.section.s--active').classList.remove('s--active');
  });
});

