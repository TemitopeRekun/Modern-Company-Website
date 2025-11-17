import IntroBlock from "../../Components/IntroBlock";
import { features } from "../../Components/Data";
import FeatureCard from "./FeatureCard";

const FeatureGrid = () => {
	return (
		<section className="section-container py-16">
			<div className=" text-center">
				<IntroBlock
					paragraph="lorem ipsum dolor sit amet, consectetur."
					heading="Features"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 auto-rows-fr">
				{features.map((item) => (
					<FeatureCard
						key={item.id}
						title={item.title}
						description={item.description}
						link={item.link}
						bgImage={item.bgImage}
						className={item.className}
						linkColorClassName={item.linkColorClassName}
						bgClassName={item.bgClassName}
					/>
				))}
			</div>
		</section>
	);
};

export default FeatureGrid;
