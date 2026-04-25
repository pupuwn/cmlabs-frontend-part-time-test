# cmlabs Front-end Developer Assessment

## Project Overview

This project is a responsive web application built for the cmlabs Indonesia Front-end Developer assessment. It fetches and displays meal recipes and ingredients from [TheMealDB API](https://www.themealdb.com/api.php).

### Features
- **Ingredients List**: View a complete list of ingredients and search through them.
- **Meals by Ingredient**: Click on an ingredient to see all meals that use it, complete with search functionality.
- **Meal Details**: View detailed information about a specific meal, including its category, tags, instructions, required ingredients with measurements, and a YouTube tutorial video if available.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Architecture**: Atomic Design Methodology

## Project Structure

The source code follows the Atomic Design pattern for components:
- `src/components/atoms`: Basic building blocks like Buttons, Badges, Inputs, Spinners.
- `src/components/molecules`: Combinations of atoms like SearchBars, Cards, Breadcrumbs.
- `src/components/organisms`: Complex sections like the Header, MealLists, and Detail sections.
- `src/app`: Next.js App Router pages (Ingredients List, Meal by Ingredient, Meal Detail).
- `src/services`: API fetching logic (`mealApi.ts`).
- `src/types`: TypeScript interfaces.
- `src/utils`: Helper functions.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd cmlabs-frontend-part-time-test
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment Info

This application can be easily deployed to Vercel, the recommended platform for Next.js applications.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Keep the default settings and click "Deploy".
6. Once deployed, Vercel will provide you with a live URL.
