import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from '../styles/RecipeDetails.module.css';

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
          navigate('/allrecipes')
        }
      } catch (error) {
        console.error(error)
      }
    }
    
    
    return recipe? (
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

      <div className={styles.ingredients}>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <p>
                {ingredient.quantity} {ingredient.measure} {ingredient.food}
              </p>
              <img src={ingredient.image} alt={ingredient.food} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.instructions}>
        <h2>Instructions</h2>
        <ol>
          {recipe.instructionLines.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </div>
    ) : (
        <h1>This recipe does not exist</h1>
      )
}

export default RecipeDetails;