import { motion } from "framer-motion";
import { ArrowRight, MapPin, Coffee, Camera, Globe } from "lucide-react";
import bg__1_ from "../../assets/bg-1.png";

export function About() {
  const skills = [
    "UI/UX Design", "Figma", "Design Research", 
    "Branding", "Interaction Design", "Prototyping"
  ];

  return (
    <section id="about" className="py-32  relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
          >
            Behind the<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-500">Pixels.</span>
          </motion.h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto auto-rows-[minmax(180px,auto)]">
          
          {/* Main Bio Card (Spans 8 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 row-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500"
          >
            <div className="mb-8">
              <h3 className="font-serif text-3xl text-white mb-6">Hi, I'm Bhavya.</h3>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  I'm a UI/UX and visual designer with a passion for social media and branding. At its core, my work is about figuring out how to make digital experiences look better, function seamlessly, and communicate clearly.
                </p>
                <p>
                  I've always been detail-oriented, which naturally drew me into the world of design. There's nothing quite like the process of taking a rough concept and shaping it into something people can actually use and connect with.
                </p>
                <p>
                  Lately, I've been diving deep into product design and user behavior—exploring how intentional design can make everyday digital experiences a little easier and a lot more enjoyable.
                </p>
                <p>
                  Outside of the screen, you'll find me traveling, taking photos, or watching cricket. I'm always open to meeting new people, learning new things, and collaborating on interesting projects.
                </p>
                <p className="text-teal-400 font-medium pt-2">
                  P.S. — I'm currently taking on freelance projects. If you need a hand with visual or UI work, let's connect!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 uppercase tracking-widest font-medium">
              <span>Scroll to explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Photo Card (Spans 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 row-span-2 rounded-3xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img 
              src={bg__1_} 
              alt="Bhavya Kapoor" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-white/90 font-medium">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>India</span>
            </div>
          </motion.div>

          {/* Skills Marquee Card (Spans 12 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 bg-teal-950/20 border border-teal-900/30 rounded-3xl p-8 overflow-hidden flex items-center relative"
          >
            <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#030505] to-transparent z-10" />
            <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#030505] to-transparent z-10" />
            
            <div className="flex gap-12 whitespace-nowrap animate-scroll items-center">
              {[...skills, ...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-teal-100/40 hover:text-teal-400 transition-colors cursor-default">
                    {skill}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-teal-500/30" />
                </div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}