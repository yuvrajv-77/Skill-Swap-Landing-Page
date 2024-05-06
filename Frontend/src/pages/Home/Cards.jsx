import { Card, CardBody, Typography } from "@material-tailwind/react";
import BlackButton from "../../components/buttons/BlackButton";
import { Link } from "react-router-dom";

export function Cards({ color, head, para, svg, classes }) {
  return (
    <Card
      className={`mt-6 ${color} rounded-3xl p-4 justify-between ${classes}`}
    >
      <CardBody className="flex flex-col ">
        <div className="">{svg}</div>
        <Typography
          variant="h4"
          color="black"
          className="mb-2 font-poppins py-3"
        >
          {head}
        </Typography>

        <Typography className="font-poppins text-justify font-normal text-black">
          {para}
        </Typography>
      </CardBody>
      <Link to={'/register-user'} >
      <BlackButton >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="20"
          width="20"
        >
          <path
            stroke="#000000"
            d="M16 5c0 0.742 0.733 1.85 1.475 2.78 0.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-0.956 0 -2.145 0.575 -3.124 1.174 -1.307 0.8 -2.447 1.847 -3.401 3.045C16.733 17.15 16 18.26 16 19m8 -7H0"
            stroke-width="1"
          ></path>
        </svg>
      </BlackButton>
      </Link>
    </Card>
  );
}
