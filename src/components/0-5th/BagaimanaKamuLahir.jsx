import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import YouTube from "react-youtube";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import Placeholder from "../placeholders/Placeholder";
import "react-lazy-load-image-component/src/effects/blur.css";

//assets import
import { P360x240 } from "../img/Image";
import couple from "../img/BagaimanaKamuBisaLahir-Assets/couple.png";
import pregnant from "../img/BagaimanaKamuBisaLahir-Assets/pregnant.png";
import baby from "../img/BagaimanaKamuBisaLahir-Assets/baby.png";
import motherWithBaby from "../img/BagaimanaKamuBisaLahir-Assets/motherwbaby.png";

const BagaimanaKamuLahir = () => {
  return (
    <section>
      <div className="min-h-screen max-w-full flex flex-col justify-evenly items-center gap-12 bg-kelahiranBg py-12">
        <div
          className="w-4/6 min-h-fit text-center bg-kelahiranMain rounded-lg font-sansita text-4xl font-bold px-4 py-2 text-textMain"
          id="title"
        >
          Bagaimana kamu lahir?
        </div>
        <div className="w-full min-h-[30vh] flex justify-center" id="video">
          <LazyLoadComponent placeholder={<Placeholder image={P360x240} />}>
            <YouTube
              loading="eager"
              videoId="0VvuTOf9pyY"
              className="w-full h-full flex justify-center"
              iframeClassName="w-11/12 h-[15rem] md:h-[30rem]"
            />
          </LazyLoadComponent>
        </div>
        <div className="w-full h-fit px-4 py-4 overflow-auto" id="slider">
          <div className="w-full flex  justify-center items-center gap-x-8">
            <Swiper
              modules={[Pagination]}
              pagination={{ type: "bullets", clickable: true }}
            >
              <SwiperSlide className="flex justify-center">
                <div className="w-6/12  bg-kelahiranMain px-2 h-fit flex items-center py-4 rounded-lg">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/165x290"
                    src={couple}
                    alt="couple"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex justify-center">
                <div className="w-6/12  bg-kelahiranMain px-2 h-fit flex items-center py-4 rounded-lg">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/165x290"
                    src={pregnant}
                    alt="pregnant"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex justify-center">
                <div className="w-6/12  bg-kelahiranMain px-2 h-fit flex items-center py-4 rounded-lg">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/165x290"
                    src={baby}
                    alt="baby"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex justify-center">
                <div className="w-6/12  bg-kelahiranMain px-2 h-fit flex items-center py-4 rounded-lg">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://via.placeholder.com/165x290"
                    src={motherWithBaby}
                    alt="mother with baby"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BagaimanaKamuLahir;
