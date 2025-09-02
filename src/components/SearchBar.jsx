import React, {useState} from "react";

export default function SearchBar({onSearch, loading}){
  const [q, setQ] = useState("");

  const submit = (e) => {
    e?.preventDefault();
    if(!q.trim()) return onSearch("chicken"); // default sample
    onSearch(q);
  };

  return (
    <form className="search-row" onSubmit={submit}>
      <input
        className="search-input"
        placeholder="Search recipes by ingredient or name (e.g. chicken, pasta)"
        value={q}
        onChange={(e)=>setQ(e.target.value)}
      />
      <button className="btn primary" type="submit" disabled={loading}>
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
