
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import { SERVICES, PHONE } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-24">
      {/* Service Hero */}
      <section className="relative h-[60vh] flex items-center bg-gray-900">
        <img src={service.image} className="absolute inset-0 w-full h-full object-cover opacity-40" alt={service.title} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-flex items-center gap-2 bg-cta text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            {service.icon} Specialized Service
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 max-w-3xl leading-tight">
            {service.title} in Ratnagiri
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                {service.fullDesc}
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">Why Choose This Service?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 bg-brandGray p-6 rounded-2xl border border-gray-100 group hover:border-primary-200 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="font-bold text-primary-900">{b}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8 text-center bg-brandGray py-6 rounded-t-3xl">Our 5-Step Professional Process</h2>
              <div className="bg-brandGray rounded-b-3xl p-10 grid grid-cols-1 md:grid-cols-5 gap-4 relative overflow-hidden">
                {service.process.map((step, i) => (
                  <div key={i} className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-primary-600 text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl border-4 border-white shadow-lg">
                      {i + 1}
                    </div>
                    <p className="font-bold text-primary-900 text-sm">{step}</p>
                    {i < service.process.length - 1 && (
                      <div className="hidden md:block absolute top-6 -right-1/2 w-full h-[2px] bg-primary-200 -z-10"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Service FAQ */}
              <div className="mt-20">
                <h2 className="text-3xl font-heading font-bold text-primary-900 mb-10 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary-600" /> Service FAQs
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-white border-l-4 border-primary-600 p-6 shadow-sm rounded-r-2xl">
                      <p className="font-bold text-primary-900 mb-2">Q: {faq.q}</p>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-8">
              <div className="bg-primary-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Ready to Book?</h3>
                  <p className="text-primary-100 mb-8 leading-relaxed">Get an instant quote and plan your move with experts.</p>
                  <Link to="/contact" className="w-full bg-cta hover:bg-cta-hover py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group mb-4">
                    Book Now Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href={`tel:${PHONE}`} className="w-full bg-white/10 hover:bg-white/20 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-sm border border-white/20">
                    <Phone className="w-4 h-4" /> Call: {PHONE}
                  </a>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-800 rounded-full blur-3xl opacity-50"></div>
              </div>

              <div className="bg-brandGray p-8 rounded-3xl border border-gray-200">
                <h4 className="font-bold text-primary-900 mb-6">Other Shifting Services</h4>
                <div className="space-y-3">
                  {SERVICES.filter(s => s.id !== id).map(s => (
                    <Link key={s.id} to={`/services/${s.id}`} className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-primary-50 transition-colors group">
                      <span className="text-sm font-medium text-gray-700">{s.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for dynamic icons/arrows
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default ServiceDetail;
