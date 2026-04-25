import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Meal } from '@/types/meal';

interface MealCardProps {
  meal: Meal;
}

export const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <Link href={`/meals/${meal.idMeal}`} className="block group">
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative h-32 md:h-48 overflow-hidden bg-slate-100 shrink-0">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          <button 
            className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center text-neutral-600 hover:text-orange-500 transition-colors cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <span className="material-symbols-outlined text-[12px] md:text-sm" data-icon="favorite">favorite</span>
          </button>
        </div>
        <div className="p-3 md:p-4 flex flex-col flex-1">
          <h3 className="font-h3 text-base md:text-[18px] mb-2 text-on-surface group-hover:text-orange-600 transition-colors line-clamp-2">
            {meal.strMeal}
          </h3>
          <div className="mt-auto">
            <div className="flex items-center justify-between mt-2 md:mt-4">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                <div className="flex items-center gap-1 text-neutral-500">
                  <span className="material-symbols-outlined text-[10px] md:text-xs" data-icon="schedule">schedule</span>
                  <span className="font-caption text-[10px] md:text-caption">25m</span>
                </div>
                <div className="flex items-center gap-1 text-neutral-500">
                  <span className="material-symbols-outlined text-[10px] md:text-xs text-orange-500" data-icon="star" data-weight="fill">star</span>
                  <span className="font-caption text-[10px] md:text-caption font-semibold text-on-surface">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
