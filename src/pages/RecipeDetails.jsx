import { useEffect, useContext } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import styles from '../styles/RecipeDetails.module.css';
import parse from 'html-react-parser';
import buttonStyles from '../styles/Buttons.module.css';
import { RecipesContext } from "../components/contexts/RecipesContext";
import { Badge} from '@mantine/core';
import clock from  '../assets/clock.png';
import people from  '../assets/people.png';

const RecipeDetails = () => {
    const {recipe,fetchOneRecipe, fetchRecipes } = useContext(RecipesContext);
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
            fetchRecipes ();
          }
        } catch (error) {
          console.error(error)
        }
      } else { 
      }
    }
  const headerStyle = {
    backgroundImage:`url("${recipe.image}")`,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '100px 0',
    zIndex: '1',
  } 

  return (
    <>
     <header className={styles.header} style={headerStyle} >
        <h1 className={styles.h1}>{recipe.title}</h1>
     </header>
     <div className={styles.generalInfo}>
        <div className={styles.readyInMinutes}>
          <img className={styles.icon} src={clock}/>
          <p>Ready in {recipe.readyInMinutes} min</p>
        </div>
        <div className={styles.servings}>
          <img className={styles.icon} src={people}/>
          <p>{recipe.servings} serving(s)</p>
        </div>
        <div className={styles.labelsBox}>
          <h2>Dish Type(s):</h2>
          <div>{recipe.dishTypes && recipe.dishTypes.length > 0 && (
              recipe.dishTypes.map((dishType, index) => {
              return (
                <Badge key={index} color="#f4612d" style={{ margin: '8px' }}>
                {dishType}
                </Badge>
              );
              })
            )}
          </div>
        </div>
        <div className={styles.labelsBox}>
          <h2>Diet(s):</h2>
          <div className={styles.dietLabels}>
              {recipe.diets && recipe.diets.length > 0 && (
              recipe.diets.map((diet, index) => {
               return (
                <Badge key={index} color="#f4612d" style={{ margin: '8px' }}>
                {diet}
                </Badge>
                );
                })
              )}
          </div>
        </div>
        </div>
     <div className={styles.Mainbox}>
        <div className={styles.MainboxLeft}>
          <img className={styles.recipeImage} src={recipe.image} alt={recipe.title}/>
          <h2 className={styles.h2}>Instructions</h2>
          <div className={styles.instructions}>
          { 
            recipe.instructions ?
            <p>{parse(recipe.instructions)}</p>
            : <p>loading</p>
          }
          </div>
        </div>
        <div className={styles.MainboxRight}>
          <div className={styles.ingredients}>
            <h2 className={styles.h2}>Ingredients</h2>
            <ul className={styles.ul}>
              {recipe.extendedIngredients ?
              recipe.extendedIngredients.map(ingredient => {return (
              <li key={ingredient.id}>{ingredient.original}</li>)}) :<p>loading</p> }
            </ul>
          </div>
          <div className={styles.EditBox}>
            <button type='button' onClick={handleDelete} className={buttonStyles.button_2}>
              Delete this recipe
            </button>
            <Link to={`/recipeDetail/${recipeId}/update`}>
              <button type='button' className={buttonStyles.button_2}>
                Edit this recipe
              </button>
            </Link>
          </div>
        </div>
     </div>
    
    
    </>
  )
}

export default RecipeDetails;