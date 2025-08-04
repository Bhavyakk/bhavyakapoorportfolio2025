import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { SkillBadge } from "@/components/ui/skill-badge";
import { TextReveal } from "@/components/ui/text-reveal";
import { GlassCard } from "@/components/ui/glass-card";

import { Bold, Italic, Underline, Link, User, Palette, Figma, Layers, Search, Award, Smartphone, Image } from "lucide-react";
import { useState, useEffect } from "react";

import bg__1_ from "../../assets/bg (1).png";

export function About() {
  const [showToolbar, setShowToolbar] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Simpler animation with longer delays to reduce processing
    const timer = setTimeout(() => {
      setShowToolbar(true);
      setTimeout(() => setAnimationStep(1), 3000); // Bold after 3s
      setTimeout(() => setAnimationStep(2), 6000); // Italic after 6s  
      setTimeout(() => setAnimationStep(3), 9000); // Link after 9s
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { skill: "UI/UX Design", level: 95, icon: "Palette", color: "cyan" as const },
    { skill: "Figma", level: 92, icon: "Figma", color: "purple" as const },
    { skill: "Canva", level: 90, icon: "Image", color: "cyan" as const },
    { skill: "Design Research", level: 88, icon: "Search", color: "purple" as const },
    { skill: "Branding", level: 87, icon: "Award", color: "blue" as const },
    { skill: "Wireframing & Prototyping", level: 85, icon: "Layers", color: "blue" as const },
  ];

  return (
    <>

      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
            {/* Left Half - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="w-72 md:w-80 lg:w-96 h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-teal-100">
                  <img
                    src={bg__1_}
                    alt="Bhavya Kapoor - UI/UX Designer and Social Media Strategist profile photo"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    decoding="async"
                    onLoad={(e) => {
                      e.currentTarget.style.filter = 'blur(0)';
                    }}
                    style={{ filter: 'blur(2px)', transition: 'filter 0.3s ease' }}
                  />
                </div>
                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-teal-400/20 blur-xl -z-10"></div>
              </div>
            </motion.div>

            {/* Right Half - Rich Text Editor Simulation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Typewriter Heading */}
              <div className="mb-8">
                <AnimatedText
                  text="Who Am I?"
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                  delay={0}
                />
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded-full"></div>
              </div>

              {/* Rich Text Editor Simulation */}
              <div className="relative">
                {/* Text Content with Formatting */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                      Hi, I'm{" "}
                      <span className={`transition-all duration-700 ${animationStep >= 1 ? 'font-bold text-gray-900 bg-yellow-200/50 px-1 rounded' : ''}`}>
                        Bhavya
                      </span>
                      {" "}👋
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                      I'm a{" "}
                      <span className={`transition-all duration-700 ${animationStep >= 2 ? 'italic text-purple-700 bg-purple-100/50 px-1 rounded' : ''}`}>
                        UI/UX designer
                      </span>
                      {" "}with a computer science background and a strong focus on building digital experiences that feel clear, useful, and genuinely enjoyable to use. I've worked on{" "}
                      <span className={`transition-all duration-700 ${animationStep >= 3 ? 'text-teal-600 underline decoration-2 underline-offset-2 bg-teal-100/50 px-1 rounded' : ''}`}>
                        healthcare platforms, community apps, and event services
                      </span>
                      {" "}, always keeping the user at the center. I like solving messy problems, simplifying flows, and making sure every screen serves a purpose.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                      Alongside design, I also work as a social media strategist, helping brands show up online with intention and personality.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      Off work, I'm usually traveling 🌍, snapping some cool cinematic shots, or geeking out over cricket highlights 😉.
                    </p>
                  </div>
                  
                  
                  
                  
                  

                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-black">
              My Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <GlassCard key={skill.skill} intensity="medium">
                  <SkillBadge
                    skill={skill.skill}
                    level={skill.level}
                    icon={skill.icon}
                    color={skill.color}
                    delay={index * 0.1}
                  />
                </GlassCard>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
      </section>
    </>
  );
}