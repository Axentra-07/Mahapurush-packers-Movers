
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { ADDRESS, PHONE, EMAIL, WHATSAPP, COMPANY_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    from: '',
    to: '',
    service: 'household',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been sent. Our team will contact you within 30 minutes.');
    setFormData({ name: '', phone: '', email: '', from: '', to: '', service: 'household', date: '' });
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            We are here to help you move with confidence. Get an instant quote or visit our office.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-10">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Our Office</h4>
                    <p className="text-gray-600 leading-relaxed max-w-sm">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Call/WhatsApp</h4>
                    <p className="text-gray-600">Phone: <a href={`tel:${PHONE}`} className="font-bold text-primary-700">{PHONE}</a></p>
                    <a href={`https://wa.me/${WHATSAPP}`} className="flex items-center gap-2 text-green-600 font-bold mt-1">
                      <MessageCircle className="w-4 h-4" /> Available on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Email Us</h4>
                    <p className="text-gray-600"><a href={`mailto:${EMAIL}`} className="hover:text-primary-600 transition-colors">{EMAIL}</a></p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600 font-medium">Monday – Sunday: 9:00 AM – 8:00 PM</p>
                    <p className="text-xs text-primary-600 mt-1 uppercase font-bold tracking-widest">Always on for emergencies</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-inner bg-gray-200 border-4 border-white shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.444211158529!2d73.3082598!3d16.9926602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be99d073998b4c7%3A0x6d9074092496df06!2sNachane%2C%20Ratnagiri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brandGray p-10 md:p-14 rounded-[3rem] shadow-xl border border-white">
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-4">Request a Free Quote</h2>
              <p className="text-gray-600 mb-10">We reply within 30 minutes during business hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@email.com"
                    className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Move From</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Current City"
                      className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                      value={formData.from}
                      onChange={(e) => setFormData({...formData, from: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Move To</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Destination City"
                      className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                      value={formData.to}
                      onChange={(e) => setFormData({...formData, to: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Service Type</label>
                    <select 
                      className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="household">Household Shifting</option>
                      <option value="office">Office Shifting</option>
                      <option value="vehicle">Car/Bike Shifting</option>
                      <option value="storage">Storage/Warehousing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Move Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-cta hover:bg-cta-hover text-white py-5 rounded-xl font-extrabold text-xl shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <Send className="w-6 h-6" /> Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
