import React from "react";
import { Link } from "react-router-dom";

import benar from "../img/assets/benar.png";

const Benar = () => {
  return (
    <Link to="/5-9th">
      <section>
        <div className="min-h-screen w-full flex flex-col items-center bg-excariaBg pt-[9rem]">
          <div className="w-3/4 flex flex-col gap-8">
            <div>
              <p className="text-xl font-sansita font-bold">
                Menurut kamu, apa sih fungsi reproduksi itu?
              </p>
            </div>
            <div className="w-full flex flex-col items-center bg-[#CAE4DF] py-6 rounded-xl">
              <img src={benar} alt="" className="w-4/12" />
              <p className="font-sansita font-bold text-3xl">
                Tepat, kamu hebat!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Benar;
