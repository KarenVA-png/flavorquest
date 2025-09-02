import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="header">
      <div className="brand">FlavorQuest</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about" style={{marginLeft:12}}>About</Link>
      </nav>
    </header>
  );
}
