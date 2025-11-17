import IntroBlock from "../../Components/IntroBlock";
import { companiesLogo } from "../../Components/Data";

const Companies = () => {
	return (
		<section className="pt-8">
			<div className=" text-center">
				<IntroBlock
					paragraph="Trusted by over 50+ companies worldwide."
					heading="Our Clients"
				/>
			</div>
			<div className="overflow-hidden relative pt-10">
				<div className="flex gap-2 animate-marquee whitespace-nowrap ">
					{companiesLogo.map((logo) => (
						<img
							src={logo.logo}
							alt="Clients logo"
							key={logo.id}
							className="md:h-30 h-20 w-auto transition"
						/>
					))}

					{companiesLogo.map((logo) => (
						<img
							src={logo.logo}
							alt="Clients logo"
							key={"dup-" + logo.id}
							className="md:h-30 h-20 w-auto transition"
						/>
					))}
				</div>
			</div>

			<style>
				{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                .animate-marquee {
                    animation: marquee 15s linear infinite;}
                `}
			</style>
		</section>
	);
};

export default Companies;
