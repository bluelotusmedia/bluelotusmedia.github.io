"use client";
import Image from "next/image";
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
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faXTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Import your images
import jakelouis from "./images/jake-louis.png";
import galleryImage1 from "./images/gallery1.jpg";
import galleryImage2 from "./images/gallery2.jpg";
import galleryImage3 from "./images/gallery3.jpg";
import galleryImage4 from "./images/gallery4.jpg";
import galleryImage5 from "./images/gallery5.jpg";
import galleryImage6 from "./images/gallery6.jpg";
import galleryImage7 from "./images/gallery7.jpg";
import galleryImage8 from "./images/gallery8.jpg";
import galleryImage9 from "./images/gallery9.jpg";
import galleryImage10 from "./images/gallery10.jpg";
import galleryImage11 from "./images/gallery11.jpg";
import galleryImage12 from "./images/gallery12.jpg";
import galleryImage13 from "./images/gallery13.jpg";
import galleryImage14 from "./images/gallery14.jpg";
import galleryImage15 from "./images/gallery15.jpg";
import galleryImage16 from "./images/gallery16.jpg";
import galleryImage17 from "./images/gallery17.jpg";
import galleryImage18 from "./images/gallery18.jpg";
import galleryImage19 from "./images/gallery19.jpg";
import galleryImage20 from "./images/gallery20.jpg";
import galleryImage21 from "./images/gallery21.jpg";
import galleryImage22 from "./images/gallery22.jpg";
import galleryImage23 from "./images/gallery23.jpg";
import galleryImage24 from "./images/gallery24.jpg";
import galleryImage25 from "./images/gallery25.jpg";
import galleryImage26 from "./images/gallery26.jpg";
import galleryImage27 from "./images/gallery27.jpg";
import galleryImage28 from "./images/gallery28.jpg";
import galleryImage29 from "./images/gallery29.jpg";
import galleryImage30 from "./images/gallery30.jpg";
import galleryImage31 from "./images/gallery31.jpg";
import galleryImage32 from "./images/gallery32.jpg";
import galleryImage33 from "./images/gallery33.jpg";
import galleryImage34 from "./images/gallery34.jpg";
import galleryImage35 from "./images/gallery35.jpg";
import galleryImage36 from "./images/gallery36.jpg";
import galleryImage37 from "./images/gallery37.jpg";
import galleryImage38 from "./images/gallery38.jpg";
import galleryImage39 from "./images/gallery39.jpg";
import galleryImage40 from "./images/gallery40.jpg";
import galleryImage41 from "./images/gallery41.jpg";
import galleryImage42 from "./images/gallery42.jpg";
import galleryImage43 from "./images/gallery43.jpg";
import galleryImage44 from "./images/gallery44.jpg";
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

	return (
		<div style={{ background: "#F0F8FF" }} className="min-h-screen">
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-500 ${
					isScrolled ? "bg-white shadow-md" : "bg-gray-900 md:bg-transparent"
				}`}
			>
				<div className="mx-auto px-4 py-2 flex items-center justify-between">
					<Image
						src={logo}
						alt="Blue Lotus Media Logo"
						width={300}
						height={50}
						onClick={scrollToTop}
						style={{ cursor: "pointer" }}
						className={`${isScrolled ? "logo-dark" : ""}`}
					/>
																				<button
																					className={`md:hidden ${isScrolled ? "text-[#333333]" : "text-white"}`} // Conditional text color for hamburger icon
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
											} md:flex md:space-x-4 md:py-0`}
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
						{["About", "Services", "Portfolio", "Contact"].map((section) => (
							<li key={section} className="w-full md:py-0 md:px-0">
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
												: contactRef
										);
										if (window.innerWidth < 768) {
											// Only toggle menu on mobile
											toggleMenu();
										}
									}}
																								className={`block w-full text-center py-3 transition-colors duration-300 ${
																									isMenuOpen
																										? "text-white hover:bg-gray-700" // Mobile: White text on dark overlay, dark gray on hover
																										: isScrolled
																										? "text-[#333333] hover:text-[#CC6600]" // Desktop: Dark gray when scrolled, orange on hover
																										: "text-white hover:text-gray-300" // Desktop: White when not scrolled on desktop, light gray on hover
																								}`}
																							>									{section}
								</a>{" "}
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
				<div className="absolute inset-0 bg-black opacity-50"></div>
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
					ref: contactRef,

					title: "Contact",

					content: <ContactContent />,

					icon: faEnvelope,
				},
			].map((sectionData, index) => (
				<section
					key={sectionData.title}
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
		// Moved outside the component
		{ src: galleryImage1, alt: "Image 1" },
		{ src: galleryImage2, alt: "Image 2" },
		{ src: galleryImage3, alt: "Image 3" },
		{ src: galleryImage4, alt: "Image 4" },
		{ src: galleryImage5, alt: "Image 5" },
		{ src: galleryImage6, alt: "Image 6" },
		{ src: galleryImage7, alt: "Image 7" },
		{ src: galleryImage8, alt: "Image 8" },
		{ src: galleryImage9, alt: "Image 9" },
		{ src: galleryImage10, alt: "Image 10" },
		{ src: galleryImage11, alt: "Image 11" },
		{ src: galleryImage12, alt: "Image 12" },
		{ src: galleryImage13, alt: "Image 13" },
		{ src: galleryImage14, alt: "Image 14" },
		{ src: galleryImage15, alt: "Image 15" },
		{ src: galleryImage16, alt: "Image 16" },
		{ src: galleryImage17, alt: "Image 17" },
		{ src: galleryImage18, alt: "Image 18" },
		{ src: galleryImage19, alt: "Image 19" },
		{ src: galleryImage20, alt: "Image 20" },
		{ src: galleryImage21, alt: "Image 21" },
		{ src: galleryImage22, alt: "Image 22" },
		{ src: galleryImage23, alt: "Image 23" },
		{ src: galleryImage24, alt: "Image 24" },
		{ src: galleryImage25, alt: "Image 25" },
		{ src: galleryImage26, alt: "Image 26" },
		{ src: galleryImage27, alt: "Image 27" },
		{ src: galleryImage28, alt: "Image 28" },
		{ src: galleryImage29, alt: "Image 29" },
		{ src: galleryImage30, alt: "Image 30" },
		{ src: galleryImage31, alt: "Image 31" },
		{ src: galleryImage32, alt: "Image 32" },
		{ src: galleryImage33, alt: "Image 33" },
		{ src: galleryImage34, alt: "Image 34" },
		{ src: galleryImage35, alt: "Image 35" },
		{ src: galleryImage36, alt: "Image 36" },
		{ src: galleryImage37, alt: "Image 37" },
		{ src: galleryImage38, alt: "Image 38" },
		{ src: galleryImage39, alt: "Image 39" },
		{ src: galleryImage40, alt: "Image 40" },
		{ src: galleryImage41, alt: "Image 41" },
		{ src: galleryImage42, alt: "Image 42" },
		{ src: galleryImage43, alt: "Image 43" },
		{ src: galleryImage44, alt: "Image 44" },
		{ src: galleryImage45, alt: "Image 45" },
		{ src: galleryImage46, alt: "Image 46" },
		{ src: galleryImage47, alt: "Image 47" },
		{ src: galleryImage48, alt: "Image 48" },
		{ src: galleryImage49, alt: "Image 49" },
		{ src: galleryImage50, alt: "Image 50" },
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

const ContactContent = () => (
	<div className="contact flex flex-col items-center justify-center text-center">
		<p className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
			Please feel free to contact me if you have any questions or would like to
			discuss your project. I&apos;m always happy to connect!
		</p>{" "}
		<ul className="text-lg md:text-xl leading-relaxed mb-8 space-y-2">
			<li>
				Email:{" "}
				<a
					href="mailto:jacob@bluelotusmedia.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#CC6600] hover:text-[#A34F00] underline"
				>
					jacob@bluelotusmedia.com
				</a>
			</li>
			<li>
				Phone:{" "}
				<a
					href="tel:+7206631087"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#CC6600] hover:text-[#A34F00] underline"
				>
					(720) 663-1087
				</a>
			</li>
		</ul>
		<div className="flex justify-center space-x-8">
			<a
				href="https://www.facebook.com/bluelotusmedia"
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-700 hover:text-[#CC6600] transition-colors duration-300"
			>
				{" "}
				<FontAwesomeIcon icon={faFacebook} className="text-4xl" />
			</a>
			<a
				href="https://x.com/bluelotusmedia"
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-700 hover:text-[#CC6600] transition-colors duration-300"
			>
				<FontAwesomeIcon icon={faXTwitter} className="text-4xl" />
			</a>
			<a
				href="https://instagram.com/bluelotusmedia"
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-700 hover:text-[#CC6600] transition-colors duration-300"
			>
				<FontAwesomeIcon icon={faInstagram} className="text-4xl" />
			</a>
		</div>
		<style jsx>{`
			.contact {
				height: 62vh;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		`}</style>
	</div>
);
