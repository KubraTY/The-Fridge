import React, { useState, useContext, useRef } from 'react';
import styles from '../styles/SearchForm.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import { RecipesContext } from '../components/contexts/RecipesContext';
import fridge from  '../assets/orange-icon.png' 

const SearchForm = () => {
  const [keywords, setKeywords] = useState([]);
  const [dishTypeFilter, setDishTypeFilter] = useState('');
  const [diets, setDiets] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
  });

  const { updateFilteredRecipes } = useContext(RecipesContext);
  const searchResultsRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchCriteria = {
      keywords,
      dishType: dishTypeFilter,
      diets: Object.keys(diets).filter((diet) => diets[diet]),
    };

    updateFilteredRecipes(searchCriteria);
    if (searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    setKeywords([...keywords, e.target.keyword.value]);
    e.target.keyword.value = '';
  };

  const handleDeleteKeyword = (index) => {
    const updatedKeywordsList = [...keywords];
    updatedKeywordsList.splice(index, 1);
    setKeywords(updatedKeywordsList);
  };

  const handleDishType = (e) => {
    setDishTypeFilter(e.target.value);
  };

  const handleDiets = (diet) => {
    setDiets((prevDiets) => ({ ...prevDiets, [diet]: !prevDiets[diet] }));
  };

  const dietLabels = {
    vegan: 'Vegan',
    vegetarian: 'Vegetarian',
    glutenFree: 'Gluten Free',
    dairyFree: 'Dairy Free',
  };

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.title} >
        <img src={fridge} className={styles.icon}/>
        <h1>What's in your fridge ?</h1>
      </div>
      <p className={styles.formTitle}>"From Fridge to Feast: Your Culinary Journey Begins Here"</p>
      <div className={styles.formContainer}>
        <form onSubmit={handleKeywordSubmit} className={styles.form}>
          <div className={buttonStyles.inputContainer}>
            <input type="text" name="keyword" placeholder="Add your ingredients here..." />
            <button className={buttonStyles.button_1} type="submit">
              Add
            </button>
          </div>
          <div className={styles.keywordsContainer}>
            {keywords.map((keyword, index) => (
              <div key={index} className={buttonStyles.keyword}>
                {keyword} <button onClick={() => handleDeleteKeyword(index)}>X</button>
              </div>
            ))}
          </div>
        </form>
        <div className={styles.filtersContainer}>
          <div className={styles.diets}>
            Any specific diet?
            {Object.keys(diets).map((diet) => (
              <label key={diet} className={buttonStyles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={diets[diet]}
                  onChange={() => handleDiets(diet)}
                />
                 {dietLabels[diet] || diet}
              </label>
            ))}
          </div>
          <div className={buttonStyles.dishTypeFilter}>
            <label className={styles.dishTypeFilter} >
              Choose your dish type 
              <select value={dishTypeFilter} onChange={handleDishType}>
                <option value="">All</option>
                <option value="starter">Starter</option>
                <option value="soup">Soup</option>
                <option value="main">Main Course</option>
                <option value="dessert">Dessert</option>
              </select>
            </label>
          </div>
        </div>
        <button className={buttonStyles.button_1} type="submit" onClick={handleSearch}>
          Search for recipes ideas
        </button>
      </div>
      <div ref={searchResultsRef}></div>
    </div>
  );
};

export default SearchForm;
