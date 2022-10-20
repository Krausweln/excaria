import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

// home components
import Index from "./components/0-5th/Index";
import Index1 from "./components/5-9th/Index1";
import Index2 from "./components/10-12th/Index2";
import Indexx from "./components/10-12th/Indexx";

// components
import BagianTubuh from "./components/0-5th/BagianTubuh";
import BagaimanaKamuLahir from "./components/0-5th/BagaimanaKamuLahir";
import Login from "./components/Login/Login";
import LakiPerempuan from "./components/0-5th/LakiPerempuan";
import Perilaku from "./components/0-5th/Perilaku";
import DoPerilaku from "./components/0-5th/DoPerilaku";
import DontPerilaku from "./components/0-5th/DontPerilaku";
import FungsiReproduksi from "./components/5-9th/FungsiReproduksi";
import PersiapanPubertas from "./components/5-9th/PersiapanPubertas";
import MateriPersiapanPubertas from "./components/5-9th/MateriPersiapanPubertas";
import CaraMenjagaDiri from "./components/5-9th/CaraMenjagaDiri";
import Salah from "./components/5-9th/Salah";
import Benar from "./components/5-9th/Benar";
import Pubertas from "./components/10-12th/Pubertas";
import PerubahanFisik from "./components/10-12th/PerubahanFisik";
import AlatKontrasepsi from "./components/10-12th/AlatKontrasepsi";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem("nameAge"));
    setInput(get.input);
    setAge(get.age);
    return () => {
      setInput("");
      setAge("");
    };
  }, [input, age]);

  const inputMemo = useMemo(() => {
    return input;
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login input={input} setInput={setInput} age={age} setAge={setAge} />
        }
      />
      <Route path="/0-5th" element={<Index name={inputMemo} />} />
      <Route path="/0-5th/bagian-tubuh" element={<BagianTubuh />} />
      <Route
        path="/0-5th/bagaimana-kamu-bisa-lahir"
        element={<BagaimanaKamuLahir />}
      />
      <Route path="/0-5th/laki-perempuan" element={<LakiPerempuan />} />
      <Route path="/0-5th/perilaku" element={<Perilaku />} />
      <Route path="/0-5th/perilaku/do" element={<DoPerilaku />} />
      <Route path="/0-5th/perilaku/dont" element={<DontPerilaku />} />
      <Route path="/5-9th" element={<Index1 name={inputMemo} />} />
      <Route path="/5-9th/fungsi-reproduksi" element={<FungsiReproduksi />} />
      <Route path="/5-9th/fungsi-reproduksi/salah" element={<Salah />} />
      <Route path="/5-9th/fungsi-reproduksi/benar" element={<Benar />} />
      <Route path="/5-9th/persiapan-pubertas" element={<PersiapanPubertas />} />
      <Route
        path="/5-9th/persiapan-pubertas/materi"
        element={<MateriPersiapanPubertas />}
      />
      <Route path="/5-9th/cara-menjaga-diri" element={<CaraMenjagaDiri />} />
      <Route path="/10-12th" element={<Index2 name={inputMemo} />} />
      <Route path="/10-12th/start" element={<Indexx name={inputMemo} />} />
      <Route path="/10-12th/pubertas" element={<Pubertas name={inputMemo} />} />
      <Route path="/10-12th/perubahan-fisik" element={<PerubahanFisik />} />
      <Route path="/10-12th/alat-kontrasepsi" element={<AlatKontrasepsi />} />
    </Routes>
  );
}

export default App;
