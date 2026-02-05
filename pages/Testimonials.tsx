
import React from 'react';
import { Star, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-900 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">What Our Customers Say</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Real stories from families and businesses in Ratnagiri who trusted us with their most valuable possessions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="break-inside-avoid bg-brandGray p-8 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-200/50 group-hover:scale-110 transition-transform" />
                <div className="flex text-amber-400 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-primary-900">{t.name}</p>
                    <p className="text-sm text-gray-500 font-medium">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Feedback Banner */}
      <section className="py-20 bg-cta/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl">
            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-4">Did You Move With Us?</h2>
            <p className="text-lg text-gray-600 mb-10">We would love to hear about your experience. Your feedback helps us serve the Ratnagiri community better.</p>
            <button className="bg-primary-700 hover:bg-primary-800 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 mx-auto shadow-lg">
              <MessageSquare className="w-5 h-5" /> Write a Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
