import React, { useState, useContext } from 'react';
import buttonStyles from '../styles/Buttons.module.css';
import styles from '../styles/NewRecipeForm.module.css';
import { useNavigate } from 'react-router-dom';
import { RecipesContext } from '../components/contexts/RecipesContext';

const NewRecipe = () => {
  const { addRecipe, fetchRecipes } = useContext(RecipesContext);


  const [title, setTitle] = useState('');
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [extendedIngredients, setExtendedIngredients] = useState([]);
  const [image, setImage] = useState('');
  const [readyInMinutes, setReadyInMinutes] = useState('');
  const [servings, setServings] = useState('');
  const [dishTypes, setDishTypes] = useState([]);
  const [diets, setDiets] = useState([]);
  const [instructions, setInstructions] = useState('');

  const navigate = useNavigate();

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
  };

  const handleDeleteIngredient = (index) => {
    setExtendedIngredients((prevIngredients) => {
      const updatedIngredients = [...prevIngredients];
      updatedIngredients.splice(index, 1);
      return updatedIngredients;
    });
  };

  const handleDishTypeChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setDishTypes(selectedOptions);
  };

  const handleDietChange = (e) => {
    const { value, checked } = e.target;

    if (value === "glutenFree" && checked) {
      setGlutenFree(true);
    }
    if (value === "vegan" && checked) {
      setVegan(true);
    }
    if (value === "vegetarian" && checked) {
      setVegetarian(true);
    }
    if (value === "dairyFree" && checked) {
      setDairyFree(true);
    }

    setDiets((prevDiets) => {
      if (checked) {
        return [...prevDiets, value];
      } else {
        return prevDiets.filter((diet) => diet !== value);
      }
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipeData = {
      title,
      vegetarian,
      vegan,
      glutenFree,
      dairyFree,
      extendedIngredients,
      readyInMinutes,
      servings,
      image,
      dishTypes,
      diets,
      instructions,
    };

    addRecipe(newRecipeData);
    fetchRecipes();

    navigate('/allrecipes');
  };

  return (
    <div className={styles.centeredContainer}>
      <h2 className={styles.h2}>Add a new recipe</h2>
      <p className={styles.formTitle}>Flavors Unleashed: Create Your Signature Dish</p>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>

          <label className={buttonStyles.inputContainer}>
            <span>Title:</span>
            <input
              type="text"
              value={title}
              placeholder="Your recipe's name..."
              onChange={(e) => setTitle(e.target.value)}
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
              <input
                type="text"
                name="ingredients"
                placeholder="Ingredient..."
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
                  placeholder="Minutes..."
                  onChange={(e) => setReadyInMinutes(e.target.value)}
                />
              </label>

              <label className={buttonStyles.inputContainer}>
                <span>Servings:</span>
                <input
                  type="number"
                  value={servings}
                  placeholder="Number of people"
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
                      checked={diets.includes("vegan")}
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
                      checked={diets.includes("vegetarian")}
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
                      checked={diets.includes("glutenFree")}
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
                      checked={diets.includes("dairyFree")}
                      onChange={handleDietChange}
                    />
                    Dairy Free
                  </label>
                </div>
              </label>
            </div>

            <div className={buttonStyles.dishTypeFilter}>
              <label>
                <span>Dish Type:</span>
                <select value={dishTypes} onChange={(e) => handleDishTypeChange(e)}>
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
            <span>Instructions:</span>
            <textarea placeholder="Write your recipe's instructions here..." value={instructions} onChange={(e) => setInstructions(e.target.value)} />
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
