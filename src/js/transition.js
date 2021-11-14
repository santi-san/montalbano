
let cover = document.getElementById("cup-cover");
let icecream = document.getElementById("icecream");
let text = document.getElementById("text-montal");


cover.addEventListener("click", function() {
    this.classList.toggle('end-cover');
    icecream.classList.toggle('end-icecream');
    text.classList.toggle('initial-text-end');
});
  
   