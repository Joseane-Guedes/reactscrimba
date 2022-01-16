/* import React from "react";
import ReactDOM from "react-dom";

function Page() {
  return (
    <div>
      <img src="/images/reactlogo.png" width="50" alt="React" />
      <h1>  ⚛️ Fun facts about React </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
 */
//Challenge 1

import React from "react";
import ReactDOM from "react-dom";
import './styles.css'


function Header() {
  return (
    <header>
      <nav >
        <img src="/images/reactlogo.png"  alt="React" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>@ 2022 JosieCodes development. All rights reserved</small>
    </footer>
  );
}

function MainContent() {
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li> React is a popular library with an easier learning curve. </li>
        <li>
          React allows you to have a stronger opinion on how the code should be
          organized.
        </li>
      </ol>
    </>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
