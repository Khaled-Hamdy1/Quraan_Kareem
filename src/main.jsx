import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import "./master.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moshaf from "./components/Moshaf.jsx";
import Reader from "./components/Reader.jsx";
import AudioContextProvider from "./contexts/AudioContextProvider.jsx";
import Audio from "./components/Audio.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moshaf/:page" element={<Moshaf />} />
        <Route path="/moshaf/:page/:id" element={<Reader />} />
      </Routes>
    </BrowserRouter>
    <Audio />
  </AudioContextProvider>
);
