let newWord = document.querySelector(".new-word");

let period = document.querySelectorAll(".period");

for (let i = 0; i < period.length; i++) {
  period[i].addEventListener("mouseover", function () {
    console.log("test");
    newWord.textContent = "[Period]";
  });
}

let question = document.querySelectorAll(".question");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("mouseover", function () {
    console.log("test");
    newWord.textContent = "[Question]";
  });
}

let exclamation = document.querySelectorAll(".exclamation");

for (let i = 0; i < exclamation.length; i++) {
  exclamation[i].addEventListener("mouseover", function () {
    console.log("test");
    newWord.textContent = "[Exclamation]";
  });
}

let quote = document.querySelectorAll(".quote");

for (let i = 0; i < quote.length; i++) {
  quote[i].addEventListener("mouseover", function () {
    console.log("test");
    newWord.textContent = "[Quotation]";
  });
}

let semi = document.querySelectorAll(".semi");

for (let i = 0; i < semi.length; i++) {
  semi[i].addEventListener("mouseover", function () {
    console.log("test");
    newWord.textContent = "[Semi-colon]";
  });
}

let colon = document.querySelectorAll(".colon");

for (let i = 0; i < colon.length; i++) {
  colon[i].addEventListener("mouseover", function () {
    console.log("test");
    newWord.textContent = "[Colon]";
  });
}

let apostrophe = document.querySelectorAll(".apostrophe");

for (let i = 0; i < apostrophe.length; i++) {
  apostrophe[i].addEventListener("mouseover", function () {
    console.log("test");
    newWord.textContent = "[Apostrophe]";
  });
}
