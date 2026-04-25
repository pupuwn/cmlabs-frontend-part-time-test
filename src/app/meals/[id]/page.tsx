import { getMealDetail } from '@/services/mealApi';
import { MealDetailSection } from '@/components/organisms/MealDetailSection';
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getMealDetail(resolvedParams.id);
  const meal = data.meals?.[0];

  if (!meal) {
    return { title: 'Meal Not Found | cmlabs Assessment' };
  }

  return {
    title: `${meal.strMeal} Recipe | cmlabs Assessment`,
    description: `Learn how to cook ${meal.strMeal}. ${meal.strCategory} recipe from ${meal.strArea}.`,
  };
}

export default async function MealDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const data = await getMealDetail(resolvedParams.id);
  const meal = data.meals?.[0];

  if (!meal) {
    notFound();
  }

  const breadcrumbItems = [
    { label: meal.strMeal } // Ideally we'd have the ingredient here, but API doesn't provide the "from" context easily. A simple breadcrumb is fine.
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <MealDetailSection meal={meal} />
    </div>
  );
}
