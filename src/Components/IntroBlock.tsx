import React from "react";

type IntroProps = {
	paragraph: string;
	heading: string;
};

const IntroBlock: React.FC<IntroProps> = ({ paragraph, heading }) => (
	<>
		<p className="paragraph">{paragraph}</p>
		<h2 className="heading-secondary mt-5">{heading}</h2>
	</>
);

export default IntroBlock;
