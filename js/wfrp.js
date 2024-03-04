document.addEventListener("DOMContentLoaded", (e) => {
  //
  // * Get Element from Html *//
  //
  let diceTen = document.querySelector("#dice10");
  let diceHundred = document.querySelector("#dice100");
  let result = document.querySelector("#dice-result");
  const attack = document.querySelector("#attack-btn");
  //   const defence = document.querySelector("#defence-btn");
  const inputAttck = document.querySelector("#attack-skill");
  //
  // * Define dices *//
  //
  let sidesOnTen = 10;
  let sidesOnDiceHundred = 100;
  let currresult = 0;
  let succ = 0;
  let numberWin = 0;
  let numberLoss = 0;
  //
  // * Create Element *//
  //
  let successLevels = document.createElement("p");
  let showRoll = document.createElement("p");

  //
  // * Define pages *//
  //
  const homePage = document.querySelector("#home-btn");
  const warhammerFantasy = document.querySelector("#wfrp");
  //
  // * Dices function *//
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
      showRoll.textContent = `Dice roll: ${sidesOnDiceHundred}`;
      successLevels.textContent = `Result: ${rolledDiceHundred}`;
      result.appendChild(showRoll);
      result.appendChild(successLevels);
      console.log(rolledDiceHundred);
      currresult = rolledDiceHundred;
      sumOfAttack();
      //
      // * if D10 is checked *//
      //
    } else if (diceTen.checked && !diceHundred.checked) {
      result.innerHTML = "";
      rolledTen = Math.floor(Math.random() * sidesOnTen) + 1;
      showRoll.textContent = `Dice roll: ${sidesOnTen}`;
      successLevels.textContent = `Result: ${rolledTen}`;
      result.appendChild(showRoll);
      result.appendChild(successLevels);
      console.log(rolledTen);
      currresult = rolledTen;
      sumOfAttack();
      //
      // * if non is checked *//
      //
    } else if (diceHundred.checked && diceTen.checked) {
      result.innerHTML = "";
      rolledDiceHundred = Math.floor(Math.random() * sidesOnDiceHundred) + 1;
      successLevels.textContent = `Result: ${rolledDiceHundred}. showing d100`;
      result.appendChild(successLevels);
      console.log(rolledDiceHundred);

      sumOfAttack();
    } else {
      result.innerHTML = "";
      showRoll.textContent = `Dice roll: ${sidesOnDiceHundred}`;
      successLevels.textContent = `Result: 0`;
      result.appendChild(showRoll);
      result.appendChild(successLevels);
      currresult = rolledDiceHundred;
      sumOfAttack();
    }
    console.log(`Your Skill is ${inputAttck.value}`);
    //
    //* Attack Roll *//
    //
    function sumOfAttack() {
      //
      // * if you fail the checked *//
      //
      if (currresult > inputAttck.value) {
        result.innerHTML = "";
        let failed = currresult - inputAttck.value;
        numberLoss += failed;
        for (let i = 0; i < inputAttck.value; i++) {
          if (numberLoss > 0) {
            numberLoss -= 10;
            console.log(`calc curr value ${numberLoss}`);
            succ++;
          } else {
            makeP(succ, rolledDiceHundred);
            console.log(`- ${succ} SL`);
            showRoll.textContent = `Dice roll: ${sidesOnDiceHundred}`;
            result.appendChild(showRoll);
            succ = 0;
            numberLoss = 0;
            break;
          }
        }
        //
        // * if you succeede the checked *//
        //
      } else if (currresult < inputAttck.value) {
        result.innerHTML = "";
        let win = currresult - inputAttck.value;
        console.log(win);
        numberWin += win;
        for (let i = 0; i < inputAttck.value; i++) {
          if (numberWin < 0) {
            numberWin += 10;
            console.log(`calc curr value ${numberWin}`);
            succ++;
          } else {
            makeP(succ, rolledDiceHundred);
            console.log(`${succ} SL`);
            showRoll.textContent = `Dice roll: ${sidesOnDiceHundred}`;
            result.appendChild(showRoll);
            succ = 0;
            numberWin = 0;
            break;
          }
        }
      } else if (currresult === inputAttck.value) {
        result.innerHTML = "";
        let win = currresult - inputAttck.value;
        console.log("0 sucsess");
      } else {
        console.log("i dunno");
      }
    }
  });
  function makeP(succ, diceVal) {
    successLevels.textContent = `Dice: ${diceVal}`;
    result.appendChild(successLevels);
    successLevels.textContent = `Result: ${succ} SL`;
    result.appendChild(successLevels);
  }
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
