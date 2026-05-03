"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Quote
} from 'lucide-react';

interface Testimonial {
  id: number;
  logo: React.ReactNode;
  message: string;
  brand: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: <Quote className="w-6 h-6 text-primary-light" />,
    message: "The development speed and quality exceeded our highest expectations. A truly transformative partnership.",
    brand: "Nexus Solutions",
    designation: "Chief Technology Officer"
  },
  {
    id: 2,
    logo: <Quote className="w-6 h-6 text-primary-light" />,
    message: "Robust security architecture and seamless integration. They handled our complex migration with precision.",
    brand: "SafeGuard Inc",
    designation: "Head of Security"
  },
  {
    id: 3,
    logo: <Quote className="w-6 h-6 text-primary-light" />,
    message: "System performance tripled within weeks. Their optimization strategies are industry-leading.",
    brand: "FastTrack",
    designation: "Founder & CEO"
  },
  {
    id: 4,
    logo: <Quote className="w-6 h-6 text-primary-light" />,
    message: "Scalability is no longer a concern. The architecture they built is future-proof and resilient.",
    brand: "DataCore",
    designation: "Lead Systems Architect"
  },
  {
    id: 5,
    logo: <Quote className="w-6 h-6 text-primary-light" />,
    message: "Our global deployment was flawless. The attention to local latency and performance was impressive.",
    brand: "Atlas Tech",
    designation: "VP of Engineering"
  },
  {
    id: 6,
    logo: <Quote className="w-6 h-6 text-primary-light" />,
    message: "Technically superior and professional. They are our go-to partner for complex infrastructure projects.",
    brand: "ComputeX",
    designation: "Head of Infrastructure"
  }
];

const TestimonialsMinimal: React.FC = () => {
  return (
    <div className="w-full py-24 lg:py-48">
      {/* Centered Heading */}
      <div className="flex flex-col items-center text-center mb-24 lg:mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-1.5 px-6 rounded-full bg-primary/20 text-primary-light font-bold text-xs uppercase tracking-[0.3em] mb-6"
        >
          Testimonials
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight"
        >
          Building trust through experience
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 150 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="h-1.5 bg-primary rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        />
      </div>

      {/* 3x2 Grid for Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-4 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="h-full p-8 lg:p-10 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col">
              {/* Liquid Glass Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Logo & Quote Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:border-primary/30 transition-colors duration-500">
                    {item.logo}
                  </div>
                  <Quote className="w-8 h-8 text-white/5 group-hover:text-primary/20 transition-colors duration-500" />
                </div>

                {/* Message */}
                <p className="text-lg text-gray-300 leading-relaxed mb-10 flex-grow font-medium">
                  &ldquo;{item.message}&rdquo;
                </p>

                {/* Footer: Brand & Reviewer */}
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors duration-300">
                    {item.brand}
                  </h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMinimal;
