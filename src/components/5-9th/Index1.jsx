import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import profile from "../img/testimg.jpg";

const Index1 = ({ name }) => {
  return (
    <section>
      <div className="min-h-screen w-full bg-[#FFC6CC] flex flex-col justify-evenly items-center">
        <div className="w-3/4 flex flex-col gap-8 relative bottom-12">
          <LazyLoadImage
            visibleByDefault={profile === profile}
            effect="blur"
            src={profile}
            alt="profile picture"
            className="w-28 h-28 rounded-full relative -left-2"
          />
          <div>
            <p className="text-5xl text-[#451814] font-sansita font-bold">
              Halo {name}
            </p>
          </div>
          <Link
            to="/5-9th/fungsi-reproduksi"
            className="font-sansita text-2xl font-bold"
          >
            <div className="w-full px-6 py-4 bg-[#E29589] rounded-[5rem] text-center">
              Fungsi Reproduksi
            </div>
          </Link>
          <Link
            to="/5-9th/persiapan-pubertas"
            className="font-sansita text-2xl font-bold"
          >
            <div className="w-full px-6 py-4 bg-[#E29589] rounded-[5rem] text-center">
              Persiapan Pubertas
            </div>
          </Link>

          <Link
            to="/5-9th/cara-menjaga-diri"
            className="font-sansita text-2xl font-bold"
          >
            <div className="w-full px-6 py-4 bg-[#F0ADB4] rounded-[5rem] text-center">
              Cara Menjaga Diri
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Index1);
