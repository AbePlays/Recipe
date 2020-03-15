import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.calories}>Calories = {Math.round(calories)}</p>
      <ul className={style.list}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <img src={image} alt="" className={style.image} />
    </div>
  );
};

export default Recipe;
