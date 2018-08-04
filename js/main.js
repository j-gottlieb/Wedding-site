
var countDownDate = new Date('Sep 5, 2020 18:00:00').getTime();

var x = setInterval (function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('countdown').innerHTML = "It's today!";
	}
}, 1000);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('top').style.display = 'block';
	} else {
		document.getElementById('top').style.display = 'none';
	}
};

function topFunction () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

document.getElementsByClass('countdown')[0].addEventListener('click', function() {
	this.style.height == '50px' || this.style.height == ''
	? this.style.height == '150px' : this.style.height == '50px';
}, false );