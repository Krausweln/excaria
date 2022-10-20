import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ input, setInput, age, setAge }) => {
  const navigate = useNavigate();
  const usernameInput = useRef(null);
  const handleInputUsername = (e) => {
    const value = e.target.value;
    return setInput(value);
  };

  const handleInputAge = (e) => {
    const value = e.target.value;
    return setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Age = parseInt(age);
    if (Age < 5) {
      navigate("/0-5th");
    } else if (Age >= 5 && Age < 10) {
      navigate("/5-9th");
    } else if (Age >= 10) {
      navigate("/10-12th/start");
    }
  };

  //   useEffect(() => {
  //     usernameInput.current.focus();
  //   }, []);

  useEffect(() => {
    localStorage.setItem("nameAge", JSON.stringify({ input, age }));
  }, [input, age]);

  return (
    <section className="w-full h-screen bg-[#FFBDC1]">
      <div className="h-[40vh] flex flex-col justify-center px-5 pt-14">
        <h1 className="font-sansita font-bold text-3xl">Sign In</h1>
        <p className="mt-2 font-semibold">
          Halo! Sebelum masuk ke aplikasi EXCARIA, daftar dulu yuk!
        </p>
      </div>
      <div className="bg-white h-[60vh]">
        <form
          className="flex flex-col items-center rounded-t-3xl"
          id="form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="mt-20 py-3 px-3 placeholder:text-black placeholder:font-semibold w-[80%] rounded-lg bg-[#E6E6E6] mx-auto"
            id="nama"
            placeholder="Nama"
            required
            ref={usernameInput}
            onChange={handleInputUsername}
          />
          <input
            type="number"
            className="mt-5 py-3 px-3 placeholder:text-black placeholder:font-semibold w-[80%] rounded-lg bg-[#E6E6E6] mx-auto"
            id="umur"
            placeholder="Umur"
            required
            onChange={handleInputAge}
          />

          <button className="py-2 px-5 bg-[#FEBBBF] mt-6 rounded font-semibold">
            Masuk
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
