<h1>Game Hub</h1>

Welcome to Game Hub! This site allows you to search over 350k+ games, using the <a href="https://api.rawg.io/docs/">Rawg.io API</a>.

Game Hub lists the game title, ratings, release date, and studio. To find a game, type in your search term into the "Find Game" search bar. All relevant games will appear once you hit search.

<h2>Making Game Hub<h2>

<img src="Game Hub.png"/>

<h3>React</h3>

React and its functionality, such as React icons (downloadable), functions, and components were used to build Game Hub. To fetch requests from Rawg.io and pull it into the search page, the following React JS was composed:

```function App() {
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
}

  function handleSearchSubmit(e){
    e.preventDefault()
    fetchGame()
    setSearchTerm("")
  }
  ```

  The above React code calls game data from Rawg.io and allows users to input any search term, resulting in a list of any relevant games.

  When making the hamburger menu, an icon was downloaded from Netlify and the following code was implemented in the Nav component.

  ```
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)
  return (
    <div className="nav-bar">
      <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
          {isOpen === true ?
          
          (<nav><ul>
            <li>Home<Link to={'/'} Home /></li>
            <li>About<Link to={'/About'} About /></li>
            <li>Genres<Link to={'/Genres'} Genres /></li>
          </ul></nav>)
          });
```
The above code signals when a user clicks on the hamburger menu, which displays different links, and closes back up once the user clicks on it again.

<h4>Resources</h4>

<ul>
    <li><a href="https://api.rawg.io/docs/">Rawg.io API</a></li>
    <li><a href="https://hamburger-react.netlify.app/">Netlify</a> (for Hamburger menu animation/icon)</li>
    <li><a href="https://cssgradient.io/">CSSGradient.io</a></li>
    <li>Axios</li>
</ul>