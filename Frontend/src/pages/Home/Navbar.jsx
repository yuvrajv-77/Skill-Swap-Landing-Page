import React from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
	Tooltip,
} from "@material-tailwind/react";
import BlueButton from "../../components/buttons/PrimeButton";
import BlackButton from "../../components/buttons/BlackButton";
import GithubSvg from "../../assets/icons/github.svg?react";
import BrandName from "../../assets/brandName.svg?react";
import BrandLogo from "../../assets/brandLogo.svg?react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth && setOpenNav(false)
		);
	}, []);

	// brand logo

	// Navbar List Items
	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="black"
				className="flex items-center gap-x-2 p-2 font-semibold rounded-full hover:bg-[#e7e7e7]"
			>
				<a href="#" className="flex items-center">
					Home
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="black"
				className="flex items-center gap-x-2 p-2 font-semibold rounded-full hover:bg-[#e7e7e7]"
			>
				<a href="#" className="flex items-center">
					Features
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="black"
				className="flex items-center gap-x-2 p-2 font-semibold rounded-full hover:bg-[#e7e7e7]"
			>
				<a href="#" className="flex items-center">
					Community
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="black"
				className="flex items-center gap-x-2 p-2 font-semibold rounded-full hover:bg-[#e7e7e7]"
			>
				<a href="#" className="flex items-center">
					Docs
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="black"
				className="flex items-center gap-x-2 p-2 font-semibold rounded-full hover:bg-[#e7e7e7]"
			>
				<a href="#" className="flex items-center">
					About
				</a>
			</Typography>
		</ul>
	);

	return (
		<Navbar className=" rounded-none max-w-full px-4 py-2 lg:px-8 lg:py-4">
			<div className="mx-auto flex items-center justify-around ">
				<a href="" className="flex items-center">
					<BrandLogo />
					<BrandName />
				</a>

				<div className="hidden lg:block">
					{/* navbar items */}
					{navList}
				</div>

				{/* buttons */}
				<div className="flex items-center gap-x-4">
					{/* github link */}
					<Tooltip
						content="See Github"
						placement="left"
						className=" bg-[#252525] px-3 py-2 shadow-xl shadow-black/10"
						animate={{
							mount: { scale: 1, x: 0 },
							unmount: { scale: 0, x: 25 },
						}}
					>
						{/* github icon */}
						<a href="" className="hidden sm:block">
							<GithubSvg />
						</a>
					</Tooltip>

					<div className="flex items-center gap-x-3">
						<Link to={'/login'}>
							<BlackButton show='hidden'>Log In</BlackButton>
						</Link>
						<Link to={'/register'}>
							<BlueButton show='hidden'>Sign Up</BlueButton>
						</Link>
					</div>
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="black" // Change the color here
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="black"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<MobileNav open={openNav}>
				<div className="container mb-2">
					{navList}
					<div className="flex items-center gap-x-3">
						<Link to={'/login'}>
							<Button
								fullWidth
								variant="outlined"
								size="lg"
								className=" rounded-full"
							>
								<span>Log In</span>
							</Button>
						</Link>

						<Link to={'/register-user'}>
							<Button
								fullWidth
								variant="gradient"
								size="lg"
								className=" rounded-full"
							>
								<span>Sign Up</span>
							</Button>
						</Link>
					</div>
				</div>
			</MobileNav>
		</Navbar>
	);
}
