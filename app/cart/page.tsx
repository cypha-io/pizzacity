'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pepperoni Pizza', price: 45, quantity: 2, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80' },
    { id: 2, name: 'Fried Chicken', price: 35, quantity: 1, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80' },
    { id: 3, name: 'French Fries', price: 15, quantity: 3, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 10;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 mb-20 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-black text-gray-800 mb-4 md:mb-8 text-center">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3 md:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-md">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-sm md:text-lg text-gray-800 truncate">{item.name}</h3>
                      <p className="text-red-600 font-bold text-sm md:text-base">GH₵{item.price}</p>
                      
                      {/* Mobile: Quantity controls below name */}
                      <div className="flex items-center gap-2 mt-2 md:hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)} 
                          className="w-8 h-8 bg-gray-100 active:bg-gray-200 rounded-full flex items-center justify-center"
                        >
                          <FiMinus className="text-gray-600 text-sm" />
                        </button>
                        <span className="font-black text-base w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)} 
                          className="w-8 h-8 bg-gray-100 active:bg-gray-200 rounded-full flex items-center justify-center"
                        >
                          <FiPlus className="text-gray-600 text-sm" />
                        </button>
                      </div>
                    </div>

                    {/* Desktop: Quantity controls on the right */}
                    <div className="hidden md:flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                      >
                        <FiMinus className="text-gray-600" />
                      </button>
                      <span className="font-black text-lg w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                      >
                        <FiPlus className="text-gray-600" />
                      </button>
                    </div>

                    {/* Delete button */}
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className="w-9 h-9 md:w-10 md:h-10 bg-red-50 active:bg-red-100 md:hover:bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <FiTrash2 className="text-red-600 text-sm md:text-base" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md h-fit lg:sticky lg:top-24">
              <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-4 md:mb-6">Order Summary</h2>
              
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Subtotal</span>
                  <span className="font-bold text-sm md:text-base">GH₵{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Delivery</span>
                  <span className="font-bold text-sm md:text-base">GH₵{delivery}</span>
                </div>
                <div className="border-t pt-2 md:pt-3 flex justify-between">
                  <span className="font-black text-base md:text-lg">Total</span>
                  <span className="font-black text-lg md:text-xl text-red-600">GH₵{total}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 md:py-4 rounded-lg md:rounded-xl font-black text-base md:text-lg hover:from-red-500 hover:to-red-400 active:scale-95 transition-all">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 md:py-20">
            <p className="text-xl md:text-2xl text-gray-500 mb-4 md:mb-6">Your cart is empty</p>
            <Link href="/" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700">
              Start Shopping
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
