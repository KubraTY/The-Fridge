import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesContextProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState ({});
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/recipes`);
    
            if (response.status === 200) {
                const recipesData = response.data;
                setRecipes(recipesData);
                if (!filteredRecipes.length) {
                  setFilteredRecipes(recipesData);
                }
                //console.log(recipesData);
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
            //console.log(addedRecipe, "recipe added")
          }
        } catch (error) {
          console.error(error);
        }
      };

      const updateFilteredRecipes = (searchCriteria) => {

        const filtered = recipes.filter((recipe) => {
          const ingredients = (recipe.extendedIngredients || []).map((ingredient => ingredient.original))
          //console.log(ingredients)
          const hasKeywords = searchCriteria.keywords.every((keyword) =>
          ingredients.some((ingredient) => ingredient.toLowerCase().includes(keyword.toLowerCase()))
            
        );
    
          const hasDishType = !searchCriteria.dishType || recipe.dishTypes.includes(searchCriteria.dishType);
    

          const hasDiets = searchCriteria.diets.every((diet) => {
          
            if (diet === 'vegetarian' && recipe.diets.includes('vegan')) {
              return true;
            }
            return recipe.diets.includes(diet);
          });
    
          return hasKeywords && hasDishType && hasDiets;
        });
    
        setFilteredRecipes(filtered);
      };

    useEffect(() => {
      fetchRecipes()
    }, [])


    return(
      
      <RecipesContext.Provider value={{fetchRecipes, recipes, addRecipe, recipe, fetchOneRecipe,filteredRecipes, updateFilteredRecipes}}>
        {children}
      </RecipesContext.Provider>
    )
}

export default RecipesContextProvider;