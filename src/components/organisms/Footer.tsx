import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto font-plus-jakarta-sans text-xs">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">CulinaryConfidant</h4>
          <p className="text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} CulinaryConfidant. Precision in every plate.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100">Privacy Policy</Link>
          <Link href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100">Terms of Service</Link>
          <Link href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100">Contact Us</Link>
          <Link href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-orange-500 transition-colors opacity-80 hover:opacity-100">Careers</Link>
        </div>
      </div>
    </footer>
  );
};
