import React, { useEffect,useContext } from "react";
import RecipeCard from "./RecipeCard";
import { SimpleGrid } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { RecipesContext } from "../components/contexts/RecipesContext";

const SearchResults = () => {
 // const [recipes, setRecipes] = useState([]);
  const {width} = useViewportSize()
  const {recipes} = useContext(RecipesContext)

  const handleDelete =(recipeId) => {
    const updateRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updateRecipes);
    console.log(updateRecipes)
  };

useEffect(() => {
    console.log(recipes)
}, [recipes]);

  return (
    <div className="RecipesListPage">
    <h1>Search Result</h1>
    
    <SimpleGrid cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
      {recipes.map(recipe => (
      <Link key={recipe.id} to={`/recipeDetail/${recipe.id}`}>
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        image={recipe.image}
        cuisines={recipe.cuisines} 
        title={recipe.title}
        summary={recipe.summary}
      />
    </Link>
      ))}
    </SimpleGrid>
  </div>
  );
};

export default SearchResults;