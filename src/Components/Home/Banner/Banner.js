import React from "react";
import top_banner from "../../../images/top-banner.jpg";
import icon from '../../../images/icon-1.png';

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0.1)
          ),url(${top_banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <section className="flex justify-start">
        <div className="container text-gray-300 mx-auto flex flex-col items-center lg:justify-start px-4 py-16 md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <img src={icon} alt=""/>
          <h1 className="text-2xl font-bold">
            Welcome to
            <span className="text-3xl px-2 shadow-xl text-red-400">
              delicioumo
            </span>
          </h1>
          <p className="text-5xl my-4 font-bold font-serif">
            Where taste meets excellence service.
          </p>
          <p className="px-8 my-4 text-gray-300 text-lg">
            All your desired foods are ready to be delivered at your doorstep.
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 bg-gray-900 text-red-400 text-lg font-semibold rounded hover:bg-gray-800 dark:bg-violet-400 dark:text-coolGray-900">
              Book Our Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
