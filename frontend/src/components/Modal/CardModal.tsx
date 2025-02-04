import React from 'react';
import { Card } from '../../types/types';

interface CardModalProps {
  card: Card | null;
  onClose: () => void;
}

const CardModal = ({ card, onClose }: CardModalProps) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <img
          src={card.imageUrl}
          alt={card.name}
          className="w-full h-64 object-contain mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{card.name}</h2>
        <p className="text-gray-700">ID: {card.id}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CardModal;