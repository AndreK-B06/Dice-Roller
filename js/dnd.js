document.addEventListener("DOMContentLoaded", function () {
  // * Define pages *//
  const indexPage = document.querySelector("#index-btn");
  const warhammerFantasy = document.querySelector("#wfrp-btn");
  const dungeonsAndDragons = document.querySelector("#dnd-btn");

  // * Page switchers *//
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
