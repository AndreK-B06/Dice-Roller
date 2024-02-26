document.addEventListener("DOMContentLoaded", (e) => {
  // * Define pages *//
  const homePage = document.querySelector("#home-btn");
  const warhammerFantasy = document.querySelector("#wfrp");

  // * Page switchers *//
  homePage.addEventListener("click", function () {
    location.href = "./home.html";
  });

  warhammerFantasy.addEventListener("click", function () {
    location.href = "./wfrp.html";
  });

  console.log("jsLoaded");
});
