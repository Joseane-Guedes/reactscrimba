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
//Challenge 1
 */

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Footer from "./components/Footer/Footer"
import './styles.css'

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

