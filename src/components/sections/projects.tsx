import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedText } from "../ui/animated-text";
import { ProjectModal } from "../ui/project-modal";
import { Users, Search, Palette, TestTube, Smartphone, Target, Eye } from "lucide-react";

import duuetCareImage from "../../assets/OC 05 (3)_1751839575431.png";
import duuetUserResearchImage from "../../assets/duuet-user-research.png";
import duuetAppStructureImage from "../../assets/duuet-app-structure.png";
import partyAppImage from "../../assets/Frame 2_1751840429819.png";
import grahanAppImage from "../../assets/Frame 5 (3)_1751840850825.png";
import antrikshImage from "../../assets/OC 01_1751842419330.png";
import eventServicesImage from "../../assets/OC 07_1751857969313.png";
import socialMediaCreativesImage from "../../assets/OC 08 (4)_1751922322277.png";

// Grahan project images  
import grahanMedalImage from "../../assets/IMG_6516_1754209413118.jpg";
import grahanPresentationImage from "../../assets/grahan-app.png";
import grahanTeamImage from "../../assets/grahan-team-screenshot.png";
import grahanToggleGif from "../../assets/Untitled design_1754213170729.gif";
import grahanResearchImage from "../../assets/lunar-quiz-research.png";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      keyActivities: [
        {
          title: "Researching Gen Z Habits",
          description: "Studied how 20–30-year-olds discover, trust, and buy skincare/haircare."
        },
        {
          title: "User Interviews & Feedback", 
          description: "Collected real opinions to shape features and priorities."
        },
        {
          title: "Wireframes & User Flows",
          description: "Mapped out journeys for shopping, community sharing, and product insights."
        },
        {
          title: "UI Design & Visual Identity",
          description: "Crafted a bold, Gen Z-friendly look that feels playful yet credible."
        },
        {
          title: "Prototyping & Testing",
          description: "Built and tested interactive prototypes to refine key interactions."
        },
        {
          title: "Micro-Interactions & UI Polish",
          description: "Added subtle animations and polished details for a lively user experience."
        },
        {
          title: "Iterating with Feedback Loops",
          description: "Continuously improved designs with user and stakeholder inputs."
        }
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
      process: [
        {
          icon: <Search className="w-6 h-6 text-black" />,
          title: "Research",
          description: "Looked at how young people actually find and book events",
          details: [
            "Existing event apps looked like they were from 2015",
            "People share events through Instagram stories, not apps",
            "Everyone wants to see what the vibe looks like before going",
            "Nobody wants to fill out long forms to book tickets"
          ],
          outcome: "Young people want visual, fast, social event discovery."
        },
        {
          icon: <Palette className="w-6 h-6 text-black" />,
          title: "Visual Design",
          description: "Made it dark, bold, and energetic like the events themselves",
          details: [
            "Dark background because it feels more party-like",
            "Bright neon colors for buttons and highlights",
            "Big event photos so you know what you're getting into",
            "Quick swipe-through cards instead of boring lists",
            "One-tap booking - no endless forms"
          ],
          outcome: "Interface that actually matches the energy of going out.",
          image: partyAppImage
        },
        {
          icon: <Smartphone className="w-6 h-6 text-black" />,
          title: "Full App Design",
          description: "Designed 20+ screens in about 6 weeks",
          details: [
            "Onboarding that doesn't suck",
            "Home feed with swipeable event cards",
            "Event details with photos and quick booking",
            "Profile and friends features for social discovery"
          ],
          outcome: "Complete party app that feels like social media."
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
      title: "ANTRIKSH Space App",
      subtitle: "Space Exploration Education",
      challenge: "Space science education often feels distant and hard to relate to for everyday users.",
      solution: "Created an engaging space exploration app with interactive UI and visual storytelling to make astronomy accessible.",
      description: "Space exploration app designed to spark curiosity through engaging UI and educational content.",
      image: antrikshImage,
      tags: ["Space", "Education", "UI Design"],
      color: "cyan" as const,
      liveUrl: "https://www.figma.com/design/qIu69BaUttOHk960WYNEzN/ANTRIKSH?node-id=37-2&t=BaKROVGCp11BBWEE-1",
      metrics: [
        { label: "Educational Focus", value: "Space Science" },
        { label: "Target Audience", value: "General Public" }
      ],
      process: [
        {
          icon: <Search className="w-6 h-6 text-black" />,
          title: "Space Education Research",
          description: "Researched how to make space science engaging for general audiences",
          details: [
            "Studied existing space education apps",
            "Found need for visual storytelling",
            "Identified curiosity as key motivator"
          ],
          outcome: "Understanding that interactive visuals make space concepts more accessible."
        }
      ]
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
      metrics: [
        { label: "Research Based", value: "User Focused" },
        { label: "Modern Design", value: "Contemporary" }
      ],
      process: [
        {
          icon: <Users className="w-6 h-6 text-black" />,
          title: "University Research",
          description: "Studied current university website trends and user needs",
          details: [
            "Analyzed modern university designs",
            "Researched student navigation patterns",
            "Identified key information priorities"
          ],
          outcome: "Clear understanding of what makes university websites effective."
        }
      ]
    },
    {
      title: "Social Media Campaigns",
      subtitle: "Brand Campaign Design",
      challenge: "Creating consistent visual identity across multiple social media campaigns and platforms.",
      solution: "Developed cohesive design system for social media campaigns with consistent branding and engaging visuals.",
      description: "Creative designs for various social media campaigns with consistent brand identity and engaging visuals.",
      image: socialMediaCreativesImage,
      tags: ["Social Media", "Branding", "Campaigns"],
      color: "blue" as const,
      liveUrl: "https://www.figma.com/design/yh1oXLg13y9W0hyRhDHMwo/Social-Media-Creatives?node-id=1-4&t=buwF0Q9XZq1OWero-1",
      metrics: [
        { label: "Campaign Types", value: "Multiple" },
        { label: "Brand Consistency", value: "High" }
      ],
      process: [
        {
          icon: <Palette className="w-6 h-6 text-black" />,
          title: "Brand Development",
          description: "Created consistent visual identity across campaigns",
          details: [
            "Developed brand color palettes",
            "Created consistent typography system",
            "Designed adaptable layouts for different platforms"
          ],
          outcome: "Cohesive brand presence across all social media channels."
        }
      ]
    }
  ];

  const [scrollX, setScrollX] = useState(0);
  
  // Create enough copies for seamless infinite scroll
  const infiniteProjects = Array(10).fill(projects).flat();

  // Smooth infinite scroll with requestAnimationFrame
  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (!isHovered) {
        setScrollX(prev => prev - 4); // Increased to 4px movement per frame for faster, smooth scroll
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <>

      <section id="projects" className="py-20 bg-black particles-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText
            text="Featured Projects"
            className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            delay={0}
          />
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Design work that solves real problems
          </motion.p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Straight Running Carousel Track */}
            <div className="relative overflow-hidden">
            <div 
              className="flex gap-8"
              style={{ 
                transform: `translateX(${scrollX}px)`,
                width: 'max-content',
                willChange: 'transform',
                transition: isHovered ? 'transform 0.3s ease-out' : 'none'
              }}
            >
              {infiniteProjects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <motion.div
                    className="group bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer h-full flex flex-col shadow-2xl hover:shadow-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="w-6 h-6 text-white mx-auto mb-2" />
                          <p className="text-white text-sm font-medium">View Design Process</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-auto">

                        <button className="w-full bg-white text-black py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                          {project.title === "Social Media Campaigns" ? "View Creative Work" : 
                           project.title === "DUUET" ? "View Design Process" : "View Case Study"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          </div>
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
