const fetchBtn1 = document.getElementById("fetchBtn1");
const fetchBtn2 = document.getElementById("fetchBtn2");
const fetchBtn3 = document.getElementById("fetchBtn3");

const loader = document.getElementById("loader");
const recipeCard = document.getElementById("recipeCard");
const recipeName = document.getElementById("recipeName");
const recipeImage = document.getElementById("recipeImage");
const recipeIngredients = document.getElementById("recipeIngredients");
const recipeInstructions = document.getElementById("recipeInstructions");

async function Recipes() {
    loader.classList.remove("hidden");
    recipeCard.classList.add("hidden");

    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        loader.classList.add("hidden");
        return data.recipes;
    } catch (error) {
        console.error("Error fetching data:", error);
        loader.textContent = "Failed to load data!";
    }
}

function showRecipe(recipe) {
    if (!recipe) {
        loader.textContent = "Recipe not found";
        loader.classList.remove("hidden");
        return;
    }

    loader.classList.add("hidden");
    recipeCard.classList.remove("hidden");

    recipeCard.classList.remove("hidden");
    recipeName.textContent = recipe.name;
    recipeImage.src = recipe.image;
    recipeIngredients.innerHTML = recipe.ingredients
        .map((item) => `<li>${item}</li>`)
        .join("");
    recipeInstructions.textContent = recipe.instructions;
}

async function Btn() {
    const recipes = await Recipes();

    fetchBtn1.addEventListener("click", () => showRecipe(recipes.find(r => r.id === 1)));
    fetchBtn2.addEventListener("click", () => showRecipe(recipes.find(r => r.id === 2)));
    fetchBtn3.addEventListener("click", () => showRecipe(recipes.find(r => r.id === 3)));
}

Btn();