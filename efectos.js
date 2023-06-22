// scroll elementos menu

var inicio = $('#titulomer').offset().top,
	seccion1 = $('#informacion').offset().top,
	galeria = $('#imgs').offset().top,
	seccion2 = $('#titulo1').offset().top,
   seccion3 = $('#footer').offset().top,
   boton3 = $('#titulo1').offset().top;

   $('#btn-inicio').on('click', function(e){
    e.preventDefault();
       $('html, body').animate({
          scrollTop: inicio
       }, 500);
   });

   $('#btn-1').on('click', function(){
    	$('html, body').animate({
          scrollTop: seccion1
       }, 500);
   });

   $('#btn-galeria').on('click', function(){
      $('html, body').animate({
          scrollTop: galeria 
       }, 500);
});

      $('#btn-2').on('click', function(){
       $('html, body').animate({
          scrollTop: seccion2 
       }, 500);
});

      $('#btn-footer').on('click', function(){
       $('html, body').animate({
          scrollTop: seccion3 
       }, 500);
});

      $('#btn-curso').on('click', function(){
       $('html, body').animate({
          scrollTop: boton3 
       }, 500);
});


