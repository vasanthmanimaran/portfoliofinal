"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-black/60 py-12 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <span className="text-2xl font-bold font-heading gaming-gradient-text">
              Vasanth<span className="text-white">M</span>
            </span>
          </div>
          
          <div className="flex gap-4 mb-8">
            <motion.a 
              href="https://github.com/vasanthmanimaran"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/vasanth-m-a4a9b92b6/"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            
            <motion.a 
              href="mailto:vasanthmani357@gmail.com"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gaming-primary/20 hover:bg-gaming-primary/30 text-gaming-primary transition-colors mb-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
          
          <div className="text-muted-foreground text-sm text-center">
            <p>© {new Date().getFullYear()} Vasanth M. All rights reserved.</p>
            <p className="mt-1">MERN Stack Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}