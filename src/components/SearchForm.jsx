import React, { useState } from 'react';
import styles from '../styles/SearchForm.module.css';
import buttonStyles from '../styles/Buttons.module.css'

const SearchForm = () => {
  const [keywords, setKeywords] = useState([]);
  const [dishTypeFilter, setDishTypeFilter] = useState('');
  const [allergies, setAllergies] = useState({
    Gluten: false,
    Soya: false,
    Lactose: false,
    Peanut: false,
    Shellfish: false,
  });

  const handleSearch = (e) => {
    console.log("submit the form");
    e.preventDefault();
    console.log('Search Clicked');
    console.log('Keywords:', keywords);
    console.log('Dish Type Filter:', dishTypeFilter);
    console.log('Allergies:', allergies);
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

  const handleAllergies = (allergy) => {
    setAllergies((prevAllergies) => ({ ...prevAllergies, [allergy]: !prevAllergies[allergy] }));
  };

  return (
    <div className={styles.centeredContainer}>
        <h1 className={styles.formTitle}>"From Fridge to Feast: Your Culinary Journey Begins Here"</h1>
      <div className={styles.formContainer}>
      <form onSubmit={handleKeywordSubmit} className={styles.form}>
          <div className={buttonStyles.inputContainer}>
            <input type="text" name="keyword" placeholder='ingredients...' />
            <button className={buttonStyles.button_1} type="submit">Add</button>
          </div>
          <div className={styles.keywordsContainer}>
          {keywords.map((keyword, index) => (
            <div key={index} className={buttonStyles.keyword}>
              {keyword}{' '}
              <button onClick={() => handleDeleteKeyword(index)}>X</button>
            </div>
          ))}
        </div>
        </form>
      <div className={styles.filtersContainer}>
          <div className={styles.allergies}>
            Allergies:
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
          </div>
          <div className={buttonStyles.dishTypeFilter}>
            <label>
              Dish Type Filter:
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
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
