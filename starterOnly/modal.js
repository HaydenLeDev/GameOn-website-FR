function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture du launch
function launchModalClose() {
  modalbg.style.display = "none";
}

document.getElementById("close-modal").addEventListener('click',launchModalClose);


// Formulaire 
function isValidate(){
  alert('formulaire envoyé !');
}

document.getElementById("reserve").addEventListener("submit", function(e){
  alert('formulaire envoyé !');

  var erreur;
  var first = document.getElementById("first");
  var last = document.getElementById("last");
  var email = document.getElementById("email");
  var birthdate = document.getElementById("birthdate");
  var quantity = document.getElementById("quantity");

  if (!first.value){
    erreur = "Veuillez renseigner un pseudo";
  }

  if (!last.value){
    erreur = "Veuillez renseigner un pseudo";
  }

  if (!email.value){
    erreur = "Veuillez renseigner un pseudo";
  }

  if (!birthdate.value){
    erreur = "Veuillez renseigner un pseudo";
  }

  console.log(erreur);
});