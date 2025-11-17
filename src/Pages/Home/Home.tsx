import Hero from "./Hero";
import AboutUsPreview from "..//AboutUs/AboutUsPreview";
import FeaturesGrid from "../Home/FeatureGrid";
import Companies from "./Companies";

const Home: React.FC = () => {
	return (
		<main>
			<Hero />
			<AboutUsPreview />
			<FeaturesGrid />
			<Companies />
		</main>
	);
};

export default Home;
