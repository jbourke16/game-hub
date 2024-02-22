import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';


function Genres() {
    
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY
    
    const fetchGenres = async () => {
        const res = await axios(`https://api.rawg.io/api/games?key=${apiKey}&genres=${genres}`
        );
        setGenres(res.data.results);
    }
    fetchGenres();
  }, []);

  return (
    <div className="genres">
        <h1>Genres</h1>

    </div>
  )
}

export default Genres