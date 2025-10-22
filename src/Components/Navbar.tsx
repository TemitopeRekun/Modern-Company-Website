import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
	{ label: "Features", path: "/features" },
	{ label: "Pricing", path: "/pricing" },
	{ label: "Help Center", path: "/help-center" },
	{ label: "About Us", path: "/about-us" },
	{ label: "Careers", path: "/careers" },
	{ label: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="sticky top-0 left-0 w-full z-50">
			<div className="bg-white/20 backdrop-blur-xl shadow-lg border-b border-white/10 shadow-black/5">
				<div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
					<div className="text-2xl font-bold">
						<Link to="/">Logo</Link>
					</div>
					<ul className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<li key={link.path}>
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										isActive ? "text-blue-500" : "text-gray-700"
									}>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="hidden md:flex items-center gap-6">
						<Link
							to="/login"
							className="text-gray-700 hover:text-gray-900">
							Login
						</Link>
						<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
							Try For Free
						</button>
					</div>
					<button
						aria-label="Toggle Menu"
						className="md:hidden cursor-pointer"
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Menu size={28} />
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 h-full bg-black/30 z-40 md:hidden"
					onClick={() => setIsMenuOpen(false)}></div>
			)}

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 flex h-full w-3/4 max-w-sm flex-col bg-white/30 backdrop-blur-2xl border-l border-white/20 shadow-lg transition-transform duration-300 ease-in-out md:hidden z-50 ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}>
				{/* Close Button */}
				<div className="flex justify-end p-4">
					<button
						aria-label="Close Menu"
						onClick={() => setIsMenuOpen(false)}>
						<X size={28} />
					</button>
				</div>
				{/* Centered Content */}
				<div className="flex flex-grow flex-col items-center justify-center">
					{/* Mobile Menu Items */}
					<ul className="flex flex-col gap-4 text-center text-lg font-medium">
						{navLinks.map((link) => (
							<li key={link.path}>
								<Link
									to={link.path}
									onClick={() => setIsMenuOpen(false)}
									className="block py-2 hover:text-blue-600 transition-colors">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					{/* Mobile Buttons */}
					<div className="mt-8 flex flex-col gap-4 w-full px-6">
						<Link
							to="/login"
							onClick={() => setIsMenuOpen(false)}
							className="text-center text-lg font-medium hover:text-blue-600 transition">
							Login
						</Link>
						<Link
							to="/signup" // Assuming you have a sign-up route
							onClick={() => setIsMenuOpen(false)}
							className="bg-blue-600 text-white text-center text-lg font-medium py-2 rounded-lg hover:bg-blue-700 transition">
							Try for Free
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
