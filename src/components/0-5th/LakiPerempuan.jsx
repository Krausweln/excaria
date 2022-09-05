import React from "react";

import image from "../img/33_20220830_103535_0000.png";

const LakiPerempuan = () => {
  const bullet = {
    listStyleType: "number",
  };

  return (
    <section>
      <div className="w-full bg-[#FBCBD5]">
        <img src={image} alt="" className="px-5 pt-5" />

        <div className="w-full bg-[#E47A8B] py-4">
          <h1 className="font-sansita tracking-wide text-3xl text-center font-bold text-[#421113]">
            PERBEDAAN
          </h1>
          <h1 className="font-sansita tracking-wide text-3xl text-center font-bold text-[#421113]">
            LAKI-LAKI DAN PEREMPUAN
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-1/2 h-[50vh] bg-[#C3D9F8]">
          <ul className="px-8 py-7">
            <li
              className="w-[100%] text-lg font-sansita font-semibold tracking-wide text-[#421113]"
              style={bullet}
            >
              Jantung pria memiliki kapasitas lebih besar.
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-[50vh] bg-[#FBCBD5]">
          <ul className="px-8">
            <li
              className="w-[100%] text-lg font-sansita font-semibold tracking-wide text-[#421113] py-7"
              style={bullet}
            >
              Wanita mendengar lebih banyak daripada pria mendengar.
            </li>
            <li
              className="w-[100%] text-lg font-sansita font-semibold tracking-wide text-[#421113]"
              style={bullet}
            >
              Kulit wanita lebih tipis dibanding dengan pria.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LakiPerempuan;
