import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectModal } from "../ui/project-modal";
import { Users, Search, Palette, TestTube, Smartphone, Target, Eye, ArrowUpRight } from "lucide-react";

import duuetCareImage from "../../assets/OC 05 (3)_1751839575431.png";
import duuetUserResearchImage from "../../assets/duuet-user-research.png";
import duuetAppStructureImage from "../../assets/duuet-app-structure.png";
import partyAppImage from "../../assets/Frame 2_1751840429819.png";
import grahanAppImage from "../../assets/Frame 5 (3)_1751840850825.png";
import antrikshImage from "../../assets/OC 01_1751842419330.png";
import eventServicesImage from "../../assets/OC 07_1751857969313.png";
import socialMediaCreativesImage from "../../assets/OC 08 (4)_1751922322277.png";

// Grahan project images  
import grahanResearchImage from "../../assets/lunar-quiz-research.png";
import grahanToggleGif from "../../assets/Untitled design_1754213170729.gif";
import grahanTeamImage from "../../assets/grahan-team-screenshot.png";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projects = [
    {
      title: "DUUET",
      subtitle: "Skincare & Haircare App for 20-30s",
      challenge: "People aged 20-30 want honest, simplified skincare and haircare answers without generic beauty advice, influencer noise, or polished marketing that feels inauthentic.",
      solution: "Designed a complete app from the ground up that helps users discover products, understand ingredient transparency, and engage in real conversations around their routines—without filters or ads.",
      description: "Skincare and haircare app for people aged 20-30 with ingredient transparency, real conversations, and honest product insights. Live with 2000+ users.",
      image: duuetCareImage,
      tags: ["Mobile App", "20-30s", "Beauty", "Live Product"],
      color: "blue" as const,
      liveUrl: "https://bio.duuet.care/",
      role: "Design Intern",
      company: "Salvation Health Tech Pvt Ltd",
      duration: "Oct 2024 – Present",
      team: "Myself + Developers",
      metrics: [
        { label: "Live Users", value: "2000+" },
        { label: "Status", value: "Live Product" },
        { label: "Target Age", value: "20-30" },
        { label: "Role", value: "First Design Intern" }
      ],
      process: [
        {
          icon: <Users className="w-6 h-6 text-black" />,
          title: "User Research",
          description: "Talked to people in their 20s about skincare frustrations",
          details: [
            "Read through Reddit skincare threads for hours",
            "Watched YouTube comments on beauty videos",
            "Everyone complained about fake reviews and pushy ads",
            "People just wanted straight answers about ingredients"
          ],
          outcome: "Users hate marketing BS - they want honest product info.",
          image: duuetUserResearchImage
        },
        {
          icon: <Smartphone className="w-6 h-6 text-black" />,
          title: "App Structure",
          description: "Designed all the screens and user flows from scratch",
          details: [
            "Home screen with easy access to main features",
            "Buzz feed for short videos and community posts",
            "Marketplace for group buying at wholesale prices",
            "Product scanner that breaks down ingredients",
            "Profile pages, search, onboarding - the whole thing"
          ],
          outcome: "60+ screens designed and built into a working app.",
          image: duuetAppStructureImage
        },
        {
          icon: <Palette className="w-6 h-6 text-black" />,
          title: "Design & Testing",
          description: "Made it look good and fixed what didn't work",
          details: [
            "Soft colors and rounded corners to feel friendly",
            "Followed Duuet's brand colors throughout",
            "Made reusable components to speed up development",
            "Watched users get confused and fixed those parts",
            "Changed button text, moved things around, made it clearer"
          ],
          outcome: "App launched with 2000+ active users and growing."
        }
      ]
    },
    {
      title: "Grahan Eclipse App",
      subtitle: "NASA Space Apps Challenge 2023 Global Nominee",
      challenge: "Eclipse events are rare, but astronomy education is often too technical and boring for general audiences.",
      solution: "Created an innovative eclipse education app with a game-changing toggle button that instantly transforms the UI between adult and kids modes. This key feature impressed the NASA jury and secured Global Nominee recognition.",
      description: "Eclipse education app with innovative toggle button that instantly transforms UI between adult/kids modes. This game-changing feature impressed NASA jury and earned Global Nominee status - top 10% among 100+ regional teams. 50+ screens designed in 36 hours.",
      image: grahanAppImage,
      tags: ["NASA Global Nominee", "Top 10%", "Education", "Interactive"],
      color: "purple" as const,
      liveUrl: "https://www.figma.com/design/mTu99F6os5cN1Pnx7FzEaB/GRAHAN-by-Bhavya-Kapoor?node-id=256-66&t=Z7fwtrq3gebzQjzr-1",
      metrics: [
        { label: "Global Ranking", value: "Top 10%" },
        { label: "Competition Scale", value: "100+ regional teams" },
        { label: "Achievement", value: "NASA Global Nominee" },
        { label: "Design Time", value: "36hrs" }
      ],
      process: [
        {
          icon: <Search className="w-6 h-6 text-black" />,
          title: "Quick Research",
          description: "Had 36 hours to design 50+ screens about eclipses",
          details: [
            "Looked at astronomy apps - most are boring and technical",
            "People learn better with pictures than paragraphs",
            "Kids like interactive stuff more than reading"
          ],
          outcome: "Make it visual and interactive, not like a textbook.",
          image: grahanResearchImage
        },
        {
          icon: <TestTube className="w-6 h-6 text-black" />,
          title: "The Amazing Toggle Feature",
          description: "Designed the key innovation - a toggle button that instantly transforms UI between adult and kids modes",
          details: [
            "Created a smart toggle that transforms the entire app experience",
            "Adult Mode: Clean, scientific language with technical diagrams",
            "Kids Mode: Colorful interface with emojis, simple language, and fun animations",
            "Instant UI transformation - colors, text, icons all adapt immediately",
            "This single feature impressed NASA jury and secured Global Nominee status",
            "Demonstrates inclusive design - one app serving multiple age groups perfectly"
          ],
          outcome: "The toggle feature was the winning differentiator that earned NASA recognition.",
          image: grahanToggleGif
        },
        {
          icon: <Target className="w-6 h-6 text-black" />,
          title: "NASA Recognition",
          description: "Our 6-member team achieved Global Nominee status in NASA Space Apps Challenge 2023",
          details: [
            "Collaborated with 5 amazing teammates in 36-hour hackathon",
            "Competed against 100+ teams regionally as a unified team",
            "Selected as Global Nominee - Top 10% globally through collective effort",
            "Won NASA International Space Apps Challenge medal together",
            "Team recognition for innovative approach to space education",
            "Each member contributed unique skills - design, development, research"
          ],
          outcome: "Our team earned Top 10% global ranking among 100+ regional teams.",
          image: grahanTeamImage
        }
      ]
    },
    {
      title: "Party & Entertainment App",
      subtitle: "Event Booking for 18-30s",
      challenge: "Most existing event apps felt outdated and didn't match how people aged 18-30 discover and share events in real life—visually, quickly, and socially.",
      solution: "Designed a party and entertainment booking app with bold, dark-themed UI and neon accents that feel energetic and modern, matching how this audience thinks and moves.",
      description: "Party and entertainment booking app for users aged 18-30 with dark theme, neon highlights, and visual-first discovery.",
      image: partyAppImage,
      tags: ["Mobile Design", "Events", "18-30s", "Visual Discovery"],
      color: "cyan" as const,
      liveUrl: "https://www.figma.com/design/1Jttx4K4hG3gAPYCBTVsRy/PARTY---EVENT-SERVICE-APP?node-id=18-130&t=kV9sw4Bhzb70eQWL-1",
      role: "Product Designer",
      timeline: "1.5 months",
      metrics: [
        { label: "Screens Designed", value: "20+" },
        { label: "Timeline", value: "1.5 months" },
        { label: "Target Age", value: "18-30" },
        { label: "Role", value: "Product Designer" }
      ],
      process: []
    },
    {
      title: "ANTRIKSH Space App",
      subtitle: "Space Exploration Education",
      challenge: "Space science education often feels distant and hard to relate to for everyday users.",
      solution: "Created an engaging space exploration app with interactive UI and visual storytelling to make astronomy accessible.",
      description: "Space exploration app designed to spark curiosity through engaging UI and educational content.",
      image: antrikshImage,
      tags: ["Space", "Education", "UI Design"],
      color: "cyan" as const,
      liveUrl: "https://www.figma.com/design/qIu69BaUttOHk960WYNEzN/ANTRIKSH?node-id=37-2&t=BaKROVGCp11BBWEE-1",
      metrics: [],
      process: []
    },
    {
      title: "University Homepage",
      subtitle: "Higher Education Web Design",
      challenge: "University websites often feel outdated and don't reflect modern student expectations.",
      solution: "Redesigned university homepage with contemporary patterns, clear navigation, and student-focused content organization.",
      description: "Modern university website redesign based on user research and contemporary web design patterns.",
      image: eventServicesImage,
      tags: ["Web Design", "University", "Research"],
      color: "purple" as const,
      liveUrl: "https://www.figma.com/design/QbwiNs7P9GiXxka8XX8Kwn/CUCC?node-id=2212-75&t=TkICOh1ua556ejYR-1",
      metrics: [],
      process: []
    }
  ];

  return (
    <>
      <section id="projects" className="py-32 bg-[#030505] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="mb-24 flex justify-between items-end border-b border-white/10 pb-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-7xl text-white"
            >
              Selected<br />Works.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block text-gray-500 uppercase tracking-widest text-sm font-medium text-right max-w-[200px]"
            >
              Design work that solves real problems
            </motion.p>
          </div>
          
          {/* Asymmetric Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {projects.map((project, index) => {
              // Determine layout class based on index for asymmetry
              let layoutClass = "";
              if (index === 0) layoutClass = "md:col-span-12"; // First project full width
              else if (index === 1 || index === 2) layoutClass = "md:col-span-6"; // Next two split 50/50
              else if (index === 3) layoutClass = "md:col-span-8"; // Then one large
              else layoutClass = "md:col-span-4"; // And one small

              const isFullWidth = index === 0;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`${layoutClass} group cursor-pointer`}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className={`relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors duration-500 flex flex-col ${isFullWidth ? 'md:flex-row h-auto md:h-[600px]' : 'h-full min-h-[500px]'}`}>
                    
                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${isFullWidth ? 'md:w-[60%] h-[300px] md:h-full' : 'h-[300px] w-full'}`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                      />
                    </div>

                    {/* Content Container */}
                    <div className={`flex flex-col p-8 md:p-10 justify-between ${isFullWidth ? 'md:w-[40%]' : 'w-full flex-1'}`}>
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-3xl font-serif text-white group-hover:text-teal-300 transition-colors">{project.title}</h3>
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-teal-500 group-hover:text-[#030505] transition-all duration-300 text-gray-400">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                        <p className="text-gray-400 font-light text-lg mb-8">{project.subtitle}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 3).map((tag: string) => (
                          <span key={tag} className="px-3 py-1.5 bg-white/5 text-gray-400 text-xs tracking-wider uppercase font-medium rounded-full border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            project={selectedProject}
          />
        )}
      </section>
    </>
  );
}
