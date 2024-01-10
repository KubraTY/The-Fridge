import React, { useEffect, useContext } from "react";
import RecipeCard from "./RecipeCard";
import { SimpleGrid } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { RecipesContext } from "../components/contexts/RecipesContext";
import classes from '../styles/RecipeCard.module.css';

const SearchResults = () => {
  const { width } = useViewportSize();
  const { filteredRecipes } = useContext(RecipesContext);

  return (
    <div className="RecipesListPage">
      {filteredRecipes.length === 0 ? (
        <div>
          <p className={classes.noRecipe}>Sorry, we don't have recipes matching your search criteria.</p>
        </div>
      ) : (
        <SimpleGrid cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
          {filteredRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipeDetail/${recipe.id}`}>
              <RecipeCard
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              readyInMinutes={recipe.readyInMinutes} 
              servings={recipe.servings}
              dishTypes={recipe.dishTypes}
              diets={recipe.diets}
              />
            </Link>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default SearchResults;
