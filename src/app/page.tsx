import { getIngredients } from '@/services/mealApi';
import { IngredientList } from '@/components/organisms/IngredientList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingredients | CulinaryConfidant',
  description: 'Browse all available ingredients for your meals.',
};

export default async function Home() {
  const data = await getIngredients();
  const ingredients = data.meals || [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Ingredients background" className="w-full h-full object-cover brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuJ-fQ0eZozigCtpp5NdyJ5-EJhYFYy_nY4gxL22gkXq2qJ6XflRJMNsSz5_Yhaxu-TcNuIb11F9oDric2HqHpYMhxln3ucflbOT1_HbmZTNm3uAaqKqb6b_6pUDKaVLT0FtZgHB3svrL13f_DFjIeqAFww0kvJlKjfJfV9YSeAuN_6ETq1wwoLB81c25ALbfCtQue_TAtw5sDB62B3SI26LIXekJLwGDLBLduUQnaKMFqCE1DqmTGP-3yk32nJi0BYL2oLaYenHo"/>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-display text-white mb-4">Explore Ingredients</h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">Discover the building blocks of extraordinary flavor. Browse our curated library of premium ingredients and finding matching recipes.</p>
        </div>
      </section>

      <IngredientList initialIngredients={ingredients} />
    </main>
  );
}
