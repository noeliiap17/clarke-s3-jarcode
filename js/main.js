'use strict';
var secondMenu = document.getElementsByClassName('menu_item');
var navMenu = document.getElementById( "navigation" );

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

navMenu.addEventListener('click', openClose);

//open second menu header
function openMenu(evt) {
	evt.stopPropagation();
	//evt.currentTarget.childNodes[1].style.display = 'block';
	console.log('hola');
	resetMenu();
	evt.currentTarget.classList.add('menu_item_submenu');
}

for (var i = 0; i < secondMenu.length; i++){
	secondMenu[i].addEventListener('click', openMenu);
}

function resetMenu(){
	for (var i = 0; i < secondMenu.length; i++){
		secondMenu[i].classList.remove('menu_item_submenu');
	}
}
var secondMenu = document.getElementsByClassName('menu_item');
for (var i = 0; i < secondMenu.length; i++) secondMenu[i].addEventListener('click', openMenu);




var body = document.querySelector("body");
var gallery = document.querySelector(".gallery");
var videoItems = gallery.querySelectorAll(".gallery__item--video");
var imageItems = gallery.querySelectorAll(".gallery__item--image");

function createModal(content, type) {
  var container;
  var containerType;
  var myModal;
  var closeButton = '<button class="modal__closeBTN">X</button>';
  if (type === "video") {
    containerType = 'modal__container--video';
  } else {
    containerType = 'modal__container--image';
  }

  container = '<div class="modal__container ' + containerType + '">' + content + closeButton + '</div>';

  myModal = '<div class="modal"><div class="modal__overlay"></div>' + container + '</div>';
  return myModal;
}

function openVideoModal(e) {
  console.log('click');
  var videoSRC = e.currentTarget.getAttribute("data-src");
  var videoContent = '<iframe class="modal__videocontent" src="' + videoSRC + '" frameborder="0" allowfullscreen></iframe>';
  var videoModal = createModal(videoContent, "video");
  body.insertAdjacentHTML( 'beforeend', videoModal );
  var overlay = body.querySelector('.modal__overlay');
  var closeBTN = body.querySelector('.modal__closeBTN');

  overlay.addEventListener('click', closeModal);
  closeBTN.addEventListener('click', closeModal);

}

function closeModal() {
  var currentModal = document.querySelector('.modal');
  currentModal.remove();
}

function openImageModal(e) {
  console.log(">> " + e.currentTarget.getAttribute("data-src"));
}


for (var v = 0; v < videoItems.length; v++) {
  videoItems[v].addEventListener("click", openVideoModal);
}

for (var i = 0; i < imageItems.length; i++) {
  imageItems[i].addEventListener("click", openImageModal);
}


// Alert feedback contacto
var shower = document.getElementById('fd');
var feedback = document.querySelector('.thanks');
function showAlert (){
	 feedback.classList.add('show');
}
shower.addEventListener('click', showAlert);
