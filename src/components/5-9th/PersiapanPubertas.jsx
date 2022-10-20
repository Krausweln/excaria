import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import img1 from "../img/45_20220830_103535_0012.png";
import img from "../img/46_20220830_103535_0013.png";
import { P240x420 } from "../img/Image";

const PersiapanPubertas = () => {
  return (
    <section className="bg-[#F6B8BA]">
      <div className="h-screen w-full flex flex-col justify-evenly">
        <div>
          <h1 className="flex justify-center text-5xl tracking-wide font-bold text-[#4F1F15]">
            Persiapan
          </h1>
          <h1 className="flex justify-center pt-3 text-5xl tracking-wide font-bold text-[#4F1F15]">
            Pubertas
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <LazyLoadImage
            effect="blur"
            src={img1}
            placeholderSrc={P240x420}
            visibleByDefault={img1 === img1}
            alt=""
            className="w-[60%]"
          />
        </div>

        <div className="w-[60%] mx-auto rounded-lg bg-white">
          <Link to="/5-9th/persiapan-pubertas/materi">
            <div className="flex justify-center items-center px-5">
              <div className="w-[50%]">
                <img src={img} alt="" className="w-[60%] py-3" />
              </div>
              <div className="w-[50%] text-2xl font-bold text-[#4F1F15]">
                Materi
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersiapanPubertas;
