import React from "react";
import { useSwiper } from "swiper/react";

const SwiperBackButton = ({ count, setCount }) => {
  const swiper = useSwiper();

  const display = {
    display: count >= 1 ? "block" : "none",
  };

  return (
    <button
      onClick={() => {
        swiper.slidePrev(200);
      }}
      className="bg-[#F6BE8A] w-[40%] m-auto py-2 rounded-full mt-8 flex items-center justify-center gap-5 absolute bottom-10 right-[55%] z-50"
      style={display}
    >
      <div className="">
        <h1 className="text-white text-xl font-semibold">Prev</h1>
        <i className="fa-solid fa-arrow-right text-white text-xl"></i>
      </div>
    </button>
  );
};

export default SwiperBackButton;
