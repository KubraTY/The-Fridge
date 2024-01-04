import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SimpleGrid } from '@mantine/core';
import { Image } from '@mantine/core';

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
    <div className="RecipePage">
    <SimpleGrid cols={2}>
    <div><h1>{recipe.title}</h1>  <p>{recipe.category}</p></div>
    <div></div>
    <div> <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src={recipe.image}
    /></div>
    <div>{recipe.description}</div>
   
  </SimpleGrid>   


    </div>
  ) : (
    <h1>Loading...
    </h1>
  );
};

export default RecipeDetails;
