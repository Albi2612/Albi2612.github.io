import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Music, Youtube, Award, Briefcase, Plus, Bike, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

export default function Personal() {
  const getAnimationProps = (delay: number = 0) => {
    return {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
    };
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ccff00] selection:text-black p-4 md:p-6 flex flex-col items-center">
      
      {/* Header Container */}
      <motion.div 
        {...getAnimationProps(0)}
        className="w-full max-w-[1400px] min-h-[40vh] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8 shrink-0"
      >
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

        {/* Navbar */}
        <Navbar />

        {/* Header Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center pb-12 pt-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#ccff00] leading-none mb-6 drop-shadow-[0_0_30px_rgba(204,255,0,0.3)]">
            Beyond the Code
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
            A glimpse into my life, passions, and creative pursuits outside of cybersecurity and technology.
          </p>
        </main>
      </motion.div>

      {/* Section 1: Music & Teaching */}
      <motion.div 
        {...getAnimationProps(0.1)}
        className="w-full max-w-[1400px] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8"
      >
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-12 relative z-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center border border-[#ccff00]/20">
            <Music className="w-6 h-6 text-[#ccff00]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Music & <span className="text-[#ccff00]">Teaching</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-12 relative z-10">
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-lg md:text-xl max-w-3xl text-center">
            <p>
              I am a classical piano tutor specializing in training students for the Trinity College London (TCL) examinations. I am a certified piano tutor recognized by Trinity College London and hold a <strong className="text-[#ccff00] font-medium">TCL Piano Grade 5</strong> certification.
            </p>
            <p>
              I also hold a <strong className="text-[#ccff00] font-medium">Trinity College London Acoustic Guitar Grade 2</strong> certification.
            </p>
            <p>
              I have two years of teaching experience at Leveluxe Modern Music Academy, where I served as the Head of the Piano Department.
            </p>
          </div>

          {/* Cards & Links */}
          <div className="flex flex-col w-full max-w-3xl gap-6">
            <a href="https://www.youtube.com/@AlbiVarghese2526" target="_blank" rel="noopener noreferrer" className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col justify-center group cursor-pointer text-left">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-1 group-hover:text-[#ccff00] transition-colors">YouTube Channel</h3>
              <p className="text-white/60 text-sm md:text-base">I share piano content and performances.</p>
              <p className="text-[#ccff00] text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity">youtube.com/@AlbiVarghese2526</p>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
               <div className="p-6 rounded-3xl border border-white/10 bg-white/5 flex flex-col gap-4 text-left">
                 <Award className="w-8 h-8 text-[#ccff00]" />
                 <div className="flex flex-col">
                   <span className="font-medium text-white text-lg">TCL Certified</span>
                   <span className="text-sm text-white/60">Piano & Guitar</span>
                 </div>
               </div>
               <div className="p-6 rounded-3xl border border-white/10 bg-white/5 flex flex-col gap-4 text-left">
                 <Briefcase className="w-8 h-8 text-[#ccff00]" />
                 <div className="flex flex-col">
                   <span className="font-medium text-white text-lg">Head of Piano Department</span>
                   <span className="text-sm text-white/60">Leveluxe Modern Music Academy</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Cycling */}
      <motion.div 
        {...getAnimationProps(0.1)}
        className="w-full max-w-[1400px] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8"
      >
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-12 relative z-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center border border-[#ccff00]/20">
            <Bike className="w-6 h-6 text-[#ccff00]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Endurance <span className="text-[#ccff00]">Cycling</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-12 relative z-10">
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-lg md:text-xl max-w-3xl text-center">
            <p>
              I am a passionate endurance cyclist and hold the <strong className="text-[#ccff00] font-medium">“Randonneur”</strong> title, recognized by Audax Club Parisien.
            </p>
            <p>
              I have also worked part-time as a cycling trainer at CultFit and part-time in the cycling department at Decathlon, where I helped people with cycling training and equipment.
            </p>
          </div>

          {/* Cards & Links */}
          <div className="flex flex-col w-full max-w-3xl gap-6">
            <a href="https://www.strava.com/athletes/67875494" target="_blank" rel="noopener noreferrer" className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col justify-center group cursor-pointer text-left">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-1 group-hover:text-[#ccff00] transition-colors">Strava Profile</h3>
              <p className="text-white/60 text-sm md:text-base">Follow my endurance cycling journeys and rides.</p>
              <p className="text-[#ccff00] text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity">strava.com/athletes/67875494</p>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
               <div className="p-6 rounded-3xl border border-white/10 bg-white/5 flex flex-col gap-4 text-left">
                 <Award className="w-8 h-8 text-[#ccff00]" />
                 <div className="flex flex-col">
                   <span className="font-medium text-white text-lg">Randonneur</span>
                   <span className="text-sm text-white/60">Audax Club Parisien</span>
                 </div>
               </div>
               <div className="p-6 rounded-3xl border border-white/10 bg-white/5 flex flex-col gap-4 text-left">
                 <Briefcase className="w-8 h-8 text-[#ccff00]" />
                 <div className="flex flex-col">
                   <span className="font-medium text-white text-lg">Cycling Trainer</span>
                   <span className="text-sm text-white/60">CultFit & Decathlon</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 3: Blogging */}
      <motion.div 
        {...getAnimationProps(0.1)}
        className="w-full max-w-[1400px] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8"
      >
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-12 relative z-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center border border-[#ccff00]/20">
            <PenTool className="w-6 h-6 text-[#ccff00]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Writing & <span className="text-[#ccff00]">Blogs</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-12 relative z-10">
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-white/80 font-light leading-relaxed text-lg md:text-xl max-w-3xl text-center">
            <p>
              I enjoy writing blogs and sharing my thoughts and experiences.
            </p>
          </div>

          {/* Cards & Links */}
          <div className="flex flex-col w-full max-w-3xl gap-6">
            <a href="https://medium.com/@appukuttan2526" target="_blank" rel="noopener noreferrer" className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col justify-center group cursor-pointer text-left">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-1 group-hover:text-[#ccff00] transition-colors">Medium Blog</h3>
              <p className="text-white/60 text-sm md:text-base">Read my latest articles and thoughts.</p>
              <p className="text-[#ccff00] text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity">medium.com/@appukuttan2526</p>
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
