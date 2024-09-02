import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, para, hover="false" }) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading</h1>
      </div>
      <div className="down w-full mt-60">
        {start === true && (
          <>
            <h1 className="text-8xl font-semi-bold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
