import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNextbutton = ({ count, setCount }) => {
  const swiper = useSwiper();

  const position = {
    left: count >= 1 ? "55%" : "31%",
  };

  return (
    <button
      onClick={() => {
        swiper.slideNext(200);
      }}
      className="bg-[#F6BE8A] w-[40%] m-auto py-2 rounded-full mt-8 flex items-center justify-center gap-5 absolute bottom-10 z-50"
      style={position}
    >
      <div className="">
        <h1 className="text-white text-xl font-semibold">Next</h1>
        <i className="fa-solid fa-arrow-right text-white text-xl"></i>
      </div>
    </button>
  );
};

export default SwiperNextbutton;
