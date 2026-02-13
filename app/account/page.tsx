'use client';

import { FiUser, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-gray-800 mb-8 text-center">My Account</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
              <FiUser className="text-4xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-800">John Doe</h2>
              <p className="text-gray-600">Member since Feb 2026</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FiMail className="text-xl text-red-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">Email</p>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FiPhone className="text-xl text-red-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">Phone</p>
                <p className="text-gray-600">+233 XX XXX XXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FiMapPin className="text-xl text-red-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">Default Address</p>
                <p className="text-gray-600">Accra, North Legon</p>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">
            Edit Profile
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
