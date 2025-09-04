import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadDefaultRecipes();
  }, []);

  async function loadDefaultRecipes() {
    setError("");
    setLoading(true);
    try {
      
      const queries = ["chicken", "beef", "rice", "fish", "vegetable", "goat"];

      
      const requests = queries.map((q) =>
        fetch(`${API_BASE}/search.php?s=${encodeURIComponent(q)}`).then((res) =>
          res.json()
        )
      );

      const results = await Promise.all(requests);

      const allMeals = results.flatMap((r) => r.meals || []);

      const uniqueMeals = Array.from(
        new Map(allMeals.map((m) => [m.idMeal, m])).values()
      );

      setMeals(uniqueMeals);
    } catch (err) {
      setError("Failed to load recipes. Check your internet.");
    } finally {
      setLoading(false);
    }
  }

  async function fetchMeals(query) {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/search.php?s=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      setError("Failed to load recipes. Check your internet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">
        Find recipes with FlavorQuest
      </h1>
      <p className="text-gray-600 mb-4">Search by ingredient or dish name</p>

      <SearchBar onSearch={fetchMeals} loading={loading} />

      {loading && <Loading />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && <RecipeList meals={meals} />}
    </div>
  );
}
