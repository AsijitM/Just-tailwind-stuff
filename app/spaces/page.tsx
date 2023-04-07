import React from 'react';

export default function space() {
  return (
    <div>
      {/* <h1 className="  bg-red-500 text-white text-3xl p-4 max-w-2xl mx-auto">
        Space
      </h1>
      <div className="m-4 h-36 w-36 p-3  bg-sky-400 text-white mx-auto flex items-stretch">
        <p className="self-start">This is my paragraph</p>
      </div> */}

      <div className="flex space-y-4 min-h-screen ">
        <div className=" w-1/5 bg-yellow-500 text-white ">Sidebar</div>
        <div className=" w-4/5 bg-red-500 text-white">Main Content</div>
      </div>
    </div>
  );
}
