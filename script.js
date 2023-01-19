const searchButton = document.getElementById("search-button");
const searchTerm = document.getElementById("search-term");
const results = document.getElementById("results");

searchButton.addEventListener("click", function(e) {
  e.preventDefault();

  fetch(`https://api.edamam.com/search?q=${searchTerm.value}&app_id=61563570&app_key=537d89f67f363aa12af4c2cdc33e5b6d&random=True`)
  .then(response => response.json())
  .then(data => {
    results.innerHTML = "";
    const grid = document.createElement("div");
    grid.classList.add("grid");
    data.hits.forEach(recipe => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
        <h2>${recipe.recipe.label}</h2>
        <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        <p>Ingredients: ${recipe.recipe.ingredientLines.join(", ")}</p>
        <a href="${recipe.recipe.url}">View Recipe</a>
      `;
      grid.appendChild(recipeDiv);
    });
    results.appendChild(grid);
  });
});