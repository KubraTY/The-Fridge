import React, { useState, useContext } from 'react';
import buttonStyles from '../styles/Buttons.module.css';
import styles from '../styles/NewRecipeForm.module.css';
import { useNavigate } from 'react-router-dom';
import { RecipesContext } from "../components/contexts/RecipesContext";


const NewRecipe = () => {

  const {addRecipe ,fetchRecipes} = useContext(RecipesContext)

  const [label, setLabel] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [image, setImage] = useState('');
  const [dishType, setDishType] = useState('');
  const [summary, setSummary] = useState('');
  const [allergies, setAllergies] = useState({
    Gluten: false,
    Soya: false,
    Lactose: false,
    Peanut: false,
    Shellfish: false,
  });

  const [ingredientInput, setIngredientInput] = useState('');
  const navigate = useNavigate()

  const handleIngredientSubmit = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, e.target.form.elements.ingredients.value]);
    e.target.form.elements.ingredients.value = '';
    console.log('Ingredient added');
  };

  const handleDeleteIngredient = (index) => {
    setIngredients((prevIngredients) => {
      const updatedIngredients = [...prevIngredients];
      updatedIngredients.splice(index, 1);
      return updatedIngredients;
    });
  };

  const handleAllergies = (allergy) => {
    setAllergies((prevAllergies) => ({ ...prevAllergies, [allergy]: !prevAllergies[allergy] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipeData = {
      label,
      ingredients,
      image,
      dishType,
      summary,
      allergies,
    };

    addRecipe(newRecipeData);

    navigate('/allrecipes');
    fetchRecipes()

  };

  return (
    <div className={styles.centeredContainer}>
      <h1 className={styles.formTitle}>Flavors Unleashed: Create Your Signature Dish</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={buttonStyles.inputContainer}>
            <span>Title:</span>
            <input
              type="text"
              value={label}
              placeholder="Your recipe name..."
              onChange={(e) => setLabel(e.target.value)}
            />
          </label>

          <label className={buttonStyles.inputContainer}>
            <span>Image:</span>
            <input
              type="text"
              value={image}
              placeholder="Image URL..."
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <div className={styles.ingredientsContainer}>
            <div className={buttonStyles.inputContainer}>
              <input type="text" name="ingredients" placeholder="Ingredients..." />
              <button
                className={buttonStyles.button_1}
                type="button"
                onClick={(e) => handleIngredientSubmit(e)}
              >
                Add
              </button>
            </div>
            <div className={styles.keywordsContainer}>
              {ingredients.map((ingredient, index) => (
                <div key={index} className={buttonStyles.keyword}>
                  {ingredient} <button onClick={() => handleDeleteIngredient(index)}>X</button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.filtersContainer}>
            <div className={styles.allergies}>
              <label>
                <span>Allergies:</span>
                {Object.keys(allergies).map((allergy) => (
                  <label key={allergy} className={buttonStyles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={allergies[allergy]}
                      onChange={() => handleAllergies(allergy)}
                    />
                    {allergy}
                  </label>
                ))}
              </label>
            </div>
            <div className={buttonStyles.dishTypeFilter}>
              <label>
                <span>Dish Type:</span>
                <select value={dishType} onChange={(e) => setDishType(e.target.value)}>
                  <option value="">All</option>
                  <option value="starter">Starter</option>
                  <option value="soup">Soup</option>
                  <option value="main">Main Course</option>
                  <option value="dessert">Dessert</option>
                </select>
              </label>
            </div>
          </div>

          <label className={buttonStyles.inputContainer}>
            <span>Summary:</span>
            <textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
          </label>

          <button className={buttonStyles.button_1} type="submit">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
