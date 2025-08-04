import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Mail, Phone, Linkedin } from "lucide-react";

export function Contact() {

  return (
    <>

      <section id="contact" className="py-20 bg-black particles-dark relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <AnimatedText
              text="Let's Connect"
              className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              delay={0}
            />
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
          </div>
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >Have a project in mind? Let's create something amazing together.</motion.p>
          
          {/* Contact Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Email Block */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <a href="mailto:bhavya.kapoorr@gmail.com" className="block">
                <div className="relative bg-white/5 backdrop-blur-lg p-8 border border-white/20 hover:border-purple-400/60 transition-all duration-500 group text-center rounded-xl hover:bg-white/10 cursor-pointer overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="p-3 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300">
                        <Mail className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    <h4 className="font-bold text-white mb-2 text-lg">Email</h4>
                    <span className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                      bhavya.kapoorr@gmail.com
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
            
            {/* Phone Block */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white/5 backdrop-blur-lg p-8 border border-white/20 hover:border-teal-400/60 transition-all duration-500 group text-center rounded-xl hover:bg-white/10 hover:scale-105 cursor-pointer overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-all duration-300">
                      <Phone className="w-8 h-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Phone</h4>
                  <a 
                    href="tel:+919675990014"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
                  >
                    +91 9675990014
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* LinkedIn Block */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white/5 backdrop-blur-lg p-8 border border-white/20 hover:border-blue-400/60 transition-all duration-500 group text-center rounded-xl hover:bg-white/10 hover:scale-105 cursor-pointer overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                      <Linkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/bhavyakapoorr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
