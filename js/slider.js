

let tog1 = document.querySelector('.tog1');
let tog2 = document.querySelector('.tog2');
let tog3 = document.querySelector('.tog3');
let slider = document.querySelector('.slider_img');
let left = 0;
let timer;

function autoSlider () {
	timer = setTimeout(sliderRight, 3000);
}


function sliderRight () {
	left -=650;
		if (left < -1300) {
		left = 0;
		tog1.classList.remove('no_active');
		tog1.classList.add('active');
		tog3.classList.remove('active');
		tog3.classList.add('no_active');
	}
	slider.style.left = left +'px';
	if (left < 0) {
	tog1.classList.remove('active');
	tog1.classList.add('no_active');
	tog2.classList.remove('no_active');
	tog2.classList.add('active');
	}
	if (left < -1000) {
	tog2.classList.remove('active');
	tog2.classList.add('no_active');
	tog3.classList.remove('no_active');
	tog3.classList.add('active');
	}

	autoSlider ();
}

autoSlider ();
