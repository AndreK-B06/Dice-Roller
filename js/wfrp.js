document.addEventListener("DOMContentLoaded", (e) => {
  //
  // * Get Element from Html *//
  //
  let diceTen = document.querySelector("#dice10");
  let diceHundred = document.querySelector("#dice100");
  let result = document.querySelector("#dice-result");
  const attack = document.querySelector("#attack-btn");
  const defence = document.querySelector("#defence-btn");
  const inputAttck = document.querySelector("#attack-skill");
  //
  // * Define dices *//
  //
  let sidesOnTen = 10;
  let sidesOnDiceHundred = 100;
  let currresult = 0;
  let succ = 0;
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
  // ? Dices function *//
  //
  attack.addEventListener("click", function () {
    let rolledDiceHundred = 0;
    let rolledTen = 0;
    //
    // * if D10 and D100 is checked *//
    //
    if (!diceTen.checked && diceHundred.checked) {
      result.innerHTML = "";
      rolledDiceHundred = Math.floor(Math.random() * sidesOnDiceHundred) + 1;
      newParagraph.textContent = `Result: ${rolledDiceHundred}`;
      result.appendChild(newParagraph);
      console.log(rolledDiceHundred);
      currresult = rolledDiceHundred;
      sumOfAttack();
      //
      // * if D10 is checked *//
      //
    } else if (diceTen.checked && !diceHundred.checked) {
      result.innerHTML = "";
      rolledTen = Math.floor(Math.random() * sidesOnTen) + 1;
      newParagraph.textContent = `Result: ${rolledTen}`;
      result.appendChild(newParagraph);
      console.log(rolledTen);
      currresult = rolledTen;
      sumOfAttack();
      //
      // * if non is checked *//
      //
    } else if (diceHundred.checked && diceTen.checked) {
      result.innerHTML = "";
      rolledDiceHundred = Math.floor(Math.random() * sidesOnDiceHundred) + 1;
      newParagraph.textContent = `Result: ${rolledDiceHundred}. showing d100`;
      result.appendChild(newParagraph);
      console.log(rolledDiceHundred);

      sumOfAttack();
    } else {
      result.innerHTML = "";
      newParagraph.textContent = `Result: 0`;
      result.appendChild(newParagraph);
      currresult = rolledDiceHundred;
      sumOfAttack();
    }
    console.log(`this is ${inputAttck.value}`);
    function sumOfAttack() {
      if (currresult > inputAttck.value) {
        let failed = currresult - inputAttck.value;
        for (let i = 0; i < 50; i++) {
          if (failed > 10) {
            failed -= 10;
            console.log(`calc curr value ${failed}`);
            succ++;
          } else {
            console.log(`u lost ${succ} times`);
          }
        }
      } else if (currresult < inputAttck.value) {
        let win = inputAttck.value - currresult;
        for (let i = 0; i < 50; i++) {
          if (win > 10) {
            win -= 10;
            console.log(`calc curr value ${win}`);
            succ++;
          } else {
            console.log(`u won ${succ} times`);
          }
        }
      } else if (currresult === inputAttck.value) {
        let win = currresult - inputAttck.value;
        console.log("0 sucsess");
      } else {
        console.log("i dunno");
      }
    }
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
