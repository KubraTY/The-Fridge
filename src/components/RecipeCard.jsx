import React from "react";
import classes from '../styles/RecipeCard.module.css' 
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ id, title, calories, image, servings, remove }) => {
   const navigate = useNavigate()

  return (
    <div className={classes.container} onClick={(event) => {
        navigate(`recipes/${id}`)
    }}>
      <div>
        <img className={classes.img} src={image} alt={title} />
      </div>
      <div>
        <h2> {title} </h2>
      </div>
      <button className={classes.deleteButton} onClick={(event) => {
        event.stopPropagation
        remove()
    }}>
        Delete
      </button>
    </div>
  );
};

export default RecipeCard;