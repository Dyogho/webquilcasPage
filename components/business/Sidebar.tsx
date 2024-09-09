import { Dispatch, SetStateAction, useState } from 'react';

interface ActiveFilters {
  category: string[];
  rating: number;
  price: number;
}

interface SidebarProps {
  activeFilters: ActiveFilters;
  setActiveFilters: Dispatch<SetStateAction<ActiveFilters>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ activeFilters, setActiveFilters, searchTerm, setSearchTerm }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const updateRating = (rating: number) => {
    setActiveFilters(prev => ({ ...prev, rating }));
  };

  const updatePrice = (price: number) => {
    setActiveFilters(prev => ({ ...prev, price }));
  };

  const toggleCategory = (category: string) => {
    setActiveFilters(prev => {
      const newCategories = prev.category.includes(category)
        ? prev.category.filter(cat => cat !== category)
        : [...prev.category, category];
      return { ...prev, category: newCategories };
    });
  };

  return (
    <div className={`fixed inset-0 md:relative bg-gray-100 p-4 md:p-5 shadow-lg rounded-lg md:rounded-none transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button
        className="md:hidden absolute top-4 right-4 p-2 text-gray-800 bg-gray-200 rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Cerrar' : 'Abrir'}
      </button>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filtros</h2>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Buscar negocios..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Categorías</h3>
        {['restaurant', 'hotel', 'shop'].map(category => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              checked={activeFilters.category.includes(category)}
              onChange={() => toggleCategory(category)}
              className="mr-2"
            />
            <label htmlFor={category} className="text-gray-700 capitalize text-sm">{category}</label>
          </div>
        ))}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Precio</h3>
      {[1, 2, 3, 4].map((price) => (
        <span
          key={price}
          className={`cursor-pointer text-xl ${price <= activeFilters.price ? 'text-green-500' : 'text-gray-300'} hover:text-green-600 transition-colors`}
          onClick={() => updatePrice(price)}
        >
          $
        </span>
      ))}
    </div>
  );
}
