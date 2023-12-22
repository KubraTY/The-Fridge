import React, { useEffect,useState } from "react";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async() => {
    try { 
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response)
        if (response.ok){
         const recipesData = await response.json()
         console.log(recipesData)
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

  return (
    <div className="RecipesListPage">
      <h1>Search Result</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  );
};

export default SearchResults;