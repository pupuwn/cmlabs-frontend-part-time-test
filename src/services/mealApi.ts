import { IngredientsResponse, MealDetailResponse, MealsResponse } from '../types/meal';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getIngredients = async (): Promise<IngredientsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/list.php?i=list`);
    if (!response.ok) {
      throw new Error('Failed to fetch ingredients');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return { meals: [] };
  }
};

export const getMealsByIngredient = async (ingredient: string): Promise<MealsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch meals for ingredient: ${ingredient}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching meals for ingredient ${ingredient}:`, error);
    return { meals: [] };
  }
};

export const getMealDetail = async (id: string): Promise<MealDetailResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch meal detail for id: ${id}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching meal detail for id ${id}:`, error);
    return { meals: [] };
  }
};
