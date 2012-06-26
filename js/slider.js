/*
=================================================================================
SLIDER PARA TREINAMENTO PADAWAN VERSÃO 2
AUTOR: YUGI
DATA: 25/06/2012
=================================================================================
*/
slideCurrent = 0;				//	controla qual imagem vai aparacer no slide
slidePrevious = 4;				//	controla a imagem que deixa o slide
window.onload= function() {	initSlider(); }	// iniciando o slider

// *****************************************************************************
function browseSlider(){	//	mostra as imagens no slider
	var img, opc;
	var kcontent = document.getElementById('content');
	var img = kcontent.getElementsByTagName("img");
	
		img[slideCurrent].style.display = "inline";
		opc = kcontent.getElementsByTagName("li")[slideCurrent+1];	//	listando links...
		opc.className = 'active';					//	altera classe do link ativo para classe [active]
		// img[slideCurrent].style.opacity = 1;		//	opacidade 1

		if (slidePrevious != slideCurrent){
			img[slidePrevious].style.display = "none";	
			opc = kcontent.getElementsByTagName("li")[slidePrevious+1];	//	listando links...
			opc.className = '';											// elimina classe dos links inativos
		}	
}
// *****************************************************************************
function alterImg(nPhoto){	//	altera a imagem - numero slide
	slidePrevious = slideCurrent;
	slideCurrent = nPhoto;
	browseSlider();
}
// *****************************************************************************
function initSlider() {		//	 inicia controlador do slider
	var kcontent = document.getElementById('content');
	var links = kcontent.getElementsByTagName("li");

	links[0].onclick= function() { navSlider(0);} ;
	links[1].onclick= function() { alterImg(0);} ;
	links[2].onclick= function() { alterImg(1);} ;
	links[3].onclick= function() { alterImg(2);} ;
	links[4].onclick= function() { alterImg(3);} ;
	links[5].onclick= function() { alterImg(4);} ;
	links[6].onclick= function() { navSlider(1);} ;
	
	alterImg(0);
}
// *****************************************************************************	
function navSlider(tipo) {	//	navegador prev e Next
	slidePrevious = slideCurrent;
	
	if (tipo == 1) {
		slideCurrent++;
		if (slideCurrent > 4) {
			slideCurrent = 0;
			slidePrevious = 4;
		}	
	} else {
		slideCurrent--;
		if (slideCurrent < 0) {
			slideCurrent = 4;
			slidePrevious = 0;
		}
	}
	browseSlider();
}
// *****************************************************************************