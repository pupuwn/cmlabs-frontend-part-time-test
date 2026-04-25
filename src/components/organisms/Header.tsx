import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto font-plus-jakarta-sans text-sm font-medium">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-orange-500">CulinaryConfidant</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-neutral-600 hover:text-orange-500 transition-all duration-200">Home</Link>
            <Link href="/" className="text-orange-600 border-b-2 border-orange-500 pb-1">Ingredients</Link>
            <Link href="#" className="text-neutral-600 hover:text-orange-500 transition-all duration-200">Categories</Link>
            <Link href="#" className="text-neutral-600 hover:text-orange-500 transition-all duration-200">Favorites</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1.5 focus-within:border-primary transition-all">
            <span className="material-symbols-outlined text-neutral-400 mr-2" data-icon="search">search</span>
            <input type="text" placeholder="Search recipes..." className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none" />
          </div>
          <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-label-md active:scale-95 transition-transform">Sign In</button>
        </div>
      </div>
    </header>
  );
};
