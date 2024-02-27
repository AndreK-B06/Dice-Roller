document.addEventListener("DOMContentLoaded", (e) => {
  //
  // * Get Element from Html *//
  //
  let diceTen = document.querySelector("#dice10");
  let diceThousand = document.querySelector("#dice100");
  let result = document.querySelector("#dice-result");
  const attack = document.querySelector("#attack-btn");
  const defence = document.querySelector("#defence-btn");
  //
  // * Define dices *//
  //
  let sidesOnDice = 10;
  //
  // * Create Element *//
  //
  let newParagraph = document.createElement("p");

  //
  // * Define pages *//
  //
  const homePage = document.querySelector("#home-btn");
  const warhammerFantasy = document.querySelector("#wfrp");
  //
  // * Dices function *//
  //
  attack.addEventListener("click", function () {
    let rolledDiceTen = Math.floor(Math.random() * sidesOnDice) + 1;
    result.appendChild(newParagraph);
    newParagraph.textContent = "Result: ${rollecDiceTen";
    console.log(diceten);
  });
  //
  // * Page switchers *//
  //
  homePage.addEventListener("click", function () {
    location.href = "./home.html";
  });

  warhammerFantasy.addEventListener("click", function () {
    location.href = "./wfrp.html";
  });

  console.log("jsLoaded");
});
