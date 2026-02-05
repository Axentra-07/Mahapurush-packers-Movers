
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brandGray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-primary-900 mb-6">Our Relocation Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From single items to complete industrial moves, we provide a full range of packing and moving solutions in Ratnagiri and across India.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((s) => (
              <div key={s.id} className="group flex flex-col bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all overflow-hidden h-full">
                <div className="h-64 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="bg-primary-50 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{s.title}</h3>
                  <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                    {s.shortDesc}
                  </p>
                  <Link 
                    to={`/services/${s.id}`} 
                    className="flex items-center gap-2 text-primary-700 font-bold hover:text-primary-500 transition-colors mt-auto"
                  >
                    View Details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">We Ensure Every Move is High Quality</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Expert Packing', 'Safe Transportation', 'On-Time Delivery', '24/7 Support'].map((f, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <ChevronRight className="w-8 h-8 text-cta" />
                </div>
                <span className="font-bold">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
