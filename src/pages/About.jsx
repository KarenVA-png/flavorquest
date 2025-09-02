import React from "react";

export default function About(){
  return (
    <div>
      <h1>About FlavorQuest</h1>
      <p className="muted">FlavorQuest helps you find recipes by ingredient or dish name using TheMealDB free API.</p>

      <div className="section" style={{marginTop:16}}>
        <h3>How to use</h3>
        <ol>
          <li>Type an ingredient or dish into the search box (e.g. "chicken", "pasta").</li>
          <li>Click a recipe card to see ingredients and instructions.</li>
          <li>Follow the steps and enjoy your meal!</li>
        </ol>
      </div>
    </div>
  );
}
