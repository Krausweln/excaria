import { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

// home components
import Index from "./components/0-5th/Index";
import Index1 from "./components/5-9th/Index1";

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
import Index2 from "./components/10-12th/Index2";

function App() {
  const [input, setInput] = useState("");
  const [age, setAge] = useState("");

  const [jawab, setJawab] = useState([false, false, false, false]);

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
      <Route
        path="/5-9th/fungsi-reproduksi"
        element={<FungsiReproduksi jawab={jawab} setJawab={setJawab} />}
      />
      <Route path="/5-9th/fungsi-reproduksi/salah" element={<Salah />} />
      <Route path="/5-9th/fungsi-reproduksi/benar" element={<Benar />} />
      <Route path="/5-9th/persiapan-pubertas" element={<PersiapanPubertas />} />
      <Route
        path="/5-9th/persiapan-pubertas/materi"
        element={<MateriPersiapanPubertas />}
      />
      <Route path="/5-9th/cara-menjaga-diri" element={<CaraMenjagaDiri />} />
      <Route path="/10-12th" element={<Index2 />} />
    </Routes>
  );
}

export default App;
