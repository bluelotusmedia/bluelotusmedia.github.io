"use client";
import Image from "next/image";
import heroImage from "./images/hero-background2.jpg";
import logo from "./images/logo.svg";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLightbulb,
	faCode,
	faBriefcase,
	faEnvelope,
	faPalette, // Import faPalette
	faPeopleGroup, // Import faPeopleGroup
	faGem, // Import faGem
	faFire, // Import faFire
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faXTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Import your images
import jakelouis from "./images/jake-louis.jpg";
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToSection = (ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" }); // Use scrollIntoView
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			if (navRef.current) {
				const nav = navRef.current;
				if (window.scrollY > 100) {
					nav.classList.add("bg-opacity-80");
					nav.querySelectorAll("a").forEach((link) => {
						link.classList.add("text-blue-700");
						link.classList.remove("text-white");
					});
				} else {
					nav.classList.remove("bg-opacity-80");
					nav.querySelectorAll("a").forEach((link) => {
						link.classList.remove("text-blue-700");
						link.classList.add("text-white");
					});
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}); // Add empty dependency array

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const lotusColors = ["#f8f0e3", "#e8f0fe", "#dbe7fd", "#cce2fd", "#bfdefc"];

	const modernFont =
		"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

	const openModal = (image) => {
		setSelectedImage(image);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<div style={{ background: "#3B82F6" }}>
			<nav
				ref={navRef}
				className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-100 bg-opacity-0 transition-all duration-500"
			>
				<div className="mx-auto px-4 py-2 flex items-center justify-between">
					<Image
						src={logo}
						alt="Logo"
						width="300"
						height="50"
						onClick={scrollToTop} // Add onClick handler
						style={{ cursor: "pointer" }} // Make cursor a pointer
					/>
					<button
						className="md:hidden text-blue-700"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
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
							isMenuOpen ? "block" : "hidden"
						} md:flex md:space-x-4 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 transition-all duration-300`}
					>
						{["About", "Services", "Portfolio", "Contact"].map((section) => (
							<li key={section}>
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
										toggleMenu();
									}}
									className="text-white hover:text-blue-500 block px-4 py-2 md:p-0 transition-colors duration-300"
								>
									{section}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>

			<div className="relative w-screen h-screen">
				<Image
					src={heroImage}
					alt="Hero Image"
					layout="fill"
					objectFit="cover"
				/>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
					<p className="text-3xl md:text-5xl font-bold mb-4">
						Creating beautiful and functional websites
					</p>
					<a
						href="#about"
						onClick={() => scrollToSection(aboutRef)}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg md:text-xl"
					>
						Get Started
					</a>
				</div>
			</div>

			{[
				{
					ref: aboutRef,
					title: "About Me",
					content: <AboutContent />,
					icon: faLightbulb,
				},
				{
					ref: servicesRef,
					title: "Services",
					content: <ServicesContent />,
					icon: faCode,
				},
				{
					ref: portfolioRef,
					title: "Portfolio",
					content: <PortfolioContent openModal={openModal} />, // Pass openModal to PortfolioContent
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
					style={{ backgroundColor: lotusColors[index % lotusColors.length] }}
				>
					<div className="container mx-auto">
						<div className="flex items-center pb-4 pt-4 pl-4">
							<FontAwesomeIcon
								icon={sectionData.icon}
								className="text-4xl mr-4 text-gray-600 max-w-16"
							/>
							<h2
								className="text-3xl md:text-4xl font-bold section-title"
								style={{ fontFamily: modernFont, textAlign: "left" }}
							>
								{sectionData.title}
							</h2>
						</div>

						<div className="section-content" style={{ fontFamily: modernFont }}>
							{sectionData.content}
						</div>
					</div>
				</section>
			))}

			{/* Modal */}
			{selectedImage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
					<div className="modal-container relative">
						{" "}
						{/* Add relative here */}
						<Image
							src={selectedImage}
							alt="Gallery Image"
							width={800}
							height={600}
							style={{ objectFit: "contain" }} // Add objectFit
						/>
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-white text-xl z-10" // Add z-index
						>
							Close
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
			`}</style>
		</div>
	);
}

