import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesContextProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:4000/recipes');
    
            if (response.status === 200) {
                const recipesData = response.data;
                setRecipes(recipesData);
                console.log(recipesData);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const addRecipe = async (newRecipeData) => {
        try {
          const response = await axios.post('http://localhost:4000/recipes', newRecipeData);
    
          if (response.status === 201) {

            const addedRecipe = response.data;
            setRecipes((prevRecipes) => [...prevRecipes, addedRecipe]);
            console.log(recipes)
          }
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        fetchRecipes()
    }, [])
    return(
      
      <RecipesContext.Provider value={{fetchRecipes, recipes, addRecipe}}>
        {children}
      </RecipesContext.Provider>
    )
}

export default RecipesContextProvider;