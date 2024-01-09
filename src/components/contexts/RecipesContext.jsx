import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesContextProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState ({})
    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/recipes`);
    
            if (response.status === 200) {
                const recipesData = response.data;
                setRecipes(recipesData);
                console.log(recipesData);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const fetchOneRecipe = async (recipeId) => {
      try {
          const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/recipes/${recipeId}`)
          if (response.ok) {
            const recipeData = await response.json()
            setRecipe(recipeData)
    
          }
        } catch (error) {
          console.log(error)
          /*navigate('/allrecipes')*/
        }
    };

    const addRecipe = async (newRecipeData) => {
        try {
          const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/recipes`, newRecipeData);
    
          if (response.status === 201) {

            const addedRecipe = response.data;
            setRecipes((prevRecipes) => [...prevRecipes, addedRecipe]);
            console.log(addedRecipe, "recipe added")
          }
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
      fetchRecipes()
    }, [])


    return(
      
      <RecipesContext.Provider value={{fetchRecipes, recipes, addRecipe, recipe, fetchOneRecipe}}>
        {children}
      </RecipesContext.Provider>
    )
}

export default RecipesContextProvider;