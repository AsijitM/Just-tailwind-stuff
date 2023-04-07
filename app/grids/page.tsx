import React from "react";

export default function Grid() {
  return (
    <div className="parent h-screen text-white">
      <div className=" container mx-auto ">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-sky-600 p-6 ">First element</div>
          <div className="rounded-lg bg-green-600 p-6 ">2nd element</div>
          <div className="rounded-lg bg-purple-600 col-span-2 p-6 ">3rd element</div>
          <div className="rounded-lg bg-purple-600 p-6 ">4th element</div>
          <div className="rounded-lg bg-purple-600 p-6 ">5th element</div>
        </div>
      </div>
    </div>
  );
}
