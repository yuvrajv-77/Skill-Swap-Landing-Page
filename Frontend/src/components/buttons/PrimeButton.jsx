import React from "react";
import { Button } from "@material-tailwind/react";

function PrimeButton({ children, customprop, show }) {
  const custom = customprop ? "py-3  text-md" : "py-4 px-6";
  return (
    <span>
      <Button
        variant="filled"
        size="md"
        className={show+" rounded-full shadow-2xl bg-[#000000] lg:inline-block " + custom}
      >
        <span className="flex items-center gap-x-4">{children}</span>
      </Button>
    </span>
  );
}

export default PrimeButton;
