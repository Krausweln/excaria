import React, { useState } from "react";
import { Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  imgbg,
  imgPilKB,
  imgImplan,
  imgMOW,
  imgIUD,
  imgKondom,
  imgMop,
} from "../img/Image";
import SwiperBackButton from "./SwiperBackButton";
import SwiperNextbutton from "./SwiperNextbutton";

import "swiper/css/effect-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AlatKontrasepsi = () => {
  const [count, setCount] = useState(0);
  const swiper = useSwiper();

  return (
    <section>
      <div className="w-full h-screen relative bg-[#FFE2D3]">
        <Swiper
          modules={[Pagination, EffectFade]}
          onRealIndexChange={(index) => {
            console.log(index.realIndex);
            return setCount(index.realIndex);
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="h-[50vh] w-full relative flex">
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgbg}
                alt=""
                className="w-[90%] opacity-70 m-auto"
              />
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgPilKB}
                alt=""
                className="w-[50%] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] m-auto"
              />
            </div>
            <div className=" bg-[#5E8970] w-full min-h-[50vh] rounded-t-3xl">
              <div className="text-center pt-10">
                <h1 className="font-bold text-white text-2xl">Pil</h1>
                <h1 className="font-bold text-white text-2xl">
                  Keluarga Berencana (KB)
                </h1>
                <p className="px-5 mt-5 font-semibold text-white">
                  Pil KB adalah kelompok obat yang digunakan untuk mencegah
                  kehamilan. Ada dua jenis pil KB, yaitu pil KB kombinasi dan
                  pil KB khusus progestin.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* Implan slide */}
            <div className="h-[50vh] w-full relative flex">
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgbg}
                alt=""
                className="w-[90%] opacity-70 m-auto"
              />
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgImplan}
                alt=""
                className="w-[40%] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] m-auto"
              />
            </div>
            <div className="bg-[#5E8970] w-full h-[50vh] rounded-t-3xl">
              <div className="text-center pt-10">
                <h1 className="font-bold text-white text-3xl">Implan</h1>

                <p className="px-5 mt-5 font-semibold text-white">
                  Pil KB adalah KB implan adalah alat kontrasepsi jangka panjang
                  yang bisa digunakan oleh wanita. Alat kontrasepsi ini
                  berbentuk menyerupai tabung plastik kecil dan fleksibel yang
                  berisi hormon untuk mencegah kehamilan.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* IUD slide */}
            <div className="h-[50vh] w-full relative flex">
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgbg}
                alt=""
                className="w-[90%] opacity-70 m-auto"
              />
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgIUD}
                alt=""
                className="w-[50%] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] m-auto"
              />
            </div>
            <div className="bg-[#5E8970] w-full h-[50vh] rounded-t-3xl">
              <div className="text-center pt-10">
                <h1 className="font-bold text-white text-3xl">
                  Intra-Uterine device
                </h1>
                <h1 className="font-bold text-white text-3xl">(IUD)</h1>
                <p className="px-5 mt-5 font-semibold text-white">
                  IUD adalah sebuah alat kontrasepsi berbahan plastik yang
                  memiliki bentuk seperti huruf T dan dipasang di dalam rahim
                  untuk mencegah kehamilan.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* condom slide */}
            <div class="h-[50vh] w-full relative flex">
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgbg}
                alt=""
                class="w-[90%] opacity-70 m-auto"
              />
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgKondom}
                alt=""
                class="w-[50%] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] m-auto"
              />
            </div>
            <div class="bg-[#5E8970] w-full h-[50vh] rounded-t-3xl">
              <div class="text-center pt-10">
                <h1 class="font-bold text-white text-3xl">Kondom</h1>
                <p class="px-5 mt-5 font-semibold text-[.85rem] text-white">
                  Kondom merupakan salah satu alat kontrasepsi yang terbuat dari
                  bahan sejenis karet yang dipasang pada alat kelamin sebagai
                  pelindung saat berhubungan seksual. Tak hanya dapat mencegah
                  terjadinya kehamilan, penggunaan kondom yang benar juga dapat
                  mengurangi risiko penularan penyakit seksual.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* MOW slide */}
            <div className="h-[50vh] w-full relative flex">
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgbg}
                alt=""
                className="w-[90%] opacity-70 m-auto"
              />
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgMOW}
                alt=""
                className="w-[50%] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] m-auto"
              />
            </div>
            <div className="bg-[#5E8970] w-full h-[50vh] rounded-t-3xl">
              <div className="text-center pt-10">
                <h1 className="font-bold text-white text-2xl">
                  Metode Operasi Wanita (MOW / Tubektomi)
                </h1>
                {/* <h1 className="font-bold text-white text-3xl">(MOW)</h1> */}
                <p className="px-5 mt-5 font-semibold text-[.78rem] text-white">
                  Tubektomi (Metode Operasi Wanita/ MOW) adalah metode
                  kontrasepsi mantap yang bersifat sukarela bagi seorang wanita
                  bila tidak ingin hamil lagi dengan cara mengoklusi tuba
                  falupii (mengikat dan memotong atau memasang cincin), sehingga
                  sperma tidak dapat bertemu dengan ovum.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* mop slide */}
            <div className="h-[50vh] w-full relative flex">
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgbg}
                alt=""
                className="w-[90%] opacity-70 m-auto"
              />
              <LazyLoadImage
                effect="blur"
                placeholderSrc="https://via.placeholder.com/350x310"
                src={imgMop}
                alt=""
                className="w-[50%] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] m-auto"
              />
            </div>
            <div className="bg-[#5E8970] w-full h-[50vh] rounded-t-3xl">
              <div className="text-center pt-10">
                <h1 className="font-bold text-white text-2xl">
                  Metode Operasi Pria
                </h1>
                <h1 className="font-bold text-white text-2xl">
                  (MOP/ Vasektomi)
                </h1>
                <p className="px-5 mt-5 font-semibold text-[.85rem] text-white">
                  Vasektomi (vasectomy) adalah salah satu KB pria untuk mencegah
                  kehamilan pada pasangannya. Prosedur ini merupakan metode
                  kontrasepsi yang sifatnya permanen, tetapi pria tetap bisa
                  melakukan ejakulasi dan orgasme.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperNextbutton count={count} setCount={setCount} />
          <SwiperBackButton count={count} setCount={setCount} />
        </Swiper>
      </div>
    </section>
  );
};

export default AlatKontrasepsi;
