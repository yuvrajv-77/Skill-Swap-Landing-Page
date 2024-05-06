import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className=" flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white border-t border-blue-gray-100 px-8 py-7 text-center mt- md:justify-between">
      <Typography color="blue-gray" className="font-normal font-poppins">
        &copy; 2024 Skill Swap
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal font-poppins transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors font-poppins hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors font-poppins hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors font-poppins hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}