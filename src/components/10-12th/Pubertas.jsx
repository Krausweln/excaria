import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import img1 from "../img/profile10-12th.png";

const Pubertas = ({ name }) => {
  return (
    <section>
      <div className="w-full min-h-screen flex flex-col bg-[#F6E3C3]">
        <div className="w-full h-[25vh] flex justify-center items-center bg-[#F6E3C3]">
          <div className="left-8 w-8/12 h-fit flex items-center">
            <div className="relative left-4 py-2 pr-4 w-full h-fit bg-white rounded-l-[2rem] text-center z-0">
              <p className="text-2xl font-bold font-sansita tracking-wide">
                Hi, {name}
              </p>
            </div>
            <div className="w-6/12 z-10">
              <LazyLoadImage
                placeholderSrc="https://via.placeholder.com/85"
                effect="blur"
                src={img1}
                visibleByDefault={img1 === img1}
                alt="profile"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[75vh] flex flex-col justify-center items-center bg-white mt-8 pb-8">
          <div className="w-3/4 bg-[#1F5D3B] p-4 rounded-xl text-center">
            <p className="text-white font-extrabold tracking-widest text-3xl">
              Pubertas
            </p>
          </div>

          <div className="w-11/12">
            <p className="font-sansita text-lg py-12 px-4 text-center">
              Masa puber merupakan masa peralihan seorang anak menjadi dewasa,
              masa puber akan terjadi pematangan organ seksual serta bisa
              dikatakan bahwa mereka telah mencapai kemampuan reproduksi. <br />
              <br />
              Pada usia 12,5 tahun sampai 14 tahun, anak perempuan sudah
              mengalami masa pubertas. Pada anak laki-laki pubertas lebih lambat
              yakni antara 14 tahum sampai 16,5 tahun. <br />
              <br />
              Hal tersebut dikarenakan hormon yang mempengaruhi pertumbuhan
              antara anak laki-laki dan perempuan berbeda.
            </p>
          </div>
        </div>

        <div className="h-[20vh] w-full flex items-center justify-center bg-[#1F5D3B]">
          o
          <Link
            to="/10-12th/perubahan-fisik"
            className="w-full flex items-center justify-center"
          >
            <div className="w-3/4 h-fit bg-white flex justify-center items-center rounded-xl">
              <div className="w-3/4 text-center">
                <p className="text-2xl font-bold">Perubahan Fisik</p>
              </div>
              <div className="w-1/4 h-full flex justify-center items-center bg-yellow-500 text-center text-white text-6xl rounded-r-xl">
                <div>
                  <p className="relative bottom-[.6rem]">{">"}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pubertas;
