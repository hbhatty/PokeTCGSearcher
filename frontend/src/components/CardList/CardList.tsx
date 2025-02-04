import { Card } from "../../types/types";

interface CardListProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
}

const CardList = ({ cards, onCardClick  }: CardListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col items-center cursor-pointer"
          onClick={() => onCardClick(card)}
        >
          <img
            src={card.imageUrl}
            alt={card.name}
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-lg font-medium">{card.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;