"use client";
import Image from "next/image";
import Link from "next/link";
import heroImage from "./images/hero-background2.jpg";
import logo from "./images/logo.svg";
import { useRef, useEffect, useState, useMemo } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faXTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// Import your images
import jakelouis from "./images/jake-louis.png";
import galleryImage9 from "./images/gallery9.jpg";
import galleryImage10 from "./images/gallery10.jpg";
import galleryImage12 from "./images/gallery12.jpg";
import galleryImage35 from "./images/gallery35.jpg";
import galleryImage42 from "./images/gallery42.jpg";
import galleryImage45 from "./images/gallery45.jpg";
import galleryImage46 from "./images/gallery46.jpg";
import galleryImage47 from "./images/gallery47.jpg";
import galleryImage48 from "./images/gallery48.jpg";
import galleryImage49 from "./images/gallery49.jpg";
import galleryImage50 from "./images/gallery50.jpg";

export default function Home() {
	const aboutRef = useRef(null);
	const servicesRef = useRef(null);
	const portfolioRef = useRef(null);
	const testimonialsRef = useRef(null);
	const contactRef = useRef(null);
	const navRef = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToSection = (ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const lotusColors = ["#F0F8FF", "#F5FFFA", "#F0FFFF", "#F8F8FF", "#FFF5EE"];

	const openModal = (image) => {
		setSelectedImage(image);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (selectedImage && event.key === "Escape") {
				closeModal();
			}
		};

		if (selectedImage) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [selectedImage]);

	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash;
			if (hash) {
				const section = hash.replace("#", "");
				const refs = {
					about: aboutRef,
					services: servicesRef,
					portfolio: portfolioRef,
					testimonials: testimonialsRef,
					contact: contactRef,
				};
				if (refs[section]) {
					// Small delay to ensure sections are rendered and layout is stable
					setTimeout(() => {
						scrollToSection(refs[section]);
					}, 300);
				}
			}
		};

		// Run on mount
		handleHash();

		// Listen for hash changes
		window.addEventListener("hashchange", handleHash);
		return () => window.removeEventListener("hashchange", handleHash);
	}, []);

	return (
		<div style={{ background: "#F0F8FF" }} className="min-h-screen">
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-500 ${
					isScrolled ? "bg-white shadow-md" : "bg-gray-900 md:bg-transparent vignette-gradient"
				}`}
			>
				<div className="mx-auto py-2 flex items-center justify-between">
					<Image
						src={logo}
						alt="Blue Lotus Media Logo"
						width={300}
						height={50}
						onClick={scrollToTop}
						style={{ cursor: "pointer" }}
						className={`pl-4 ${isScrolled ? "logo-dark" : ""}`}
					/>
																				<button
																					className={`md:hidden pr-4 ${isScrolled ? "text-[#333333]" : "text-white"}`} // Conditional text color for hamburger icon
																					onClick={toggleMenu}
																					aria-label="Toggle Menu"
																				>						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 transition-all duration-300"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							)}
						</svg>
					</button>
					                    <ul
											className={`${
												isMenuOpen ? "max-h-screen fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center py-4 overflow-hidden transition-all duration-300" : "max-h-0 md:max-h-full overflow-hidden"
											} md:flex md:space-x-4 md:py-0 pr-4`}
										>						{" "}
						{isMenuOpen && (
							<button
								onClick={toggleMenu}
								className="absolute top-4 right-4 text-white text-3xl"
								aria-label="Close Menu"
							>
								<FontAwesomeIcon icon={faXmark} />
							</button>
						)}
						{["About", "Services", "Portfolio", "Testimonials", "Blog", "Contact"].map((section) => (
							<li key={section} className="w-full md:py-0 md:px-0">
								{section === "Blog" ? (
									<Link
										href="/blog"
										className={`block w-full text-center py-3 transition-colors duration-300 ${
											isMenuOpen
												? "text-white hover:bg-gray-700"
												: isScrolled
												? "text-[#333333] hover:text-[#CC6600]"
												: "text-white hover:text-gray-300"
										}`}
									>
										{section}
									</Link>
								) : (
									<a
										href={`#${section.toLowerCase()}`}
										onClick={() => {
											scrollToSection(
												section === "About"
													? aboutRef
													: section === "Services"
													? servicesRef
													: section === "Portfolio"
													? portfolioRef
													: section === "Testimonials"
													? testimonialsRef
													: contactRef
											);
											if (window.innerWidth < 768) {
												// Only toggle menu on mobile
												toggleMenu();
											}
										}}
										className={`block w-full text-center py-3 transition-colors duration-300 ${
											isMenuOpen
												? "text-white hover:bg-gray-700"
												: isScrolled
												? "text-[#333333] hover:text-[#CC6600]"
												: "text-white hover:text-gray-300"
										}`}
									>
										{section}
									</a>
								)}
							</li>
						))}
					</ul>
				</div>
			</nav>
			{/* Rest of the component (hero, about, services, etc.) is the same */}
			<div className="relative w-screen h-screen">
				<Image
					src={heroImage}
					alt="Hero Image"
					layout="fill"
					objectFit="cover"
				/>
				<div className="absolute inset-0 bg-black opacity-50 vignette-gradient"></div>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
					<p className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
						Transforming Visions into Engaging Digital Experiences
					</p>
					<a
						href="#about"
						onClick={() => scrollToSection(aboutRef)}
						className="bg-[#CC6600] hover:bg-[#A34F00] text-white font-bold py-3 px-8 rounded-full text-xl md:text-2xl uppercase tracking-wide shadow-lg transform transition duration-300 hover:scale-105"
					>
						Get Started
					</a>
				</div>
			</div>

			{[
				{
					ref: aboutRef,
					id: "about",
					title: "About Me",

					content: (
						<AboutContent
							scrollToSection={scrollToSection}
							servicesRef={servicesRef}
							contactRef={contactRef}
						/>
					),

					icon: faLightbulb,
				},

				{
					ref: servicesRef,
					id: "services",
					title: "Services",

					content: (
						<ServicesContent
							scrollToSection={scrollToSection}
							portfolioRef={portfolioRef}
							contactRef={contactRef}
						/>
					),

					icon: faCode,
				},

				{
					ref: portfolioRef,
					id: "portfolio",
					title: "Portfolio",

					content: (
						<PortfolioContent
							openModal={openModal}
							scrollToSection={scrollToSection}
							contactRef={contactRef}
						/>
					),

					icon: faBriefcase,
				},

				{
					ref: testimonialsRef,
					id: "testimonials",
					title: "Testimonials",

					content: <TestimonialsContent />,

					icon: faQuoteLeft,
				},

				{
					ref: contactRef,
					id: "contact",
					title: "Contact",

					content: <ContactContent />,

					icon: faEnvelope,
				},
			].map((sectionData, index) => (
				<section
					key={sectionData.title}
					id={sectionData.id}
					ref={sectionData.ref}
					className={`min-h-screen py-16 px-8 md:px-24 transition-colors duration-500`}
					style={{
						backgroundColor: lotusColors[index % lotusColors.length],
					}}
				>
					<div className="container mx-auto">
						<div className="flex items-center pb-4 pt-4">
							<FontAwesomeIcon
								icon={sectionData.icon}
								className="text-5xl mr-4 text-[#CC6600]"
							/>
							<h2
								className="text-4xl md:text-5xl font-extrabold section-title"
								style={{ textAlign: "left" }}
							>
								{sectionData.title}
							</h2>
						</div>

						<div className="section-content">{sectionData.content}</div>
					</div>
				</section>
			))}

			{/* Modal */}
			{selectedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
					onClick={closeModal}
				>
					<div
						className="relative max-w-full max-h-full"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={selectedImage}
							alt="Gallery Image"
							width={800}
							height={600}
							style={{
								objectFit: "contain",
								width: "100%",
								height: "100%",
								maxWidth: "90vw",
								maxHeight: "90vh",
							}}
						/>
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-xl z-10 bg-white/20 rounded-full p-2"
							aria-label="Close Modal"
						>
							<FontAwesomeIcon
								icon={faXmark}
								className="text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
							/>
						</button>
					</div>
				</div>
			)}

			<style jsx>{`
				.section-title {
					color: #333;
				}
				.section-content {
					padding: 2rem;
					background-color: rgba(255, 255, 255, 0.7);
					border-radius: 8px;
				}
				.section-content p,
				.section-content ul {
					color: #555;
				}
				.section-content ul {
					list-style-type: disc;
				}
				.section-content li {
					margin-bottom: 0.5rem;
				}
				.logo-dark {
					filter: brightness(0) saturate(100%); /* Makes white SVG black */
				}
				.vignette-gradient {
					background-image: radial-gradient(
						at top left,
						rgba(0, 0, 0, 0.6) 0%,
						rgba(0, 0, 0, 0) 70%
					);
				}
			`}</style>
		</div>
	);
}
const AboutContent = ({ scrollToSection, servicesRef, contactRef }) => {
	const values = [
		{
			icon: faPalette,
			title: "Creativity",
			description:
				"I constantly push the boundaries of creativity to deliver innovative and captivating content.",
		},
		{
			icon: faPeopleGroup,
			title: "Collaboration",
			description:
				"I believe in the power of collaboration and work closely with my clients to bring their vision to life.",
		},
		{
			icon: faGem,
			title: "Quality",
			description:
				"I am committed to delivering high-quality content that exceeds my client's expectations.",
		},
		{
			icon: faFire,
			title: "Passion",
			description:
				"I am passionate about what I do and believe that this passion shines through in my work.",
		},
	];

	const [isVisible, setIsVisible] = useState([false, false, false, false]);

	useEffect(() => {
		const handleScroll = () => {
			const triggers = document.querySelectorAll(".value-item");

			triggers.forEach((trigger, index) => {
				const top = trigger.getBoundingClientRect().top;
				const screenHeight = window.innerHeight;

				if (top < screenHeight * 0.8) {
					setIsVisible((prevState) => {
						const newState = [...prevState];
						newState[index] = true;
						return newState;
					});
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Responsive container for image and text */}

			<div className="flex flex-col md:flex-row items-start mb-12">
				<div className="md:mr-12 md:shrink-0 w-full md:w-1/3 mb-8 md:mb-0">
					<Image
						src={jakelouis}
						alt={"Jake Louis"}
						width={400}
						height={450}
						style={{ cursor: "pointer" }}
						className="rounded-lg shadow-lg w-full"
					/>
				</div>

				<div className="md:flex-1">
					<p className="text-lg md:text-xl leading-relaxed mb-6">
						Blue Lotus Media is the portfolio and freelance brand of Jacob
						Louis, a Chilhowie, Virginia-based multimedia producer specializing
						in web development, graphic design, music production, and video
						editing. (Relocated from Denver in April 2024). With a deep love for
						music, nature, and spirituality, Jacob helps businesses and artists
						establish a strong online presence and connect with their audience
						through innovative and visually captivating content.
					</p>

					<p className="text-lg md:text-xl leading-relaxed mb-6">
						I am passionate about creating immersive experiences that blur the
						lines between technology and art. I bring a unique blend of
						creativity and technical expertise to every project.
					</p>

					<h3 className="text-2xl font-bold mb-4">My Mission</h3>

					<p className="text-lg md:text-xl leading-relaxed">
						At Blue Lotus Media, my mission is to empower businesses and artists
						with cutting-edge creative content that captures the essence of
						their brand identity and resonates with their target audience.{" "}
					</p>

					<p className="text-lg md:text-xl leading-relaxed mt-4">
						I believe in the power of visual storytelling to create deeper
						connections and leave a lasting impression.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
				{values.map((value, index) => (
					<div
						key={index}
						className={`value-item ${
							isVisible[index] ? "animate-fadeIn" : ""
						} transition-opacity duration-500 opacity-0 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center`}
					>
						<FontAwesomeIcon
							icon={value.icon}
							className="text-5xl text-[#CC6600] mb-4"
						/>{" "}
						<h4 className="text-xl font-bold mb-2">{value.title}</h4>
						<p className="text-base leading-relaxed">{value.description}</p>
					</div>
				))}
			</div>

			<div className="flex justify-center mt-12">
				                                                    <a
				                                                        href="#services"
				                                                        onClick={() => scrollToSection(servicesRef)}
				                                                        className="bg-[#CC6600] hover:bg-[#A34F00] text-white font-bold py-3 px-8 rounded-full text-xl uppercase tracking-wide shadow-lg transform transition duration-300 hover:scale-105"
				                                                    >
				                                                        Explore Services
				                                                    </a>			</div>

			<style jsx>{`
				.animate-fadeIn {
					opacity: 1;
				}
			`}</style>
		</>
	);
};

const ServicesContent = ({ scrollToSection, portfolioRef, contactRef }) => {
	const services = [
		{
			icon: faCode,
			title: "Web Development",
			description:
				"Custom website design and development tailored to your needs.",
		},
		{
			icon: faLightbulb,
			title: "Graphic Design",
			description: "Logo design, branding, and visual content creation.",
		},
		{
			icon: faPalette,
			title: "UI/UX Design",
			description: "User-centered design for optimal user experience.",
		},
		{
			icon: faBriefcase,
			title: "Branding",
			description:
				"Crafting a unique brand identity that resonates with your audience.",
		},
		{
			icon: faFire,
			title: "Marketing",
			description:
				"Strategic marketing campaigns to reach your target audience.",
		},
		{
			icon: faGem,
			title: "E-Commerce",
			description: "E-commerce solutions for seamless online selling.",
		},
		{
			icon: faPeopleGroup,
			title: "Social Media",
			description: "Social media management and content creation.",
		},
		{
			icon: faLightbulb,
			title: "SEO",
			description:
				"Search engine optimization for increased online visibility.",
		},
		{
			icon: faCode,
			title: "Content Management",
			description: "Content management systems for easy website updates.",
		},
		// Add more services as needed
	];

	const [isVisible, setIsVisible] = useState(services.map(() => false)); // Initialize all to false

	useEffect(() => {
		const handleScroll = () => {
			const triggers = document.querySelectorAll(".service-item");

			triggers.forEach((trigger, index) => {
				const top = trigger.getBoundingClientRect().top;
				const screenHeight = window.innerHeight;

				if (top < screenHeight * 0.8) {
					setIsVisible((prevState) => {
						const newState = [...prevState];
						newState[index] = true;
						return newState;
					});
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []); // Correctly add empty dependency array

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<div
						key={index}
						className={`service-item ${
							isVisible[index] ? "animate-fadeIn" : ""
						} transition-opacity duration-500 opacity-0`}
					>
						<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 services">
							<FontAwesomeIcon
								icon={service.icon}
								className="text-5xl text-[#CC6600] mb-4"
							/>

							<h3 className="text-xl font-bold mb-2">{service.title}</h3>

							<p className="text-base text-center">{service.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center mt-12">
				<a
					href="#portfolio"
					onClick={() => scrollToSection(portfolioRef)}
					className="bg-[#CC6600] hover:bg-[#A34F00] text-white font-bold py-3 px-8 rounded-full text-xl uppercase tracking-wide shadow-lg transform transition duration-300 hover:scale-105"
				>
					Browse Portfolio
				</a>
			</div>

			<style jsx>{`
				.animate-fadeIn {
					opacity: 1;
				}

				.services {
					min-height: 14rem; /* Adjust the value as needed */

					display: flex;

					flex-direction: column;

					justify-content: center; /* Vertically center content */
				}
			`}</style>
		</>
	);
};

const PortfolioContent = ({ openModal, scrollToSection, contactRef }) => {
	const images = [
		{ src: galleryImage9, alt: "Blue Lotus Branding" },
		{ src: galleryImage10, alt: "Business Card Design" },
		{ src: galleryImage12, alt: "Corporate Identity" },
		{ src: galleryImage35, alt: "Moogfest Event Poster" },
		{ src: galleryImage42, alt: "Whale Trance Concept" },
		{ src: galleryImage45, alt: "Antandra Logo Red" },
		{ src: galleryImage46, alt: "Antandra Logo Purple" },
		{ src: galleryImage47, alt: "Antandra Logo Green" },
		{ src: galleryImage48, alt: "Antandra Logo Cyan" },
		{ src: galleryImage49, alt: "Antandra Logo Gold" },
		{ src: galleryImage50, alt: "Hawaii Illustration" },
	];

	const [imageVisibility, setImageVisibility] = useState(
		images.map(() => false)
	);
	const imageRefs = useRef(images.map(() => null)); // Create refs outside the loop

	useEffect(() => {
		const handleScroll = () => {
			imageRefs.current.forEach((ref, index) => {
				if (ref) {
					// Check if ref exists
					const top = ref.getBoundingClientRect().top;
					const screenHeight = window.innerHeight;
					if (top < screenHeight * 0.8) {
						setImageVisibility((prev) => {
							const next = [...prev];
							next[index] = true;
							return next;
						});
					}
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []); // Correctly add empty dependency array

	return (
		<>
			<div className="masonry-grid">
				{images.map((image, index) => (
					<div
						key={index}
						className={`masonry-grid-item ${
							imageVisibility[index] ? "animate-fadeIn" : ""
						} transition-opacity duration-500 opacity-0`}
						ref={(el) => (imageRefs.current[index] = el)} // Assign ref correctly
					>
						<Image
							src={image.src}
							alt={image.alt}
							width={400}
							height={300}
							onClick={() => openModal(image.src)}
							style={{ cursor: "pointer", borderRadius: "0.5rem" }}
							loading={index < 6 ? "eager" : "lazy"}
						/>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-12">
				<a
					href="#contact"
					onClick={() => scrollToSection(contactRef)}
					className="bg-[#CC6600] hover:bg-[#A34F00] text-white font-bold py-3 px-8 rounded-full text-xl uppercase tracking-wide shadow-lg transform transition duration-300 hover:scale-105"
				>
					Get in touch
				</a>
			</div>
			<style jsx>{`
				.masonry-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
					grid-gap: 1rem;
				}
				.animate-fadeIn {
					opacity: 1;
				}
			`}</style>
		</>
	);
};

const TestimonialsContent = () => {
	const testimonials = [
		{
			name: "Matthew Tuers",
			role: "Marketing Communications Specialist",
			text: "If there's ever a problem to be solved using technology, you'll want Jacob on the front lines. His breadth of knowledge - design apps, web development, digital marketing - made him the fulcrum behind advancements in automation and efficiency in our art/marketing communications departments.",
		},
		{
			name: "Nicholas Godfrey",
			role: "Product and Innovation",
			text: "Jacob is a very creative thinker. While working on our web design he was very attentive and considerate of our needs and developed an end product that fit to a Tee. It was easy to get changes made on the fly which was key for us.",
		},
		{
			name: "Xam Devesh",
			role: "Marketing Director at SOAR ADHD Camp",
			text: "Jacob is a great designer and web developer. He gave me a fair price and built a website better than I could have imaged in a really timely manner. He's been helpful every step of the way. I recommend his services to anyone looking for an artistic and intuitive website.",
		},
		{
			name: "Jeff Smolinski",
			role: "Data Scientist",
			text: "Jacob has wizard level front-end skills. He is able to adaptable to the changing times. He is able to work with code bases that are being altered by multiple forces. He is a bright and pleasant person with creative skills above and beyond the office requirements. He is driven and constantly working to innovate to optimize the current systems.",
		},
		{
			name: "Emmelyn Tan",
			role: "UX/UI Designer",
			text: "Jacob is a skilled and high-performing software engineer. He implemented code standards in the form of site and JavaScript templates, to make builds efficient and consistent. He also created processes and standards for site performance and source control. With Jacob’s drive for excellence and continuous improvement, any team or organization would be lucky to have him!",
		},
		{
			name: "Brendan Pierpont",
			role: "Clean Energy & Climate Expert",
			text: "Jacob is a skilled web designer, offering dynamic and compelling websites to his clients. He's also a talented artist in sonic landscapes and other media, with an innate sense of music and unique point of view. Jacob is a truly creative individual with a capacity to add a unique touch to any project he works on.",
		},
		{
			name: "Jonathan Arthur",
			role: "Owner, Spiralflo",
			text: "Jacob helped me design and execute the art for my album, There Is A Garden. I still marvel at what a beautiful job he did. Then a few years later, he helped my wife and I design a website for our publishing business. It was another creative and aesthetically attractive result. I would recommend his work to anyone, and he is fun and easy to work with.",
		},
		{
			name: "Timothy Schultz",
			role: "Full Stack Engineer",
			text: "Jacob is an thoughtful and intelligent Software Engineer and a pleasure to work with.",
		},
	];

	const [isVisible, setIsVisible] = useState(testimonials.map(() => false));

	useEffect(() => {
		const handleScroll = () => {
			const triggers = document.querySelectorAll(".testimonial-item");
			triggers.forEach((trigger, index) => {
				const top = trigger.getBoundingClientRect().top;
				const screenHeight = window.innerHeight;
				if (top < screenHeight * 0.85) {
					setIsVisible((prev) => {
						const next = [...prev];
						if (index < next.length) {
							next[index] = true;
						}
						return next;
					});
				}
			});
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [testimonials.length]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{testimonials.map((t, i) => (
				<div
					key={i}
					className={`testimonial-item transition-all duration-700 transform ${
						isVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					} p-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 flex flex-col`}
				>
					<FontAwesomeIcon
						icon={faQuoteLeft}
						className="text-3xl text-[#CC6600]/30 mb-6 self-start"
					/>
					<p className="text-gray-700 italic mb-8 leading-relaxed flex-grow">
						&quot;{t.text}&quot;
					</p>
					<div className="mt-auto pt-6 border-t border-gray-200/50">
						<h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
						<p className="text-[#CC6600] font-medium text-sm mt-1">{t.role}</p>
					</div>
				</div>
			))}
		</div>
	);
};

const ContactContent = () => (
	<div className="contact flex flex-col items-center justify-center text-center">
		<p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl text-gray-600">
			Please feel free to contact me if you have any questions or would like to
			discuss your project. I&apos;m always happy to connect!
		</p>
		
		<div className="w-full">
			<ContactForm />
		</div>

		<Footer />
	</div>
);
