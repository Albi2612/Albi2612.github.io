import { useState } from 'react';
import { Terminal, Award, Code, ArrowDownRight, Mail, Send, CheckCircle2, ShieldAlert, Network, Key, ChefHat, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/1679A7" },
  { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit/FFFFFF" },
  { name: "Snort", icon: ShieldAlert, color: "#ef4444" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "PowerShell", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png" },
  { name: "Nmap", icon: Network, color: "#3b82f6" },
  { name: "John the Ripper", icon: Key, color: "#eab308" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk/FFFFFF" },
  { name: "Active Directory", icon: "https://img.icons8.com/color/144/azure-active-directory.png" },
  { name: "CyberChef", icon: ChefHat, color: "#10b981" }
];

const certifications = [
  { name: "Microsoft SC-900", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Cybersecurity for Everyone (Coursera)", icon: "https://cdn.simpleicons.org/coursera/2A73CC" },
  { name: "Ethical Hacking Essentials (Coursera)", icon: "https://cdn.simpleicons.org/coursera/2A73CC" },
  { name: "Vulnerability Assessment Qualys", icon: "https://cdn.simpleicons.org/qualys/ED2E38" },
  { name: "Cyber Security 101 (TryHackMe)", icon: "https://cdn.simpleicons.org/tryhackme/FFFFFF" }
];

const projects = [
  {
    title: "Network Security Honeypot (Web & SSH)",
    details: [
      "Developed a hybrid Web and SSH-based honeypot designed to detect and log unauthorized access attempts and malicious activity.",
      "Integrated Azure for deployment and used Python to script automated logging and alerting mechanisms.",
      "Analyzed attacker behavior and traffic patterns to improve proactive defense strategies and incident response workflows."
    ],
    link: "https://github.com/Albi2612/HoneyPot"
  },
  { 
    title: "Python-Based Stealth Keylogger",
    details: [
      "Developed a specialized security tool in Python to monitor and log keyboard inputs for authorized security testing and forensic analysis.",
      "Implemented secure data storage and exfiltration methods to understand the lifecycle of credential-harvesting malware.",
      "Focused on the ethical hacking perspective to identify vulnerabilities in endpoint input security."
    ],
    link: "https://github.com/Albi2612/Keylogger"
  },
  { 
    title: "QR Code Generator",
    details: [
      "QR Code Generator (PyQt5 + Python). A simple desktop application built with PyQt5 and qrcode library that lets you generate and save QR codes for any text or URL."
    ],
    link: "https://github.com/Albi2612/QR_Code_Generator"
  },
  { 
    title: "Weather GUI Application",
    details: [
      "Designed a sleek desktop application using PyQt5 that retrieves and displays real-time global weather data.",
      "Leveraged the OpenWeatherMap API to fetch JSON data and parsed it to provide users with accurate local forecasts.",
      "Focused on GUI/UX design principles to ensure an intuitive and responsive desktop interface."
    ],
    link: "https://github.com/Albi2612/Weather_API"
  },
  { 
    title: "Academic AI Chatbot",
    details: [
      "Architected an AI-driven chatbot tailored for the higher education sector to assist students with curriculum-specific queries.",
      "Utilized Natural Language Processing (NLP) concepts to improve the accuracy of responses and student engagement.",
      "Integrated a knowledge base to provide 24/7 academic support and learning resources."
    ]
  }
];

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const getAnimationProps = (delay: number = 0) => {
    return {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
    };
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "d00773cc-66d6-4158-83bc-0db50514080e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setResultMessage("Message sent successfully!");
        event.currentTarget.reset();
        setTimeout(() => setFormStatus('idle'), 5000); // Reset after 5 seconds
      } else {
        console.log("Error", data);
        setFormStatus('error');
        setResultMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
      setResultMessage("Failed to send message. Please check your connection or disable adblockers.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ccff00] selection:text-black p-4 md:p-6 flex flex-col items-center">
      
      {/* Main Container with Glowing Border (Hero) */}
      <motion.div 
        {...getAnimationProps(0)}
        id="home" 
        className="w-full max-w-[1400px] min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8 shrink-0"
      >
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

        <Navbar />

        {/* Main Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center pb-16">
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tight text-[#ccff00] leading-none mb-8 drop-shadow-[0_0_30px_rgba(204,255,0,0.3)]">
            Albi Varghese
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl font-light leading-relaxed mb-10">
            I am a B.Tech graduate with a dedicated focus on the evolving landscape of cybersecurity. My background is built on a strong technical foundation, driven by a commitment to understanding and mitigating modern digital threats.
          </p>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ccff00] text-black rounded-full font-medium text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Connect Now <ArrowDownRight className="w-5 h-5 -rotate-45" />
          </a>
        </main>

      </motion.div>

      {/* Skills Section */}
      <motion.div 
        {...getAnimationProps(0.1)}
        id="skills" 
        className="w-full max-w-[1400px] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8"
      >
        
        {/* Subtle Background Glow (Matching Hero) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="flex items-center gap-4 mb-10 md:mb-16 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center border border-[#ccff00]/20">
            <Terminal className="w-6 h-6 text-[#ccff00]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Technical <span className="text-[#ccff00]">Skills</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-3 md:gap-4 relative z-10">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="pr-3 pl-5 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/50 hover:text-[#ccff00] transition-all duration-300 cursor-pointer text-sm md:text-base font-medium shadow-sm flex items-center gap-3 group"
            >
              {typeof skill.icon === 'string' ? (
                <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
              ) : (
                <skill.icon className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: skill.color }} />
              )}
              <span>{skill.name}</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ccff00] transition-colors shrink-0 ml-1">
                <ArrowDownRight className="w-4 h-4 text-white/50 group-hover:text-black group-hover:-rotate-45 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div 
        {...getAnimationProps(0.1)}
        id="certifications" 
        className="w-full max-w-[1400px] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8"
      >
        
        {/* Subtle Background Glow (Matching Hero) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="flex items-center gap-4 mb-10 md:mb-16 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center border border-[#ccff00]/20">
            <Award className="w-6 h-6 text-[#ccff00]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            <span className="text-[#ccff00]">Certifications</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
          {certifications.map((cert) => (
            <div 
              key={cert.name} 
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/50 transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <img src={cert.icon} alt={cert.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <span className="text-base md:text-lg font-medium text-white/90 group-hover:text-[#ccff00] transition-colors">{cert.name}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ccff00] transition-colors shrink-0">
                <ArrowDownRight className="w-5 h-5 text-white/50 group-hover:text-black group-hover:-rotate-45 transition-all" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center relative z-10">
          <p className="text-white/70 text-sm md:text-base">
            All my certifications can be viewed via <a href="https://www.linkedin.com/in/albi-varghese-70b369338" target="_blank" rel="noopener noreferrer" className="text-[#ccff00] hover:underline font-medium transition-all">Linkedin</a>
          </p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        {...getAnimationProps(0.1)}
        id="projects" 
        className="w-full max-w-[1400px] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8"
      >
        
        {/* Subtle Background Glow (Matching Hero) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="flex items-center gap-4 mb-10 md:mb-16 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center border border-[#ccff00]/20">
            <Code className="w-6 h-6 text-[#ccff00]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Featured <span className="text-[#ccff00]">Projects</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.title;
            return (
              <div 
                key={project.title} 
                onClick={() => project.details ? setExpandedProject(isExpanded ? null : project.title) : null}
                className={`p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col justify-center gap-4 group ${project.details ? 'cursor-pointer' : ''} ${isExpanded ? 'md:col-span-2 bg-[#ccff00]/5 border-[#ccff00]/30' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg md:text-xl font-medium text-white/90 group-hover:text-[#ccff00] transition-colors pr-4">{project.title}</span>
                  <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ccff00] transition-colors shrink-0 ${isExpanded ? 'bg-[#ccff00]' : ''}`}>
                    {project.details ? (
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'text-black rotate-180' : 'text-white/50 group-hover:text-black'}`} />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-white/50 group-hover:text-black group-hover:-rotate-45 transition-all" />
                    )}
                  </div>
                </div>
                
                {/* Expandable Details */}
                <div className={`grid transition-all duration-300 ease-in-out ${isExpanded && project.details ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-3 text-white/70 font-light text-base md:text-lg list-disc pl-5">
                      {project.details?.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                    {/* Project Link */}
                    {/* @ts-ignore */}
                    {project.link && (
                      <div className="mt-6">
                        <a 
                          // @ts-ignore
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 text-[#ccff00] hover:text-white transition-colors font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project on GitHub <ArrowDownRight className="w-4 h-4 -rotate-45" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center relative z-10">
          <p className="text-white/70 text-sm md:text-base">
            All my projects can be viewed via <a href="https://github.com/Albi2612" target="_blank" rel="noopener noreferrer" className="text-[#ccff00] hover:underline font-medium transition-all">GitHub</a>
          </p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        {...getAnimationProps(0.1)}
        id="contact" 
        className="w-full max-w-[1400px] border border-[#ccff00]/30 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_60px_rgba(204,255,0,0.08)] mb-6 md:mb-8"
      >
        
        {/* Subtle Background Glow (Matching Hero) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#ccff00]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          
          {/* Left Column: Text & Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
              Let's <span className="text-[#ccff00]">Connect</span>
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-10 max-w-lg">
              I'm currently seeking entry-level opportunities and internships in cybersecurity. For collaborations, projects, or professional inquiries, feel free to get in touch.
            </p>
            <a href="mailto:albikpaul@gmail.com" className="flex items-center gap-4 text-white/90 hover:text-[#ccff00] transition-colors w-fit group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ccff00]/50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium">albikpaul@gmail.com</span>
            </a>
          </div>

          {/* Right Column: Form */}
          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Your name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="your@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/80">Message</label>
              <textarea 
                name="message"
                required
                placeholder="Your message..." 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all resize-none"
              ></textarea>
            </div>
            
            {/* Hidden subject field for Web3Forms */}
            <input type="hidden" name="subject" value="New Contact from Portfolio Website" />
            
            <button 
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-4 bg-[#ccff00] text-black rounded-xl text-base font-bold hover:bg-[#b3e600] transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.4)] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              {formStatus !== 'submitting' && <Send className="w-4 h-4" />}
            </button>

            {formStatus === 'success' && (
              <div className="flex items-center gap-2 text-[#ccff00] text-sm font-medium justify-center mt-2">
                <CheckCircle2 className="w-4 h-4" />
                {resultMessage}
              </div>
            )}
            {formStatus === 'error' && (
              <div className="text-red-400 text-sm font-medium text-center mt-2">
                {resultMessage}
              </div>
            )}
          </form>

        </div>
      </motion.div>

    </div>
  );
}
