
import React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  image: string;
  benefits: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
