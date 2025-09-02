import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export default function Home(){
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=>{
    fetchMeals("chicken");
  },[]);

  async function fetchMeals(query){
    setError("");
    setLoading(true);
    try{
      const res = await fetch(`${API_BASE}/search.php?s=${encodeURIComponent(query)}`);
      const data = await res.json();
      setMeals(data.meals || []);
    }catch(err){
      setError("Failed to load recipes. Check your internet.");
    }finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Find recipes with FlavorQuest</h1>
      <p className="muted">Search by ingredient or dish name</p>

      <SearchBar onSearch={fetchMeals} loading={loading} />

      {loading && <Loading />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && <RecipeList meals={meals} />}
    </div>
  );
}
