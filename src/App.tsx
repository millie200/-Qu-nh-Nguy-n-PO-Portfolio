/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ExternalLink, 
  Figma, 
  Layout, 
  Users, 
  Target, 
  Zap, 
  Mail, 
  Linkedin, 
  Phone, 
  Award, 
  ChevronRight,
  Menu,
  X,
  Code,
  Search,
  PenTool,
  CheckCircle2,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  role: string;
  impact: string;
  image: string;
  problem: string;
  solution: string;
  process: string[];
  metrics: string[];
  tags: string[];
}

// --- Data ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ahafood",
    title: "Ahafood.ai",
    subtitle: "AI-Powered Food Delivery Ecosystem",
    industry: "Food Delivery & AI",
    role: "Product Owner & UI/UX Designer",
    impact: "7K+ Daily Engaged Sessions | 4K+ Orders/Day",
    image: "/input_file_2.png",
    problem: "Navigating a complex food delivery marketplace with thousands of options can lead to decision fatigue and high drop-off rates for users.",
    solution: "Implemented AI-driven personalization and streamlined ordering flows to reduce friction and improve merchant-user matching.",
    process: [
      "User Research & Journey Mapping",
      "Wireframing & Low-Fi Prototyping",
      "High-Fidelity UI Design in Figma",
      "A/B Testing & Iteration based on Analytics"
    ],
    metrics: [
      "~30% Increase in Merchant Finance feature adoption",
      "59% M+1 User Retention",
      "4.78 Average App Rating"
    ],
    tags: ["AI", "Marketplace", "B2C", "B2B"]
  },
  {
    id: "clinger",
    title: "Clinger",
    subtitle: "Social Networking & Dating Platform",
    industry: "Social/Dating",
    role: "Product Owner",
    impact: "10,000% User Growth in 9 Months",
    image: "/input_file_1.png",
    problem: "New social apps often struggle with initial traction and user retention due to lack of meaningful engagement loops.",
    solution: "Designed core engagement features and subscription models that drove exponential growth and initial revenue without marketing spend.",
    process: [
      "Competitive Analysis",
      "Feature Prioritization (MoSCoW)",
      "User Flow Optimization",
      "Monetization Strategy Design"
    ],
    metrics: [
      "10,000% User Growth",
      "Revenue generated from 22 subscription packages",
      "Zero marketing spend during initial growth phase"
    ],
    tags: ["Social", "Growth", "Monetization"]
  },
  {
    id: "voicereplay",
    title: "VoiceReplay.ai",
    subtitle: "AI-Generated Voice Application",
    industry: "AI Products",
    role: "Product Owner",
    impact: "100% Retention for Second-Time Usage",
    image: "/input_file_0.png",
    problem: "AI voice technology can feel impersonal and difficult to use for non-technical users.",
    solution: "Simplified the voice generation interface to focus on 'one-click' results, leading to high user satisfaction and repeat usage.",
    process: [
      "Technical Feasibility Assessment",
      "User Persona Development",
      "Minimalist UI Design",
      "Feedback Loop Integration"
    ],
    metrics: [
      "100% Retention for second-time usage",
      "Successful launch at InnoEx startup event",
      "190+ early adopters with zero marketing"
    ],
    tags: ["AI", "SaaS", "Product Thinking"]
  }
];

