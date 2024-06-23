import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountupDesing = () => {
  const [countScroll, setCountScroll] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCountScroll(true)}
      onExit={() => setCountScroll(false)}
    >
      <div className="container flex text-center justify-center gap-36 py-10 pt-80">
        <div>
          <h1 className=" text-5xl font-black hover:text-red-500 cursor-pointer">
            {countScroll && (
              <CountUp start={0} end={20000} duration={5}></CountUp>
            )}
            +
          </h1>
          <p className="mt-2 text-2xl font-medium hover:text-blue-600 cursor-pointer">
            successful
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-black hover:text-red-500 cursor-pointer">
            {countScroll && (
              <CountUp start={0} end={35000} duration={5}></CountUp>
            )}
            +
          </h1>
          <p className="mt-2 text-2xl font-medium hover:text-blue-600 cursor-pointer">
            Projcet Done
          </p>
        </div>
        <div>
          <h1 className=" text-5xl font-black hover:text-red-500 cursor-pointer">
            {countScroll && (
              <CountUp start={0} end={1000} duration={5}></CountUp>
            )}
            +
          </h1>
          <p className="mt-2  text-2xl font-medium hover:text-blue-600 cursor-pointer">
            Company
          </p>
        </div>
        <div>
          <h1 className=" text-5xl font-black hover:text-red-500 cursor-pointer">
            {countScroll && (
              <CountUp start={0} end={900} duration={5}></CountUp>
            )}
          </h1>
          <p className="mt-2 text-2xl font-medium hover:text-blue-600 cursor-pointer">
            Winner
          </p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountupDesing;
