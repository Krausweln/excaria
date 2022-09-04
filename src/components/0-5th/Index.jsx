import React from "react";
import { Link } from "react-router-dom";

// image imports
import tubuh from "../img/4_20220625_072639_0003.png";
import bayi from "../img/3_20220625_073601_0000.png";
import lakidanperempuan from "../img/6_20220625_072639_0005.png";
import lahir from "../img/5_20220625_072639_0004.png";
import perilaku from "../img/7_20220625_072639_0006.png";

const Index = ({ name }) => {
  return (
    <section className="bg-[#FDF4F5] h-[120vh]">
      <div className="w-full h-[25vh] bg-[#FDBBBF] flex items-center px-3 rounded-bl-[70px]">
        <div className="flex justify-center gap-8 items-center">
          <img
            src={bayi}
            alt="Foto Bayi"
            className="w-[30%] border p-1 bg-white rounded-full"
          />
          <h1 className="font-sansita font-extrabold text-4xl">Hi, {name}</h1>
        </div>
      </div>

      <div className="w-full h-[75vh] bg-[#FDF4F5] rounded-tr-[70px] flex flex-wrap gap-5 justify-center items-center px-3">
        <Link
          to="/0-5th/bagian-tubuh"
          className="w-[40%] flex flex-col justify-center items-center  bg-[#FFE7E3] py-7 rounded-2xl m-0"
        >
          <img src={tubuh} alt="tubuh" className="w-[70%]" />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider">
            Bagian Tubuh
          </h1>
        </Link>

        <Link
          to="/0-5th/bagaimana-kamu-bisa-lahir"
          className=" w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-8 relative top-12 rounded-2xl"
        >
          <img src={lahir} alt="tubuh" className="w-[60%]" />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider text-center px-2">
            Bagaimana Kamu Bisa Lahir
          </h1>
        </Link>

        <Link
          to="/0-5th/laki-perempuan"
          className=" tubuh w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-7 relative bottom-12 rounded-2xl"
        >
          <img src={lakidanperempuan} alt="tubuh" className="w-[70%]" />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider text-center">
            laki-laki Dan Perempuan
          </h1>
        </Link>

        <Link
          to="perilaku"
          className=" w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-7 relative top-12 rounded-2xl"
        >
          <img src={perilaku} alt="tubuh" className="w-[60%]" />
          <h1 className="font-sansita pt-2 font-bold text-[#857D7D] text-lg tracking-wider">
            Perilaku
          </h1>
        </Link>

        {/* <a
          href="BagaimanaKamuBisaLahir.html"
          className=" w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-8 relative top-12 rounded-2xl"
        >
          <img src={lahir} alt="tubuh" className="w-[60%]" />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider text-center px-2">
            Bagaimana Kamu Bisa Lahir
          </h1>
        </a>

        <a
          href="laki2-perempuan.html"
          className=" w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-7 relative bottom-12 rounded-2xl"
        >
          <img src={lakidanperempuan} alt="tubuh" className="w-[70%]" />
          <h1 className="font-sansita pt-5 font-bold text-[#857D7D] text-lg tracking-wider text-center">
            laki-laki Dan Perempuan
          </h1>
        </a>

        <a
          href="prilaku.html"
          className=" w-[40%] flex flex-col justify-center items-center border bg-[#FFE7E3] py-7 relative top-12 rounded-2xl"
        >
          <img src={perilaku} alt="tubuh" className="w-[60%]" />
          <h1 className="font-sansita pt-2 font-bold text-[#857D7D] text-lg tracking-wider">
            Perilaku
          </h1>
        </a> */}
      </div>
    </section>
  );
};

export default Index;
