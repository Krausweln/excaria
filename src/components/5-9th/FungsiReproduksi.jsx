import React, { useState } from "react";
import { Link } from "react-router-dom";
import Salah from "./Salah";

const FungsiReproduksi = ({ jawab, setJawab }) => {
  return (
    <section>
      <div className="min-h-screen w-full flex flex-col justify-evenly items-center bg-excariaBg">
        <div className="w-3/4 flex flex-col gap-8">
          <div>
            <p className="text-xl font-sansita font-bold">
              Menurut kamu, apa sih fungsi reproduksi itu?
            </p>
          </div>

          <Link to="/5-9th/fungsi-reproduksi/salah">
            <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
              <p className="text-lg font-sansita">
                Untuk mencegah penurunan tingkat moral.
              </p>
            </div>
          </Link>

          <Link to="/5-9th/fungsi-reproduksi/salah">
            <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
              <p className="text-lg font-sansita">Untuk menambah penhasilan.</p>
            </div>
          </Link>

          <Link to="/5-9th/fungsi-reproduksi/benar">
            <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
              <p className="text-lg font-sansita">
                Untuk melestarikan keturunan agar tidak punah.
              </p>
            </div>
          </Link>

          <Link to="/5-9th/fungsi-reproduksi/salah">
            <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
              <p className="text-lg font-sansita">
                Untuk memperbaiki kondisi lingkungan.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FungsiReproduksi;
