/**
 * Manages the responsive navigation bar
 */
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

//Closing launch
function launchModalClose() {
  modalbg.style.display = "none";
  topNav.style.display = "block";
  if (screen.width > 1120 ){
    heroSection.style.display = "grid";
  } else{
    heroSection.style.display = "block";
  }
  
  copyrights.style.display = "block";
}




// Formulaire 

/**
 * Reset formulaire.
 */
function resetForm(){
  let form = document.getElementById("reserve");
  document.getElementById("validate").setAttribute("style", "visibility: hidden;");
  form.reset();
  form.setAttribute("style", "visibility: visible;");
}

/**
 * Checks if a button has been selected.
 * @returns if a button is select
 */
function checkedButton(){
  var validateBoutonRadio = document.getElementsByName("location");
  for (var i = 0; i < validateBoutonRadio.length; i++){
    if(validateBoutonRadio[i].checked){
      return true;
    }
  }
  return false;
}

/**
 * Add the css to the input in case of error.
 * @param {*} items 
 * @param {*} erreurText 
 */
function addCssError(items, erreurId, erreurText){
  items.setAttribute("style", "border: solid 3px red;");
  document.getElementById(erreurId).innerHTML = erreurText;
}

/**
 * Reset the css if a box is filled in correctly.
 * @param {*} items 
 * @param {string} erreurId 
 */
function resetCssError(items, erreurId){
  items.setAttribute("style", "border: none;");
  document.getElementById(erreurId).innerHTML = "";
}


/**
 * Check that the text is made up of letters and contains at least 2 characters.
 * @param {*} name 
 * @returns false if it is correct
 */
function validateNames(name){
  console.log(name + ": " + name.length);
  if(!name.match(/^([a-zA-Z ]+)$/) || name.length < 2){
    return true;
  } 
  
  return false;
}

/**
 * Returns user input errors.
 * @returns return a string containing the error
*/

function validate(e){
  e.preventDefault(); //Supprime le comportement naturel du formulaire
  let inputs = document.getElementsByClassName("text-control");
  let isChecked = checkedButton();
  let quantity = document.getElementById("quantity");
  let cgu = document.getElementById("checkbox1").checked;
  var erreur = true;
  let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let test = document.getElementById("email").value.match(regexEmail);
 
  if (validateNames(inputs[0].value)){
    erreur = false;
    addCssError(inputs[0], "erreur-first" ,"Votre Prénom doit contenir au moins 2 lettres et pas de chiffre!");
  } else{
    resetCssError(inputs[0], "erreur-first");
  }

  if (validateNames(inputs[1].value)){
    erreur = false;
    addCssError(inputs[1], "erreur-name" ,"Votre Nom doit contenir au moins 2 lettres et pas de chiffre!");
  } else{
    resetCssError(inputs[1], "erreur-name");
  }

  if(!inputs[2].value || !test){
    erreur = false;
    addCssError(inputs[2], "erreur-email" , "Entrez une adresse mail valide !");
  } else{
    resetCssError(inputs[2], "erreur-email");
  }

  if(!inputs[3].value){
    erreur = false;
    addCssError(inputs[3], "erreur-birthdate" , "Vous devez entrer votre date de naissance !");
  } else{
    resetCssError(inputs[3], "erreur-birthdate");
  }

  if(!quantity.value || quantity.value < 0 || quantity.value > 100 ){
    addCssError(quantity, "erreur-quantity" , "Veillez rentrez votre nombre de participation !");
  } else{
    resetCssError(quantity, "erreur-quantity");
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

  if (erreur === true){ 
    document.getElementById("reserve").setAttribute("style", "visibility: hidden;");
    let modal = document.getElementById("validate");
    modal.innerHTML = "<p id='text-validate'>Merci pour votre inscription<p><button class='btn-submit' id='button-fermer'>Fermer</button>";
    modal.setAttribute("style", "visibility: visible;");
    document.getElementById("button-fermer").addEventListener('click',resetForm); //reset le formulaire
    //document.getElementById("close-modal").addEventListener('click',resetForm);
    document.getElementById("button-fermer").addEventListener('click',launchModalClose); //Permet de fermer avec le bouton fermer
  }

  return erreur;
}


//Ecoute de la croix pour fermer le menu. 
document.getElementById("close-modal").addEventListener('click',launchModalClose);