import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//import assets
import do1 from "../img/34_20220830_103535_0001.png";
import do2 from "../img/35_20220830_103535_0002.png";
import do3 from "../img/36_20220830_103535_0003.png";
import do4 from "../img/37_20220830_103535_0004.png";

const DoPerilaku = () => {
  return (
    <div class="w-full h-screen bg-[#FFC6CC] flex justify-center items-center">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickagle: true }}
      >
        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl">
              <img src={do1} alt="rambut" class="w-[60%]" />
              <h1 class="font-bold font-sansita text-[34px] text-center tracking-wider text-[#4F1F15] mb-10">
                Bersikap Tenang
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl p-5">
              <img src={do2} alt="rambut" class="w-[60%]" />
              <h1 class="font-bold font-sansita text-2xl text-center tracking-wider text-[#4F1F15] mt-5">
                3 Kata Ajaib (maaf, terima kasih, tolong)
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl">
              <img src={do3} alt="rambut" class="w-[60%]" />
              <h1 class="font-bold font-sansita text-2xl text-center tracking-wider text-[#4F1F15] mb-10">
                tidak mudah percaya kepada orang asing.
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl">
              <img src={do4} alt="rambut" class="w-[60%]" />
              <h1 class="font-bold font-sansita text-3xl text-center tracking-wider text-[#4F1F15] mb-10">
                Menangis dengan kencang
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DoPerilaku;
