document.addEventListener("DOMContentLoaded", function () {
  //
  // * Define pages *//
  //
  const indexPage = document.querySelector("#index-btn");
  const warhammerFantasy = document.querySelector("#wfrp-btn");
  const dungeonsAndDragons = document.querySelector("#dnd-btn");
  console.log(warhammerFantasy);
  //
  // * Get Element from Html *//
  //
  let diceTen = document.querySelector("#dice10");
  let diceHundred = document.querySelector("#dice100");
  let result = document.querySelector("#dice-result");
  const attack = document.querySelector("#attack-btn");
  const inputAttack = document.querySelector("#attack-skill");
  //
  // * Define dices *//
  //
  let sidesOnTen = 10;
  let sidesOnDiceHundred = 100;
  let currentResult = 0;
  let success = 0;
  let numberWin = 0;
  let numberLoss = 0;
  //
  // * Create Element *//
  //
  let successesLevels = document.createElement("p");
  let showRoll = document.createElement("p");
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
      showRoll.textContent = `Dice roll: ${currentResult}`;
      successesLevels.textContent = `Result: ${rolledDiceHundred}`;
      result.appendChild(showRoll);
      result.appendChild(successesLevels);
      console.log(rolledDiceHundred);
      currentResult = rolledDiceHundred;
      sumOfAttack();
      //
      // * if D10 is checked *//
      //
    } else if (diceTen.checked && !diceHundred.checked) {
      result.innerHTML = "";
      rolledTen = Math.floor(Math.random() * sidesOnTen) + 1;
      showRoll.textContent = `Dice roll: ${currentResult}`;
      successesLevels.textContent = `Result: ${rolledTen}`;
      result.appendChild(showRoll);
      result.appendChild(successesLevels);
      console.log(rolledTen);
      currentResult = rolledTen;
      sumOfAttack();
      //
      // * if non is checked *//
      //
    } else if (!diceHundred.checked && !diceTen.checked) {
      result.innerHTML = "";
      rolledDiceHundred = Math.floor(Math.random() * sidesOnDiceHundred) + 1;
      successesLevels.textContent = `Result: ${rolledDiceHundred}. showing d100`;
      result.appendChild(successesLevels);
      console.log("Please check the checkbox before rolling");

      sumOfAttack();
    } else {
      result.innerHTML = "";
      showRoll.textContent = `Dice roll: ${currentResult} Please check the checkbox before rolling`;
      successesLevels.textContent = `Result: 0`;
      result.appendChild(showRoll);
      result.appendChild(successesLevels);
      currentResult = rolledDiceHundred;
      sumOfAttack();
    }
    console.log(`Your Skill is ${inputAttack.value}`);
    //
    //* Attack Roll *//
    //
    //
    // ! Small problem if the second number is 0 !
    //
    function sumOfAttack() {
      //
      // ? Starting to peeper if dice first number matches input first number //
      //
      let inputFirstDigit = parseInt(inputAttack.value.toString()[0]);
      let currentFirstDigit = parseInt(currentResult.toString()[0]);
      let lastDigit = currentResult % 10;
      //
      if (inputFirstDigit === currentFirstDigit) {
        if (lastDigit > inputAttack.value % 10) {
          console.log("Loss");
        } else if (lastDigit < inputAttack.value % 10) {
          console.log("Win");
        }
        //
        // * if you fail the checked *//
        //
        if (currentResult > inputAttack.value) {
          result.innerHTML = "";
          let failed = currentResult - inputAttack.value;
          numberLoss += failed;
          for (let i = 0; i < inputAttack.value; i++) {
            if (numberLoss > 0) {
              numberLoss -= 10;
              console.log(`calculate current value Loss ${numberLoss}`);
              success++;
            } else {
              makeP(success, rolledDiceHundred);
              console.log(`- ${success} Failed Levels`);
              success = 0;
              numberLoss = 0;
              break;
            }
          }
        }
      }
      //
      // * if you succeed the checked *//
      //
      if (currentResult < inputAttack.value) {
        result.innerHTML = "";
        let win = currentResult - inputAttack.value;
        console.log(win);
        numberWin += win;
        for (let i = 0; i < inputAttack.value; i++) {
          if (numberWin < 0) {
            numberWin += 10;
            console.log(`calculate current value Win ${numberWin}`);
            success++;
          } else {
            makeP(success, rolledDiceHundred);
            console.log(`${success} Successes Levels`);
            success = 0;
            numberWin = 0;
            break;
          }
        }
        //
        // * if you 0 Successes Levels *//
        //
      } else {
        console.log("0 SL");
        result.innerHTML = "";
        makeP(success, rolledDiceHundred);
      }
    }
  });
  //
  // * Display result *//
  //
  function makeP(success, diceVal) {
    if (diceVal > inputAttack.value) {
      successesLevels.textContent = `Dice: - ${success} Failed Levels`;
      result.appendChild(successesLevels);
      showRoll.textContent = `Dice roll: ${diceVal}`;
      result.appendChild(showRoll);
    } else if (diceVal < inputAttack.value) {
      successesLevels.textContent = `Dice: ${success} Successes Levels`;
      result.appendChild(successesLevels);
      showRoll.textContent = `Dice roll: ${diceVal}`;
      result.appendChild(showRoll);
    } else {
      successesLevels.textContent = `Dice: ${success} Non Levels`;
      result.appendChild(successesLevels);
      showRoll.textContent = `Dice roll: ${diceVal}`;
    }
  }
  //
  // * Page switchers *//
  //
  indexPage.addEventListener("click", function () {
    location.href = "./index.html";
  });

  warhammerFantasy.addEventListener("click", function () {
    location.href = "./wfrp.html";
  });

  dungeonsAndDragons.addEventListener("click", function () {
    location.href = "./dnd.html";
  });
  console.log("jsLoaded");
});
