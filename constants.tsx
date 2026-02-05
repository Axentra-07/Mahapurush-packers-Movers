
import React from 'react';
import { 
  Home, 
  Briefcase, 
  Truck, 
  Package, 
  Car, 
  ArrowLeftRight, 
  ShieldCheck, 
  Clock, 
  Headphones 
} from 'lucide-react';
import { Service, Testimonial, FAQ } from './types';

export const COMPANY_NAME = "Mahapurush Packers and Movers";
export const ADDRESS = "House No. B/1714, Rasalwadi, Near Bus Stop, Nachane Road, Shanti Nagar, Ratnagiri – 415639, Maharashtra";
export const PHONE = "+91 98765 43210"; // Placeholder
export const EMAIL = "contact@mahapurushpackers.com";
export const WHATSAPP = "+919876543210";

export const SERVICES: Service[] = [
  {
    id: 'household-shifting',
    title: 'Household Packers and Movers',
    shortDesc: 'Complete home relocation services designed for families and professionals.',
    fullDesc: 'Relocating your home can be stressful—but with Mahapurush Packers and Movers, it becomes smooth, safe, and organized. We provide complete household shifting services designed for families, working professionals, and senior citizens.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    benefits: ['Damage-free packing', 'Affordable charges', 'Trained moving staff', 'Door-to-door service'],
    process: ['Pre-move survey & quote', 'Professional packing', 'Safe loading & transport', 'Timely unloading', 'Unpacking & rearrangement'],
    faqs: [
      { q: 'Do you provide packing materials?', a: 'Yes, all materials are included.' },
      { q: 'Is insurance available?', a: 'Yes, optional transit insurance is available.' }
    ]
  },
  {
    id: 'office-relocation',
    title: 'Office & Corporate Relocation',
    shortDesc: 'Smooth office shifting with minimal downtime for your business.',
    fullDesc: 'We specialize in moving office infrastructure, IT equipment, and furniture with extreme care to ensure your business operations resume as quickly as possible.',
    icon: <Briefcase className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    benefits: ['Minimal business disruption', 'Specialized IT handling', 'Systematic labeling', 'After-hours moving available'],
    process: ['Detailed inventory', 'Equipment decoupling', 'Secured packing', 'Logistics planning', 'Re-setup at new location'],
    faqs: [
      { q: 'Can you move on weekends?', a: 'Yes, we offer weekend and night moves to minimize downtime.' }
    ]
  },
  {
    id: 'transportation',
    title: 'Local & Interstate Transportation',
    shortDesc: 'Safe and timely delivery of goods across Maharashtra and India.',
    fullDesc: 'Whether it is a few items or a full truckload, our fleet of maintained vehicles ensures your cargo reaches its destination safely.',
    icon: <Truck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    benefits: ['Real-time tracking', 'Verified drivers', 'Flexible fleet sizes', 'Safe transit'],
    process: ['Booking request', 'Vehicle assignment', 'Loading', 'Transit', 'Delivery'],
    faqs: [
      { q: 'Do you cover remote areas?', a: 'Yes, we serve all major cities and most rural locations across India.' }
    ]
  },
  {
    id: 'car-bike-transport',
    title: 'Car & Bike Transportation',
    shortDesc: 'Specialized vehicle moving services with zero-scratch guarantee.',
    fullDesc: 'We understand your vehicle is precious. We use specialized carriers to move your cars and bikes without any wear and tear.',
    icon: <Car className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    benefits: ['Enclosed carriers', 'Door-to-door pick/drop', 'Vehicle insurance', 'Condition report provided'],
    process: ['Vehicle inspection', 'Secure loading', 'Express transit', 'Safety checks', 'Delivery'],
    faqs: [
      { q: 'Can I leave items inside the car?', a: 'We recommend removing all personal valuables for safety.' }
    ]
  },
  {
    id: 'packing-loading',
    title: 'Packing, Loading & Unloading',
    shortDesc: 'Professional handling of your belongings using high-quality materials.',
    fullDesc: 'The foundation of a safe move is great packing. Our team is trained in multi-layer packing techniques for maximum protection.',
    icon: <Package className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    benefits: ['High-quality materials', 'Bubble wrap & foam padding', 'Heavy equipment lifting', 'Fragile item specialists'],
    process: ['Material selection', 'Layered packing', 'Strategic loading', 'Careful unloading'],
    faqs: [
      { q: 'Do you pack kitchen items?', a: 'Yes, we use special dividers and cushioning for kitchenware.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Rohit Patil', location: 'Ratnagiri', rating: 5, content: 'Mahapurush Packers and Movers handled my house shifting very professionally. Packing quality was excellent and delivery was on time.' },
  { id: '2', name: 'Sneha Kulkarni', location: 'Pune to Ratnagiri', rating: 5, content: 'I was worried about fragile items, but everything arrived safely. Very reliable packers and movers.' },
  { id: '3', name: 'Amit Deshmukh', location: 'Mumbai', rating: 5, content: 'Smooth office shifting with minimal downtime. Their team is punctual and well-trained.' },
  { id: '4', name: 'Kunal Jadhav', location: 'Local Move', rating: 5, content: 'Very professional team. Everything was packed carefully and delivered without damage.' },
  { id: '5', name: 'Pooja Naik', location: 'Vehicle Transport', rating: 5, content: 'My car reached Pune safely and on time. Highly trusted movers.' }
];

export const GENERAL_FAQS: FAQ[] = [
  { question: "Are you insured packers and movers?", answer: "Yes, we provide transit insurance options for added safety." },
  { question: "Do you provide packing materials?", answer: "Yes, we use high-quality boxes, bubble wrap, and protective materials." },
  { question: "Do you handle interstate moves?", answer: "Absolutely. We offer domestic and interstate packers and movers services across India." },
  { question: "How much do packers and movers cost in Ratnagiri?", answer: "Costs depend on distance, volume, and services required. Get a free quote for accurate pricing." },
  { question: "Can I book on short notice?", answer: "Yes, same-day and next-day moves are available depending on availability." }
];

export const CORE_BENEFITS = [
  { icon: <ShieldCheck className="w-10 h-10 text-accent" />, title: "100% Safe & Insured", desc: "Your belongings are protected with careful packing and transit insurance options." },
  { icon: <ArrowLeftRight className="w-10 h-10 text-accent" />, title: "Door-to-Door Service", desc: "From packing to final placement—we manage everything under one roof." },
  { icon: <Clock className="w-10 h-10 text-accent" />, title: "On-Time Delivery", desc: "We respect your time. Structured processes ensure timely execution for all moves." },
  { icon: <Headphones className="w-10 h-10 text-accent" />, title: "Dedicated Support", desc: "One point of contact throughout your move, plus quick support via WhatsApp." }
];
