"use client";

import AnimatedSection from './AnimatedSection';
import { CalendarDays, MapPin, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="mb-4">About <span className="gaming-gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gaming-primary to-gaming-secondary mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection delay={0.2} className="order-2 md:order-1">
            <div className="gaming-card p-6 md:p-8">
              <h3 className="mb-6 text-gaming-primary">Personal Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-gaming-primary/10">
                    <CalendarDays className="w-5 h-5 text-gaming-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Date of Birth</h4>
                    <p className="text-muted-foreground">December 19, 2002</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-gaming-secondary/10">
                    <MapPin className="w-5 h-5 text-gaming-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">Kumbakonam, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-gaming-accent/10">
                    <GraduationCap className="w-5 h-5 text-gaming-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Education</h4>
                    <p className="text-muted-foreground">MCA (2023-2025)</p>
                    <p className="text-muted-foreground">BSc IT (2020-2023)</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} className="order-1 md:order-2">
            <h3 className="mb-6 text-gaming-gradient-text">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>I'm a passionate MERN Stack Developer with experience in building modern web pages. I specialize in creating responsive and interactive user interfaces using the latest technologies.</p>
              
              <p>I completed my web development course at Vagai Institute in Kumbakonam, and I have 9 months of experience as a MERN stack developer intern at WhyGlobal Services.</p>
              
              <p>I'm constantly exploring new technologies and techniques to enhance my skills and create better user experiences.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}