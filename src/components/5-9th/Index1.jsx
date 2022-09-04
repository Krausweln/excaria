import React from "react";
import { Link } from "react-router-dom";

import profile from "../img/testimg.jpg";

const Index1 = ({ name }) => {
  return (
    <section>
      <div className="min-h-screen w-full bg-[#FFC6CC] flex flex-col justify-evenly items-center">
        <div className="w-3/4 flex flex-col gap-8 relative bottom-12">
          <img
            src={profile}
            alt=""
            className="w-28 h-28 rounded-full relative -left-2"
          />
          <div>
            <p className="text-5xl text-[#451814] font-sansita font-bold">
              Halo {name}
            </p>
          </div>
          <div className="w-full px-6 py-4 bg-[#E29589] rounded-[5rem] text-center">
            <Link
              to="/5-9th/fungsi-reproduksi"
              className="font-sansita text-2xl font-bold"
            >
              Fungsi Reproduksi
            </Link>
          </div>
          <div className="w-full px-6 py-4 bg-[#E29589] rounded-[5rem] text-center">
            <Link
              to="/5-9th/persiapan-pubertas"
              className="font-sansita text-2xl font-bold"
            >
              Persiapan Pubertas
            </Link>
          </div>
          {/* <div className="w-full px-6 py-4 bg-[#E5B4B3] rounded-[5rem] text-center">
            <a
              href="persiapan-pubertas.html"
              className="font-sansita text-2xl font-bold"
            >
              Persiapan Pubertas
            </a>
          </div> */}
          <div className="w-full px-6 py-4 bg-[#F0ADB4] rounded-[5rem] text-center">
            <Link
              to="/5-9th/cara-menjaga-diri"
              className="font-sansita text-2xl font-bold"
            >
              Cara Menjaga Diri
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index1;
