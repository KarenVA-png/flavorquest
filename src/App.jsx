import "./styles.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RecipeDetails from "./components/RecipeDetails";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="app">

      <Navbar
        onLogout={handleLogout}
        onLogin={handleLogin}
        isLoggedIn={isLoggedIn}
      />

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
                    favoriteCuisine: "chicken",
                  }}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </main>
    </div>
  );
}
