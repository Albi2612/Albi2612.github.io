import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full p-4 md:p-6 md:px-10 md:py-8 relative z-50">
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
          <span className="font-bold text-xs md:text-sm">AV</span>
        </div>
        <div className="font-medium text-base md:text-lg tracking-tight text-white/90 whitespace-nowrap">Albi Varghese</div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
        {isHome ? (
          <>
            <a href="#home" className="hover:text-[#ccff00] transition-colors whitespace-nowrap">Home</a>
            <a href="#skills" className="hover:text-[#ccff00] transition-colors whitespace-nowrap">Skills</a>
            <a href="#certifications" className="hover:text-[#ccff00] transition-colors whitespace-nowrap">Certifications</a>
            <a href="#projects" className="hover:text-[#ccff00] transition-colors whitespace-nowrap">Projects</a>
            <a href="#contact" className="hover:text-[#ccff00] transition-colors whitespace-nowrap">Contact</a>
          </>
        ) : (
          <Link to="/" className="hover:text-[#ccff00] transition-colors whitespace-nowrap">Home</Link>
        )}
        <Link to="/personal" className={`hover:text-[#ccff00] transition-colors whitespace-nowrap ${location.pathname === '/personal' ? 'text-[#ccff00]' : ''}`}>Personal</Link>
        
        <div className="flex items-center gap-4 ml-2 pl-6 border-l border-white/10 shrink-0">
          <a href="https://www.linkedin.com/in/albi-varghese-70b369338/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/Albi2612" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white/80 hover:text-white p-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl md:hidden z-50">
          <div className="flex flex-col gap-3 text-base font-medium text-white/80">
            {isHome ? (
              <>
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ccff00] transition-colors py-2 border-b border-white/5">Home</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ccff00] transition-colors py-2 border-b border-white/5">Skills</a>
                <a href="#certifications" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ccff00] transition-colors py-2 border-b border-white/5">Certifications</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ccff00] transition-colors py-2 border-b border-white/5">Projects</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ccff00] transition-colors py-2 border-b border-white/5">Contact</a>
              </>
            ) : (
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ccff00] transition-colors py-2 border-b border-white/5">Home</Link>
            )}
            <Link to="/personal" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-[#ccff00] transition-colors py-2 border-b border-white/5 ${location.pathname === '/personal' ? 'text-[#ccff00]' : ''}`}>Personal</Link>
          </div>
          
          <div className="flex items-center gap-5 pt-2">
            <a href="https://www.linkedin.com/in/albi-varghese-70b369338/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Albi2612" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
