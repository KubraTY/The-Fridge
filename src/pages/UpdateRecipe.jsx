import { useEffect, useContext, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RecipesContext } from "../components/contexts/RecipesContext";
import styles from '../styles/UpdateRecipe.module.css';
import buttonStyles from '../styles/Buttons.module.css';

const UpdateRecipe = () => {
    useEffect(() => {
        fetchOneRecipe(recipeId)
      }, [])

    const {recipe,fetchOneRecipe } = useContext(RecipesContext);
    const { recipeId } = useParams() ;
    
    const [title, setTitle] = useState(recipe.title);
    const [vegetarian, setVegetarian] = useState(recipe.vegetarian);
    const [vegan, setVegan] = useState(recipe.vegan);
    const [glutenFree, setGlutenFree] = useState(recipe.glutenFree);
    const [dairyFree, setDairyFree] = useState(recipe.dairyFree);
    const [extendedIngredients, setExtendedIngredients] = useState(recipe.extendedIngredients);
    const [image, setImage] = useState(recipe.image);
    const [readyInMinutes, setReadyInMinutes] = useState(recipe.readyInMinutes);
    const [servings, setServings] = useState(recipe.servings);
    const [dishTypes, setDishTypes] = useState(recipe.dishTypes);
    const [diets, setDiets] = useState(recipe.diets);
    const [instructions, setInstructions] = useState(recipe.instructions);

const navigate = useNavigate() ;

const handleIngredientSubmit = (e) => {
    e.preventDefault();

    if (!e.target.form.elements.ingredients.value) {
      alert('Please enter an ingredient.');
      return;
    }

    const newIngredient = {
      original: e.target.form.elements.ingredients.value,
    };

    setExtendedIngredients([...extendedIngredients, newIngredient]);

    e.target.form.elements.ingredients.value = '';

    console.log('Ingredient added');
  };

const handleDeleteIngredient = (index) => {
    setExtendedIngredients((prevIngredients) => {
      const updatedIngredients = [...prevIngredients];
      updatedIngredients.splice(index, 1);
    return updatedIngredients; 
    // small bug here > when i delete an ingredient that was preivously there, it reloads the recipeDetails page
    });
}; 

const handleDietChange = (e) => {
    const { value, checked } = e.target;

    if (value === "glutenFree") {
      setGlutenFree(!glutenFree);
    }
    if (value === "vegan") {
      setVegan(!vegan);
    }
    if (value === "vegetarian") {
      setVegetarian(!vegetarian);
    }
    if (value === "dairyFree") {
      setDairyFree(!dairyFree);
    }

    setDiets((prevDiets) => {
      if (checked) {
        return [...prevDiets, value];
      } else {
        return prevDiets.filter((diet) => diet !== value);
      }
    });
  };

const handleSubmit = async event => {
    event.preventDefault()
    const payload = { title, image, vegan, vegetarian, glutenFree, dairyFree, dishTypes, diets, instructions, extendedIngredients, readyInMinutes, servings }

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        navigate(`/recipeDetail/${recipeId}`)
      }
    } catch (error) {
      console.error(error)
    }
  } 
  
  return (
    <div className={styles.centeredContainer}>
    <h1 className={styles.h1}>Update the recipe <span className={styles.recipeTitle}>{recipe.title}</span></h1>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>

        <label className={buttonStyles.inputContainer}>
          <span>Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className={buttonStyles.inputContainer}>
          <span>Image:</span>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

            
         <div className={styles.ingredientsContainer}>
           <div className={buttonStyles.inputContainer}>
            <input
              type="text"
              name="ingredients"
              placeholder="Add an ingredient here"
            />
            <button
              className={buttonStyles.button_1}
              type="button"
              onClick={(e) => handleIngredientSubmit(e)}
            >
              Add
            </button>
          </div>
           <div className={styles.keywordsContainer}>
            {extendedIngredients.map((ingredient, index) => (
              <div key={index} className={buttonStyles.keyword}>
                {ingredient.original} <button onClick={() => handleDeleteIngredient(index)}>X</button>
              </div>
         ))}  
        </div>   

          <div className={styles.containerForTwo} >
            <label className={buttonStyles.inputContainer}>
              <span>Ready In:</span>
              <input
                type="number"
                value={readyInMinutes}
                onChange={(e) => setReadyInMinutes(e.target.value)}
              />
            </label>

            <label className={buttonStyles.inputContainer}>
              <span>Servings:</span>
              <input
                type="number"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
              />
            </label>
          </div>


        </div>

        <div className={styles.filtersContainer}>

          <div className={styles.dietFilter}>
            <label>
              <span>Diets:</span>
              <div>
                <label className={buttonStyles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value="vegan"
                    checked={vegan}
                    onChange={handleDietChange}
                  />
                  Vegan
                </label>
              </div>
              <div>
                <label className={buttonStyles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value="vegetarian"
                    checked={vegetarian}
                    onChange={handleDietChange}
                  />
                  Vegetarian
                </label>
              </div>
              <div>
                <label className={buttonStyles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value="glutenFree"
                    checked={glutenFree}
                    onChange={handleDietChange}
                  />
                  Gluten Free
                </label>
              </div>
              <div>
                <label className={buttonStyles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value="dairyFree"
                    checked={dairyFree}
                    onChange={handleDietChange}
                  />
                  Dairy Free
                </label>
              </div>
            </label>
          </div> 

           {/*<div className={buttonStyles.dishTypeFilter}>
            <label>
              <span>Dish Type:</span>
              <select value={recipe.dishTypes} onChange={(e) => handleDishTypeChange(e)}>
                <option value="">All</option>
                <option value="starter">Starter</option>
                <option value="soup">Soup</option>
                <option value="main">Main Course</option>
                <option value="dessert">Dessert</option>
              </select>
            </label>
          </div>*/}

        </div>

        <label className={buttonStyles.inputContainer}>
          <span>Instructions:</span>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </label>

        <button className={buttonStyles.button_1} type="submit">
          Edit Recipe
        </button>
      </form>
    </div>
  </div>
    /*<>
      <h1 className={styles.h1}>Update the recipe <span className={styles.recipeTitle}>{recipe.title}</span></h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title :
          <input value={recipe.title} onChange={event => setTitle(event.target.value)} required />
        </label>
        <label>
          Image URL :
          <input
            value={recipe.image}
            onChange={event => setImage(event.target.value)}
            required
          />
        </label>
        <button type='submit'>Update</button>
      </form>
  </>*/
  )
}

export default UpdateRecipe