import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from '../styles/RecipeDetails.module.css';
import parse from 'html-react-parser';
import buttonStyles from '../styles/Buttons.module.css';

const RecipeDetails = () => {
    const { recipeId } = useParams()
    const navigate = useNavigate ()
    
    const [recipe, setRecipe] = useState({})

    const fetchOneRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:4000/recipes/${recipeId}`)
            if (response.ok) {
              const recipeData = await response.json()
              setRecipe(recipeData)
            }
          } catch (error) {
            console.log(error)
            navigate('/allrecipes')
          }
    }

    useEffect(() => {
        fetchOneRecipe()
      }, [recipeId])

    const handleDelete = async () => {
      try {
        const response = await fetch(`http://localhost:4000/recipes/${recipeId}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          /* here we need to add some instructions to delete the card from the AllRecipes page as well */
          navigate('/allrecipes')
        }
      } catch (error) {
        console.error(error)
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
          
          <div>
          <h2 className={styles.h2}>Ingredients</h2>
            <ul className={styles.ul}>
              {recipe.extendedIngredients ?
              recipe.extendedIngredients.map(ingredient => {return (
              <li key={ingredient.id}>{ingredient.original}</li>)}) :<p>loading</p> }
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.Mainbox}>
      
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