import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import recipes from "../data/recipes"; 

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;


    const localRecipe = recipes.find((r) => r.id.toString() === id);
    if (localRecipe) {
      setMeal(localRecipe);
      return;
    }

    fetchMeal(id);
  }, [id]);

  async function fetchMeal(mealId) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/lookup.php?i=${mealId}`);
      const data = await res.json();
      setMeal(data.meals ? data.meals[0] : null);
    } catch (e) {
      setError("Failed to load recipe details.");
    } finally {
      setLoading(false);
    }
  }

  function getIngredients(m) {
    if (!m) return [];
    if (m.ingredients) return m.ingredients; 

    const items = [];
    for (let i = 1; i <= 20; i++) {
      const ing = m[`strIngredient${i}`];
      const measure = m[`strMeasure${i}`];
      if (ing && ing.trim())
        items.push(`${measure ? measure : ""} ${ing}`.trim());
    }
    return items;
  }

  if (loading) return <Loading />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!meal) return <div className="center muted">Recipe not found</div>;

  const ingredients = getIngredients(meal);

  return (
    <div className="details">
      <div>
        <img
          className="detail-img"
          src={meal.strMealThumb || meal.image}
          alt={meal.strMeal || meal.name}
        />
        <div style={{ marginTop: 12 }} className="section">
          <h2>{meal.strMeal || meal.name}</h2>
          <p className="muted">
            {meal.strCategory || meal.category} • {meal.strArea || "Kenya"}
          </p>
        </div>

        <div style={{ marginTop: 12 }} className="section">
          <h3>Instructions</h3>
          <p style={{ whiteSpace: "pre-line" }}>
            {meal.strInstructions || meal.instructions}
          </p>
        </div>
      </div>

      <aside>
        <div className="section">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 12 }} className="section">
          <h3>More</h3>
          <p className="muted">Tags: {meal.strTags || meal.tags || "—"}</p>
          {meal.strSource && (
            <p style={{ marginTop: 8 }}>
              <a
                href={meal.strSource}
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </p>
          )}
          <p style={{ marginTop: 8 }}>
            <Link to="/">← Back to search</Link>
          </p>
        </div>
      </aside>
    </div>
  );
}
