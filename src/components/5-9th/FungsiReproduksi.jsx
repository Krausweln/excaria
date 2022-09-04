import React from "react";

const FungsiReproduksi = () => {
  return (
    <section>
      <div className="min-h-screen w-full flex flex-col justify-evenly items-center bg-excariaBg">
        <div className="w-3/4 flex flex-col gap-8">
          <div>
            <p className="text-xl font-sansita font-bold">
              Menurut kamu, apa sih fungsi reproduksi itu?
            </p>
          </div>
          <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
            <p className="text-lg font-sansita">
              Untuk mencegah penurunan tingkat moral.
            </p>
          </div>
          <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
            <p className="text-lg font-sansita">Untuk menambah penhasilan.</p>
          </div>
          <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
            <p className="text-lg font-sansita">
              Untuk melestarikan keturunan agar tidak punah.
            </p>
          </div>
          <div className="w-full py-4 bg-[#FFE7E3] px-4 rounded-[2rem] text-center">
            <p className="text-lg font-sansita">
              Untuk memperbaiki kondisi lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FungsiReproduksi;
