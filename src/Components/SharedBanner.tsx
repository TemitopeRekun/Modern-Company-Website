import curve from "../assets/curve.png";

const SharedBanner = () => {
	return (
		<section className="py-8">
			<div className="relative lg:max-w-7xl max-w-3xl mx-auto px-4 lg:px-8 py-8 lg:py-8 lg:mt-20 flex flex-col justify-center items-center bg-[#2C35E0FF] text-white text-center rounded-3xl">
				<img
					src={curve}
					alt="curved arrow"
					className="absolute hidden lg:block top-1/2 right-[8%] w-[15vw] -translate-x-1/2 -translate-y-1/2"
				/>
				<h1 className="heading-primary lg:py-10 py-6 z-10">
					Getting Started
				</h1>
				<button className="bg-[#E8618CFF] text-white px-16 py-4 mb-5 rounded-full cursor-pointer font-medium hover:bg-[#E8618CFF]/80 focus:outline-none focus:ring-2 focus:ring-[#E8618CFF] focus:ring-offset-2 focus:ring-offset-[-#2C35E0FF] transition-colors duration-200 ease-in-out z-10">
					Sign Up
				</button>
			</div>
		</section>
	);
};

export default SharedBanner;
