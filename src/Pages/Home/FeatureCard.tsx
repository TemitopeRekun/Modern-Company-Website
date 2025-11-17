interface FeatureCardProps {
	title: string;
	description: string;
	link: string;
	bgImage: string;
	className?: string;
	linkColorClassName?: string;
	bgClassName: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
	title,
	description,
	link,
	bgImage,
	className,
	linkColorClassName,
	bgClassName,
}) => {
	return (
		<div
			className={`relative p-4 bg-surface rounded-xl shadow-sm overflow-hidden ${className}`}>
			<h3 className="text-2xl mb-2 font-bold text-[#323743FF] mt-5">
				{title}
			</h3>
			<p className="paragraph mb-25 text-[#323743FF] max-w-[21rem]">{description}</p>
			<a
				href={link}
				className={`underline ${linkColorClassName}`}>
				Try Now
			</a>

			<img
				src={bgImage}
				alt=""
				className={`absolute cover opacity-40 pointer-events-none ${bgClassName}`}
			/>
		</div>
	);
};

export default FeatureCard;
