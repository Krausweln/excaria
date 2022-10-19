import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../style.css";

//import assets
import do1 from "../img/38_20220830_103535_0005.png";
import do2 from "../img/39_20220830_103535_0006.png";
import do3 from "../img/75_20220830_103535_0042.png";
import do4 from "../img/41_20220830_103535_0008.png";
import dont4 from "../img/37_20220830_103535_0004.png";
import { P190 } from "../img/Image";

const DontPerilaku = () => {
  return (
    <div class="w-full h-screen bg-[#FFC6CC] flex justify-center items-center">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl">
              <LazyLoadImage
                effect="blur"
                placeholderSrc={P190}
                src={do1}
                alt="rambut"
                class="w-[60%]"
              />
              <h1 class="font-bold font-sansita text-[34px] text-center tracking-wider text-[#4F1F15] mb-10">
                Mengganggu orang lain
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl p-5">
              <LazyLoadImage
                effect="blur"
                placeholderSrc={P190}
                src={do2}
                alt="rambut"
                class="w-[60%]"
              />
              <h1 class="font-bold font-sansita text-2xl text-center tracking-wider text-[#4F1F15] mt-5">
                Membuka baju di tempat umum
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl">
              <LazyLoadImage
                effect="blur"
                placeholderSrc={P190}
                src={do3}
                alt="rambut"
                class="w-[60%]"
              />
              <h1 class="font-bold font-sansita text-2xl text-center tracking-wider text-[#4F1F15] mb-10">
                Berisik
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl">
              <LazyLoadImage
                effect="blur"
                placeholderSrc={P190}
                src={do4}
                alt="rambut"
                class="w-[60%]"
              />
              <h1 class="font-bold font-sansita text-3xl text-center tracking-wider text-[#4F1F15] mb-10">
                Membuat barang menjadi berantakan
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex items-center justify-center px-10 w-full h-screen">
            <div class="bg-[#FFDCE0] flex flex-col justify-center items-center rounded-xl">
              <LazyLoadImage
                effect="blur"
                placeholderSrc={P190}
                src={dont4}
                alt="rambut"
                class="w-[60%]"
              />
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

export default DontPerilaku;
