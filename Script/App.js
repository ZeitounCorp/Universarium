let positionIndex = 1;
const Solar_sys = [
  'Sun',
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune'
];
function currentSlide(n) {
  showBigPlanet(positionIndex = n);
}
function showBigPlanet(n) {
  var dots = document.getElementsByClassName('dot');
  dots[n - 1].className += ' active';
}
