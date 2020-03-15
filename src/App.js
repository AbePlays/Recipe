import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "88469975";
  const APP_KEY = "207f13595dac5dcd41b76adb5bb09176";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-for,">
        <input type="text" className="search-bar" id="" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
