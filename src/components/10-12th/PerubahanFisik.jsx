import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//import images
import img1 from "../img/75_20220830_103535_0042.png";
import img2 from "../img/19_20220628_211931_0002-2.png";
import img3 from "../img/78_20220830_103535_0045.png";
import img4 from "../img/79_20220830_103535_0046.png";
import img5 from "../img/80_20220830_103535_0047.png";
import img6 from "../img/81_20220830_103535_0048.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PerubahanFisik = () => {
  return (
    <section>
      <div className="relative">
        <div className="h-screen w-full bg-[#1F5D3B]"></div>
        <div className="bg-white w-full absolute bottom-0 rounded-t-3xl">
          <div className="w-[50%] h-30 bg-orange-400 py-4 -translate-y-16 rounded-tr-2xl rounded-br-2xl">
            <h1 className="text-center text-2xl font-bold tracking-wide">
              Perubahan
            </h1>
            <h1 className="text-center text-2xl font-bold tracking-wide">
              Fisik
            </h1>
          </div>
          <Swiper modules={[Pagination]} pagination>
            <SwiperSlide>
              <div className="h-[65vh] flex items-center justify-center px-10">
                <div className="bg-[#F3BE62] flex flex-col justify-center items-center rounded-xl">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/180x280"
                    visibleByDefault={img1 === img1}
                    src={img1}
                    alt="rambut"
                    className="w-[70%] m-auto"
                  />
                  <h1 className="font-bold font-sansita text-lg text-center tracking-wider text-[#4F1F15] my-5">
                    Perubahan suara menjaadi lebih berat pada laki-laki.
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[65vh] flex items-center justify-center px-10">
                <div className="bg-[#F3BE62] flex flex-col justify-center items-center rounded-xl">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/180x280"
                    visibleByDefault={img2 === img2}
                    src={img2}
                    alt="rambut"
                    className="w-[70%] m-auto"
                  />
                  <h1 className="font-bold font-sansita text-lg text-center tracking-wider text-[#4F1F15] my-5">
                    Dada menjadi lebih bidang pada laki-laki.
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[65vh] flex items-center justify-center px-10">
                <div className="bg-[#F3BE62] flex flex-col justify-center items-center rounded-xl">
                  <img
                    src={img3}
                    alt="rambut"
                    className="w-[60%] m-auto pt-3"
                  />
                  <h1 className="font-bold font-sansita text-lg text-center tracking-wider text-[#4F1F15] my-5">
                    Payudara mulai membesar pada perempuan.
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[65vh] flex items-center justify-center px-10">
                <div className="bg-[#F3BE62] flex flex-col justify-center items-center rounded-xl">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/180x280"
                    visibleByDefault={img4 === img4}
                    src={img4}
                    alt="rambut"
                    className="w-[50%] m-auto"
                  />
                  <h1 className="font-bold font-sansita text-lg text-center tracking-wider text-[#4F1F15] my-5">
                    Tinggi badan bertambah.
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[65vh] flex items-center justify-center px-10">
                <div className="bg-[#F3BE62] flex flex-col justify-center items-center rounded-xl">
                  <img
                    src={img5}
                    alt="rambut"
                    className="w-[50%] m-auto pt-3"
                  />
                  <h1 className="font-bold font-sansita text-lg text-center tracking-wider text-[#4F1F15] my-5">
                    Munculnya jerawat.
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[65vh] flex items-center justify-center px-10">
                <div className="bg-[#F3BE62] flex flex-col justify-center items-center rounded-xl">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/180x280"
                    visibleByDefault={img6 === img6}
                    src={img6}
                    alt="rambut"
                    className="w-[50%] m-auto"
                  />
                  <h1 className="font-bold font-sansita text-lg text-center tracking-wider text-[#4F1F15] my-5">
                    Munculnya bulu halus pada kemaluan dan ketiak.
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PerubahanFisik;
