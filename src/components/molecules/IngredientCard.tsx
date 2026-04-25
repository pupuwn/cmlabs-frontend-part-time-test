import React from 'react';
import Link from 'next/link';
import { Ingredient } from '@/types/meal';

interface IngredientCardProps {
  ingredient: Ingredient;
}

export const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
  const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`;
  
  return (
    <Link 
      href={`/ingredients/${ingredient.strIngredient}`}
      className="block bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="h-48 overflow-hidden relative p-6 bg-surface-container-lowest flex items-center justify-center">
        <img 
          alt={ingredient.strIngredient} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md" 
          src={imageUrl}
        />
        {ingredient.strType && (
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-caption text-caption text-neutral-800 shadow-sm border border-neutral-100">
            {ingredient.strType}
          </span>
        )}
      </div>
      <div className="p-md border-t border-neutral-100">
        <h3 className="font-h3 text-h3 text-neutral-900 mb-xs line-clamp-1 group-hover:text-primary transition-colors">{ingredient.strIngredient}</h3>
        <p className="font-body-md text-body-md text-neutral-500 mb-md line-clamp-2">
          {ingredient.strDescription || 'Explore delicious recipes featuring this ingredient.'}
        </p>
        <button className="w-full py-2 bg-neutral-50 text-orange-600 font-label-md text-label-md rounded-lg border border-orange-100 group-hover:bg-orange-50 transition-colors cursor-pointer">
          View Details
        </button>
      </div>
    </Link>
  );
};
