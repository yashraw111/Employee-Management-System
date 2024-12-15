import React from "react";


const TaskList = () => {
  return (
    <>
      <div id="tasklist" className="py-5 h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10  h-scree ">
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
        <div  className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A youtube video</h2>
        <p className="text-sm mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt, porro culpa magnam ab soluta!
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl">
        <div  className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A youtube video</h2>
        <p className="text-sm mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt, porro culpa magnam ab soluta!
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl">
        <div  className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A youtube video</h2>
        <p className="text-sm mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt, porro culpa magnam ab soluta!
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl">
        <div  className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make A youtube video</h2>
        <p className="text-sm mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt, porro culpa magnam ab soluta!
        </p>
      </div>
      </div>
    </>
  );
};

export default TaskList;
