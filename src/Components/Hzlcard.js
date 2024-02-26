import React from "react";

import img from "../Assets/bgimg.jpg";
import Titlelist from "./Titlelist";
import { cardData } from "../utils/data";

const Hzlcard = () => {
  return (
    <>
      <div
        className="grid  grid-flow-col  
        lg:pl-28 md:pl-10 sm:pl-6 mt-10 relative"
      >
        <div
          className="grid grid-cols-1 mt-10 overflow-y-scroll h-[700px]"
          style={{ overflowY: "scroll", scrollbarWidth: "thin" }}
        >
          {cardData.map((item) => (
            <div className=" w-full sm:w-80 lg:w-full bg-base-100 text-start">
              <div className="card-body flex gap-1">
                <div className="ml-2">
                  <div className="flex">
                    <h2 className="card-title text-xl font-normal  mt-3 ml-4  ">
                      {item.CardTitle}
                    </h2>
                  </div>
                  <p className="text-xl font-bold">{item.heading}</p>
                  <p className="text-lg font-bold text-gray-400">
                    {item.heading2}
                  </p>
                  <div className=" flex justify-start mt-2 ">
                    <h1 className="pr-2 ">{item.date}</h1>
                    <h1>{item.time}</h1>
                  </div>
                </div>
                <div className=" pt-0 mt-2 ml-3">
                  <img src={item.image} alt="" className=" w-3/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* -----------------------list */}
        <div className="sticky top-0">
          <Titlelist />
        </div>
      </div>
    </>
  );
};

export default Hzlcard;
