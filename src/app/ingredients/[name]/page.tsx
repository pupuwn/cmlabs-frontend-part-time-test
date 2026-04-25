import { getMealsByIngredient } from '@/services/mealApi';
import { MealList } from '@/components/organisms/MealList';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const decodedName = decodeURIComponent(resolvedParams.name);
  return {
    title: `Meals with ${decodedName} | CulinaryConfidant`,
    description: `Discover all meals that contain ${decodedName}.`,
  };
}

export default async function IngredientDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const decodedName = decodeURIComponent(resolvedParams.name);
  const data = await getMealsByIngredient(decodedName);
  const meals = data.meals || [];

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <nav className="flex items-center gap-2 mb-6">
        <Link href="/" className="font-caption text-caption text-neutral-500 hover:text-orange-500">Home</Link>
        <span className="material-symbols-outlined text-sm text-neutral-400" data-icon="chevron_right">chevron_right</span>
        <Link href="/" className="font-caption text-caption text-neutral-500 hover:text-orange-500">Ingredients</Link>
        <span className="material-symbols-outlined text-sm text-neutral-400" data-icon="chevron_right">chevron_right</span>
        <span className="font-caption text-caption text-orange-600 font-semibold">{decodedName}</span>
      </nav>
      <MealList initialMeals={meals} ingredientName={decodedName} />
    </main>
  );
}
