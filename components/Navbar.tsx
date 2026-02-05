
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { COMPANY_NAME, PHONE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-500 p-2 rounded-lg shadow-sm">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${scrolled ? 'text-primary-500' : 'text-primary-500'}`}>
              Mahapurush <span className="text-cta">Packers</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors hover:text-cta ${location.pathname === link.path ? 'text-cta' : 'text-textMain'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${PHONE}`} className="bg-cta hover:bg-cta-hover text-primary-900 px-6 py-2.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-textMain hover:text-cta p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold border-b border-brandGray pb-2 ${location.pathname === link.path ? 'text-cta' : 'text-textMain'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href={`tel:${PHONE}`} className="bg-cta text-primary-900 text-center py-3 rounded-lg font-bold mt-2 shadow-lg">
            Call Now: {PHONE}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
