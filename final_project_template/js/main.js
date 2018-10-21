console.log ('loaded');

$('.box').on('click', function(){
	console.log ('clicked'); 
	var hex = $(this).data('hex');
	console.log('hex: ', hex);
	$('.hex-code').text(hex);
	$('.hex-code-input').val(hex);
	$('#canvas').css( 'background', hex );

	var rgb = $(this).data('rgb');
	console.log('rgb: ', rgb);
	$('.rgb-code').text(rgb);
	$('.rgb-code-input').val(rgb);

	var hsl = $(this).data('hsl');
	console.log('hsl: ', hsl);
	$('.hsl-code').text(hsl);
	$('.hsl-code-input').val(hsl);

	// $('.box').on('click', function(){
	// console.log ('clicked'); 
	// var cymk = $(this).data('cymk');
	// console.log('cymk: ', cymk);
	// $('.cymk-code').text(cymk);
	// $('.cymk-code-input').val(cymk);


});


var square = document.getElementsByClassName('square');

for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}

var menu = document.getElementById('menu');
var secondcontainer = document.getElementById('secondcontainer');
var scposition = secondcontainer.getBoundingClientRect();
var profilpicture = document.getElementById('profilpicture');

document.addEventListener("scroll", function(event) {
	if(window.pageYOffset >= scposition.top-150){
  	menu.style.opacity="0";
  }
  if (window.pageYOffset <= scposition.top-150){
    menu.style.opacity="1";
  }
  
	if(window.pageYOffset >= scposition.top-100){
  	profilpicture.classList.add('profilpicture-animation');
  } 
  if(window.pageYOffset <= scposition.top-600){
  	profilpicture.classList.remove('profilpicture-animation');
  }
});