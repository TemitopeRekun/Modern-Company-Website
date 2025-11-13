import curve from "../assets/curve.png";

const SharedBanner = () => {
	return (
		<section>
			<div className=" relative md:max-w-7xl max-w-3xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center bg-[#2C35E0FF]  text-white text-center md:py-8 mt-20 rounded-3xl">
				<img
					src={curve}
					alt="curved arrow"
					className="absolute top-[35%] right-[30%] w-[15vw]"
				/>
				<h1 className="heading-primary py-10">Getting Started</h1>
				<button className="bg-[#E8618CFF] text-white px-16 py-4 mb-5 rounded-full cursor-pointer font-medium hover:bg-[#E8618CFF]/80 focus:outline-none focus:ring-2 focus:ring-[#E8618CFF] focus:ring-offset-2 focus:ring-offset-[-#2C35E0FF] transition-colors duration-200 ease-in-out">
					Sign Up
				</button>
			</div>
		</section>
	);
};

export default SharedBanner;
