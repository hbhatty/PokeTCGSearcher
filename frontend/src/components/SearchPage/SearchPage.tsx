import { useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import CardList from "../CardList/CardList";
import { pokemonCardSearch } from "../../services/api";
import { Card } from "../../types/types";
import CardModal from "../Modal/CardModal";


const SearchPage = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      const results = await pokemonCardSearch(query);
      setCards(results);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-red-600 text-white w-full py-6">
        <h1 className="text-center text-3xl font-bold">Pokémon TCG Finder</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <CardList cards={cards} onCardClick={handleCardClick} />
      {isModalOpen && <CardModal card={selectedCard} onClose={handleCloseModal} />}
    </div>
);
};

export default SearchPage;
