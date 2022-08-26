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
function checked_button(){
  var validateBoutonRadio = document.getElementsByName("location");
  for (var i = 0; i < validateBoutonRadio.length; i++){
    console.log(validateBoutonRadio[i].checked);
    if(validateBoutonRadio[i].checked){
      return true;
    }
  }
  return false;
}

function validate(){

  var erreur;
  var isChecked = checked_button();
  var inputs = document.getElementsByClassName("text-control");
  

  console.log(inputs);

  for (var i = 0; i < inputs.length; i++){
    console.log(inputs[i].value);
    if(!inputs[i].value){
      erreur = "Tout les champs doivent etre remplit !"
    }
  }

  console.log("check: " + isChecked);

  if(erreur || isChecked === false){
    document.getElementById("erreur").innerHTML = erreur;
    alert(erreur);
    console.log(erreur);
    return false;
  } else {
    alert('formulaire envoyé !');
    return true;
  }
}


