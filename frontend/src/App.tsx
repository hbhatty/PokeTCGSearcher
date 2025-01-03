import { useState } from 'react'
import './App.css'
import SearchBar from './components/Searchbar/SearchBar'
const App = () => {
  const [count, setCount] = useState(0)

  const handleSearch = async (query: string) => {
    try {
      // const results = await searchPokemonCards(query);
      // setCards(results);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return (
    <>
    <SearchBar onSearch={handleSearch} />
    </>
  )
}

export default App
