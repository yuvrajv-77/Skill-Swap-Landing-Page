import React from "react";
import HomeHeroSvg from "../../assets/Untitled1.webp";
import { Typography } from "@material-tailwind/react";
import PrimeButton from "../../components/buttons/PrimeButton";
import { Link } from "react-router-dom";

function Container1() {
	return (
		<div>
			<div className="container my-[6rem] sm:my-32 ">
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
					{/* ------------------left section---------------------- */}
					<div className="  flex gap-y-11 justify-center items-center sm:items-start flex-col h-full ">
						<Typography
							className="text-4xl text-center sm:text-left sm:text-5xl  font-poppins sm:leading-[3.5rem] leading-tight font-bold"
							color="black"
						>
							Dive Into Skill Swap And Connect Effortlessly With{" "}
							<span className="font-shantell bg-[#00ffb760] rounded-md">
								Peers!
							</span>
						</Typography>

						<Typography
							variant="h6"
							className="font-poppins sm:text-left sm:p-0 px-9 text-center text-gray-800 font-normal"
						>
							Excited to learn something new while teaching others what you
							love? Join Skill Swap today and start connecting with{" "}
							<span className="text-[#8c52ff]">like-minded peers!</span>
						</Typography>

						<Link to={'/register-user'}>
							<PrimeButton show="" customprop={true}>
								Get Started
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 48 48"
									height={50}
									width={50}
								>
									<g id="arrow-right-circle-1--arrow-keyboard-circle-button-right">
										<path
											id="Subtract"
											fill="#fff"
											fillRule="evenodd"
											d="M46.5 24c0 12.426 -10.074 22.5 -22.5 22.5S1.5 36.426 1.5 24 11.574 1.5 24 1.5 46.5 11.574 46.5 24Z"
											clipRule="evenodd"
											strokeWidth={1}
										/>
										<path
											id="Subtract_2"
											fill="#000000"
											fillRule="evenodd"
											d="M24.146 24.353a0.5 0.5 0 0 0 0 -0.707l-6.498 -6.498c-0.97 -0.97 -1.169 -2.487 -0.29 -3.539 0.701 -0.838 1.537 -1.673 2.392 -2.275 1.008 -0.708 2.302 -0.376 3.218 0.447 3.274 2.942 7.602 7.329 9.779 10.211 0.919 1.218 0.92 2.797 0 4.015 -2.177 2.883 -6.505 7.27 -9.779 10.211 -0.916 0.823 -2.21 1.156 -3.218 0.447 -0.855 -0.602 -1.69 -1.436 -2.392 -2.275 -0.879 -1.052 -0.68 -2.569 0.29 -3.538l6.498 -6.499Z"
											clipRule="evenodd"
											strokeWidth={1}
										/>
									</g>
								</svg>
							</PrimeButton>
						</Link>
					</div>

					{/* ----------------------right section-------------------- */}
					<div className=" h-full mx-4 sm:ml-14 my-5 sm:my-0 ">
						<div className="flex items-center justify-center h-full ">
							<img className="" src={HomeHeroSvg} alt="" srcset="" />
						</div>
					</div>
				</div>
				{/* <div className="flex flex-col items-center md:flex-row gap-x-1">
					
					<div className="  flex gap-y-9 justify-center px-2 flex-col w-3/5 h-full">
						<Typography
							className=" text-5xl  font-poppins leading-tight font-extrabold"
							
							color="black"
						>
							Dive Into Skill Swap And Connect Effortlessly With{" "}
							<span className="font-shantell bg-[#00ffb760] rounded-md">
								Peers!
							</span>
						</Typography>

						<Typography
							variant="h6"
							className="font-poppins text-gray-800 font-normal"
						>
							Excited to learn something new while teaching others what you
							love? Be Ready to discover new talents and share yours. Join Skill
							Swap today and start connecting with{" "}
							<span className="text-[#8c52ff]">like-minded peers!</span>
						</Typography>

						<span>
							<Link to='/register'>
							<PrimeButton customprop={true}>
								Get Started
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 48 48"
									height={50}
									width={50}
								>
									<g id="arrow-right-circle-1--arrow-keyboard-circle-button-right">
										<path
											id="Subtract"
											fill="#fff"
											fillRule="evenodd"
											d="M46.5 24c0 12.426 -10.074 22.5 -22.5 22.5S1.5 36.426 1.5 24 11.574 1.5 24 1.5 46.5 11.574 46.5 24Z"
											clipRule="evenodd"
											strokeWidth={1}
										/>
										<path
											id="Subtract_2"
											fill="#000000"
											fillRule="evenodd"
											d="M24.146 24.353a0.5 0.5 0 0 0 0 -0.707l-6.498 -6.498c-0.97 -0.97 -1.169 -2.487 -0.29 -3.539 0.701 -0.838 1.537 -1.673 2.392 -2.275 1.008 -0.708 2.302 -0.376 3.218 0.447 3.274 2.942 7.602 7.329 9.779 10.211 0.919 1.218 0.92 2.797 0 4.015 -2.177 2.883 -6.505 7.27 -9.779 10.211 -0.916 0.823 -2.21 1.156 -3.218 0.447 -0.855 -0.602 -1.69 -1.436 -2.392 -2.275 -0.879 -1.052 -0.68 -2.569 0.29 -3.538l6.498 -6.499Z"
											clipRule="evenodd"
											strokeWidth={1}
										/>
									</g>
								</svg>
							</PrimeButton>
							</Link>
							
						</span>
					</div>

				 
					<div className=" w-3/6 h-full ">
						<div className="flex items-center justify-center h-full ">
							<img className="" src={HomeHeroSvg} alt="" srcset="" />
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Container1;
