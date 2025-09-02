import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");

  const recipes = [
    { id: 1, title: "Chapati", category: "Bread", img: "https://images.unsplash.com/photo-1625937285929-2ad653d0773f" },
    { id: 2, title: "Mandazi", category: "Snack", img: "https://images.unsplash.com/photo-1617196039897-70fbb4b2f9c7" },
    { id: 3, title: "Kaimati", category: "Snack", img: "https://images.unsplash.com/photo-1679393310737-17ee316f52c5" },
    { id: 4, title: "Basic Cake", category: "Dessert", img: "https://images.unsplash.com/photo-1601979031629-0663d3437fd0" },
    { id: 5, title: "Mahamri", category: "Bread", img: "https://images.unsplash.com/photo-1617196039790-c34efbdf6a69" },
    { id: 6, title: "Beef Samosa", category: "Snack", img: "https://images.unsplash.com/photo-1604908176997-3d56b97f3c8f" },
    { id: 7, title: "Chicken Pie", category: "Snack", img: "https://images.unsplash.com/photo-1606744824164-1b5b2e7d1e1a" },
    { id: 8, title: "Homemade Pizza", category: "Bread", img: "https://images.unsplash.com/photo-1601924582971-bf8b9f5b0c91" },
    { id: 9, title: "Pilau", category: "Rice", img: "https://images.unsplash.com/photo-1625948397393-6ad72037d627" },
    { id: 10, title: "Chicken Biryani", category: "Rice", img: "https://images.unsplash.com/photo-1625948495926-1c6fba9b5e62" },
    { id: 11, title: "Vegetable Rice", category: "Rice", img: "https://images.unsplash.com/photo-1638199321560-8cddbfa493f3" },
    { id: 12, title: "Chicken Curry", category: "Stew", img: "https://images.unsplash.com/photo-1604908177522-040d07437e0f" },
    { id: 13, title: "Bhajia", category: "Snack", img: "https://images.unsplash.com/photo-1625948364948-01895d79042c" },
    { id: 14, title: "Chips", category: "Snack", img: "https://images.unsplash.com/photo-1617196039959-91e1430df6a4" },
    { id: 15, title: "Viazi Karai", category: "Snack", img: "https://images.unsplash.com/photo-1625948446340-15d537b3d8a7" },
    { id: 16, title: "Githeri", category: "Main", img: "https://images.unsplash.com/photo-1598514982582-f8949d2e5c8c" },
    { id: 17, title: "Mukimo", category: "Main", img: "https://images.unsplash.com/photo-1638199321625-8cddbfa495a2" },
    { id: 18, title: "Uji (Porridge)", category: "Drink", img: "https://images.unsplash.com/photo-1529973565458-6a69f47e8fbc" },
  ];

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>🍲 Kenyan & Homemade Recipes</h1>
      <p className="muted">Search or browse dishes</p>

      <div className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {filtered.map((r) => (
          <Link to={`/recipe/${r.id}`} key={r.id} className="card">
            <img src={r.img} alt={r.title} />
            <div className="card-body">
              <h3 className="card-title">{r.title}</h3>
              <p className="card-sub">{r.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
