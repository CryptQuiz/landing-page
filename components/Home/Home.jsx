"use client";
import Image from "next/image";
import React from "react";

const Home = () => {
  const [size, setSize] = React.useState({
    width: 300,
    height: 50,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-white text-shadow drop-shadow-[3px_3px_rgba(0,0,0,1)]   font-lexend text-5xl mb-20">
        Welcome On Board
      </h1>
      <div className="bg-white  border-black border-2 border-b-8 border-r-8 rounded-[40px] h-4/5 w-full mt-20 flex flex-row ">
        <div className="w-1/2 h-full">
          <div className="w-full justify-center items-center">
            <p className="text-black font-lexend leading-10  font-bold  p-16 text-lg">
              Q&R is a Blockchain-powered Game-Fi platform that enables players
              to earn specific incomes according to their answers, activities,
              and creative ideas at different fictional functions. It is a
              new-generation quiz game, with a completely unique approach
              without any centralized restrictions.
            </p>
          </div>
          <div className="relative ">
            <Image
              className="absolute left-40 -top-16 z-10"
              src="/images/Humans.png"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <div className="relative">
            <Image
              className="absolute right-20 -top-0 z-10 image-with-shadow"
              src="/images/QuizQuestionMobile.png"
              width={280}
              height={280}
            />
          </div>
          <div className="relative">
            <Image
              className="absolute right-80 -top-12 z-10 image-with-shadow"
              src="/images/UserHomeMobile.png"
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
{
  /* <div className="flex flex-col-2 justify-center items-center">
<div className="w-2/3 justify-center items-center">
  <p className="text-black font-lexend leading-10  font-bold px-20 p-10 text-lg">
    Q&R is a Blockchain-powered Game-Fi platform that enables players
    to earn specific incomes according to their answers, activities,
    and creative ideas at different fictional functions. It is a
    new-generation quiz game, with a completely unique approach
    without any centralized restrictions.
  </p>
</div>
<div className="w-1/2 relative">
  <div className="absolute right-58 -top-60 z-20">
    <Image
      src="/images/UserHomeMobile.png"
      width={size.width}
      height={size.height}
      className="image-with-shadow" // Added class name for styling
    />
  </div>
  <div className="absolute right-20 -top-40 z-10">
    <Image
      src="/images/QuizQuestionMobile.png"
      width={size.width}
      height={size.height}
      className="image-with-shadow" // Added class name for styling
    />
  </div>
</div>
</div>
<div>
<div className="relative w-1/3">
  <Image
    className="absolute left-40 top-4"
    src="/images/Humans.png"
    width={400}
    height={400}
  />
</div>
</div> */
}
