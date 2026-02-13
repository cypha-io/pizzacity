'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiShoppingCart } from 'react-icons/fi';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const allProducts = [
    { id: 1, name: 'Pepperoni Pizza', price: 'GH₵45', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80', category: 'Pizza' },
    { id: 2, name: 'Fried Chicken', price: 'GH₵35', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80', category: 'Chicken' },
    { id: 3, name: 'BBQ Wings', price: 'GH₵40', image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&q=80', category: 'Chicken' },
    { id: 4, name: 'Margherita Pizza', price: 'GH₵42', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', category: 'Pizza' },
    { id: 5, name: 'Chicken Burger', price: 'GH₵30', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', category: 'Sides' },
    { id: 6, name: 'French Fries', price: 'GH₵15', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80', category: 'Sides' },
  ];

  const filteredProducts = searchQuery
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <div className="mb-12">
          <h1 className="text-2xl md:text-4xl font-black text-gray-800 mb-4 md:mb-6 text-center">Search Menu</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />
            <input
              type="text"
              placeholder="Search for pizza, chicken, sides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-gray-200 focus:border-red-600 focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* Results */}
        {searchQuery && (
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-6">
              {filteredProducts.length} Results for &quot;{searchQuery}&quot;
            </h2>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="cursor-pointer hover:scale-105 transition-transform">
                    <div className="relative h-40 bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-3 group">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                      <button className="absolute top-2 right-2 w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg">
                        <FiShoppingCart className="text-gray-900 text-lg" />
                      </button>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-gray-800 text-sm mb-2">{product.name}</h3>
                      <div className="bg-red-600 rounded-lg px-3 py-1.5 inline-block">
                        <p className="text-white font-black text-sm">{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">No results found for &quot;{searchQuery}&quot;</p>
              </div>
            )}
          </div>
        )}

        {!searchQuery && (
          <div className="text-center py-20">
            <FiSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">Start typing to search our menu</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
