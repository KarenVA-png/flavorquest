import "./styles.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import RecipeDetails from "./components/RecipeDetails";
import Profile from "./components/Profile";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile
                  user={{
                    name: "Karen",
                    email: "karen@example.com",
                    favoriteCuisine: "Kenyan"
                  }}
                  onLogout={() => setIsLoggedIn(false)}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
        <div style={{ marginTop: "20px" }}>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </div>
      </main>
    </div>
  );
}
