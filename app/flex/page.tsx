export default function page() {
  return (
    <div className="">
      <div>Header</div>
      <div className=" flex items-center justify-center">
        <div className=" bg-sky-600"> Sidebar</div>
        <div className=" bg-red-300">
                  <h1>Main content</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam est rerum praesentium. Cumque, perferendis id omnis laboriosam recusandae explicabo, dicta reiciendis, magnam facere nesciunt eos consectetur? Iure magni impedit reiciendis!</p>
        </div>
        <div className=" bg-yellow-300">Another Sidebar</div>


              <div className="flex flex-wrap w-full ">
          <div className="w-32 grow">01</div>
          <div className="w-32 grow">02</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">03</div>
        </div>
      </div>
    </div>
  );
}
