import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import img2 from "../img/65_20220830_103535_0032asdasdasdasdad.png";
import img1 from "../img/67_20220830_103535_0034.png";

const Indexx = ({ name }) => {
  return (
    <section>
      <div className="w-full bg-[#FDEAE0] pt-5">
        <img src={img2} alt="" className="w-[88%] m-auto" />
      </div>

      <div className="w-full">
        <div className="w-full bg-[#5E8970] h-[50vh] rounded-t-3xl">
          <div className="flex items-center gap-5">
            <img src={img1} alt="" className="w-[30%] pl-5 py-5" />
            <h1 className="text-white font-extrabold text-[40px] tracking-wider">
              {name}
            </h1>
          </div>

          <div className="w-[90%] h-44 bg-white m-auto rounded-2xl relative">
            <div className="px-8 py-5">
              <h1 className="text-4xl font-bold">Halo!</h1>
              <p className="text-sm pt-2 text-semibold">
                Sudah Siap Untuk Belajar
              </p>
            </div>

            <Link to="/10-12th">
              <div className="w-[60%] transition duration-300 bg-[#FFC000] hover:bg-[#5E8970] rounded-lg absolute -right-3 flex justify-center items-center gap-3">
                <h1 className="text-lg py-2 px-4 text-white">Mulai Belajar</h1>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-3xl text-white"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indexx;
