import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { isLoggedIn } from "./services/authService";
import Login from "./components/Login/Login";
import './App.css'
import SearchBar from './components/Searchbar/SearchBar'
import CardList from './components/CardList/CardList';
import { pokemonCardSearch } from "./services/api";

interface Card {
  id: string;
  name: string;
  imageUrl: string;
}

const App = () => {  

  const [cards, setCards] = useState<Card[]>([]);
  const handleSearch = async (query: string) => {
    try {
      const results = await pokemonCardSearch(query);
      setCards(results);
      console.log(results)
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Public route for login */}
        <Route path="/login" element={<Login />} />

        {/* Protected route for search functionality */}
        <Route
          path="/"
          element={
            isLoggedIn() ? (
              <div className="min-h-screen bg-gray-100 flex flex-col items-center">
                <header className="bg-red-600 text-white w-full py-6">
                  <h1 className="text-center text-3xl font-bold ">Pokémon TCG Finder</h1>
                </header>
                <SearchBar onSearch={handleSearch} />
                <CardList cards={cards} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App
