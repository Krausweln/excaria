import { memo } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage, placeholder } from "react-lazy-load-image-component";
import { BeatLoader } from "react-spinners";
import "react-lazy-load-image-component/src/effects/opacity.css";

// image imports
import tubuh from "../img/4_20220625_072639_0003.png";
import bayi from "../img/3_20220625_073601_0000.png";
import lakidanperempuan from "../img/6_20220625_072639_0005.png";
import lahir from "../img/5_20220625_072639_0004.png";
import perilaku from "../img/7_20220625_072639_0006.png";

// placeholder images
import { P100 } from "../img/Image";
import { P110x120 } from "../img/Image";

const Index = ({ name }) => {
  return (
    <section className="bg-[#FDF4F5] h-[120vh]">
      <div className="w-full h-[25vh] bg-[#FDBBBF] flex justify-between gap-8 items-center px-[3rem] rounded-bl-[70px]">
        <div className="flex items-center">
          <LazyLoadImage
            placeholderSrc={P100}
            src={bayi}
            visibleByDefault={bayi === "../img/3_20220625_073601_0000.png"}
            alt="Foto Bayi"
            className="w-[7rem] border p-1 bg-white rounded-full"
          />
        </div>
        <div>
          <h1 className="font-sansita font-extrabold text-3xl">Hi, {name}</h1>
        </div>
      </div>

      <div className="w-full h-[75vh] bg-[#FDF4F5] rounded-tr-[70px] flex flex-wrap gap-5 justify-center items-center px-3">
        <Link
          to="/0-5th/bagian-tubuh"
          className="w-[40%] flex flex-col justify-center items-center  bg-[#FFE7E3] py-7 rounded-2xl m-0"
        >
          <LazyLoadImage
            placeholderSrc={P110x120}
            effect="blur"
            visibleByDefault={tubuh === "../img/4_20220625_072639_0003.png"}
            src={tubuh}
            alt="tubuh"
            className="w-[70%] mx-auto"
          />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider">
            Bagian Tubuh
          </h1>
        </Link>

        <Link
          to="/0-5th/bagaimana-kamu-bisa-lahir"
          className=" w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-8 relative top-12 rounded-2xl"
        >
          <LazyLoadImage
            placeholderSrc={P110x120}
            effect="blur"
            visibleByDefault={lahir === "../img/5_20220625_072639_0004.png"}
            src={lahir}
            alt="tubuh"
            className="w-[60%] mx-auto"
          />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider text-center px-2">
            Bagaimana Kamu Bisa Lahir
          </h1>
        </Link>

        <Link
          to="/0-5th/laki-perempuan"
          className=" tubuh w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-7 relative bottom-12 rounded-2xl"
        >
          <LazyLoadImage
            placeholderSrc={P110x120}
            effect="blur"
            visibleByDefault={
              lakidanperempuan === "../img/6_20220625_072639_0005.png"
            }
            src={lakidanperempuan}
            alt="tubuh"
            className="w-[70%] mx-auto"
          />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider text-center">
            laki-laki dan Perempuan
          </h1>
        </Link>

        <Link
          to="perilaku"
          className=" w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-7 relative top-12 rounded-2xl"
        >
          <LazyLoadImage
            placeholderSrc={P110x120}
            effect="blur"
            visibleByDefault={perilaku === "../img/7_20220625_072639_0006.png"}
            src={perilaku}
            alt="tubuh"
            className="w-[60%] mx-auto"
          />
          <h1 className="font-sansita pt-2 font-bold text-[#857D7D] text-lg tracking-wider">
            Perilaku
          </h1>
        </Link>
      </div>
    </section>
  );
};

export default memo(Index);
