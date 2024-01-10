import { useEffect, useContext } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import styles from '../styles/RecipeDetails.module.css';
import parse from 'html-react-parser';
import buttonStyles from '../styles/Buttons.module.css';
import { RecipesContext } from "../components/contexts/RecipesContext";
import { Badge} from '@mantine/core';

const RecipeDetails = () => {
    const {recipe,fetchOneRecipe } = useContext(RecipesContext);
    const { recipeId } = useParams() ;
    const navigate = useNavigate()
    
   
    useEffect(() => {
      fetchOneRecipe(recipeId)
    }, [])

    console.log(recipe)
    
    const handleDelete = async () => {
      const confirmDelete = window.confirm(`Are you sure you want to delete this recipe? There's no going back once it's done`);

      if (confirmDelete) {
        try {
          const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/recipes/${recipeId}`, {
            method: 'DELETE',
          })
          if (response.ok) {
            /* here we need to add some instructions to delete the card from the AllRecipes page as well */
            navigate('/allrecipes')
          }
        } catch (error) {
          console.error(error)
        }
      } else { 
      }
    }

  return (
    <>
     <h1 className={styles.h1}>{recipe.title}</h1>
     <div className={styles.Headerbox}>
        <div className={styles.HeaderboxLeft}>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className={styles.HeaderboxRight}>
          <p>Ready in: {recipe.readyInMinutes} min</p>
          <p>{recipe.servings} serving(s)</p>
          <div>{recipe.dishTypes}</div>
          <div>
            {recipe.diets && recipe.diets.length > 0 && (
            recipe.diets.map((diet, index) => {
            return (
              <Badge key={index} color="#f4612d" style={{ marginRight: '4px' }}>
              {diet}
              </Badge>
            );
            })
            )}
           </div>
        </div>
      </div>
      <div className={styles.Mainbox}>
      <div>
        <h2 className={styles.h2}>Ingredients</h2>
          <ul className={styles.ul}>
            {recipe.extendedIngredients ?
            recipe.extendedIngredients.map(ingredient => {return (
            <li key={ingredient.id}>{ingredient.original}</li>)}) :<p>loading</p> }
          </ul>
      </div>
        <h2 className={styles.h2}>Instructions</h2>
        <div>
        {console.log(recipe.instructions)}
          { 
            recipe.instructions ?
            <p>{parse(recipe.instructions)}</p>
            : <p>loading</p>
          }
        </div>
      </div>
      <div className={styles.EditBox}>
      <button type='button' onClick={handleDelete} className={buttonStyles.button_1}>
        Delete this recipe
      </button>
      <Link to={`/recipeDetail/${recipeId}/update`}>
      <button type='button' className={buttonStyles.button_1}>
        Edit this recipe
      </button>
        </Link>

      </div>
    </>
  )
  /* return recipe? (
      <div className={styles.recipe}>
      <h1>{recipe.label}</h1>
      

      <div className={styles.labels}>
        <div className={styles.dietLabels}>
          <h3>Diet Labels</h3>
          <ul>
            {recipe.dietLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>

        <div className={styles.cuisineType}>
          <h3>Cuisine Type</h3>
          <p>{recipe.cuisineType.join(', ')}</p>
        </div>

        <div className={styles.dishType}>
          <h2>Dish Type</h2>
          <p>{recipe.dishType.join(', ')}</p>
        </div>
      </div>

  
 
     */
}

export default RecipeDetails;