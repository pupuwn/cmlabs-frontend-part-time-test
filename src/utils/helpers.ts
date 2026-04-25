import { MealDetail } from '../types/meal';

export interface ParsedIngredient {
  ingredient: string;
  measure: string;
}

export const extractIngredientsAndMeasures = (meal: MealDetail): ParsedIngredient[] => {
  const ingredients: ParsedIngredient[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredientName = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    // Sometimes the API returns empty strings or spaces instead of null
    if (ingredientName && ingredientName.trim() !== '') {
      ingredients.push({
        ingredient: ingredientName.trim(),
        measure: measure ? measure.trim() : '',
      });
    }
  }
  
  return ingredients;
};

export const getYouTubeVideoId = (url: string | null): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
};
