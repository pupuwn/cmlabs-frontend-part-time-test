'use client';

import React, { useState, useMemo } from 'react';
import { Ingredient } from '@/types/meal';
import { SearchBar } from '../molecules/SearchBar';
import { IngredientCard } from '../molecules/IngredientCard';

interface IngredientListProps {
  initialIngredients: Ingredient[];
}

export const IngredientList: React.FC<IngredientListProps> = ({ initialIngredients }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIngredients = useMemo(() => {
    if (!searchQuery.trim()) return initialIngredients;
    
    const lowerQuery = searchQuery.toLowerCase();
    return initialIngredients.filter(ingredient => 
      ingredient.strIngredient.toLowerCase().includes(lowerQuery)
    );
  }, [initialIngredients, searchQuery]);

  // Dummy categories just for UI demonstration as in the template
  const categories = ['All Ingredients', 'Vegetables', 'Fruits', 'Proteins', 'Grains', 'Spices', 'Dairy'];

  return (
    <>
      {/* Search & Filter Controls */}
      <section className="max-w-7xl mx-auto px-6 py-xl">
        <div className="bg-white p-md rounded-xl shadow-sm border border-neutral-200 flex flex-col md:flex-row gap-4 items-center">
          <SearchBar 
            placeholder="Search ingredients..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="flex items-center gap-2 px-6 py-3 border border-neutral-200 rounded-lg font-label-md text-label-md text-neutral-700 hover:bg-neutral-50 active:scale-95 transition-all w-full md:w-auto justify-center">
            <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
            Filter
          </button>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-lg">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat, idx) => (
            <span 
              key={cat} 
              className={`px-6 py-2 rounded-full font-label-md text-label-md cursor-pointer whitespace-nowrap transition-colors ${
                idx === 0 
                  ? 'bg-primary-container text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-xxl">
        {filteredIngredients.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg">
            {filteredIngredients.map((ingredient) => (
              <IngredientCard key={ingredient.idIngredient} ingredient={ingredient} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-6 bg-white rounded-xl shadow-sm border border-neutral-200 max-w-md mx-auto mt-8">
            <span className="material-symbols-outlined text-5xl text-neutral-300 mb-4">search_off</span>
            <h3 className="font-h3 text-h3 text-neutral-900 mb-2">No ingredients found</h3>
            <p className="font-body-md text-body-md text-neutral-500">Try adjusting your search term to find what you&apos;re looking for.</p>
          </div>
        )}
      </section>

      {/* Pagination (UI Only) */}
      <section className="max-w-7xl mx-auto px-6 pb-xxl flex justify-center">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-400 hover:bg-neutral-50 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-container text-white font-label-md">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors font-label-md">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors font-label-md">3</button>
          <span className="px-2 text-neutral-400">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors font-label-md">12</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-400 hover:bg-neutral-50 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </>
  );
};
