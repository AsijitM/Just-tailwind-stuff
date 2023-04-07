import React from 'react';

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl py-3">Typography Page</h1>
      <p className="text-9xl ">Title 1</p>
      <p className="text-2xl line-through">Title 2</p>
      <p className="underline decoration-red-800 text-xl">Title 3</p>
      <p className="">A regular para</p>
      <p className="">A description para</p>
      <p className="text-xs">A note para</p>
    </div>
  );
}
