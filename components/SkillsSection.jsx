"use client";

import { Code, Palette, Database, Terminal, FileCode, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Define skills data as a constant array for better maintainability
const SKILLS_DATA = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Frontend",
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    delay: 0.1,
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Backend",
    skills: ['Node.js', 'Express', 'MongoDB', 'Databases'],
    delay: 0.2,
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "UI Libraries",
    skills: ['Tailwind CSS', 'Bootstrap', 'Material UI'],
    delay: 0.3,
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Tools",
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Vite'],
    delay: 0.4,
  },
  {
    icon: <FileCode className="w-5 h-5" />,
    title: "Other Skills",
    skills: ['Three.js', 'Responsive Design', 'UI/UX Design', 'Problem Solving'],
    delay: 0.5,
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Soft Skills",
    skills: ['Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Creativity'],
    delay: 0.6,
  },
];

const SkillCard = ({ icon, title, skills, delay, className = '' }) => (
  <AnimatedSection
    delay={delay}
    className={`gaming-card p-6 rounded-lg shadow-lg flex flex-col h-full bg-gray-900/80 backdrop-blur-sm ${className}`}
    role="region"
    aria-labelledby={`skill-${title.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-full bg-gaming-primary/20 text-gaming-primary" aria-hidden="true">
        {icon}
      </div>
      <h4 id={`skill-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl font-semibold text-white">
        {title}
      </h4>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="flex items-center gap-2 p-2 rounded-md bg-black/30 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-gaming-primary" aria-hidden="true"></span>
          <span className="text-sm text-gray-300">{skill}</span>
        </li>
      ))}
    </ul>
  </AnimatedSection>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gaming-gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gaming-primary to-gaming-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            I've acquired a diverse set of skills throughout my journey as a developer.
            Here are the technologies and tools I'm proficient with.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}