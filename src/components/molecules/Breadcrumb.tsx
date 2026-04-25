import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-wrap">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                {isLast || !item.href ? (
                  <span className="ml-1 text-sm font-medium text-slate-900 md:ml-2 line-clamp-1">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="ml-1 text-sm font-medium text-slate-600 hover:text-slate-900 md:ml-2 transition-colors line-clamp-1">
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
