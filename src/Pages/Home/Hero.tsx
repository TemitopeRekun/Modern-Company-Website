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
		<section className="section-container bg-[var(--color-secondary)] max-w-full min-h-screen text-center pt-50 px-4 md:flex md:justify-center md:items-space-between  relative overflow-hidden">
			<div>
				<img
					src={Float5}
					alt="floating"
					className="hidden md:block absolute bottom-[10%] left-[35%] w-[10vw] h-auto"
				/>
				<img
					src={Float6}
					alt="floating"
					className="hidden md:block absolute top-[34%] left-[18%] w-[18vw] h-auto"
				/>
				<img
					src={Float7}
					alt="floating"
					className="hidden md:block absolute bottom-[15%] left-[5%] w-[12vw] h-auto"
				/>
				<img
					src={Float8}
					alt="floating"
					className="absolute top-[18%] left-[5%] w-[9vw] h-auto"
				/>
			</div>
			<div>
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
					className="absolute top-[27%] right-[20%] w-[10vw] h-auto"
				/>
				<img
					src={Float2}
					alt=" float"
					className="hidden md:block absolute bottom-[30%] right-[5%] w-[7vw] h-auto"
				/>
				<img
					src={Float3}
					alt="float"
					className="hidden md:block absolute bottom-[13%] right-[18%] w-[16vw] h-auto"
				/>
				<img
					src={Float4}
					alt="float"
					className="hidden md:block absolute bottom-[17%] right-[40%] w-[8vw] h-auto"
				/>
			</div>
		</section>
	);
};

export default Hero;
