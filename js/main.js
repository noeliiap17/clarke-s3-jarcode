'use strict';
//header, Animation button
document.getElementById( "xButton" )
	.addEventListener( "click", function() {
		this.classList.toggle( "active" );
});

//open menu header
function openClose() {
  if (navMenu.style.display == 'block'){
		navMenu.style.display ='none';
	} else {
		navMenu.style.display = 'block';
	}
}
var navMenu = document.getElementById( "navigation" );
navMenu.addEventListener('click', openClose);

//open second menu header
function openMenu(evt) {
	evt.stopPropagation();
	evt.currentTarget.childNodes[1].style.display = 'block'
}
var secondMenu = document.getElementsByClassName('menu_item');
for (var i = 0; i < secondMenu.length; i++) secondMenu[i].addEventListener('click', openMenu);

// Alert feedback contacto
var shower = document.getElementById('fd');
var feedback = document.querySelector('.thanks');
function alertHandler (){
	 feedback.classList.add('show');
}
shower.addEventListener('click', alertHandler);