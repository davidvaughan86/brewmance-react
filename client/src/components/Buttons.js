import React from "react";
import { ReactComponent as Logo } from "./CSS/images/coffee.svg";

const Buttons = () => {
  // const getRecipe = document.getElementById("getRecipe");
  // getRecipe.addEventListener("click");

  return (
    <div className="recipeContainer">
      <button id="getRecipe">
        <Logo />
      </button>

      <div id="btns">
        <button id="nextRecipe">Start</button>
      </div>
    </div>
  );
};

export default Buttons;

// document.getElementById("btns").style.display = "flex";
// const recipePic = data.map((props) => {
//   return props.image;
// });

// const recipeTitle = data.map((props) => {
//   return props.title;
// });

// const recipeInfo = data.map((props) => {
//   return (
//     props.missedIngredients[0].original +
//     ", also" +
//     props.usedIngredients[0].original
//   );
// });
// recipePic.forEach((recipePic) => {
//   const recipeDisplay = document.getElementById("recipePic");
//   const img = document.createElement("img");
//   img.src = recipePic;
//   recipeDisplay.insertBefore(img, recipeDisplay.children[0]);
//   recipeDisplay.style.display = "none";
// });

// recipeTitle.forEach((recipeTitle) => {
//   const recipeTitleDisplay = document.getElementById("recipeTitle");
//   const h1 = document.createElement("h1");
//   h1.innerHTML = recipeTitle;
//   recipeTitleDisplay.insertBefore(h1, recipeTitleDisplay.children[0]);
//   recipeTitleDisplay.style.display = "none";
// });

// recipeInfo.forEach((recipeInfo) => {
//   const recipeInfoDisplay = document.getElementById("recipeInfo");
//   const h5_1 = document.createElement("h2");
//   h5_1.innerHTML = recipeInfo;
//   recipeInfoDisplay.insertBefore(h5_1, recipeInfoDisplay.children[0]);
//   recipeInfoDisplay.style.display = "none";
// });

// const titles = document.getElementsByTagName("h1");
// const info = document.getElementsByTagName("h2");
// const nextBtn = document.getElementById("nextRecipe");
// const recipe = document.getElementsByTagName("img");
// const recipeDisplay = document.getElementById("recipePic");
// const recipeInfoDisplay = document.getElementById("recipeInfo");
// const recipeTitleDisplay = document.getElementById("recipeTitle");
// const adjective = document.getElementById("adjectives");
// const adjectives = [
//   "😍😍😍",
//   "🤤🤤🤤",
//   "😋😋😋",
//   "Stunning",
//   "Amazing",
//   "Decadent",
// ];

// let i = 0;
// let o = 0;
// let u = 0;
// function next() {
//   nextBtn.innerHTML = "Cycle Recipes";
//   recipeDisplay.style.display = "flex";
//   recipeInfoDisplay.style.display = "flex";
//   recipeTitleDisplay.style.display = "flex";
//   Array.from(recipe).forEach((recipe) => {
//     recipe.className = "in-active";
//   });
//   Array.from(titles).forEach((title) => {
//     title.className = "in-active";
//   });
//   Array.from(info).forEach((info) => {
//     info.className = "in-active";
//   });

//   if ((i == 0) & (o == 0) & (u == 0)) {
//     recipe[i].className = "active";
//     info[o].className = "active";
//     titles[u].className = "active";
//   } else if (
//     (i == recipe.length) &
//     (o == info.length) &
//     (u == titles.length)
//   ) {
//     recipe[i - 1].className = "in-active";
//     recipe[0].className = "active";
//     info[o - 1].className = "in-active";
//     info[0].className = "active";
//     titles[u - 1].className = "in-active";
//     titles[0].className = "active";
//     i = 0;
//     o = 0;
//     u = 0;
//   } else {
//     recipe[i - 1].className = "in-active";
//     recipe[i].className = "active";
//     info[o - 1].className = "in-active";
//     info[o].className = "active";
//     titles[u - 1].className = "in-active";
//     titles[u].className = "active";
//   }
//   i++;
//   o++;
//   u++;
// }
