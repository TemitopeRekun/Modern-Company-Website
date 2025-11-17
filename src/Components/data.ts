import featureImg1 from "../assets/featureImg1.png";
import featureImg2 from "../assets/featureImg2.png";
import featureImg3 from "../assets/featureImg3.png";
import featureImg4 from "../assets/featureImg4.png";

import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";

export const navLinks = [
	{ label: "Features", path: "/features" },
	{ label: "Pricing", path: "/pricing" },
	{ label: "Help Center", path: "/help-center" },
	{ label: "About Us", path: "/about-us" },
	{ label: "Careers", path: "/careers" },
	{ label: "Contact Us", path: "/contact-us" },
	{ label: "FAQs", path: "/faq" },
];

export const features = [
	{
		id: 1,
		title: "Smart Automation",
		description:
			"Automate daily tasks and boost productivity loremipsum dolor sit amet consectetur",
		link: "/features",
		bgImage: featureImg1,
		className: "col-span-1 bg-[#BAF3EBFF]",
		linkColorClassName: "text-[#1BA18DFF]",
		bgClassName: "bottom-[-60px] right-[-40px] w-40 h-40",
	},
	{
		id: 2,
		title: "Analytics Dashboard",
		description:
			"Automate daily tasks and boost productivity loremipsum dolor sit amet.",
		link: "/features",
		bgImage: featureImg2,
		className: "col-span-2 bg-[#CED0F8FF]",
		linkColorClassName: "text-[#2C35E0FF]",
		bgClassName:
			"bottom-[12%] right-[10%] lg:w-68 lg:h-48 md:w-48 md:h-36 w-40 h-30",
	},
	{
		id: 3,
		title: "Team Collaboration",
		description:
			"Automate daily tasks and boost productivity loremipsum dolor sit amet elit.",
		link: "/features",
		bgImage: featureImg3,
		className: "col-span-2 bg-[#F8DBD0FF]",
		linkColorClassName: "text-[#E1602CFF]",
		bgClassName:
			"bottom-[12%] right-[10%] lg:w-58 lg:h-58 md:w-48 md:h-46 w-40 h-40",
	},

	{
		id: 4,
		title: "Smart Automation",
		description:
			"Automate daily tasks and boost productivity loremipsum dolor sit amet elit.",
		link: "/features",
		bgImage: featureImg4,
		className: "col-span-1 bg-[#FDF1F5FF]",
		linkColorClassName: "text-[#E02862FF]",
		bgClassName: "bottom-[-60px] right-[-40px] w-40 h-40",
	},
];

export const companiesLogo = [
	{
		id: 1,
		logo: company1,
	},
	{
		id: 2,
		logo: company2,
	},
	{
		id: 3,
		logo: company3,
	},
	{
		id: 4,
		logo: company4,
	},
	{
		id: 5,
		logo: company5,
	},
];
