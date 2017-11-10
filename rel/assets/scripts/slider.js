'use strict';

var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 6000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  dots[currentSlide].className = 'dot';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
  dots[currentSlide].className = 'dot active';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  previousSlide();
};



