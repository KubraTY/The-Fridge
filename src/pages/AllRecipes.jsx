import { useContext } from "react";
import { RecipesContext } from "../components/contexts/RecipesContext";

const AllRecipes = () => {

    const {recipes} = useContext(RecipesContext)

    return(
        <>
            <h1>all Recipes</h1>

            <ul>
                {
                    recipes.map(recipe => (
                        <li key={recipe.id}>{recipe.label}
                        <img src={recipe.image} alt="" />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default AllRecipes;