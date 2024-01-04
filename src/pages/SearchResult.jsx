import React, { useEffect,useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { SimpleGrid } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);
  const {width} = useViewportSize()

  const handleDelete =(recipeId) => {
    const updateRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updateRecipes);
    console.log(updateRecipes)
  };
  // add API DELETE



  const fetchRecipes = async() => {
    try { 
        const response = await fetch(' https://fakestoreapi.com/products')
        console.log(response)
        if (response.ok){
         const recipesData = await response.json()
        setRecipes(recipesData)
    }
    } catch (error) {
        console.log(error)
    }
  }

useEffect(() => {
    console.log('useffect ran')
    fetchRecipes()
}, []);

useEffect(() => {
    console.log(recipes)
}, [recipes]);

  return (
    <div className="RecipesListPage">
    <h1>Search Result</h1>
    
    <SimpleGrid cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
      {recipes.map(recipe => (
       <Link key={recipe.id} to={`/recipeDetail/${recipe.id}`}>
       <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} remove={handleDelete} />
     </Link>
      ))}
    </SimpleGrid>
  </div>
  );
};

export default SearchResults;