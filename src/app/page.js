"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLightbulb,
	faCode,
	faBriefcase,
	faEnvelope,
	faPalette,
	faPeopleGroup,
	faGem,
	faFire,
	faXmark,
	faQuoteLeft,
	faRobot,
	faChartLine,
	faMicrochip,
	faArrowRight,
	faChevronLeft,
	faChevronRight,
	faGuitar,
	faPuzzlePiece,
	faHome,
	faFlask,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faXTwitter,
	faInstagram,
	faGithub,
	faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Import your images
import jakelouis from "./images/jake-louis.png";
import aiHero from "./images/ai-hero.png";
import logo from "./images/logo.svg";
import projectEightLimbs from "./images/project-eight-limbs.png";
import projectEightLimbsMobile from "./images/project-eight-limbs-mobile.png";
import projectLocalAI from "./images/project-local-ai.png";
import projectWhaleTrance from "./images/project-whale-trance.png";
import projectSpiceRapture from "./images/project-spicerapture.png";
import projectMoogfest from "./images/gallery35.jpg";
import projectAlohaVeda from "./images/gallery50.jpg";
import projectGPD from "./images/project-gregory-paolini.png";
import projectMysteryGarden from "./images/project-mystery-garden.jpg";
import projectLoopyGuru from "./images/project-loopy-guru.png";
import projectAiDashboard from "./images/project-ai-dashboard.png";
import projectMusicStudio from "./images/project-music-studio.png";
import projectAkasha from "./images/gallery46.jpg";
import projectSoloStep from "./images/gallery45.jpg";
import projectAntandra from "./images/gallery47.jpg";

import projectCloughGlobal from "./images/project-clough-global.png";
import project1290Funds from "./images/project-1290-funds.png";
import projectXAInvestments from "./images/project-xa-investments.png";

