import React from "react"
import "./styles.css"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="/images/reactlogo.png" className="nav-logo" alt="React" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

// Test II 