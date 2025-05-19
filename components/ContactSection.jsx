"use client";

import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactItem = ({ icon, title, content, href, delay }) => (
  <AnimatedSection delay={delay} className="gaming-card p-6">
    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
      <div className="p-3 rounded-full bg-gaming-primary/20 text-gaming-primary">
        {icon}
      </div>
      <div className="text-center sm:text-left">
        <h4 className="text-lg mb-2">{title}</h4>
        {href ? (
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gaming-primary transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  </AnimatedSection>
);

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gaming-dark/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="mb-4">Get In <span className="gaming-gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gaming-primary to-gaming-secondary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </AnimatedSection>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContactItem 
            icon={<Mail className="w-6 h-6" />}
            title="Email"
            content="vasanthmani357@gmail.com"
            href="mailto:vasanthmani357@gmail.com"
            delay={0.1}
          />
          
          <ContactItem 
            icon={<Phone className="w-6 h-6" />}
            title="Phone"
            content="+91 6385355073"
            href="tel:+916385355073"
            delay={0.2}
          />
          
          <ContactItem 
            icon={<Github className="w-6 h-6" />}
            title="GitHub"
            content="github.com/vasanthmanimaran"
            href="https://github.com/vasanthmanimaran"
            delay={0.3}
          />
          
          <ContactItem 
            icon={<Linkedin className="w-6 h-6" />}
            title="LinkedIn"
            content="Vasanth M"
            href="https://www.linkedin.com/in/vasanth-m-a4a9b92b6/"
            delay={0.4}
          />
        </div>
        
        <AnimatedSection delay={0.5} className="mt-12 gaming-card p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-gaming-primary mb-2">Send Me a Message</h3>
            <p className="text-muted-foreground">
              If you have any questions or want to work together, feel free to reach out!
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 focus:border-gaming-primary focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 focus:border-gaming-primary focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 focus:border-gaming-primary focus:outline-none"
                placeholder="Enter subject"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 focus:border-gaming-primary focus:outline-none resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="gaming-button px-8 py-3"
              >
                Send Message
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}