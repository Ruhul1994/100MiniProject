const textareaEL = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEL.addEventListener("keyup",()=>{
   updateCounter() 
});
updateCounter()

function updateCounter(){
   totalCounterEl.innerText = textareaEL.value.length;
  remainingCounterEl.innerText = textareaEL.getAttribute("MaxLength") - textareaEL.value.length;
}