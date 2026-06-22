import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useState, useRef } from "react";
import { ProjectModal } from "../ui/project-modal";
import { Users, Search, Palette, TestTube, Smartphone, Target, ArrowUpRight } from "lucide-react";

import duuetCareImage from "../../assets/OC 05 (3)_1751839575431.png";
import duuetUserResearchImage from "../../assets/duuet-user-research.png";
import duuetAppStructureImage from "../../assets/duuet-app-structure.png";
import partyAppImage from "../../assets/Frame 2_1751840429819.png";
import grahanAppImage from "../../assets/Frame 5 (3)_1751840850825.png";
import antrikshImage from "../../assets/OC 01_1751842419330.png";
import eventServicesImage from "../../assets/OC 07_1751857969313.png";

// Grahan project images  
import grahanResearchImage from "../../assets/lunar-quiz-research.png";
import grahanToggleGif from "../../assets/Untitled design_1754213170729.gif";
import grahanTeamImage from "../../assets/grahan-team-screenshot.png";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xPercent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x = useMotionTemplate`calc(${xPercent}% + 100vw)`;
  const xBgText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

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
      tags: ["Mobile App", "20-30s", "Live Product"],
      color: "blue" as const,
      liveUrl: "https://bio.duuet.care/",
      role: "Design Intern",
      company: "Salvation Health Tech Pvt Ltd",
      duration: "Oct 2024 – Present",
      team: "Myself + Developers",
      metrics: [
        { label: "Live Users", value: "2000+" },
        { label: "Target Age", value: "20-30" }
      ],
      process: [
        {
          icon: <Users className="w-6 h-6 text-black" />,
          title: "User Research",
          description: "Talked to people in their 20s about skincare frustrations",
          details: ["Read through Reddit threads", "Watched YouTube comments"],
          outcome: "Users hate marketing BS",
          image: duuetUserResearchImage
        },
        {
          icon: <Smartphone className="w-6 h-6 text-black" />,
          title: "App Structure",
          description: "Designed all screens and user flows from scratch",
          details: ["Home screen", "Buzz feed", "Marketplace"],
          outcome: "60+ screens designed.",
          image: duuetAppStructureImage
        }
      ]
    },
    {
      title: "Grahan Eclipse",
      subtitle: "NASA Space Apps Global Nominee",
      challenge: "Eclipse events are rare, but astronomy education is often too technical and boring for general audiences.",
      solution: "Created an innovative eclipse education app with a game-changing toggle button that instantly transforms the UI between adult and kids modes.",
      description: "Eclipse education app with innovative toggle button that instantly transforms UI between adult/kids modes. This game-changing feature impressed NASA jury and earned Global Nominee status.",
      image: grahanAppImage,
      tags: ["NASA Nominee", "Interactive"],
      color: "purple" as const,
      liveUrl: "https://www.figma.com/design/mTu99F6os5cN1Pnx7FzEaB/GRAHAN-by-Bhavya-Kapoor",
      metrics: [
        { label: "Ranking", value: "Top 10%" },
        { label: "Time", value: "36hrs" }
      ],
      process: [
        {
          icon: <Search className="w-6 h-6 text-black" />,
          title: "Research",
          description: "Had 36 hours to design 50+ screens",
          details: ["Astronomy apps are boring", "Kids like interactive stuff"],
          outcome: "Make it visual.",
          image: grahanResearchImage
        },
        {
          icon: <TestTube className="w-6 h-6 text-black" />,
          title: "Toggle Feature",
          description: "Instantly transforms UI between adult and kids modes",
          details: ["Adult Mode", "Kids Mode"],
          outcome: "Winning differentiator.",
          image: grahanToggleGif
        }
      ]
    },
    {
      title: "Party App",
      subtitle: "Event Booking for 18-30s",
      challenge: "Most existing event apps felt outdated and didn't match how people aged 18-30 discover and share events.",
      solution: "Designed a party and entertainment booking app with bold, dark-themed UI and neon accents.",
      description: "Party and entertainment booking app for users aged 18-30 with dark theme, neon highlights, and visual-first discovery.",
      image: partyAppImage,
      tags: ["Events", "Visual Discovery"],
      color: "cyan" as const,
      liveUrl: "https://www.figma.com/design/1Jttx4K4hG3gAPYCBTVsRy/PARTY---EVENT-SERVICE-APP",
      role: "Product Designer",
      timeline: "1.5 months",
      metrics: [
        { label: "Screens", value: "20+" },
        { label: "Timeline", value: "1.5m" }
      ],
      process: []
    },
    {
      title: "ANTRIKSH",
      subtitle: "Space Exploration Education",
      challenge: "Space science education often feels distant.",
      solution: "Created an engaging space exploration app with interactive UI.",
      description: "Space exploration app designed to spark curiosity through engaging UI and educational content.",
      image: antrikshImage,
      tags: ["Space", "Education"],
      color: "cyan" as const,
      liveUrl: "https://www.figma.com/design/qIu69BaUttOHk960WYNEzN/ANTRIKSH",
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
      <section ref={targetRef} id="projects" className="relative h-[400vh] bg-[#030505]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <motion.div style={{ x: xBgText }} className="absolute top-10 left-6 md:left-10 z-0 pointer-events-none">
            <h2 className="font-serif text-[20vw] md:text-[12vw] leading-[0.8] tracking-tighter text-[#f3f6f5] opacity-5">
              SELECTED<br/>WORKS
            </h2>
          </motion.div>

          <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-[10vw] items-center relative z-10 w-max">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="w-[90vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 group cursor-pointer relative hover-target"
                onClick={() => handleProjectClick(project)}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                  />
                  
                  {/* Cinematic Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-20 flex flex-col md:flex-row justify-between items-start md:items-end transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <div>
                      <h3 className="font-serif text-4xl md:text-7xl text-white mb-2 md:mb-4 tracking-tight mix-blend-difference">
                        {project.title}
                      </h3>
                      <p className="text-lg md:text-2xl text-white/80 font-light mix-blend-difference">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mt-8 md:mt-0">
                      <ArrowUpRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Minimalist Index indicator */}
                <div className="absolute -top-12 right-0 text-white/30 font-serif text-4xl">
                  0{index + 1}
                </div>
              </div>
            ))}
            
            {/* End Spacer to let last item reach middle of screen */}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
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
