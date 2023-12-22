// SearchForm.js

import React, { useState } from 'react';


const SearchForm = () => {

    const [keywords, setKeywords] = useState([]);
    const [dishTypeFilter, setDishTypeFilter] = useState('');
    const [allergies, setAllergies] = useState({
        gluten: false,
        soya: false,
        lactose: false,
        peanut: false,
        shellfish: false,
    });
    
    
    const handleSearch = (e) =>{
        console.log("submit the form")
        e.preventDefault();
        console.log('Search Clicked');
        console.log('Keywords:', keywords);
        console.log('Dish Type Filter:', dishTypeFilter);
        console.log('Allergies:', allergies);
    }

    const handleKeywordSubmit = (e) => {
        e.preventDefault();
        setKeywords([...keywords, e.target.keyword.value]);
        e.target.keyword.value = '';
    };

    const handleDeleteKeyword = (index) => {
        const updatedKeywordsList = [...keywords]
        console.log(index)
        updatedKeywordsList.splice(index,1);
        setKeywords(updatedKeywordsList)
    }

    const handleDishType = (e) => {
     setDishTypeFilter(e.target.value)
    }

    const handleAllergies = (allergy) => {
        setAllergies((prevAllergies) => ({ ...prevAllergies, [allergy]: !prevAllergies[allergy] }))
    }
    

  return (
    <div style={{width:300, height:300, display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
            <form onSubmit={handleKeywordSubmit}>
                <input type="text" name="keyword" placeholder='ingredients..' />
                <button type="submit">Add Ingredients</button>
            </form>
            <div>
                {keywords.map((keyword, index) => (
                <div key={index}>
                    {keyword}{' '}
                    <button onClick={() => handleDeleteKeyword(index)}>X</button>
                </div>
                ))}
            </div>
            <div>
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
            <div>
                Allergies:
                {Object.keys(allergies).map((allergy) => (
                <label key={allergy}>
                    <input
                    type="checkbox"
                    checked={allergies[allergy]}
                    onChange={() => handleAllergies(allergy)}
                    />
                    {allergy}
                </label>
                ))}
            </div>
            <button className='searchFormSubmit' type="submit" onClick={handleSearch}>Search</button>
        </div>
    </div>


  )
};

export default SearchForm;
