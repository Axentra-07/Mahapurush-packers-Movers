
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP } from '../constants';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-24 right-6 z-[60] group">
      <div className="absolute right-16 bottom-1 bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 text-sm font-bold text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </div>
      <a 
        href={`https://wa.me/${WHATSAPP}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all block"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingCTA;
