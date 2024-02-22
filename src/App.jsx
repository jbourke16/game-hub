import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";
import Genres from "./Genres";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearchTerm] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY

  const fetchGame = async () => {
    const res = await axios(
      `https://api.rawg.io/api/games?key=${apiKey}&search=${search}`
    );

    //console.log(res.data.results);
    setGames(res.data.results);

    console.log(games)
  };

  // useEffect(() => {
  //   fetchGame();
  // }, []);

  function handleSearchSubmit(e){
    e.preventDefault()
    fetchGame()
    setSearchTerm("")
  }

  return (
    <div className="game-search">
      <nav>
        <h1>Game Hub</h1>

        <ul className="nav-bar-li">
          <Nav />
            <Routes>
              <Route path='/' element={<p></p>} />
              <Route path='/Genres' element={<p>Genres</p>} />
            </Routes>
        </ul>
      </nav>

      <Search setSearchTerm={setSearchTerm} search={search} handleSearchSubmit={handleSearchSubmit}/>
      <div className="games-container">
      {games.map((game, i) => (
        <div className="game-results" key={i}>
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}/5 ⭐️</p>
          <img src={game.background_image} alt="" />
        </div>
      ))}
      </div>

      <footer>
        <a href="https://rawg.io/apidocs">Rawg.io</a>
      </footer>
    </div>
  );
}

export default App;
