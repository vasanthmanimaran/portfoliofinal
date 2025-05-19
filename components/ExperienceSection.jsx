"use client";

import AnimatedSection from './AnimatedSection';
import { Briefcase, Award } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-gaming-dark/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="mb-4">My <span className="gaming-gradient-text">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gaming-primary to-gaming-secondary mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid gap-8 md:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <div className="gaming-card p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gaming-primary/20">
                  <Briefcase className="w-6 h-6 text-gaming-primary" />
                </div>
                <h3 className="text-gaming-primary">Work Experience</h3>
              </div>
              
              <div className="relative border-l-2 border-gaming-primary/30 pl-8 pb-2">
                <div className="absolute w-4 h-4 rounded-full bg-gaming-primary -left-[9px] top-0"></div>
                <div className="mb-8">
                  <h4 className="text-xl mb-2">MERN Stack Developer Intern</h4>
                  <p className="text-gaming-primary font-medium mb-2">WhyGlobal Services</p>
                  <p className="text-sm text-muted-foreground mb-4">9 months</p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Developed responsive web applications using the MERN stack</p>
                    <p>• Collaborated with team members to implement new features</p>
                    <p>• Worked on both frontend and backend development tasks</p>
                    <p>• Participated in code reviews and implemented feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="gaming-card p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gaming-secondary/20">
                  <Award className="w-6 h-6 text-gaming-secondary" />
                </div>
                <h3 className="text-gaming-secondary">Education & Training</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative border-l-2 border-gaming-secondary/30 pl-8">
                  <div className="absolute w-4 h-4 rounded-full bg-gaming-secondary -left-[9px] top-0"></div>
                  <div className="mb-6">
                    <h4 className="text-xl mb-2">Master of Computer Applications (MCA)</h4>
                    <p className="text-sm text-muted-foreground mb-1">2023 - 2025</p>
                    <p className="text-muted-foreground">Pursuing advanced computer application studies with a focus on software development.</p>
                  </div>
                </div>
                
                <div className="relative border-l-2 border-gaming-secondary/30 pl-8">
                  <div className="absolute w-4 h-4 rounded-full bg-gaming-secondary -left-[9px] top-0"></div>
                  <div className="mb-6">
                    <h4 className="text-xl mb-2">Bachelor of Science in Information Technology</h4>
                    <p className="text-sm text-muted-foreground mb-1">2020 - 2023</p>
                    <p className="text-muted-foreground">Completed undergraduate studies in Information Technology.</p>
                  </div>
                </div>
                
                <div className="relative border-l-2 border-gaming-secondary/30 pl-8">
                  <div className="absolute w-4 h-4 rounded-full bg-gaming-secondary -left-[9px] top-0"></div>
                  <div>
                    <h4 className="text-xl mb-2">Web Development Course</h4>
                    <p className="text-sm text-muted-foreground mb-1">Vagai Institute, Kumbakonam</p>
                    <p className="text-muted-foreground">1-month intensive training in web development fundamentals and practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}