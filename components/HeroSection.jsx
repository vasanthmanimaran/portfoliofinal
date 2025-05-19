"use client";

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 pt-32"
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text mb-6"
          >
            <span className="gaming-gradient-text">Hello, I'm </span>
            <br className="md:hidden" />
            <span className="text-white">Vasanth M</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl"
          >
            <span className="inline-block relative">
              MERN Stack Developer
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gaming-primary to-gaming-secondary"></span>
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="gaming-button">
              Contact Me
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40 text-white font-bold transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown className="text-white/70 h-8 w-8" />
          </motion.div>
          <span className="text-xs text-white/70 mt-2">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
}