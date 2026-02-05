
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Star, CheckCircle2, MessageSquare, Lightbulb } from 'lucide-react';
import { SERVICES, CORE_BENEFITS, TESTIMONIALS, GENERAL_FAQS, PHONE } from '../constants';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4246106/pexels-photo-4246106.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            className="w-full h-full object-cover saturate-[1.15] brightness-[1.05]" 
            alt="Professional Home Relocation and Packing"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-500 px-4 py-2 rounded-full font-bold text-sm mb-8 animate-fade-in shadow-sm border border-primary-200/50">
              <CheckCircle2 className="w-4 h-4 text-cta" /> Ratnagiri's Premier Relocation Experts
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-primary-500 leading-tight mb-6 tracking-tight">
              Relocate with <span className="text-cta">Ease & Trust</span>
            </h1>
            <p className="text-xl text-textMuted mb-10 leading-relaxed max-w-xl font-medium">
              We provide premium, damage-free packing and moving services for homes, offices, and vehicles across Maharashtra and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-cta hover:bg-cta-hover text-primary-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-cta/30 hover:scale-105 transition-all text-center">
                Get Your Free Quote
              </Link>
              <a href={`tel:${PHONE}`} className="bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-10 py-5 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5 text-cta" /> Call Now
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[11, 12, 13, 14].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Client" />
                ))}
              </div>
              <div>
                <div className="flex text-cta">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm font-bold text-textMuted">500+ Happy Families Moved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cta font-bold uppercase tracking-widest text-sm">Our Excellence</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-500 mt-4 mb-6">Relocation Made Simple</h2>
            <p className="text-lg text-textMuted font-medium">
              We understand that every item carries a memory. That's why we handle every box with the same care we would give our own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-brandGray hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-cta/20 flex flex-col items-start">
                <div className="mb-8 p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform group-hover:bg-primary-500 group-hover:text-white text-accent">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-500 mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-textMuted leading-relaxed text-base font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Tips (AI/SEO Optimized Section) */}
      <section className="py-24 bg-brandGray border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="bg-primary-500 text-cta w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-primary-500 mb-6">Pro Tips for a Stress-Free Move</h2>
              <p className="text-lg text-textMuted mb-8 font-medium">
                Preparation is the key to a smooth relocation. Here are some quick tips from our expert team in Ratnagiri:
              </p>
              <ul className="space-y-4">
                {[
                  "Start packing non-essentials at least 2 weeks before moving day.",
                  "Label boxes clearly with both room name and content list.",
                  "Keep important documents and valuables in a personal carry-on bag.",
                  "Defrost your refrigerator 24 hours before the moving truck arrives."
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-textMain font-bold">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Need more advice?</p>
                <p className="text-textMuted font-medium">Ask our AI Moving Assistant in the bottom right corner for real-time help!</p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl shadow-lg border-4 border-white h-[300px] w-full object-cover" 
                alt="Packing boxes" 
              />
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl shadow-lg mt-8 border-4 border-white h-[300px] w-full object-cover" 
                alt="Moving truck" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-primary-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Specialized Shifting Solutions</h2>
              <p className="text-primary-100 text-xl leading-relaxed font-medium">We don't just move boxes; we move your life. Discover our comprehensive range of services.</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-primary-900 px-8 py-4 rounded-xl font-bold transition-all group">
              View All Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group relative overflow-hidden rounded-[2.5rem] h-[450px] block shadow-2xl border border-white/10"
              >
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="bg-cta p-3 rounded-2xl w-fit mb-6 text-primary-900 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-primary-100 text-base line-clamp-2 mb-6 opacity-90 font-medium">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-cta font-extrabold group-hover:gap-4 transition-all">
                    Explore Details <ChevronRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "4+", label: "Years Experience" },
              { val: "500+", label: "Safe Relocations" },
              { val: "100%", label: "Verified Staff" },
              { val: "24/7", label: "Moving Support" }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brandGray border border-brandGray shadow-sm hover:shadow-md transition-shadow">
                <p className="text-5xl font-extrabold text-cta mb-2 tracking-tight">{stat.val}</p>
                <p className="text-primary-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brandGray/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-500 mb-4 tracking-tight">The Voice of Trust</h2>
            <p className="text-lg text-textMuted font-medium">Join our community of happy customers in Ratnagiri.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-[3rem] max-w-md flex-1 min-w-[300px] border border-brandGray shadow-xl hover:-translate-y-2 transition-all relative group">
                <div className="absolute top-8 right-10 text-brandGray group-hover:text-cta/10 transition-colors">
                  <MessageSquare className="w-12 h-12" />
                </div>
                <div className="flex text-cta mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-textMain italic mb-10 leading-relaxed text-lg font-medium">"{t.content}"</p>
                <div className="flex items-center gap-4 border-t border-brandGray pt-8">
                  <div className="w-14 h-14 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center font-bold text-xl shadow-inner border-2 border-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-500">{t.name}</p>
                    <p className="text-sm text-textMuted font-bold uppercase tracking-wide">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-primary-500 mb-16 tracking-tight">Quick Answers</h2>
          <div className="space-y-6">
            {GENERAL_FAQS.map((faq, i) => (
              <details key={i} className="group bg-brandGray/50 rounded-3xl border border-brandGray shadow-sm overflow-hidden transition-all">
                <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-primary-500 list-none text-xl hover:text-cta transition-colors">
                  {faq.question}
                  <span className="transition-transform duration-300 group-open:rotate-180 bg-white p-2 rounded-full shadow-sm border border-brandGray">
                    <ChevronRight className="w-5 h-5 text-cta rotate-90" />
                  </span>
                </summary>
                <div className="px-8 pb-8 text-textMuted leading-relaxed text-lg border-t border-brandGray pt-6 font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cta/10 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 tracking-tight">Let's Get Your Move Started</h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">Experience a seamless relocation with the most trusted team in Maharashtra.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-cta hover:bg-cta-hover text-primary-900 px-12 py-6 rounded-2xl font-extrabold text-xl shadow-2xl hover:scale-105 transition-all">
              Get Your Free Quote
            </Link>
            <a href={`tel:${PHONE}`} className="bg-white text-primary-500 hover:bg-gray-100 px-12 py-6 rounded-2xl font-extrabold text-xl shadow-xl flex items-center justify-center gap-3 transition-all border border-brandGray">
              <Phone className="w-6 h-6 text-cta" /> Call Us Today
            </a>
          </div>
          <p className="mt-10 text-cta font-bold uppercase tracking-widest text-sm">Serving Ratnagiri & All Major Indian Cities</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
