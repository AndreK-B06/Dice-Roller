document.addEventListener("DOMContentLoaded", function () {
  // * Define pages *//
  // * Define pages *//
  const indexPage = document.querySelector("#index-btn");
  const warhammerFantasy = document.querySelector("#wfrp-btn");
  const dungeonsAndDragons = document.querySelector("#dnd-btn");
  const creditsPage = document.querySelector("#btn-credits");

  // * Page switchers *//
  indexPage.addEventListener("click", function () {
    location.href = "./index.html";
  });

  warhammerFantasy.addEventListener("click", function () {
    location.href = "./pages/wfrp.html";
  });

  dungeonsAndDragons.addEventListener("click", function () {
    location.href = "./pages/dnd.html";
  });

  creditsPage.addEventListener("click", function () {
    location.href = "./pages/credits.html";
    console.log("prest credits btn");
  });

  console.log("jsLoaded");
});
