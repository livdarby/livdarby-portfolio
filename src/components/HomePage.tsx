function HomePage() {
  console.log("Home page has mounted");
  return (
    <>
      <section className="bg-[#2a2a2a] h-screen flex flex-col justify-center">
        <div className="bg-[#e4e2dd] px-5 lg:mx-[20%] md:mx-[5%] h-[80%] flex flex-col justify-evenly my-auto">
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex gap-1 items-center cursor-pointer">
            skills <img src="../assets/plus.png" className="max-h-3" />
          </div>
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex gap-1 items-center cursor-pointer">
            projects <img src="../assets/plus.png" className="max-h-3" />
          </div>
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex gap-1 items-center cursor-pointer">
            about me <img src="../assets/plus.png" className="max-h-3" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
