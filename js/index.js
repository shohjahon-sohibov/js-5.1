var MAX_SCORE = 189
var GRAND = 130
var MINIMUM_PASS_SCORE = 97.5;
var MINUMUM_SUPER_CONTACT_SCORE = 77;

var elDtmForm = document.querySelector(".dtm-form");
var elDtmScore = elDtmForm.querySelector(".dtm-score");
var elDtmCheckbox = elDtmForm.querySelector(".dtm-checkbox");
var elDtmResult = document.querySelector(".dtm-result");

elDtmForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  var resultText;
  var resultState;
  var isDtmChecked = elDtmCheckbox.checked;
  
  var score = parseFloat(elDtmScore.value.trim(), 10);
  if (score < 0 && isDtmChecked) {
    resultText = `Muborakbot etamiz, siz grand bilan talabalikka tavsiya qilindingiz`;
    resultState = `success`
  }  else if  (score < 0) {
    resultText = `0 va undan katta qiymat kiriting`;
    resultState = `danger`
  } else if (isNaN(score)) {
    resultText = `raqam kiriting`;
    resultState = `danger`
  } else if (score >= GRAND && score < MAX_SCORE || isDtmChecked) {
    resultText = `Muborakbot etamiz, siz grand bilan talabalikka tavsiya qilindingiz`;
    resultState = `success`;
  } else if (score >= MINIMUM_PASS_SCORE && score < GRAND) {
    resultText = `Muborakbot etamiz, siz talabalikka tavsiya qilindingiz`;
    resultState = `success`;
  } else if (
    score >= MINUMUM_SUPER_CONTACT_SCORE &&
    score < MINIMUM_PASS_SCORE
    ) {
      resultText = `Super kontraktga o'qishga kirdingiz`;
      resultState = `warning`;
    } else {
      resultText = `Siz talabalikka tavsiya qilionmadingiz`;
      resultState = `danger`;
    }
    
    elDtmResult.classList.remove("success", "warning", "danger");
    elDtmResult.textContent = resultText;
    elDtmResult.classList.add(resultState);
  });
  
  // grand va kontraktni ajratish;
  // - qiymat kiritsa `0 va undan katta qiymat kiriting deb chiqarish`;
  // string kiritsa `raqam kiriting`  deb chiqairish;
  