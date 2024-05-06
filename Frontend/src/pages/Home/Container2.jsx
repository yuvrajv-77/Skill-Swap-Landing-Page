import React from "react";
import { Typography } from "@material-tailwind/react";
import PrimeButton from "../../components/buttons/PrimeButton";
import { Cards } from "../../pages/Home/Cards";
import { Link } from "react-router-dom";

function Container2() {
  return (
    <div>
      <div className="container  my-7">
        <div className="flex md:flex-row flex-col justify-between items-center gap-y-16 md:gap-x-[7rem] ">
          <Typography className="sm:text-5xl text-4xl px-6 sm:p-0  font-poppins font-semibold ">
            Join Skill Swap and turn passions into expertise, one connection at
            a time.
          </Typography>

          <div className="flex md:flex-col items-center   gap-5 w-80">
            <h2>Exchange skills, build friendships</h2>

            <Link to={'/register-user'}>
              <PrimeButton>
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 48 48"
                  height={30}
                  width={30}
                >
                  <g id="arrow-right-circle-1--arrow-keyboard-circle-button-right">
                    <path
                      id="Subtract"
                      fill="#00ffb7"
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
        </div>

        <div className="container mt-6 ">
          <div className="grid grid-cols-1 md:grid-cols-7 px-5 sm:px-0 gap-x-8">
            <div className="lg:col-span-2">
              <Cards
                color="bg-[#9fffe4]"
                head="Explore Exciting Skills"
                para="Dive into a world of endless possibilities and discover new skills waiting to be mastered. Whether you're interested in coding, cooking, or creative arts, Skill Swap offers a diverse range of talents to explore."
              />
            </div>
            <div className="lg:col-span-3 ">
              <Cards
                color="bg-[#a3a3f5]"
                head="Share Your Knowledge"
                para="Join a vibrant community of learners and educators eager to connect, collaborate, and share knowledge. Engage with like-minded individuals, exchange ideas, and forge meaningful connections that transcend traditional classroom boundaries. Together, we can unleash the full potential of collective learning."
              />
            </div>
            <div className="lg:col-span-2 ">
              <Cards
                color="bg-[#ffa789]"
                head="Connect and Collaborate"
                para="Ready to share your expertise and make a difference in someone else's learning journey? Skill Swap empowers you to showcase your skills and teach others what you love. Whether you're a seasoned pro or just starting out."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container2;
