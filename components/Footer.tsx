
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Truck, Facebook, Instagram, Twitter } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PHONE, EMAIL, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-primary-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Truck className="w-8 h-8 text-cta" />
              <span className="text-white font-heading font-bold text-2xl tracking-tight">Mahapurush</span>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed font-medium">
              Safe, professional, and stress-free relocation services for homes, offices, and vehicles. Your trusted moving partner in Ratnagiri for over 4 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-cta hover:text-primary-900 transition-all shadow-lg border border-primary-700">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-cta hover:text-primary-900 transition-all shadow-lg border border-primary-700">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-cta hover:text-primary-900 transition-all shadow-lg border border-primary-700">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cta font-bold text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-cta transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="hover:text-cta transition-colors font-medium">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cta transition-colors font-medium">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-cta transition-colors font-medium">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-cta transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cta font-bold text-lg mb-6 uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="hover:text-cta transition-colors font-medium">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cta font-bold text-lg mb-6 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent" />
                <a href={`tel:${PHONE}`} className="hover:text-cta transition-colors font-bold">{PHONE}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent" />
                <a href={`mailto:${EMAIL}`} className="hover:text-cta transition-colors font-medium">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-300 font-medium">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cta transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
