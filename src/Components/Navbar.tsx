import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { navLinks } from "../Components/Data"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full z-50">
			<div className="bg-white/50 backdrop-blur-2xl border-l border-white/20 shadow-lg shadow-black/5">
				<div className="max-w-full mx-auto flex items-center justify-between py-2 px-8">
					<div className="text-2xl font-bold">
						<Link to="/">
							<img
								src={Logo}
								alt="Logo"
								className="h-6 object-cover object-top"
							/>
						</Link>
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
					<div className="hidden md:flex justify-end items-center gap-6">
						<Link
							to="/login"
							className="text-gray-700 hover:text-gray-900">
							Login
						</Link>
						<button className="bg-[#636AE8FF] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
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
				<button
					type="button"
					aria-label="Close mobile menu"
					className="fixed inset-0 h-full bg-black/60 z-40 md:hidden"
					onClick={() => setIsMenuOpen(false)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							setIsMenuOpen(false);
						}
					}}
				/>
			)}

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 flex h-full w-3/4  max-w-sm flex-col bg-white/80 backdrop-blur-3xl border-l border-white/20 shadow-lg transition-transform duration-300 ease-in-out md:hidden z-50 ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}>
				<div className="flex justify-end p-4">
					<button
						aria-label="Close Menu"
						onClick={() => setIsMenuOpen(false)}>
						<span className="cursor-pointer">
							<X size={28} />
						</span>
					</button>
				</div>
				{/* Centered Content */}
				<div className="flex flex-grow flex-col items-center justify-self-start px-6 pt-5">
					{/* Mobile Menu Items */}
					<ul className="flex flex-col gap-4 text-center text-lg font-medium">
						{navLinks.map((link) => (
							<li key={link.path}>
								<Link
									to={link.path}
									onClick={() => setIsMenuOpen(false)}
									className="block py-2 px-6 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					{/* Mobile Buttons */}
					<div className="mt-8 flex w-full max-w-xs flex-col gap-4">
						<Link
							to="/login"
							onClick={() => setIsMenuOpen(false)}
							className="border border-gray-300 text-center text-lg font-medium py-3 px-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
							Login
						</Link>
						<Link
							to="/signup" // Assuming you have a sign-up route
							onClick={() => setIsMenuOpen(false)}
							className="bg-blue-600 text-white text-center text-lg font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition">
							Try for Free
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
