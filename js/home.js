// * Define pages *//
const homePage = document.querySelector("#home-btn");
const warhammerFantasy = document.querySelector("#wfrp");

// * Page switchers *//
homePage.addEventListener("click", function () {
  location.href = "./home.html";
  console.log("clickt");
});
warhammerFantasy.addEventListener("click", function () {
  location.href = "./wfrp.html";
  console.log("clickt");
});

console.log("jsLoaded");
