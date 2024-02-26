import React from "react";

const Titlelist = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-lg font-bold">
          Discover more of what matters to you
        </h1>
        <ul className=" gap-2 justify-center grid grid-cols-3 mt-4 px-20 list-none">
          <li className="bg-slate-200 rounded-full px-3 py-2">Programming</li>
          <li className="bg-slate-200 rounded-full px-3 py-2">Data Science</li>
          <li className="bg-slate-200 rounded-full px-3 py-2">Technology</li>
          <li className="bg-slate-200 rounded-full px-3 py-2">
            Self Improvement
          </li>
          <li className="bg-slate-200 rounded-full px-3 py-2">Writing</li>
          <li className="bg-slate-200 rounded-full px-3 py-2">Relationships</li>
          <li className="bg-slate-200 rounded-full px-3 py-2">
            Machine Learning
          </li>
          <li className="bg-slate-200 rounded-full px-3 py-2">Productivity</li>
          <li className="bg-slate-200 rounded-full px-3 py-2">Politics</li>
        </ul>
        <p className="font-bold mt-3 underline">Read more</p>
      </div>
    </div>
  );
};

export default Titlelist;