const SKILLS = [
  { name: "UX Research", icon: <Search className="w-5 h-5" /> },
  { name: "Wireframing", icon: <Layout className="w-5 h-5" /> },
  { name: "Prototyping", icon: <PenTool className="w-5 h-5" /> },
  { name: "Design Systems", icon: <Code className="w-5 h-5" /> },
  { name: "Usability Testing", icon: <CheckCircle2 className="w-5 h-5" /> },
  { name: "Product Thinking", icon: <Target className="w-5 h-5" /> },
  { name: "Data Analytics", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Interaction Design", icon: <Zap className="w-5 h-5" /> }
];

const TOOLS = ["Figma", "FigJam", "Adobe XD", "Notion", "Miro", "Jira", "Trello", "Gemini", "Claude"];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-black">
          QUỲNH<span className="text-emerald-600">.</span>NGUYỄN
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-black/60 hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-black/80 transition-all">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
          Available for new opportunities
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
          Designing products that <br />
          <span className="text-black/40 italic">solve real problems</span> <br />
          and drive business impact.
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mb-10 leading-relaxed">
          I'm Quỳnh Nguyễn, a Product Owner & UI/UX Designer with 2.5+ years of experience 
          owning food delivery & AI products. I specialize in turning vague business needs into 
          shippable features with measurable impact.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#work" className="px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-black/80 transition-all flex items-center gap-2">
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="px-8 py-4 border border-black/10 font-medium rounded-xl hover:bg-black/5 transition-all">
            Get in Touch
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/3 aspect-[3/4] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl rotate-3"
      >
        <img 
          src="/input_file_3.png" 
          alt="Quỳnh Nguyễn" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const CaseStudyCard = ({ study, index, onClick }: { study: CaseStudy; index: number; onClick: () => void; key?: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className="group cursor-pointer relative bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-black/10 transition-all hover:shadow-2xl hover:shadow-black/5"
  >
    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
      <img 
        src={study.image} 
        alt={study.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">
            {study.industry}
          </span>
          <h3 className="text-2xl font-bold text-black mb-1">{study.title}</h3>
          <p className="text-black/60 text-sm">{study.subtitle}</p>
        </div>
        <div className="flex gap-2">
          {study.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-[10px] font-bold rounded-md uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="py-4 border-t border-black/5">
        <p className="text-sm font-medium text-black/80 mb-2">Key Impact:</p>
        <p className="text-sm text-black/60 italic">"{study.impact}"</p>
      </div>
      <div className="mt-6 w-full py-3 border border-black/10 rounded-xl text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-black group-hover:text-white transition-all">
        View Case Study <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

const CaseStudyModal = ({ study, onClose }: { study: CaseStudy; onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <div className="sticky top-0 bg-white/80 backdrop-blur-md p-6 border-b border-black/5 flex justify-between items-center z-10">
        <h2 className="text-2xl font-bold">{study.title}</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="p-8 md:p-12">
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full aspect-video object-cover rounded-2xl mb-12"
          referrerPolicy="no-referrer"
        />
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" /> The Problem
              </h3>
              <p className="text-black/70 leading-relaxed text-lg">{study.problem}</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" /> The Solution
              </h3>
              <p className="text-black/70 leading-relaxed text-lg">{study.solution}</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-6">Design Process</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.process.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-black/5">
                    <div className="w-6 h-6 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-black/80">{step}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4">Impact & Metrics</h4>
              <ul className="space-y-4">
                {study.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-emerald-900/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-2xl border border-black/5">
              <h4 className="text-sm font-bold text-black/40 uppercase tracking-widest mb-4">Project Details</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-black/40 uppercase">Role</p>
                  <p className="text-sm font-medium">{study.role}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-black/40 uppercase">Industry</p>
                  <p className="text-sm font-medium">{study.industry}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-black/40 uppercase">Tags</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-white border border-black/5 text-[10px] font-bold rounded uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const About = () => (
  <section id="about" className="py-24 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto grid md:grid-row-2 lg:grid-cols-2 gap-16 items-start">
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg text-sm">01</span>
          About Me
        </h2>
        <div className="space-y-6 text-black/70 leading-relaxed text-lg">
          <p>
            I am a Product Owner with a strong foundation in UI/UX design. My unique background allows me to bridge the gap between business strategy, user needs, and technical implementation.
          </p>
          <p>
            With over 2.5 years of experience in real production environments, I've owned end-to-end product lifecycles—from discovery and research to high-fidelity design and post-release support.
          </p>
          <p>
            I believe that great design isn't just about how it looks, but how it works to solve a problem and achieve a business goal.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-4xl font-bold text-black mb-2">2.5+</h4>
            <p className="text-sm text-black/50 uppercase font-bold tracking-wider">Years Exp</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-black mb-2">50+</h4>
            <p className="text-sm text-black/50 uppercase font-bold tracking-wider">Features Shipped</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
        <h3 className="text-xl font-bold mb-8">Design Philosophy</h3>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Outcome over Output</h4>
              <p className="text-sm text-black/60">I focus on the measurable impact a feature has on user behavior and business metrics, not just the number of screens designed.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold mb-1">User-Centric Empathy</h4>
              <p className="text-sm text-black/60">Every pixel serves a purpose. I advocate for the user at every stage of the product lifecycle to ensure we're solving the right problems.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Zap className="text-purple-600" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Iterative Excellence</h4>
              <p className="text-sm text-black/60">Design is never finished. I use data and feedback loops to continuously refine and improve the product experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg text-sm">02</span>
          My Design Process
        </h2>
        <p className="text-black/60 max-w-xl">A structured framework I use to navigate from vague business ideas to polished, user-centered solutions.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Discover", desc: "User research, stakeholder interviews, and competitive analysis to define the problem space." },
          { step: "02", title: "Define", desc: "User personas, journey mapping, and feature prioritization based on business goals." },
          { step: "03", title: "Design", desc: "Iterative wireframing, prototyping, and high-fidelity UI design focused on usability." },
          { step: "04", title: "Deliver", desc: "Developer handoff, QA support, and post-launch monitoring for continuous improvement." }
        ].map((item, i) => (
          <div key={i} className="relative p-8 bg-gray-50 rounded-3xl border border-black/5">
            <span className="text-5xl font-black text-black/5 absolute top-4 right-6">{item.step}</span>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-sm text-black/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="py-24 px-6 bg-black text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">Skills & Toolkit</h2>
          <p className="text-white/60 mb-12 max-w-md">
            I leverage a diverse set of technical and soft skills to deliver high-quality product experiences.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-emerald-400">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Figma className="w-5 h-5 text-purple-400" /> Tools I Use
          </h3>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" /> Key Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>First Prize Winner - UTE Eloquence Contest Season 2</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>Second Place Winner - UTE Logistics Talents</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>Rank 10th - LOGSTORM 2022: Logistics Startup Game</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Let's build something <span className="italic text-black/40">impactful</span> together.</h2>
      <p className="text-xl text-black/60 mb-12">
        I'm always open to discussing new projects, design opportunities, or product strategies.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a href="mailto:nguyenngocnhuq@gmail.com" className="w-full md:w-auto px-8 py-4 bg-black text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform">
          <Mail className="w-5 h-5" /> nguyenngocnhuq@gmail.com
        </a>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/nhuquynh" target="_blank" className="p-4 border border-black/10 rounded-2xl hover:bg-gray-50 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="tel:0382239127" className="p-4 border border-black/10 rounded-2xl hover:bg-gray-50 transition-colors">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-black/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm text-black/40">© 2024 Quỳnh Nguyễn. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="text-sm font-medium text-black/40 hover:text-black transition-colors">Back to top</a>
        <a href="https://linkedin.com/in/nhuquynh" className="text-sm font-medium text-black/40 hover:text-black transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="work" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg text-sm">03</span>
                  Selected Work
                </h2>
                <p className="text-black/60 max-w-md">A collection of projects where I've led product strategy and design to solve complex user problems.</p>
              </div>
              <div className="hidden md:block">
                <span className="text-sm font-bold text-black/20 uppercase tracking-widest">Click to view details</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {CASE_STUDIES.map((study, i) => (
                <CaseStudyCard 
                  key={study.id} 
                  study={study} 
                  index={i} 
                  onClick={() => setSelectedStudy(study)}
                />
              ))}
            </div>
          </div>
        </section>

        <About />
        <Process />
        <SkillsSection />
        <Contact />
      </main>

      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyModal 
            study={selectedStudy} 
            onClose={() => setSelectedStudy(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
