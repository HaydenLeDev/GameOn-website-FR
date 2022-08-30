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

function checkedInputs(){
  var inputs = document.getElementsByClassName("text-control");
  var isChecked = checkedButton();
  var cgu = document.getElementById("checkbox1").checked;
  var erreur;
  console.log(inputs);

  for (var i = 1; i < inputs.length; i++){
    console.log(inputs[i].name);
    if(!inputs[i].value){
      return erreur = "Tout les champs doivent etre remplit !";
    }
  }

  if (inputs[0].value.length < 2){
    return erreur = "Votre Prénom doit contenir au moins 2 lettres !";
  }

  if (inputs[1].value.length < 2){
    return erreur = "Votre Nom doit contenir au moins 2 lettres !";
  }

  if(!inputs[3].value){
    return erreur = "Vous devez entrer votre date de naissance.";
  }

  if (isChecked === false){
    return erreur = "Vous devez choisir une ville.";
  } 

  if (cgu === false){
    return erreur = "Vous devez accepter les conditions générals d'utilisation ";
  }

  return erreur;
}
 
/**
 * Validate the form
 * @returns if form is validate
 */
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


