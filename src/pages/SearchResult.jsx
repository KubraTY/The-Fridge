import React, { useEffect,useState } from "react";
import RecipeCard from "../components/RecipeCard";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);

  const handleDelete =(recipeId) => {
    const updateRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updateRecipes);
    console.log(updateRecipes)
  };
  // add API DELETE



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
            <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} remove={handleDelete}/>
            <p className="RecipesTitle"> {recipe.title}</p>
        

       </div>
      ))}
    </div>
  );
};

export default SearchResults;