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
const heroSection = document.querySelector(".hero-section");
const topNav = document.querySelector(".topnav");
const copyrights = document.querySelector(".copyrights");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  heroSection.style.display = "none";
  copyrights.style.display = "none";
  if (screen.width > 800 ){
    topNav.style.display = "none";
  }
}

//Fermeture du launch
function launchModalClose() {
  modalbg.style.display = "none";
  topNav.style.display = "block";
  if (screen.width > 800 ){
    heroSection.style.display = "grid";
  } else{
    heroSection.style.display = "block";
  }
  
  copyrights.style.display = "block";
}

document.getElementById("close-modal").addEventListener('click',launchModalClose);


// Formulaire 

console.log(document.forms["reserve"]["first"]);

/**
 * Checks if a button has been selected.
 * @returns if a button is select
 */
function checkedButton(){
  var validateBoutonRadio = document.getElementsByName("location");
  for (var i = 0; i < validateBoutonRadio.length; i++){
    console.log(validateBoutonRadio[i].checked);
    if(validateBoutonRadio[i].checked){
      return true;
    }
  }
  return false;
}


/**
 * Returns user input errors.
 * @returns return a string containing the error
*/

function validate(){
  var inputs = document.getElementsByClassName("text-control");
  var isChecked = checkedButton();
  var quantity = document.getElementById("quantity");
  var cgu = document.getElementById("checkbox1").checked;
  var erreur = true;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  console.log(inputs);

  for (var i = 1; i < inputs.length; i++){
    console.log(inputs[i].name);
    if(!inputs[i].value){
      document.getElementById("erreur-cgu").innerHTML = "Tout les champs doivent etre remplit !";
      erreur = false;
    }
  }

  if (inputs[0].value.length < 2){
    erreur = false;
    inputs[0].setAttribute("style", "border: solid 3px red;");
    document.getElementById("erreur-first").innerHTML = "Votre Prénom doit contenir au moins 2 lettres !";
  } else{
    inputs[0].setAttribute("style", "border: none;");
    document.getElementById("erreur-first").innerHTML = "";
  }

  if (inputs[1].value.length < 2){
    erreur = false;
    inputs[1].setAttribute("style", "border: solid 3px red;");
    document.getElementById("erreur-name").innerHTML = "Votre Nom doit contenir au moins 2 lettres !";
  } else{
    inputs[1].setAttribute("style", "border: none;");
    document.getElementById("erreur-name").innerHTML = "";
  }

  if(!inputs[2].value){
    erreur = false;
    inputs[2].setAttribute("style", "border: solid 3px red;");
    document.getElementById("erreur-email").innerHTML = "Entrez une adresse mail valide !";
  } else{
    inputs[2].setAttribute("style", "border: none;");
    document.getElementById("erreur-email").innerHTML = "";
  }

  if(!inputs[3].value){
    erreur = false;
    inputs[3].setAttribute("style", "border: solid 3px red;");
    document.getElementById("erreur-birthdate").innerHTML = "Vous devez entrer votre date de naissance !";
  } else{
    inputs[3].setAttribute("style", "border: none;");
    document.getElementById("erreur-birthdate").innerHTML = "";
  }

  if(!quantity.value){
    quantity.setAttribute("style", "border: solid 3px red;");
    document.getElementById("erreur-quantity").innerHTML = "Veillez rentrez votre nombre de participation !";
  } else{
    quantity.setAttribute("style", "border: none;");
    document.getElementById("erreur-quantity").innerHTML = "";
  }


  if (isChecked === false){
    erreur = false;
    document.getElementById("erreur-town").innerHTML = "Veillez choisir une ville !";
  } else{
    document.getElementById("erreur-town").innerHTML = "";
  }


  if (cgu === false){
    erreur = false;
    document.getElementById("erreur-cgu").innerHTML = "Vous devez accepter les conditions générals d'utilisation !";
  } else{
    document.getElementById("erreur-cgu").innerHTML = "";
  }

  return erreur;
}
 
/**
 * Validate the form
 * @returns if form is validate
 
function validate(){

  var erreur = checkedInputs();
  var isChecked = checkedButton();

  if(isChecked === false || erreur){
    document.getElementById("erreur").innerHTML = erreur;
    alert(erreur);
    console.log(erreur);
    return false;
  } else {
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  }
}

*/


