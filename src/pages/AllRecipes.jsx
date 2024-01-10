import React, { useEffect, useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { SimpleGrid } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { RecipesContext } from "../components/contexts/RecipesContext";
import classes from '../styles/Allrecipes.module.css'

const AllRecipes = () => {
  // const [recipes, setRecipes] = useState([]);
  const { width } = useViewportSize()
  const { recipes } = useContext(RecipesContext)

  useEffect(() => {
    //console.log(recipes)
  }, [recipes]);

  return (
    <div>
    <div className={classes.container}>
    <h1>All Recipes</h1>
    </div>
    <SimpleGrid cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
    {recipes.map(recipe => (
  <Link key={recipe.id} to={`/recipeDetail/${recipe.id}`}>
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      title={recipe.title}
      readyInMinutes={recipe.readyInMinutes} 
      servings={recipe.servings}
      dishTypes={recipe.dishTypes}
      diets={recipe.diets}
    />
  </Link>
))}
    </SimpleGrid>

    </div>
  );
};

export default AllRecipes;