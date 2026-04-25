export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface MealDetail {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  [key: string]: string | null; // For strIngredient1..20 and strMeasure1..20
}

export interface IngredientsResponse {
  meals: Ingredient[] | null;
}

export interface MealsResponse {
  meals: Meal[] | null;
}

export interface MealDetailResponse {
  meals: MealDetail[] | null;
}
