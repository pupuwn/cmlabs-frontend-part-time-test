'use client';

import React, { useState, useMemo } from 'react';
import { Meal } from '@/types/meal';
import { MealCard } from '../molecules/MealCard';

interface MealListProps {
  initialMeals: Meal[];
  ingredientName: string;
}

export const MealList: React.FC<MealListProps> = ({ initialMeals, ingredientName }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMeals = useMemo(() => {
    if (!searchQuery.trim()) return initialMeals;
    
    const lowerQuery = searchQuery.toLowerCase();
    return initialMeals.filter(meal => 
      meal.strMeal.toLowerCase().includes(lowerQuery)
    );
  }, [initialMeals, searchQuery]);

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <h1 className="font-h1 text-h1 text-on-surface">Meals with {ingredientName}</h1>
          <p className="font-body-md text-body-md text-secondary max-w-2xl">Discover a curated collection of precision-engineered recipes featuring premium {ingredientName.toLowerCase()}, from slow-roasted classics to modern fast-sear favorites.</p>
        </div>
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" data-icon="search">search</span>
          <input 
            className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl font-body-md text-body-md focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50/50 transition-all shadow-sm" 
            placeholder={`Search ${ingredientName.toLowerCase()} recipes...`} 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="px-4 py-1.5 bg-orange-50 text-orange-700 font-label-md text-label-md rounded-full border border-orange-200">All Types</button>
        <button className="px-4 py-1.5 bg-neutral-100 text-neutral-700 font-label-md text-label-md rounded-full border border-neutral-200 hover:bg-neutral-200 transition-colors">Steaks</button>
        <button className="px-4 py-1.5 bg-neutral-100 text-neutral-700 font-label-md text-label-md rounded-full border border-neutral-200 hover:bg-neutral-200 transition-colors">Stews</button>
        <button className="px-4 py-1.5 bg-neutral-100 text-neutral-700 font-label-md text-label-md rounded-full border border-neutral-200 hover:bg-neutral-200 transition-colors">Under 30 Mins</button>
        <button className="px-4 py-1.5 bg-neutral-100 text-neutral-700 font-label-md text-label-md rounded-full border border-neutral-200 hover:bg-neutral-200 transition-colors">High Protein</button>
      </div>

      {/* Meal Grid */}
      {filteredMeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <div className="col-span-full py-20 text-center">
          <span className="material-symbols-outlined text-6xl text-neutral-300 mb-4" data-icon="restaurant_menu">restaurant_menu</span>
          <h3 className="font-h3 text-h3 text-on-surface mb-2">No specific meals found</h3>
          <p className="font-body-md text-body-md text-secondary">Try adjusting your search filters or exploring a different cut.</p>
          <button 
            className="mt-6 px-6 py-2 border-2 border-orange-500 text-orange-500 font-label-md text-label-md rounded-lg hover:bg-orange-50 transition-colors"
            onClick={() => setSearchQuery('')}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </>
  );
};
