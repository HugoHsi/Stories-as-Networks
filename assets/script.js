let newWord = document.querySelector(".new-word");

let period = document.querySelector(".period");

for (let i = 0; i < period .length; i++) {
    period[i].addEventListener("mouseover", function() {
      console.log("test");
      newWord.textContent = "Period";
    });
    }