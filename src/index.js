function displayRecipe(response) {
  console.log("Recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "366ea901b76608f0a30d8bat6co94e0b";
  let prompt = `Generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are a famous chef with years of experience, you love to help people to be able to cook their favourite dish. Following the structures of recipe of <h1><strong></strong></h1> <br/> Ingredients <br /> <li></li> <br /> and instructions <br /> <li></li>, you will help them create a recipe based on the keyword provided to you in the prompt. Make sure to follow user input in the prompt";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating">⌛ Generating recipe for ${instructionsInput.value}</div>`;

  console.log("Generating recipe");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
