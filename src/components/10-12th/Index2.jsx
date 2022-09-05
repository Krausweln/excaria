import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import imgtop from "../img/profile10-12th.png";
import img1 from "../img/girlwtowel.png";
import img3 from "../img/girl.png";
import img2 from "../img/assets/contraception.png";

const Index2 = ({ name }) => {
  return (
    <section>
      <div className="w-full min-h-screen">
        <div className="w-full h-[25vh] flex justify-center items-center bg-[#F6E3C3]">
          <div className="relative top-6 left-8 w-8/12 h-fit flex items-center">
            <div className="relative left-4 py-2 pr-4 w-full h-fit bg-white rounded-l-[2rem] text-center z-0">
              <p className="text-2xl font-bold font-sansita tracking-wide">
                Hi, {name}!
              </p>
            </div>
            <div className="w-6/12 z-10">
              <LazyLoadImage
                effect="opacity"
                loading="yes"
                src={imgtop}
                alt=""
                className="w-full mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="w-full min-h-[75vh] flex justify-center items-center">
          <div className="w-full h-[75vh] flex flex-col gap-2 justify-center items-center rounded-[2rem] bg-[#1F5D3B] m-4">
            <div className="">
              <p className="text-white font-sansita font-bold text-4xl">
                Pilih materi, yuk!
              </p>
            </div>

            <div className="bg-white rounded-xl flex m-4">
              <div className="w-1/4 bg-[#92AF98] m-2 rounded-xl">
                <LazyLoadImage
                  effect="opacity"
                  src={img1}
                  alt=""
                  className="w-full mx-auto"
                />
              </div>
              <div className="w-3/4 flex justify-center items-center">
                <p className="text-2xl font-sansita font-bold">Pubertas</p>
              </div>
            </div>

            <div className="bg-white rounded-xl flex m-4">
              <div className="w-1/4 flex justify-center items-center bg-[#92AF98] m-2 p-1 rounded-xl max-h-[83.52px] overflow-hidden">
                <LazyLoadImage
                  effect="opacity"
                  src={img3}
                  alt=""
                  className="w-3/4 mx-auto"
                />
              </div>
              <div className="w-3/4 flex justify-center items-center">
                <p className="text-2xl font-sansita font-bold">
                  Perubahan Fisik
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl flex m-4">
              <div className="w-1/4 bg-[#92AF98] m-2 p-2 rounded-xl">
                <LazyLoadImage
                  effect="opacity"
                  src={img2}
                  alt=""
                  className="w-full mx-auto"
                />
              </div>
              <div className="w-3/4 flex justify-center items-center">
                <p className="text-2xl font-sansita font-bold">
                  Alat Kontrasepsi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index2;
