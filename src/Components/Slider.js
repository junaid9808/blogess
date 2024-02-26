import React from "react";
import imgbg from "../Assets/bgimg.jpg";

const Slider = () => {
  return (
    <>
      <hr />
      <div>
        <div
          className="bg-cover h-[32rem] text-gray py-32"
          style={{ backgroundImage: `url(${imgbg})` }}
        >
          <div className="container mx-auto text-left pl-4 sm:pl-12">
            <h1 className="font-normal uppercase text-5xl sm:text-7xl md:text-8xl lg:text-8xl mb-4">
              Stay curious.
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl mb-10 font-medium mt-2">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <div className="flex">
              <button
                className="bg-purple-800 py-3 px-8 sm:px-10 text-white
         font-bold uppercase text-xs sm:text-sm rounded-full hover:bg-gray-200
          hover:text-gray-800"
              >
                Start Reading
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Slider;
