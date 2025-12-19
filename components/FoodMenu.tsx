
import React from 'react';
import { FoodItem } from '../types';
import { speakText } from '../services/audioService';

interface FoodMenuProps {
  items: FoodItem[];
}

const FoodMenu: React.FC<FoodMenuProps> = ({ items }) => {
  const handleItemClick = (item: FoodItem) => {
    speakText(item.name);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item)}
          className="group bg-orange-50 hover:bg-orange-100 p-4 rounded-2xl border-2 border-orange-200 flex flex-col items-center transition-all"
        >
          <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full mb-2 object-cover border-4 border-white shadow-sm group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold text-orange-800 comic-font">{item.name}</span>
          <span className="mt-1 font-bold text-red-500">¥ {item.price}</span>
        </button>
      ))}
    </div>
  );
};

export default FoodMenu;
