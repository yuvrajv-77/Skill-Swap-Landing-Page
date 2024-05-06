import React from "react";
import Pattern from "../../assets/pattern.jpg";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function Community() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  const img = Pattern;
  return (
    <div
      className="container w-full sm:rounded-3xl flex flex-col items-center gap-y-9 bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Typography className="font-poppins text-3xl sm:text-6xl font-semibold text-center text-white ">
        Join The Community
      </Typography>

      <p className="text-white font-light text-center">
        At SkillSwap I Believe Learning Is A<br />
        Collaborative Process
      </p>

      <div className=" flex bg-white items-center rounded-full  md:w-full max-w-[31rem] mx-3 p-1 gap-x-2 ">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-full p-4 rounded-full"
        />
        <Button
          variant="filled"
          size="md"
          className=" rounded-full bg-[#000000] p-4"
        >
          <span className="flex items-center gap-x-2">
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 48 48"
              height={20}
              width={20}
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
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Community;
