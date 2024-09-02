import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className="min-w-40 w-60 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between border border-b-[1px] border-zinc-700">
      <span className="text-sm font-medium">{title}</span>
      <IoMdReturnRight />
    </div>
  );
}

export default Button;
