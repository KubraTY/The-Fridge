import React, { useEffect,useContext } from "react";
import RecipeCard from "./RecipeCard";
import { SimpleGrid } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { RecipesContext } from "../components/contexts/RecipesContext";

const SearchResults = () => {
 // const [recipes, setRecipes] = useState([]);
  const {width} = useViewportSize()
  const {recipes} = useContext(RecipesContext)
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const applyFilters = ({ keywords, dishTypeFilter, allergies }) => {
    let filteredResults = [...recipes];

    // Filter by keywords
    if (keywords.length > 0) {
      filteredResults = filteredResults.filter(recipe =>
        keywords.every(keyword =>
          recipe.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }

    // Filter by dish type
    if (dishTypeFilter) {
      filteredResults = filteredResults.filter(
        recipe => recipe.dishType === dishTypeFilter
      );
    }

    // Filter by allergies
    if (Object.values(allergies).some(allergy => allergy === true)) {
      filteredResults = filteredResults.filter(recipe =>
        Object.keys(allergies).every(
          allergy => !allergies[allergy] || !recipe.allergies.includes(allergy)
        )
      );
    }

    setFilteredRecipes(filteredResults);
  };
  

useEffect(() => {
    console.log(recipes)
}, [recipes]);

  return (
    <div className="RecipesListPage">
    <h1>Search Result</h1>
    
    <SimpleGrid cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
      {recipes.map(recipe => (
      <Link key={recipe.id} to={`/recipeDetail/${recipe.id}`}>
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        image={recipe.image}
        cuisines={recipe.cuisines} 
        title={recipe.title}
        summary={recipe.summary}
      />
    </Link>
      ))}
    </SimpleGrid>
  </div>
  );
};

export default SearchResults;