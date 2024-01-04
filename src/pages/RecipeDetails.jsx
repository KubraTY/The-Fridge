import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState();
  const { recipeId } = useParams();
console.log('Recipe ID:', recipeId);

  const fetchOneRecipe = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${recipeId}`)
      console.log(response)
      if (response.ok) {
        const recipeData = await response.json()
        console.log(recipeData);
        setRecipe(recipeData);
      }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchOneRecipe();
  }, [recipeId]);

  return recipe ? (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  ) : (
    <h1>Loading...
    </h1>
  );
};

export default RecipeDetails;
