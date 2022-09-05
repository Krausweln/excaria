import React from "react";
import { Link } from "react-router-dom";

import salah from "../img/assets/salah.png";

const Salah = () => {
  return (
    <Link to="/5-9th/fungsi-reproduksi">
      <section>
        <div className="min-h-screen w-full flex flex-col items-center bg-excariaBg pt-[9rem]">
          <div className="w-3/4 flex flex-col gap-8">
            <div>
              <p className="text-xl font-sansita font-bold">
                Menurut kamu, apa sih fungsi reproduksi itu?
              </p>
            </div>
            <div className="w-full flex flex-col items-center bg-[#FF9E9E] py-6 rounded-xl">
              <img src={salah} alt="" className="w-4/12" />
              <p className="font-sansita font-bold text-3xl">
                Duh, Coba lagi yuk!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Salah;
