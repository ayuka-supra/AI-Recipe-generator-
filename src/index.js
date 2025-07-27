function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Generating recipe for you..",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
