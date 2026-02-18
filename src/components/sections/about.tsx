import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { SkillBadge } from "@/components/ui/skill-badge";
import { TextReveal } from "@/components/ui/text-reveal";
import { GlassCard } from "@/components/ui/glass-card";

import { Bold, Italic, Underline, Link, User, Palette, Figma, Layers, Search, Award, Smartphone, Image } from "lucide-react";
import { useState, useEffect } from "react";

import bg__1_ from "../../assets/bg-1.png";

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
                        Hi, I'm Bhavya 👋
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                        I design things that make sense and look damn good doing it. 👊
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                        Product design, visual design, branding, marketing, I work across it all. I've shaped digital products in healthcare, edtech, AI apps, community, and events, and I bring the same level of obsession to every single one. Whether it's a complex product flow or a brand's visual identity, I make sure everything is intentional, sharp, and built to last.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                        On the brand side, I build Meta ad creatives and social strategies that give brands a real personality, not just a presence. The kind that people actually remember.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                        Good design solves. Great design sticks. That's the standard I work to.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        Off work, I'm either sleeping for days, finding good food spots 🍜, exploring new places 🌍, or snapping some cool cinematic shots.😄
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