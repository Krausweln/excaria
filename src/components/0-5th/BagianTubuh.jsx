import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Audio } from "react-loader-spinner";
import "react-lazy-load-image-component/src/effects/opacity.css";

import rambut from "../img/12_20220628_191013_0000.png";
import mata from "../img/13_20220628_191013_0001.png";
import telinga from "../img/14_20220628_191013_0002.png";
import hidung from "../img/15_20220628_191013_0003.png";
import mulut from "../img/16_20220628_191013_0004.png";
import bahu from "../img/17_20220628_211931_0000.png";
import payudara from "../img/18_20220628_211931_0001.png";
import dada from "../img/19_20220628_211931_0002.png";
import tangan from "../img/20_20220628_211931_0003.png";
import jari from "../img/21_20220628_211931_0004.png";
import perut from "../img/22_20220629_183009_0000.png";
import kemaluan from "../img/24_20220629_183009_0002.png";
import kaki from "../img/25_20220629_183009_0003.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BagianTubuh = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#FFC6CC]">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={rambut}
                alt="rambut"
                className="w-2/5 mx-auto self-center justify-self-center"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Rambut
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Berfungsi sebagai pelindung kulit kepala agar terhindar dari
                sengatan matahari
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={mata}
                alt="mata"
                className="w-2/5 mx-auto self-center justify-self-center"
              />
              <h1 className="font-bold font-sansita text-4xl mt-10 text-center tracking-wider text-[#4F1F15]">
                Mata
              </h1>
              <p className="text-center mt-5 font-semibold text-[#4F1F2D]">
                Berfungsi untuk melihat.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={telinga}
                alt="rambut"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15] mt-5">
                Telinga
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Berfungsi untuk mendengar suara.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={hidung}
                alt="hidung"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Hidung
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Berfungsi untuk mencium bau.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={mulut}
                alt="mulut"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Mulut
              </h1>
              <p className="text-center px-3 font-semibold text-[#4F1F2D] mt-3">
                Berfungsi untuk mengunyah makanan dan berbicara.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={bahu}
                alt="bahu"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Bahu
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Memungkinkan kita untuk menggerakkan tangan dalam berbagai
                gerakan.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={payudara}
                alt="payudara"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Payudara
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Mengalirkan dan memproduksi ASI.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={dada}
                alt="dada"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Dada
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Melindungi organ tubuh di dalamnya.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={tangan}
                alt="tangan"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Tangan
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                untuk memegang benda, menulis, menggambar, menunjuk arah, dan
                lainnya.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={jari}
                alt="jari"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15] mt-7">
                Jari
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-2">
                Mengetik, menulis, dan menggenggam makanan
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={perut}
                alt="perut"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Perut
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Menyerap dan mencerna makanan, membantu proses pernafasan,
                melindungi organ dalam
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={kemaluan}
                alt="alat kemaluan"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15]">
                Alat Kemaluan
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Membedakan perempuan dan laki-laki.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <LazyLoadImage
                effect="opacity"
                wrapperClassName="w-full flex justify-center items-center"
                src={kaki}
                alt="kaki"
                className="w-[40%] mx-auto"
              />
              <h1 className="font-bold font-sansita text-4xl text-center tracking-wider text-[#4F1F15] mt-5">
                Kaki
              </h1>
              <p className="text-center font-semibold text-[#4F1F2D] mt-3">
                Untuk berjalan
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BagianTubuh;
