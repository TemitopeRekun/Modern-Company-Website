import HeadingLine from "../../assets/HeadingLine.png";
import HeroImg from "../../assets/HeroImg.png";
import { FaTelegramPlane } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { MdShare } from "react-icons/md";

const AboutUsPreview = () => {
	return (
		<section className="section-container relative flex flex-col md:flex-row items-center justify-between mb-8 gap-12">
			<div className="md:w-1/2 space-y-6 relative text-left px-4 md:px-0">
				<img
					src={HeadingLine}
					alt="curved line"
					className="absolute top-[18%] left-[-2%] hidden md:block"
				/>
				<p className="paragraph">
					Lorem ipsum dolor sit amet, consectetur.
				</p>
				<h2 className="heading-secondary">About Us</h2>
				<p className="paragraph mt-14 max-w-lg">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sit
					eos perspiciatis ad amet necessitatibus, explicabo autem quaerat
					quibusdam eaque commodi porro odio eveniet ipsa temporibus! Ipsum
					nam doloribus dolor, dolore et ratione autem ab illum quibusdam
					illo sed, omnis, similique eaque dolorem? Cumque earum sunt ea
					eaque veritatis ab.
				</p>
				<button className="px-10 py-2 rounded-full bg-transparent text-[#636AE8] cursor-pointer font-medium border border-[#636AE8] hover:shadow-xl transition-shadow mt-4 hover:bg-[#636AE8] hover:text-white">
					Learn More
				</button>
			</div>
			<div className="hidden lg:flex mx-auto bg-white absolute left-[50%] shadow-lg max-w-5xl px-4 py-4 rounded-lg flex-col items-center gap-4">
				<h3 className="text-[#636AE8FF] text-lg font-bold">Eismod Comm</h3>

				<div className="px-10 py-2 text-left w-full rounded-lg bg-[#F2F2FDFF] text-sm text-[#636AE8FF] flex items-center gap-2">
					<IoWifi /> Connection
				</div>
				<div className="px-10 py-2 text-left w-full text-sm rounded-lg bg-[#FDF1F5FF]  text-[#E8618CFF] flex items-center gap-2">
					<MdShare /> Share
				</div>
				<div className="px-10 py-2 text-left text-sm w-full rounded-lg bg-[#FEF9EEFF] text-[#98690CFF] flex items-center gap-2">
					<FaTelegramPlane /> Instantiate
				</div>
			</div>
			<div className="px-4 md:px-0">
				<img
					src={HeroImg}
					alt="hero"
					className="w-full md:w-96 lg:w-[500px]"
				/>
			</div>
		</section>
	);
};

export default AboutUsPreview;
