import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({meal}){
  return (
    <div className="card">
      <Link to={`/recipe/${meal.idMeal}`} style={{textDecoration:"none", color:"inherit"}}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="card-body">
          <h3 className="card-title">{meal.strMeal}</h3>
          <div className="card-sub">Category: {meal.strCategory || "—"}</div>
        </div>
      </Link>
    </div>
  );
}
