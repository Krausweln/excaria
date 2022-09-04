import React from "react";
import { Link } from "react-router-dom";

const Perilaku = () => {
  return (
    <section class="bg-[#FFC6CC]">
      <div class=" w-full flex justify-center items-center gap-3 h-screen">
        <Link to="/0-5th/perilaku/do" className="p-10 bg-[#DDB29D] rounded-lg">
          <h1 class="text-4xl text-[#472726]">Do</h1>
        </Link>
        <Link
          to="/0-5th/perilaku/dont"
          className="p-10 bg-[#DDB29D] rounded-lg"
        >
          <h1 class="text-4xl text-[#472726]">Don't</h1>
        </Link>
      </div>
    </section>
  );
};

export default Perilaku;
