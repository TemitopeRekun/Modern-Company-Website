import Float1 from "../../Assets/float1.png";
import Float2 from "../../Assets/float2.png";
import Float3 from "../../Assets/float3.png";
import Float4 from "../../Assets/float4.png";
import Float5 from "../../Assets/float5.png";
import Float6 from "../../Assets/float6.png";
import Float7 from "../../Assets/float7.png";
import Float8 from "../../Assets/float8.png";

const Hero = () => {
	return (
		<section className="section-container bg-[var(--color-secondary)] max-w-full min-h-screen text-center pt-50 px-4 flex items-center md:items-start justify-center md:items-space-between relative overflow-hidden">
			<div>
				<img
					src={Float5}
					alt="floating"
					className="absolute md:bottom-[7%] md:left-[35%] md:w-[10vw] h-auto left-[5%] w-[17vw] float"
				/>
				<img
					src={Float6}
					alt="floating"
					className="hidden md:block absolute top-[34%] left-[18%] w-[18vw] h-auto float"
				/>
				<img
					src={Float7}
					alt="floating"
					className="hidden md:block absolute bottom-[15%] left-[5%] w-[12vw] h-auto float"
				/>
				<img
					src={Float8}
					alt="floating"
					className="absolute md:top-[18%] md:left-[5%] md:w-[9vw] h-auto top-[10%] left-[5%] w-[37vw] float"
				/>
			</div>
			<div className="z-40">
				<p className="paragraph text-white max-w-2xl mx-auto">
					We are glad to have you here.
				</p>
				<h1 className="heading-primary mt-2 max-w-2xl mx-auto leading-tight md:leading-normal">
					Website Heading <br />
					Goes Here
				</h1>
				<button className="bg-white text-[#636AE8FF] py-2 px-8 rounded-3xl cursor-pointer mt-3 hover:bg-[#636AE8FF] hover:text-white transition-all duration-300">
					Sign Up
				</button>
			</div>
			<div>
				<img
					src={Float1}
					alt="floating"
					className="absolute md:top-[27%] md:right-[20%] md:w-[10vw] h-auto bottom-[10%] right-[10%] w-[22vw] float"
				/>
				<img
					src={Float2}
					alt=" float"
					className="absolute md:bottom-[30%] md:right-[5%] md:w-[7vw] bottom-[65%] h-auto float"
				/>
				<img
					src={Float3}
					alt="float"
					className="hidden md:block absolute bottom-[13%] right-[18%] w-[16vw] h-auto float"
				/>
				<img
					src={Float4}
					alt="float"
					className="absolute md:bottom-[17%] right-[40%] md:w-[8vw] bottom-[5%] w-[13vw] h-auto float"
				/>
			</div>
		</section>
	);
};

export default Hero;
