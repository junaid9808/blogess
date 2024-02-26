import React from "react";
import img from "../Assets/logo.avif";
const Cardblogs = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl text-start mt-10 underline lg:px-32 md:px-12 sm:px-8">
          Trending on Medium
        </h2>
      </div>
      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
   lg:px-28 md:px-10 sm:px-6
    justify-around mb-10"
      >
        <div className=" w-full sm:w-80 lg:w-full bg-base-100 text-start">
          <div className="card-body flex gap-1">
            <div className="text-5xl font-bold pt-0 mt-0 text-slate-300">
              <h1>01</h1>
            </div>
            <div className="ml-2">
              <div className="flex">
                <img src={img} alt="" className="h-12 w-12" />
                <h2 className="card-title text-xl font-normal  mt-3 ml-4  ">
                  Card title!
                </h2>
              </div>
              <p className="text-xl font-bold">
                If a dog chews shoes whose shoes does he choose?If a dog chews
                shoes whose shoes does he choose?{" "}
              </p>
              <div className=" flex justify-start mt-2 ">
                <h1 className="pr-5 ">27 jan ,2024</h1>
                <h1>11:23 AM</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-80 lg:w-full bg-base-100 text-start">
          <div className="card-body flex gap-1">
            <div className="text-5xl font-bold pt-0 mt-0 text-slate-300">
              <h1>01</h1>
            </div>
            <div className="ml-2">
              <div className="flex">
                <img src={img} alt="" className="h-12 w-12" />
                <h2 className="card-title  text-xl font-normal  mt-3 ml-4  ">
                  Card title!
                </h2>
              </div>
              <p className="text-xl font-bold">
                If a dog chews shoes whose shoes does he choose?If a dog chews
                shoes whose shoes does he choose?{" "}
              </p>
              <div className=" flex justify-start mt-2 ">
                <h1 className="pr-5 ">27 jan ,2024</h1>
                <h1>11:23 AM</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-80 lg:w-full bg-base-100 text-start">
          <div className="card-body flex gap-1">
            <div className="text-5xl font-bold pt-0 mt-0 text-slate-300">
              <h1>01</h1>
            </div>
            <div className="ml-2">
              <div className="flex">
                <img src={img} alt="" className="h-12 w-12" />
                <h2 className="card-title  text-xl font-normal  mt-3 ml-4 ">
                  Card title!
                </h2>
              </div>
              <p className="text-xl font-bold">
                If a dog chews shoes whose shoes does he choose?If a dog chews
                shoes whose shoes does he choose?{" "}
              </p>
              <div className=" flex justify-start mt-2 ">
                <h1 className="pr-5 ">27 jan ,2024</h1>
                <h1>11:23 AM</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-80 lg:w-full bg-base-100 text-start">
          <div className="card-body flex gap-1">
            <div className="text-5xl font-bold pt-0 mt-0 text-slate-300">
              <h1>01</h1>
            </div>
            <div className="ml-2">
              <div className="flex">
                <img src={img} alt="" className="h-12 w-12" />
                <h2 className="card-title  text-xl font-normal  mt-3 ml-4  ">
                  Card title!
                </h2>
              </div>
              <p className="text-xl font-bold">
                If a dog chews shoes whose shoes does he choose?If a dog chews
                shoes whose shoes does he choose?{" "}
              </p>
              <div className=" flex justify-start mt-2 ">
                <h1 className="pr-5 ">27 jan ,2024</h1>
                <h1>11:23 AM</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-80 lg:w-full bg-base-100 text-start">
          <div className="card-body flex gap-1">
            <div className="text-5xl font-bold pt-0 mt-0 text-slate-300">
              <h1>01</h1>
            </div>
            <div className="ml-2">
              <div className="flex">
                <img src={img} alt="" className="h-12 w-12" />
                <h2 className="card-title text-xl font-normal  mt-3 ml-4 ">
                  Card title!
                </h2>
              </div>
              <p className="text-xl font-bold">
                If a dog chews shoes whose shoes does he choose?If a dog chews
                shoes whose shoes does he choose?{" "}
              </p>
              <div className=" flex justify-start mt-2 ">
                <h1 className="pr-5 ">27 jan ,2024</h1>
                <h1>11:23 AM</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-80 lg:w-full bg-base-100 text-start">
          <div className="card-body flex gap-1">
            <div className="text-5xl font-bold pt-0 mt-0 text-slate-300">
              <h1>01</h1>
            </div>
            <div className="ml-2">
              <div className="flex">
                <img src={img} alt="" className="h-12 w-12" />
                <h2 className="card-title  text-xl font-normal  mt-3 ml-4  ">
                  Card title!
                </h2>
              </div>
              <p className="text-xl font-bold">
                If a dog chews shoes whose shoes does he choose?If a dog chews
                shoes whose shoes does he choose?{" "}
              </p>
              <div className=" flex justify-start mt-2 ">
                <h1 className="pr-5 ">27 jan ,2024</h1>
                <h1>11:23 AM</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cardblogs;
