import React from "react";
import { Card, Input, Button, Alert, Typography } from "@material-tailwind/react";
import BrandName from "../../assets/brandName.svg?react";
import BrandLogo from "../../assets/brandLogo.svg?react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginSvg from "../../assets/loginSvg.svg?react";
import { useState } from "react";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Create state variables for your error messages
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [isloading, setIsloading] = useState(false);		// sets loading prop of Button
	const [showSuccessAlert, setshowSuccessAlert] = useState(false);
	const [showFailedAlert, setshowFailedAlert] = useState(false);
	const [showErrorAlert, setshowErrorAlert] = useState(false);

		const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsloading(true);

		// Check if all fields are filled
		const areFieldsFilled = email && password;
		let formIsValid = true;

		// Validate the email
		if (!email) {
			setEmailError("Email is required");
			formIsValid = false;
		} else if (!email.includes("@")) {
			setEmailError("Email is not valid");
			formIsValid = false;
		} else {
			setEmailError("");
		}

		// Validate the password
		if (!password) {
			setPasswordError("Password is required");
			formIsValid = false;
		} else {
			setPasswordError("");
		}

		// Update the form validity
		if (areFieldsFilled && formIsValid) {
			try {
				await new Promise(resolve => setTimeout(resolve, 1000));
				const response = await axios.post('http://localhost:6001/api/login', { email, password });
				console.log(response.data);

				// Handle the response here
				setIsloading(false);
				console.log("Logged in");
				setTimeout(() => navigate('/app'), 1000);
				
				localStorage.removeItem("userLocalData", JSON.stringify(response.data));
				localStorage.setItem("userLocalData", JSON.stringify(response.data));

				if (response.status === 200) {
					setshowSuccessAlert(true);
					setTimeout(() => setshowSuccessAlert(false), 5000); // Hide after 5 seconds
				}
				else {
					console.log("No User Found");
				}


			} catch (error) {
				setIsloading(false);
				if (error.response && error.response.status === 400) {
					console.log("No User  catch");
					setshowFailedAlert(true);
					setTimeout(() => setshowFailedAlert(false), 5000);

				} else {
					console.log("Error in login user", error);
					setshowErrorAlert(true);
					setTimeout(() => setshowErrorAlert(false), 5000);
				}
			}
		} else {
			setIsloading(false);

			console.log("Form validation failed");
		}
	};

	return (
		<div className="relative overflow-hidden">
			<div className="sm:bg-[#eefffa] sm:h-screen">
				<Link to="/" className="hidden sm:block">
					<div className="flex items-center justify-center p-4">
						<BrandLogo />
						<BrandName />
					</div>
				</Link>
				<div className="container rounded-3xl sm:shadow-2xl bg-white ">
					<Link to="/" className=" sm:hidden">
						<div className="flex items-center justify-center p-4">
							<BrandLogo />
							<BrandName />
						</div>
					</Link>
					<div className="grid sm:grid-cols-2 sm:px-36 px-2 p-8 sm:py-16   ">
						{/* Card Container */}
						<Card color="transparent" shadow={false}>
							<Typography
								variant="h2"
								color="black"
								className="font-poppins sm:text-left text-center"
							>
								Hi! Welcome Back
							</Typography>
							<Typography
								color="gray"
								className="mt-1 font-normal text-sm sm:text-left text-center font-poppins"
							>
								Nice to meet you again! Sign In.
							</Typography>

							<form
								onSubmit={handleSubmit}
								className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:mx-0 sm:w-96"
							>
								<div className="mb-3 flex flex-col gap-5">
									<div>
										<Typography
											variant="h6"
											color="blue-gray"
											className="mb-3 font-poppins text-sm"
										>
											Your Email
										</Typography>
										<input
											placeholder="Your Email"
											value={email}
											type="text"
											onChange={(e) => setEmail(e.target.value)}
											className=" w-full bg-gray-50 text-sm outline-none border-gray-500 border rounded-[16px] p-4 hover:ring-2 focus:ring-2 focus:ring-prime-500"
										/>

										<p className=" text-center text-sm text-red-500">{emailError}</p>
									</div>

									<div>
										<Typography
											variant="h6"
											color="blue-gray"
											className="mb-3 font-poppins text-sm"
										>
											Password
										</Typography>
										<input
											placeholder="* * * * * * * * "
											value={password}
											type="password"
											onChange={(e) => setPassword(e.target.value)}
											className=" w-full bg-gray-50 text-sm outline-none border-gray-500 border rounded-[16px] p-4 hover:ring-2 focus:ring-2 focus:ring-prime-500"
										/>

										<p className="text-sm text-center text-red-500">{passwordError}</p>
									</div>
								</div>

								<Button
									type="submit"
									varient=""
									loading={isloading}
									color=""
									className="mt-6 rounded-full bg-[#8c52ff] flex justify-center font-poppins py-4"
									fullWidth
								>
									Sign In
								</Button>

								<Typography
									color="gray"
									className="mt-4 text-center font-normal font-poppins text-sm"
								>
									Don't Have an Account?{" "}
									<Link
										to="/register"
										className="font-medium text-black underline-offset-2"
									>
										Create Now
									</Link>
								</Typography>
							</form>
						</Card>
						{/* Svg Container */}
						<div className="hidden sm:block">
							<LoginSvg />
						</div>
					</div>
				</div>
			</div>
			{showSuccessAlert && (
				<div className="absolute bottom-5 right-5">
					<Alert animate={{
						mount: { x: 0 },
						unmount: { x: 200 },
					}}
						className="rounded-l-3xl rounded-b-2xl "
						icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
							<path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
							<path d="M8.5 9.5L12 13L21.0002 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>}
						color="green">You Are Signed In Successfully</Alert>
				</div>)}
			{showErrorAlert && (
				<div className="absolute bottom-5 right-5">
					<Alert animate={{
						mount: { x: 0 },
						unmount: { x: 200 },
					}}
						className="rounded-l-3xl rounded-b-2xl "
						icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
						<path d="M5.75 5L19.75 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 17.5228 7.22715 22 12.75 22C18.2728 22 22.75 17.5228 22.75 12Z" stroke="currentColor" stroke-width="1.5" />
					</svg>}
						color="red">Something Went Wrong </Alert>
				</div>)}
			{showFailedAlert && (
				<div className="absolute bottom-5 right-5">
					<Alert animate={{
						mount: { x: 0 },
						unmount: { x: 200 },
					}}
						className="rounded-l-3xl rounded-b-2xl "
						icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
						<path d="M5.32171 9.68293C7.73539 5.41199 8.94222 3.27651 10.5983 2.72681C11.5093 2.4244 12.4907 2.4244 13.4017 2.72681C15.0578 3.27651 16.2646 5.41199 18.6783 9.68293C21.092 13.9539 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6549 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6549 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9539 5.32171 9.68293Z" stroke="currentColor" stroke-width="1.5" />
						<path d="M11.992 16H12.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M12 13L12 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>}
						color="orange">Email Or Password are Incorrect</Alert>
				</div>)}
		</div>
	);
}

export default Login;
