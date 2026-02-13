'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HistoryPage() {
  const orders = [
    { id: '#12345', date: '2026-02-10', items: 'Pepperoni Pizza, Fried Chicken', total: 'GH₵125', status: 'Delivered' },
    { id: '#12344', date: '2026-02-08', items: 'BBQ Wings, French Fries', total: 'GH₵75', status: 'Delivered' },
    { id: '#12343', date: '2026-02-05', items: 'Family Package', total: 'GH₵160', status: 'Cancelled' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-gray-800 mb-8 text-center">Order History</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-black text-xl text-gray-800 mb-2">Order {order.id}</h3>
                  <p className="text-gray-600 mb-1">{order.date}</p>
                  <p className="text-gray-800">{order.items}</p>
                </div>
                
                <div className="text-right">
                  <p className="font-black text-2xl text-red-600 mb-2">{order.total}</p>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
