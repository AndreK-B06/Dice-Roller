document.addEventListener("DOMContentLoaded", function () {
  // * Define pages *//
  const indexPage = document.querySelector("#index-btn");
  const warhammerFantasy = document.querySelector("#wfrp-btn");

  // * Page switchers *//
  indexPage.addEventListener("click", function () {
    location.href = "./index.html";
  });

  warhammerFantasy.addEventListener("click", function () {
    location.href = "./wfrp.html";
  });

  console.log("jsLoaded");
});
