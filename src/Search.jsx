import React from 'react'

function Search({search, setSearchTerm, handleSearchSubmit}) {
  return (
    <div className="search-section">
    <form className="search-bar" onSubmit={handleSearchSubmit}>
        <label htmlFor="search">Find Games</label>
        <input id="search" name="search" type="text" value={search} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button>Search</button>
    </form>
    </div>
  )
}

export default Search