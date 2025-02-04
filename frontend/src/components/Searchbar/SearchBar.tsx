import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 mt-4">
      <input
        type="text"
        placeholder="Search for a pokemon card!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-80"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;