'use client';

import Link from 'next/link';

const categories = [
  { 
    name: 'Pizza', 
    image: '🍕',
    href: '/menu/pizza' 
  },
  { 
    name: 'Chicken', 
    image: '🍗',
    href: '/menu/chicken' 
  },
  { 
    name: 'Sides', 
    image: '🍔',
    href: '/menu/sides' 
  },
  { 
    name: 'Packages', 
    image: '📦',
    href: '/menu/packages' 
  },
  { 
    name: 'Drinks', 
    image: '🥤',
    href: '/menu/drinks' 
  },
  { 
    name: 'Desserts', 
    image: '🍰',
    href: '/menu/desserts' 
  },
];

interface CategoriesProps {
  activeCategory?: string;
}

export default function Categories({ activeCategory }: CategoriesProps) {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-3 px-6 pb-2 scrollbar-hide scroll-smooth">
          {categories.map((category) => {
            const isActive = activeCategory?.toLowerCase() === category.name.toLowerCase();
            return (
              <Link 
                key={category.name}
                href={category.href}
                className="group flex-shrink-0"
              >
                <div className={`rounded-xl p-3 hover:scale-105 transition-transform shadow-md hover:shadow-lg flex items-center gap-2 min-w-[140px] ${
                  isActive 
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' 
                    : 'bg-gradient-to-br from-red-500 to-red-600'
                }`}>
                  <div className="text-2xl flex-shrink-0">
                    {category.image}
                  </div>
                  <h3 className={`text-base font-black whitespace-nowrap ${
                    isActive ? 'text-gray-900' : 'text-white'
                  }`}>{category.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
