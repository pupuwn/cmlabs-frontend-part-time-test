import React from 'react';

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ containerClassName = "", ...props }) => {
  return (
    <div className={`relative flex-1 w-full ${containerClassName}`}>
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">search</span>
      <input 
        className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all font-body-md text-on-surface" 
        type="search"
        {...props}
      />
    </div>
  );
};
