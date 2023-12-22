import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async() => {
    try { 
        const response = await fetch('https://fakestoreapi.com/products')
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
      {recipes.map(recipe => (
       <div>
            <img />
            <Link key={recipe.id} to={`/recipeDetail/${recipe.id}`}> 
            <p className="RecipesTitle"> {recipe.title}</p>
        
            </Link>

       </div>
      ))}
    </div>
  );
};

export default SearchResults;