const AboutContent = () => {
	const values = [
		{
			icon: faPalette,
			title: "Creativity",
			description:
				"We constantly push the boundaries of creativity to deliver innovative and captivating content.",
		},
		{
			icon: faPeopleGroup,
			title: "Collaboration",
			description:
				"We believe in the power of collaboration and work closely with our clients to bring their vision to life.",
		},
		{
			icon: faGem,
			title: "Quality",
			description:
				"We are committed to delivering high-quality content that exceeds our client's expectations.",
		},
		{
			icon: faFire,
			title: "Passion",
			description:
				"We are passionate about what we do and believe that this passion shines through in our work.",
		},
	];

	const [isVisible, setIsVisible] = useState([false, false, false, false]); // State for visibility

	useEffect(() => {
		const handleScroll = () => {
			const triggers = document.querySelectorAll(".value-item"); // Select all value items

			triggers.forEach((trigger, index) => {
				const top = trigger.getBoundingClientRect().top;
				const screenHeight = window.innerHeight;

				if (top < screenHeight * 0.8) {
					// Adjust 0.8 for when animation triggers
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
		<div>
			<div className="flex items-start">
				{" "}
				{/* Flex container for image and text */}
				<div className="mr-8 shrink-0">
					{" "}
					{/* Image container */}
					<Image
						src={jakelouis}
						alt={"Jake Louis"}
						width={300}
						height={350}
						style={{ cursor: "pointer" }}
						className="rounded-lg"
					/>
				</div>
				<div>
					{" "}
					{/* Text content container */}
					<p className="text-lg md:text-xl leading-relaxed">
						Blue Lotus Media is a Denver-based creative agency specializing in
						web development, graphic design, music production, and video
						editing. Founded by Jacob Louis, a multimedia producer with a deep
						love for music, nature, and spirituality, Blue Lotus Media helps
						businesses and artists establish a strong online presence and
						connect with their audience through innovative and visually
						captivating content.
					</p>
					<p className="text-lg md:text-xl leading-relaxed mt-7">
						We are passionate about creating immersive experiences that blur the
						lines between technology and art. We bring a unique blend of
						creativity and technical expertise to every project.
					</p>
					<h3 className="text-lg md:text-xl leading-relaxed mt-7">
						Our Mission
					</h3>
					<p className="text-lg md:text-xl leading-relaxed mt-7">
						At Blue Lotus Media, our mission is to empower businesses and
						artists with cutting-edge creative content that captures the essence
						of their brand identity and resonates with their target audience.{" "}
					</p>
					<p className="text-lg md:text-xl leading-relaxed mt-7">
						We believe in the power of visual storytelling to create deeper
						connections and leave a lasting impression.
					</p>
				</div>
			</div>{" "}
			{/* Close the flex container for image and text */}
			{/* Grid container for the values - *OUTSIDE* the flex container */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 justify-center">
				{" "}
				{/* Centering grid */}
				{values.map((value, index) => (
					<div
						key={index}
						className={`value-item ${
							isVisible[index] ? "animate-fadeIn" : ""
						} transition-opacity duration-500 opacity-0`}
					>
						<div className="flex flex-col items-center">
							<FontAwesomeIcon
								icon={value.icon}
								className="text-4xl text-blue-500 mb-4"
							/>
							<h4 className="text-xl font-bold mb-2">{value.title}</h4>
							<p className="text-lg md:text-xl leading-relaxed text-center">
								{value.description}
							</p>
						</div>
					</div>
				))}
			</div>
			<style jsx>{`
				.animate-fadeIn {
					opacity: 1;
				}
			`}</style>
		</div>
	);
};

const ServicesContent = () => {
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
	});

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{services.map((service, index) => (
				<div
					key={index}
					className={`service-item ${
						isVisible[index] ? "animate-fadeIn" : ""
					} transition-opacity duration-500 opacity-0`}
				>
					<div className="flex flex-col items-center p-6 bg-white rounded-lg shadow services">
						{" "}
						{/* Card-like styling */}
						<FontAwesomeIcon
							icon={service.icon}
							className="text-4xl text-blue-500 mb-4"
						/>
						<h3 className="text-xl font-bold mb-2">{service.title}</h3>
						<p className="text-lg text-center">{service.description}</p>
					</div>
				</div>
			))}
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
		</div>
	);
};

const PortfolioContent = ({ openModal }) => {
	const images = [
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
	const imageRefs = useRef(images.map(() => useRef(null)));

	useEffect(() => {
		const handleScroll = () => {
			imageRefs.current.forEach((ref, index) => {
				if (ref.current) {
					const top = ref.current.getBoundingClientRect().top;
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
	});

	return (
		<div className="masonry-grid">
			{images.map((image, index) => (
				<div
					key={index}
					className={`masonry-grid-item ${
						imageVisibility[index] ? "animate-fadeIn" : ""
					} transition-opacity duration-500 opacity-0`}
					ref={imageRefs.current[index]}
				>
					<Image
						src={image.src}
						alt={image.alt}
						width={400}
						height={300}
						onClick={() => openModal(image.src)}
						style={{ cursor: "pointer" }}
					/>
				</div>
			))}
			<style jsx>{`
				.masonry-grid {
					display: grid;
					grid-template-columns: repeat(
						auto-fill,
						minmax(250px, 1fr)
					); /* Adjust minmax as needed */
					grid-gap: 1rem;
				}
				.animate-fadeIn {
					opacity: 1;
				}
			`}</style>
		</div>
	);
};

const ContactContent = () => (
	<div className="contact">
		<p className="text-lg md:text-xl leading-relaxed mb-4">
			Please feel free to contact me if you have any questions or would like to
			discuss your project.
		</p>
		<ul className="list-disc ml-6 text-lg md:text-xl leading-relaxed mb-4">
			<li>
				Email:{" "}
				<a href="mailto:jacob@bluelotusmedia.com" target="_blank">
					jacob@bluelotusmedia.com
				</a>
			</li>
			<li>
				Phone:{" "}
				<a href="tel:+7206631087" target="_blank">
					(720) 663-1087
				</a>
			</li>
		</ul>

		{/* Social Media Icons */}
		<div className="flex justify-center space-x-6">
			<a
				href="https://facebook.com/bluelotusmedia"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={faFacebook}
					className="text-3xl text-gray-600 hover:text-blue-500 transition-colors duration-300"
				/>
			</a>
			<a
				href="https://x.com/bluelotusmedia"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={faXTwitter}
					className="text-3xl text-gray-600 hover:text-blue-500 transition-colors duration-300"
				/>
			</a>
			<a
				href="https://instagram.com/bluelotusmedia"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={faInstagram}
					className="text-3xl text-gray-600 hover:text-blue-500 transition-colors duration-300"
				/>
			</a>
		</div>
		<style jsx>{`
			.contact {
				/* Target the last section, which is Contact */
				height: 62vh; /* Make it occupy full viewport height */
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center; /* Center content vertically */
			}
		`}</style>
	</div>
);
