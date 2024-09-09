import { Dispatch, SetStateAction } from 'react';

interface ActiveFilters {
  category: string;
  rating: number;
  price: number;
}

interface HorizontalFilterProps {
  activeFilters: ActiveFilters;
  setActiveFilters: Dispatch<SetStateAction<ActiveFilters>>;
}

export default function HorizontalFilter({ activeFilters, setActiveFilters }: HorizontalFilterProps) {
  const categories = ['Todos', 'Restaurantes', 'Hoteles', 'Tiendas'];

  const handleClick = (category: string) => {
    setActiveFilters(prev => ({
      ...prev,
      category: category === 'Todos' ? '' : category.toLowerCase(),
    }));
  };

  return (
    <div className="flex gap-2 p-4 bg-gray-100 overflow-x-auto whitespace-nowrap border-b border-gray-300">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out ${activeFilters.category === (category === 'Todos' ? '' : category.toLowerCase())
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
