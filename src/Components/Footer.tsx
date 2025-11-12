import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

const navLinks = [
	{ label: "Features", path: "/features" },
	{ label: "Pricing", path: "/pricing" },
	{ label: "Help Center", path: "/help-center" },
	{ label: "About Us", path: "/about-us" },
	{ label: "Careers", path: "/careers" },
	{ label: "Contact Us", path: "/contact-us" },
];

const Footer = () => {
	return (
		<footer className="bg-[-#FAFAFBFF] w-full section">
			<div className="max-w-7xl mx-auto md:px-8 py-18 flex flex-col items-center justify-center text-center">
				<h2 className="text-neutral-700 text-xl">
					Subscribe To Our Newsletter
				</h2>

				<form
					aria-label="Newsletter subscription"
					onSubmit={(e) => e.preventDefault()}
					className="flex w-full max-w-md bg-white/10 rounded-full overflow-hidden mt-10 outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-[-#FAFAFBFF] transition-shadow">
					<label htmlFor="email-newsletter" className="sr-only">
						Email address
					</label>
					<input
						style={{ paddingLeft: "2.5em" }}
						id="email-newsletter"
						name="email"
						type="email"
						placeholder="Enter your email"
						className="flex-1 px-6 py-3 bg-gray-100 text-gray-900  placeholder-gray-300 outline-none"
						required
					/>
					<button
						type="submit"
						className="px-6 py-3 bg-primary text-white font-medium hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[-#FAFAFBFF] transition-colors rounded-r-full border-l border-gray-500/20 cursor-pointer">
						Subscribe
					</button>
				</form>
			</div>

			<nav className="w-full z-50">
				<div className="max-w-6xl mx-auto md:px-8 py-3 flex flex-col md:flex-row gap-10 items-center justify-between text-center">
					<div className="text-2xl font-bold">
						<Link to="/">
							<img
								src={Logo}
								alt="Logo"
								className="h-10 object-cover object-top"
							/>
						</Link>
					</div>
					<ul className="flex md:flex-row flex-col items-center gap-6">
						{navLinks.map((link) => (
							<li key={link.path}>
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										isActive
											? "text-blue-500 text-xl"
											: "text-gray-700 text-xl"
									}>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>

			<hr className="border-t w-3/4 mx-auto border-gray-300 mt-5" />

			<div className="max-w-7xl mx-auto md:px-8 py-6 text-center flex md:flex-row flex-col items-center justify-between gap-4 mt-5">
				<div className="flex items-center gap-2">
					<select
						name="language"
						defaultValue={"en"}
						id="language"
						className="bg-gray-200 outline-none  rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[-#FAFAFBFF] transition-colors cursor-pointer">
						<option value="en">English</option>
						<option value="es">Spanish</option>
						<option value="fr">French</option>
						<option value="de">German</option>
					</select>
				</div>
				<div className="flex flex-wrap justify-center gap-4 text-center text-gray-600">
					<span>&copy; {new Date().getFullYear()} Your Company, Inc.</span>
					<Link
						to="/privacy-policy"
						className="text-gray-600 hover:text-gray-800">
						Privacy Policy
					</Link>
					<Link
						to="/terms-of-service"
						className="text-gray-600 hover:text-gray-800">
						Terms of Service
					</Link>
					<Link
						to="/sitemap"
						className="text-gray-600 hover:text-gray-800">
						Sitemap
					</Link>
				</div>
				<div className="flex items-center gap-4 text-center">
					<Link
						to="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						className="transition-opacity hover:opacity-80">
						<SiFacebook size={20} className="text-[#1877F2]" />
					</Link>
					<Link
						to="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="YouTube"
						className="transition-opacity hover:opacity-80">
						<SiYoutube size={20} className="text-[#FF0000]" />
					</Link>
					<Link
						to="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className="transition-opacity hover:opacity-80">
						<SiInstagram size={20} className="text-[#E4405F]" />
					</Link>
					<Link
						to="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="transition-opacity hover:opacity-80">
						<SiLinkedin size={20} className="text-[#0A66C2]" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
