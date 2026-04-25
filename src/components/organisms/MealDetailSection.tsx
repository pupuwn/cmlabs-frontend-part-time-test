import React from 'react';
import Image from 'next/image';
import { MealDetail } from '@/types/meal';
import { extractIngredientsAndMeasures, getYouTubeVideoId } from '@/utils/helpers';

interface MealDetailSectionProps {
  meal: MealDetail;
}

export const MealDetailSection: React.FC<MealDetailSectionProps> = ({ meal }) => {
  const ingredients = extractIngredientsAndMeasures(meal);
  const youtubeId = getYouTubeVideoId(meal.strYoutube);

  return (
    <>
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 animate-fade-in-up">
        <div className="lg:col-span-7">
          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg bg-surface-variant">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-sm" data-icon="category">category</span>
                {meal.strCategory}
              </span>
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-secondary font-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-sm" data-icon="public">public</span>
                {meal.strArea}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h1 className="font-display text-display text-on-surface mb-4">{meal.strMeal}</h1>
          <p className="font-body-lg text-secondary mb-8">
            {meal.strInstructions.split('\n')[0] || 'A delicious recipe to prepare at home.'}
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-outline-variant text-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-1" data-icon="timer">timer</span>
              <p className="font-caption text-secondary">Total Time</p>
              <p className="font-label-md text-on-surface">45 Mins</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-outline-variant text-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-1" data-icon="restaurant">restaurant</span>
              <p className="font-caption text-secondary">Servings</p>
              <p className="font-label-md text-on-surface">4 People</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-outline-variant text-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-1" data-icon="bolt">bolt</span>
              <p className="font-caption text-secondary">Calories</p>
              <p className="font-label-md text-on-surface">540 kcal</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 bg-primary text-on-primary py-3 rounded-lg font-label-md flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer">
              <span className="material-symbols-outlined" data-icon="favorite" data-weight="fill">favorite</span>
              Save to Favorites
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-4 rounded-lg active:scale-95 transition-transform cursor-pointer">
              <span className="material-symbols-outlined" data-icon="share">share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Asymmetric Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        
        {/* Left Column: Ingredients */}
        <div className="lg:col-span-4">
          <section className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm sticky top-24">
            <h3 className="font-h3 text-h3 text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="shopping_basket">shopping_basket</span>
              Ingredients
            </h3>
            <ul className="space-y-4">
              {ingredients.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center pb-3 border-b border-surface-container last:border-0 last:pb-0">
                  <span className="font-body-md text-on-surface">{item.ingredient}</span>
                  <span className="font-label-md text-secondary text-right max-w-[50%]">{item.measure}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: Instructions & Video */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Chef's Tips Bento Box */}
          <div className="bg-primary-fixed/30 p-6 rounded-xl border border-primary-fixed-dim">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl" data-icon="lightbulb">lightbulb</span>
              <div>
                <h4 className="font-label-md text-on-primary-fixed mb-1">Chef&apos;s Secret Tip</h4>
                <p className="font-body-md text-on-surface-variant">
                  For the best flavor profile, prepare all your ingredients before turning on the stove. This concept, known as &quot;mise en place,&quot; ensures smooth cooking.
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <section className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-h3 text-h3 text-on-surface mb-8">Cooking Instructions</h3>
            <div className="space-y-10">
              {meal.strInstructions.split('\r\n').filter(Boolean).map((paragraph, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center font-h3">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-h3 text-on-surface mb-2">Step {idx + 1}</h4>
                    <p className="font-body-md text-secondary leading-relaxed">{paragraph}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Section */}
          {youtubeId && (
            <section className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm">
              <h3 className="font-h3 text-h3 text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-error" data-icon="smart_display">smart_display</span>
                Watch Technique
              </h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-neutral-900 shadow-md relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={`YouTube video tutorial for ${meal.strMeal}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 font-caption text-secondary italic text-center">Master the art of the perfect dish with this technique video.</p>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
