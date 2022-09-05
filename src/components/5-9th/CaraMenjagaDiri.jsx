import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, slideShadows } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "swiper/css/effect-cards";

//import assets
import do1 from "../img/assets/do1caramenjaga.png";
import do2 from "../img/assets/do2caramenjaga.png";
import do3 from "../img/assets/do3caramenjaga.png";
import do4 from "../img/assets/do4caramenjaga.png";

import dont1 from "../img/assets/dont1caramenjaga.png";
import dont2 from "../img/assets/dont2caramenjaga.png";
import dont3 from "../img/assets/dont3caramenjaga.png";

const CaraMenjagaDiri = () => {
  return (
    <div className="min-h-screen w-full">
      <section>
        <div className="swiper mySwiper min-h-[50vh] lg:h-screen w-full flex flex-col justify-evenly bg-excariaBg">
          <div className="w-full text-center mt-4">
            <p className="font-sansita text-2xl font-bold">
              Yang boleh dilakukan
            </p>
          </div>
          <Swiper
            modules={[Pagination, EffectCards]}
            loop
            effect="cards"
            cardsEffect={{ slideShadows: false }}
            className="min-h-[50vh] w-full flex flex-col justify-evenly"
          >
            <SwiperSlide>
              <div className="swiper-slide w-full h-[50vh] flex justify-center items-center">
                <div className="w-7/12 h-11/12 flex flex-col items-center py-4 rounded-lg bg-caramenjagado">
                  <LazyLoadImage src={do1} alt="" className="w-5/12" />
                  <div className="w-11/12 bg-white rounded-xl py-4 m-2 text-center">
                    <p className="text-lg font-sansita">
                      Tidak mudah percaya pada orang lain
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide w-full h-[50vh] flex justify-center items-center">
                <div className="w-7/12 h-11/12 flex flex-col items-center py-4 rounded-lg bg-caramenjagado">
                  <LazyLoadImage src={do2} alt="" className="w-7/12" />
                  <div className="w-11/12 bg-white rounded-xl py-4 m-2 text-center">
                    <p className="text-lg font-sansita">
                      Tidak membiarkan tubuh disentuh sembarangan oleh orang
                      lain
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide w-full h-[50vh] flex justify-center items-center">
                <div className="w-7/12 h-11/12 flex flex-col items-center py-3 rounded-lg bg-caramenjagado">
                  <LazyLoadImage src={do3} alt="" className="w-7/12" />
                  <div className="w-11/12 bg-white rounded-xl py-4 m-2 text-center">
                    <p className="text-lg font-sansita">
                      Tidak mudah menerima makanan dari orang lain
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide w-full h-[50vh] flex justify-center items-center">
                <div className="w-7/12 h-11/12 flex flex-col items-center py-4 rounded-lg bg-caramenjagado">
                  <LazyLoadImage
                    src={do4}
                    alt=""
                    className="w-7/12 md:w-4/12"
                  />
                  <div className="w-11/12 bg-white rounded-xl py-4 m-2 text-center">
                    <p className="text-lg font-sansita">
                      Berhati-hati terhadap orang lain
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>

      <section>
        <div className="swiper mySwiper min-h-[50vh] lg:h-screen w-full flex flex-col justify-evenly bg-excariaBg">
          <div className="w-full text-center mt-4">
            <p className="font-sansita text-2xl font-bold">
              Yang Tidak boleh dilakukan
            </p>
          </div>
          <Swiper
            modules={[Pagination, EffectCards]}
            loop
            effect="cards"
            cardsEffect={{ slideShadows: false }}
            className="min-h-[50vh] w-full flex flex-col justify-evenly"
          >
            <SwiperSlide>
              <div className="swiper-slide w-full h-[50vh] flex justify-center items-center">
                <div className="w-7/12 h-11/12 flex flex-col items-center py-4 rounded-lg bg-caramenjagado">
                  <LazyLoadImage src={dont1} alt="" className="w-5/12" />
                  <div className="w-11/12 bg-white rounded-xl py-4 m-2 text-center">
                    <p className="text-lg font-sansita">
                      Mudah percaya pada orang lain
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide w-full h-[50vh] flex justify-center items-center">
                <div className="w-7/12 h-11/12 flex flex-col items-center py-4 rounded-lg bg-caramenjagado">
                  <LazyLoadImage src={dont2} alt="" className="w-5/12" />
                  <div className="w-11/12 bg-white rounded-xl py-4 m-2 text-center">
                    <p className="text-lg font-sansita">
                      Membiarkan tubuh disentuh orang lain secara sembarangan
                      lain
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide w-full h-[50vh] flex justify-center items-center">
                <div className="w-7/12 h-11/12 flex flex-col items-center py-3 rounded-lg bg-caramenjagado">
                  <LazyLoadImage src={dont3} alt="" className="w-8/12" />
                  <div className="w-11/12 bg-white rounded-xl py-4 m-2 text-center">
                    <p className="text-lg font-sansita">
                      Mudah menerima makanan dari orang lain
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CaraMenjagaDiri;
