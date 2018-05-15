

function sizeOfThings(){
	  var windowWidth = window.innerWidth;
	  var windowHeight = window.innerHeight;	  	  
	  var tamanhoFormHeigh = parseInt($('#formulario-login').css('height'));
	  var tamanhoFormWidth = parseInt($('#formulario-login').css('width'));
	  var resHeight = (windowHeight-tamanhoFormHeigh)/2;
	  var resWidth =(windowWidth - tamanhoFormWidth)/2;
	  $('#formulario-login').css('margin-top', ""+resHeight+"px");
	  $('#formulario-login').css('margin-bottom', ""+resHeight+"px");
	};
	sizeOfThings();
	window.addEventListener('resize', function(){
		sizeOfThings();
	});

$('#btn-entrar').click(function(){
	window.location='./home.html';
})
	
