// It'll img elements from document
let sun_img, mercury_img, venus_img, earth_img, mars_img, jupiter_img, saturn_img, uranus_img, neptune_img;

// It'll text elements from document
let sun_txt, mercury_txt, venus_txt, earth_txt, mars_txt, jupiter_txt, saturn_txt, uranus_txt, neptune_txt;

window.onload = function () {
  sun_img = document.querySelector('.TheSunImg');
  sun_txt = document.querySelector('.TheSunText');
  mercury_img = document.querySelector('.TheMercuryImg');
  mercury_txt = document.querySelector('.TheMercuryText');
  venus_img = document.querySelector('.TheVenusImg');
  venus_txt = document.querySelector('.TheVenusText');
  earth_img = document.querySelector('.TheEarthImg');
  earth_txt = document.querySelector('.TheEarthText');
  mars_img = document.querySelector('.TheMarsImg');
  mars_txt = document.querySelector('.TheMarsText');
  jupiter_img = document.querySelector('.TheJupiterImg');
  jupiter_txt = document.querySelector('.TheJupiterText');
  saturn_img = document.querySelector('.TheSaturnImg');
  saturn_txt = document.querySelector('.TheSaturnText');
  uranus_img = document.querySelector('.TheUranusImg');
  uranus_txt = document.querySelector('.TheUranusText');
  neptune_img = document.querySelector('.TheNeptuneImg');
  neptune_txt = document.querySelector('.TheNeptuneText');  
}

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
  sun_img.style.display = 'none';
  mercury_img.style.display = 'none';
  venus_img.style.display = 'none';
  earth_img.style.display = 'none';
  mars_img.style.display = 'none';
  jupiter_img.style.display = 'none';
  saturn_img.style.display = 'none';
  uranus_img.style.display = 'none';
  neptune_img.style.display = 'none';
  dots[n - 1].className += ' active';
}
