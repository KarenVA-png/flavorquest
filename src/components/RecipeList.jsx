import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({meals}){
  if(!meals || meals.length === 0) return <div className="center muted">No results found</div>;
  return (
    <div className="grid">
      {meals.map(m=> <RecipeCard key={m.idMeal} meal={m} />)}
    </div>
  );
}