export default function Home() {
	const aboutRef = useRef(null);
	const innovationRef = useRef(null);
	const servicesRef = useRef(null);
	const portfolioRef = useRef(null);
	const testimonialsRef = useRef(null);
	const contactRef = useRef(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [testimonialIndex, setTestimonialIndex] = useState(0);

	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 250]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	const { scrollYProgress: aboutScroll } = useScroll({
		target: aboutRef,
		offset: ["start end", "end start"]
	});
	const aboutY = useTransform(aboutScroll, [0, 1], [-80, 80]);
	const aboutOpacity = useTransform(aboutScroll, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

	const { scrollYProgress: portfolioScroll } = useScroll({
		target: portfolioRef,
		offset: ["start end", "end start"]
	});
	const portfolioY = useTransform(portfolioScroll, [0, 1], [-40, 40]);

	const testimonials = [
		{ 
			name: "Timothy Schultz", 
			role: "Full Stack Engineer", 
			text: "Jacob is a thoughtful and intelligent Software Engineer and a pleasure to work with." 
		},
		{ 
			name: "Jeff Smolinski", 
			role: "Data Scientist", 
			text: "Jacob has wizard level front-end skills. He is able to adapt to changing times and work with code bases altered by multiple forces. He is a bright and pleasant person with creative skills above and beyond office requirements." 
		},
		{ 
			name: "Emmelyn Tan", 
			role: "UX/UI Designer", 
			text: "Jacob is a skilled and high-performing software engineer. He implemented code standards to make builds efficient and consistent. With Jacob’s drive for excellence and continuous improvement, any team would be lucky to have him!" 
		},
		{ 
			name: "Matthew Tuers", 
			role: "Marketing Communications Specialist", 
			text: "If there's ever a problem to be solved using technology, you'll want Jacob on the front lines. His breadth of knowledge in design and web development made him the fulcrum behind advancements in automation and efficiency." 
		},
		{ 
			name: "Patricia Alcivar", 
			role: "Professional Athlete", 
			text: "Working with Jacob for my new website was an absolute pleasure! He is a take-charge person who is able to present creative ideas and communicate the benefits. He is highly dependable and makes any idea into a great design!" 
		},
		{ 
			name: "Nicholas Godfrey", 
			role: "Kimmel & Godfrey Enterprises", 
			text: "Jacob is a very creative thinker. While working on our web design he was very attentive and considerate of our needs and developed an end product that fit to a Tee." 
		},
		{ 
			name: "Brendan Pierpont", 
			role: "Climate Policy Initiative", 
			text: "Jacob is a skilled web designer, offering dynamic and compelling websites to his clients. He's also a talented artist in sonic landscapes and other media, with an innate sense of music and unique point of view." 
		},
		{ 
			name: "Xam Devesh", 
			role: "Marketing Director at SOAR", 
			text: "Jacob is a great designer and web developer. He built a website better than I could have imagined in a really timely manner. I recommend his services to anyone looking for an artistic and intuitive website." 
		}
	];

	const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
	const prevTestimonial = () => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

	const scrollToSection = (ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const openModal = (image) => setSelectedImage(image);
	const closeModal = () => setSelectedImage(null);

	useEffect(() => {
		const handleKeyDown = (e) => { if (e.key === "Escape") closeModal(); };
		if (selectedImage) window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedImage]);

	return (
		<div className="min-h-screen bg-[#F0F8FF] overflow-x-hidden">
			<Navbar isHome={true} />
			<main id="main-content">
				
				{/* --- HERO SECTION --- */}
				<section className="relative h-screen flex items-center justify-center overflow-hidden">
					<motion.div 
						initial={{ scale: 1.1, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						style={{ y, opacity }}
						transition={{ duration: 1.5 }}
						className="absolute inset-0 z-0"
					>
						<Image src={aiHero} alt="AI Hero Background" fill style={{ objectFit: 'cover' }} priority />
					</motion.div>
					<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-10"></div>
					<div className="absolute inset-0 bg-black/40 z-10"></div>
					
					<motion.div 
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
						className="relative z-20 text-center px-6 max-w-5xl"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.8 }}
							className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FF8C00] font-bold tracking-widest text-xs uppercase shadow-lg"
						>
							Engineering Sovereign Intelligence
						</motion.div>
						<h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
							Sovereign Engineering. <span className="text-[#CC6600]">Inspired Design.</span>
						</h1>
						<p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
							High-performance digital ecosystems powered by **Eight Limbs** neural consensus and multi-disciplinary creative direction.
						</p>
						<div className="flex flex-col md:flex-row gap-6 justify-center">
							<button 
								onClick={() => scrollToSection(portfolioRef)}
								className="px-10 py-4 bg-[#CC6600] text-white rounded-full font-bold text-lg hover:bg-[#A34F00] transition-all shadow-2xl hover:shadow-[#CC6600]/40"
							>
								View Projects
							</button>
							<button 
								onClick={() => scrollToSection(innovationRef)}
								className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
							>
								Explore Tech
							</button>
						</div>
					</motion.div>

					<motion.div 
						animate={{ y: [0, 15, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 cursor-pointer"
						onClick={() => scrollToSection(aboutRef)}
					>
						<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
							<div className="w-1 h-2 bg-[#CC6600] rounded-full animate-bounce"></div>
						</div>
					</motion.div>
				</section>

				{/* --- ABOUT SECTION --- */}
				<section id="about" ref={aboutRef} className="py-32 px-6 md:px-12 bg-white relative overflow-hidden scroll-mt-24">
					<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
						<motion.div 
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
							style={{ y: aboutY, opacity: aboutOpacity }}
							className="relative"
						>
							<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CC6600]/10 rounded-full blur-3xl"></div>
							<Image src={jakelouis} alt="Jake Louis" width={600} height={700} className="rounded-[40px] shadow-2xl relative z-10" />
						</motion.div>
						
						<motion.div
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
						>
							<span className="text-[#CC6600] font-bold tracking-widest uppercase text-sm mb-4 block">The Developer</span>
							<h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
								Where Human Artistry Meets <span className="text-[#CC6600]">Technical Precision.</span>
							</h2>
							<p className="text-xl text-gray-700 mb-8 leading-relaxed">
								I bridge the gap between sophisticated aesthetics and high-performance engineering. My work ranges from the **Eight Limbs** financial intelligence system to creative **P5.js** visualizations.
							</p>
							<div className="grid grid-cols-2 gap-8 mb-12">
								<div>
									<h4 className="text-3xl font-bold text-gray-900 mb-2">28+</h4>
									<p className="text-gray-600 uppercase tracking-widest text-xs font-bold">Years of Digital Creation</p>
								</div>
								<div>
									<h4 className="text-3xl font-bold text-gray-900 mb-2">Full-Stack</h4>
									<p className="text-gray-600 uppercase tracking-widest text-xs font-bold">Systems Architecture</p>
								</div>
							</div>
							<div className="flex gap-6">
								<a href="https://github.com/bluelotusmedia" target="_blank" className="text-3xl text-gray-400 hover:text-black transition-colors">
									<FontAwesomeIcon icon={faGithub} />
								</a>
								<a href="https://codepen.io/bluelotusmedia" target="_blank" className="text-3xl text-gray-400 hover:text-[#000] transition-colors">
									<FontAwesomeIcon icon={faCodepen} />
								</a>
							</div>
						</motion.div>
					</div>
				</section>

				{/* --- AI INNOVATION SECTION --- */}
				<section id="innovation" ref={innovationRef} className="py-32 px-6 md:px-12 bg-gray-900 text-white relative overflow-hidden scroll-mt-24">
					<div className="absolute top-0 right-0 w-1/3 h-full bg-[#CC6600]/5 blur-[120px] rounded-full"></div>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-24">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								<span className="text-[#CC6600] font-bold tracking-widest uppercase text-sm mb-4 block">Sovereign Intelligence</span>
								<h2 className="text-5xl md:text-6xl font-black mb-8">The Eight Limbs Engine</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
									Deploying private, localized AI systems that synthesize complex data streams into actionable capital strategies.
								</p>
							</motion.div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							{[
								{
									icon: faRobot,
									title: "Eight Limbs OS",
									desc: "A modular, widget-based financial dashboard utilizing an orchestrated pipeline of 8 specialized AI agents for deep market analysis."
								},
								{
									icon: faMicrochip,
									title: "Local Agent Nodes",
									desc: "Secure browser intelligence running local LLMs for private, zero-tracking automation and real-time research synthesis."
								},
								{
									icon: faChartLine,
									title: "Consensus Orchestration",
									desc: "Complex agentic workflows that filter narrative noise and institutional flow into high-conviction decision signals."
								}
							].map((item, i) => (
								<motion.div
									key={i}
									initial={{ y: 30, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.2 }}
									className="p-10 bg-white/5 border border-white/10 rounded-[30px] hover:border-[#CC6600]/50 transition-colors group"
								>
									<div className="w-16 h-16 bg-[#CC6600]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
										<FontAwesomeIcon icon={item.icon} className="text-3xl text-[#CC6600]" />
									</div>
									<h3 className="text-2xl font-bold mb-4">{item.title}</h3>
									<p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* --- SERVICES SECTION --- */}
				<section id="services" ref={servicesRef} className="py-32 px-6 md:px-12 bg-white scroll-mt-24">
					<div className="max-w-7xl mx-auto">
						<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
							<div className="max-w-2xl">
								<span className="text-[#CC6600] font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
								<h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">Premium Digital Solutions.</h2>
							</div>
							<p className="text-xl text-gray-600 font-light max-sm">
								Engineering excellence across the stack, from autonomous agents to iconic brand systems.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{ icon: faCode, title: "Next.js Engineering", desc: "Building high-performance, statically exported web applications." },
								{ icon: faRobot, title: "AI Integration", desc: "Deploying local and cloud-based LLM systems for sovereign intelligence." },
								{ icon: faPalette, title: "Creative Coding", desc: "Interactive P5.js and SVG animations for unique visual storytelling." },
								{ icon: faBriefcase, title: "Brand Identity", desc: "Comprehensive visual systems that capture brand essence." },
								{ icon: faGuitar, title: "Audio Engineering", desc: "Professional sound design and poly-rhythmic synthesis." },
								{ icon: faPuzzlePiece, title: "Browser Systems", desc: "Complex Chrome extensions and productivity automations." }
							].map((s, i) => (
								<motion.div 
									key={i}
									whileHover={{ y: -10 }}
									className="p-10 border border-gray-100 rounded-[30px] hover:shadow-2xl hover:shadow-[#CC6600]/10 transition-all"
								>
									<FontAwesomeIcon icon={s.icon} className="text-4xl text-[#CC6600] mb-8" />
									<h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
									<p className="text-gray-600 font-light leading-relaxed">{s.desc}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* --- PORTFOLIO SECTION --- */}
				<section id="portfolio" ref={portfolioRef} className="py-32 px-6 md:px-12 bg-[#F0F8FF] scroll-mt-24">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-24">
							<motion.div style={{ y: portfolioY }}>
								<span className="text-[#CC6600] font-bold tracking-widest uppercase text-sm mb-4 block">Proven Work</span>
								<h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Selected Case Studies</h2>
							</motion.div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
							{[
								{ 
									img: projectEightLimbsMobile, 
									title: "Eight Limbs OS", 
									category: "Fintech & System Engineering",
									desc: "A high-performance personal financial intelligence system. Built as a native desktop application (macOS/Electron) with a companion mobile experience (iOS/Capacitor), featuring real-time market data and automated analysis."
								},
								{ 
									img: projectLocalAI, 
									title: "Local AI Agent", 
									category: "Edge Intelligence",
									desc: "Private edge-intelligence system running localized LLMs via a secure Chrome extension for zero-tracking browser automation and research."
								},
								{ 
									img: projectMysteryGarden, 
									title: "Mystic Garden Party", 
									category: "Identity & Illustration",
									desc: "Comprehensive global brand identity for the Mystic Garden Party, featuring sacred geometry and seasonal alignment themes for events across Hawaii, Australia, and Japan."
								},
								{ 
									img: projectLoopyGuru, 
									title: "Loopy Guru Hawaii", 
									category: "Character Design",
									desc: "The iconic 'Hippy Chick' vector art and brand identity created for Loopy Guru Hawaii, featuring vibrant, sovereign character design and artistic precision."
								},
								{ 
									img: projectWhaleTrance, 
									title: "Whale Trance Visuals", 
									category: "Visual Storytelling & Audio",
									desc: "A high-impact cinematic poster and visual system exploring the intersection of digital circuitry and nature's geometry. Also handled recording engineering for the original whale song and ambient soundscapes."
								},
								{ 
									img: projectSpiceRapture, 
									title: "SpiceRapture Branding", 
									category: "Identity Design",
									desc: "Technical identity design for a molecular research startup, blending chemical structural motifs with minimalist modern typography and UI."
								},
								{ 
									img: projectMoogfest, 
									title: "Moogfest 2010 Identity", 
									category: "Festival Branding",
									desc: "Visual identity and poster system for the legendary Moogfest 2010 in Asheville, NC. This project was a contest submission piece featuring intricate mandala-inspired vector art and custom typography."
								},
								{ 
									img: projectCloughGlobal, 
									title: "Clough Global Portal", 
									category: "Financial Engineering",
									desc: "Developed a comprehensive financial web portal at ALPS Funds with real-time API integrations, dynamic data visualization, and rigorous security maintenance."
								},
								{ 
									img: project1290Funds, 
									title: "1290 Funds Platform", 
									category: "FinTech & Data",
									desc: "Engineered scalable architecture for 1290 Funds, implementing secure data pipelines, dynamic pie charts, and ensuring strict regulatory compliance."
								},
								{ 
									img: projectXAInvestments, 
									title: "XA Investments Architecture", 
									category: "Enterprise Web Dev",
									desc: "Built and maintained the XA Investments digital presence, focusing on high-availability API endpoints, mobile optimization, and automated fact-sheet distribution."
								},
								{ 
									img: projectAlohaVeda, 
									title: "AlohaVeda Boutique", 
									category: "E-commerce & Branding",
									desc: "A vibrant, tropical identity for a boutique apothecary and massage clinic in Hawaii, blending traditional motifs with modern retail aesthetics."
								},
								{ 
									img: projectGPD, 
									title: "Gregory Paolini Design", 
									category: "Web Design & E-commerce",
									desc: "Complete brand identity and website development for world-class custom woodworking studio Gregory Paolini Design, featuring high-end furniture galleries and student academy integration."
								}
							].map((p, i) => (
								<motion.div 
									key={i}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1 }}
									className="group cursor-pointer"
									onClick={() => openModal(p.img)}
								>
									<div className="relative aspect-[16/10] overflow-hidden rounded-[40px] mb-8 shadow-xl border border-gray-100 bg-white">
										<Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
										<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
									</div>
									<span className="text-[#CC6600] font-bold text-sm mb-2 block">{p.category}</span>
									<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#CC6600] transition-colors">{p.title}</h3>
									<p className="text-gray-600 font-light text-base leading-relaxed">{p.desc}</p>
								</motion.div>
							))}
						</div>
						
						<div className="flex justify-center mt-20 gap-8">
							<a href="https://github.com/bluelotusmedia" target="_blank" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold flex items-center gap-3 hover:bg-black transition-all">
								<FontAwesomeIcon icon={faGithub} /> GitHub Profile
							</a>
							<a href="https://codepen.io/bluelotusmedia" target="_blank" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold flex items-center gap-3 hover:border-gray-900 transition-all">
								<FontAwesomeIcon icon={faCodepen} /> CodePen Profile
							</a>
						</div>
					</div>
				</section>

				{/* --- TESTIMONIALS SECTION --- */}
				<section id="testimonials" ref={testimonialsRef} className="py-32 px-6 md:px-12 bg-white overflow-hidden scroll-mt-24">
					<div className="max-w-7xl mx-auto">
						<div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
							<div>
								<span className="text-[#CC6600] font-bold tracking-widest uppercase text-sm mb-4 block">What Partners Say</span>
								<h2 className="text-5xl md:text-6xl font-black text-gray-900">Expert Testimonials.</h2>
							</div>
							<div className="flex items-center gap-6">
								<button 
									onClick={prevTestimonial}
									className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#CC6600] hover:border-[#CC6600] transition-all"
								>
									<FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
								</button>
								<button 
									onClick={nextTestimonial}
									className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#CC6600] hover:border-[#CC6600] transition-all"
								>
									<FontAwesomeIcon icon={faChevronRight} className="text-xl" />
								</button>
							</div>
						</div>

						<div className="relative min-h-[400px]">
							<AnimatePresence mode="wait">
								<motion.div 
									key={testimonialIndex}
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -50 }}
									transition={{ duration: 0.5, ease: "circOut" }}
									className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
								>
									<div className="p-12 md:p-20 bg-[#F0F8FF] rounded-[50px] border border-gray-100 relative">
										<FontAwesomeIcon icon={faQuoteLeft} className="text-6xl text-[#CC6600]/10 absolute top-10 left-10" />
										<p className="text-2xl md:text-3xl text-gray-800 italic leading-relaxed mb-12 font-light relative z-10">
											&quot;{testimonials[testimonialIndex].text}&quot;
										</p>
										<div>
											<h4 className="text-2xl font-bold text-gray-900">{testimonials[testimonialIndex].name}</h4>
											<p className="text-[#CC6600] font-bold tracking-widest uppercase text-sm">{testimonials[testimonialIndex].role}</p>
										</div>
									</div>

									<div className="hidden md:block">
										<div className="grid grid-cols-2 gap-4">
											{testimonials.map((t, i) => (
												<div 
													key={i}
													className={`h-2 rounded-full transition-all duration-500 ${i === testimonialIndex ? 'bg-[#CC6600] w-full' : 'bg-gray-100 w-1/2'}`}
												/>
											))}
										</div>
										<p className="mt-8 text-gray-400 font-bold uppercase tracking-widest text-xs">
											Partner {testimonialIndex + 1} / {testimonials.length}
										</p>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</section>

				{/* --- CONTACT SECTION --- */}
				<section id="contact" ref={contactRef} className="py-32 px-6 md:px-12 bg-[#F0F8FF] relative scroll-mt-24">
					<div className="max-w-5xl mx-auto backdrop-blur-3xl bg-white p-12 md:p-20 rounded-[50px] shadow-2xl border border-white">
						<div className="text-center mb-16">
							<h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 italic">Let's Create.</h2>
							<p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
								Ready to build something sovereign? Get in touch to discuss your next technical challenge.
							</p>
						</div>
						<ContactForm />
					</div>
				</section>

			</main>

			<Footer />

			{/* --- MODAL --- */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
						onClick={closeModal}
					>
						<motion.div 
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative w-full h-full flex items-center justify-center"
							onClick={e => e.stopPropagation()}
						>
							<Image src={selectedImage} alt="Fullscreen" fill style={{ objectFit: 'contain' }} />
							<button onClick={closeModal} className="absolute top-0 right-0 text-white p-6 text-4xl hover:text-[#CC6600] transition-colors">
								<FontAwesomeIcon icon={faXmark} />
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
