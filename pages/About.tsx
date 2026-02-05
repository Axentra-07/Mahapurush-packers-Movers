
import React from 'react';
import { Target, Heart, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary-900 text-white pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-800 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-heading font-bold mb-6">About Mahapurush Packers and Movers</h1>
          <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
            Founded with a promise to handle every move with care, honesty, and responsibility. We treat your belongings like our own.
          </p>
        </div>
      </section>

      {/* Main Content - Our Story */}
      <section className="pt-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6 border-b-4 border-cta w-fit pb-2">Our Story</h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Mahapurush Packers and Movers began its journey in the heart of Ratnagiri with a single mission: to redefine the chaotic experience of shifting into a structured, peaceful transition. What started as a small team of three dedicated individuals and one pickup truck has now grown into a premier relocation agency serving thousands of happy families across Maharashtra.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  The name <span className="text-primary-700 font-bold">"Mahapurush"</span> was chosen to represent our commitment to high character and selfless service. In the early days, our founder personally supervised every single household move, ensuring that even the smallest heirloom was packed with the same care as a grand piano. This personal touch became our signature, and word-of-mouth soon made us the go-to experts for Ratnagiri’s narrow lanes and challenging terrains.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Over the last 4 years, we have evolved from local home shifters to interstate logistics specialists. We invested in advanced packing technology—introducing multi-layered moisture-proof wrapping and custom crating for fragile items. Today, while our fleet has grown and our reach has expanded to major Indian cities, our core philosophy remains unchanged: every box we carry contains someone's memories, and we carry them with the respect they deserve.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl border-8 border-brandGray h-[600px] relative group">
              <img 
                src="https://images.pexels.com/photos/4246093/pexels-photo-4246093.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Professional Moving Supplies" 
                className="w-full h-full object-cover saturate-[1.1] transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white">
                <p className="text-primary-900 font-bold text-sm uppercase tracking-widest mb-1">Our Heritage</p>
                <p className="text-textMuted text-xs font-semibold">From one truck in Ratnagiri to a nationwide network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-brandGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900">Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100">
              <Target className="w-12 h-12 text-cta mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                To provide stress-free, secure, and affordable packing and moving services while treating every customer’s belongings like our own.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm md:col-span-2 border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-primary-900">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-cta flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary-900 mb-1">Safety First</h4>
                    <p className="text-sm text-gray-600 font-medium">Damage-free handling is non-negotiable in our process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="w-8 h-8 text-cta flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary-900 mb-1">Transparency</h4>
                    <p className="text-sm text-gray-600 font-medium">Clear pricing and honest timelines with no hidden costs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-cta flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary-900 mb-1">Reliability</h4>
                    <p className="text-sm text-gray-600 font-medium">On-time delivery, every time, for every client.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-8 h-8 text-cta flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary-900 mb-1">Customer Care</h4>
                    <p className="text-sm text-gray-600 font-medium">Support before, during, and after your relocation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">Our Team</h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                Our strength lies in our trained packing staff, skilled drivers, and dedicated move coordinators. Every team member is experienced in handling household goods, office equipment, and fragile items safely.
              </p>
              <ul className="space-y-4">
                {['Trained Packing Experts', 'Professional Logistics Team', '24/7 Support Staff', 'Verified Driver Partners'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-extrabold text-primary-900">
                    <div className="w-2 h-2 rounded-full bg-cta"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 p-8 rounded-3xl text-center border border-primary-100 shadow-sm">
                <p className="text-4xl font-extrabold text-primary-700 mb-2">4+</p>
                <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="bg-primary-900 p-8 rounded-3xl text-center text-white shadow-xl">
                <p className="text-4xl font-extrabold text-cta mb-2">100%</p>
                <p className="text-primary-100 text-sm font-bold uppercase tracking-wider">Satisfaction</p>
              </div>
              <div className="bg-brandGray p-8 rounded-3xl text-center col-span-2 border border-gray-200">
                <p className="text-4xl font-extrabold text-primary-900 mb-2">Hundreds</p>
                <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">Satisfied Families</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
